// Make sure GOOGLE_MAPS_API_KEY is defined in config.js
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

function initMap() {
  const amarilloLatLng = { lat: 35.2073, lng: -101.8313 }; // Coordinates for Amarillo, TX

  map = new google.maps.Map(document.getElementById('map-container'), {
    center: amarilloLatLng,
    zoom: 10, // Adjust zoom level as needed
  });

  loadInitialData();
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
  // No default data
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
