// Make sure GOOGLE_MAPS_API_KEY is defined in config.js
import { cityTownData } from './cityData.js';
let googleMapsApiKey = GOOGLE_MAPS_API_KEY;

// ** 1. Map Variables and Initialization **
let map;
let markers = [];
let currentJsonData = [];

function clearMarkers() {
  for (let marker of markers) {
    marker.setMap(null);
  }
  markers = [];
}

// Your function to initialize the map
function initMap() {
  console.log("initMap function is now being called!"); // For debugging
  if (!document.getElementById('map-container')) {
      console.error("Error: map-container element not found in the DOM.");
      return;
  }
  map = new google.maps.Map(document.getElementById('map-container'), {
      center: { lat: 35.2220, lng: -101.8313 }, // Default center Amarillo, TX
      zoom: 8,
  });

  // Load initial data and then fit map to markers
  loadInitialData().then(fitMapToMarkers);
}

function loadDataFromJsonTextarea() {
  const jsonText = document.getElementById('json-data-textarea').value;
  loadJsonData(jsonText);
}

function displayMarkersFromData(jsonData) {
  let newTownsAdded = 0;

  jsonData.forEach((newTown, index) => {
    if (
      newTown.gps_location &&
      typeof newTown.gps_location.latitude === 'number' &&
      typeof newTown.gps_location.longitude === 'number'
    ) {
      const alreadyExists = currentJsonData.some(
        (existingTown) =>
          existingTown.name === newTown.name &&
          existingTown.county === newTown.county
      );

      if (!alreadyExists) {
        currentJsonData.push(newTown);
        placeMarkerOnMap(newTown, currentJsonData.length - 1);
        newTownsAdded++;
      } else {
        console.log(
          `Town "${newTown.name}" in ${newTown.county} already exists. Skipping.`
        );
      }
    } else {
      console.warn(
        `Skipping town "${newTown.name}" due to invalid or missing gps_location:`,
        newTown
      );
    }
  });

  if (newTownsAdded > 0) {
    alert(`${newTownsAdded} new towns added to the map.`);
  } else {
    alert('No new towns added.');
  }
}

function saveDataToFile() {
  if (!currentJsonData || currentJsonData.length === 0) {
    alert('No location data to save.');
    return;
  }
  const jsonString = JSON.stringify(currentJsonData, null, 2);

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'locations.json';

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);

  // New code to prepare content for cityData.js
  if (!currentJsonData) {
    alert('No data to format for cityData.js.'); // Should not happen if download worked
    return;
  }
  const cityDataFileContent = `const cityTownData = ${JSON.stringify(currentJsonData, null, 2)};\n\nexport { cityTownData };`;
  
  document.getElementById('json-data-textarea').value = cityDataFileContent;
  
  alert('locations.json has been downloaded.\n\nTo update the source file (cityData.js):\n1. Copy the entire text from the text area below.\n2. Open cityData.js in your code editor.\n3. Replace its entire content with the copied text and save the file.');
}

function loadDataFromFile() {
  document.getElementById('load-file-input').click();
}

function handleFileLoad(event) {
  const file = event.target.files[0];
  if (!file) {
    console.log('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    loadJsonData(e.target.result);
  };
  reader.onerror = function (e) {
    alert('Error reading file.');
    console.error('File reading error:', e);
  };
  reader.readAsText(file);
}

function loadJsonData(jsonText) {
  try {
    const jsonData = JSON.parse(jsonText);
    if (Array.isArray(jsonData)) {
      displayMarkersFromData(jsonData);
    } else {
      alert('Invalid JSON: Data must be an array.');
    }
  } catch (e) {
    alert('Error parsing JSON.');
    console.error('JSON parsing error:', e);
  }
}

function placeMarkerOnMap(town, index) {
  const lat = town.gps_location.latitude;
  const lng = town.gps_location.longitude;

  console.log(`Placing marker for ${town.name}: Lat: ${lat}, Lng: ${lng}`);

  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: town.name,
    draggable: true,
    townIndex: index,
  });
  markers.push(marker);

  marker.addListener('click', function () {
    const infoWindow = new google.maps.InfoWindow({
      content: `<b>${town.name}</b><br>Population: ${town.population}<br>County: ${town.county}`,
    });
    infoWindow.open(map, marker);
  });

  marker.addListener('dragend', function (event) {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    const townDataIndex = this.townIndex;
    if (townDataIndex !== undefined && currentJsonData[townDataIndex]) {
      currentJsonData[townDataIndex].gps_location.latitude = newLat;
      currentJsonData[townDataIndex].gps_location.longitude = newLng;
      console.log(
        `Marker for ${currentJsonData[townDataIndex].name} moved to: Lat: ${newLat}, Lng: ${newLng}`
      );
    }
  });

  marker.addListener('contextmenu', function (event) {
    event.domEvent.preventDefault();
    if (confirm(`Delete marker for ${town.name}?`)) {
      deleteMarker(this);
    }
  });
}

function deleteMarker(markerToDelete) {
  const townDataIndex = markerToDelete.townIndex;

  markerToDelete.setMap(null);
  markers = markers.filter((marker) => marker !== markerToDelete);

  if (townDataIndex !== undefined && currentJsonData[townDataIndex]) {
    currentJsonData.splice(townDataIndex, 1);
    reIndexMarkers();
  }
}

function reIndexMarkers() {
  markers.forEach((marker, index) => {
    marker.townIndex = index;
  });
}

function loadInitialData() {
  return new Promise((resolve, reject) => {
    if (cityTownData && Array.isArray(cityTownData)) {
      clearMarkers();
      currentJsonData = []; // Reset current data

      // Deep clone the imported data to work with a mutable copy
      currentJsonData = JSON.parse(JSON.stringify(cityTownData));

      if (currentJsonData.length > 0) {
        currentJsonData.forEach((town, index) => {
          if (
            town.gps_location &&
            typeof town.gps_location.latitude === 'number' &&
            typeof town.gps_location.longitude === 'number'
          ) {
            placeMarkerOnMap(town, index); // Pass the town and its index in currentJsonData
          } else {
            console.warn(
              `Skipping town "${town.name}" during initial load due to invalid or missing gps_location:`,
              town
            );
          }
        });
        console.log(`${currentJsonData.length} initial towns processed for markers.`);
      } else {
        console.log('No initial towns found in cityData.js to display.');
      }
      resolve();
    } else {
      console.error('cityTownData is not available or not an array. Check cityData.js.');
      alert('Could not load initial city data. Please check the console for errors.');
      reject('Failed to load initial city data.');
    }
  });
}

function fitMapToMarkers() {
  if (markers.length === 0) return;
  const bounds = new google.maps.LatLngBounds();
  markers.forEach(marker => bounds.extend(marker.getPosition()));
  map.fitBounds(bounds);
  if (markers.length === 1) {
    map.setZoom(10); // Adjust zoom for a single marker if fitBounds is too close
  }
}

function loadMapScript() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    alert('Error loading Google Maps API.');
    console.error('Error loading Google Maps API.');
  };
  document.head.appendChild(script);
}

// Expose initMap to the global scope so Google Maps API can call it
window.initMap = initMap;

// Button bindings
document
  .getElementById('load-text-button')
  .addEventListener('click', loadDataFromJsonTextarea);
document
  .getElementById('save-data-button')
  .addEventListener('click', saveDataToFile);
document
  .getElementById('load-file-button')
  .addEventListener('click', loadDataFromFile);
document
  .getElementById('load-file-input')
  .addEventListener('change', handleFileLoad);

// Kick off the map script loader
loadMapScript();