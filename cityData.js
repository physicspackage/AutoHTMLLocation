const cityTownData = [
  {
    "name": "Claude",
    "population": 1186,
    "county": "Armstrong",
    "gps_location": {
      "latitude": 35.1075,
      "longitude": -101.3628
    },
    "incorporated": true
  },
  {
    "name": "Washburn",
    "population": 227,
    "county": "Armstrong",
    "gps_location": {
      "latitude": 35.17323893389572,
      "longitude": -101.56845979003906
    },
    "incorporated": true
  },
  {
    "name": "Wayside",
    "population": 25,
    "county": "Armstrong",
    "gps_location": {
      "latitude": 34.791645338224754,
      "longitude": -101.5477068359375
    },
    "incorporated": false
  },
  {
    "name": "Goodnight",
    "population": 20,
    "county": "Armstrong",
    "gps_location": {
      "latitude": 35.03632450372188,
      "longitude": -101.19048569335938
    },
    "incorporated": false
  },
  {
    "name": "Silverton",
    "population": 1517,
    "county": "Briscoe",
    "gps_location": {
      "latitude": 34.47350758089202,
      "longitude": -101.30429642333985
    },
    "incorporated": true
  },
  {
    "name": "Quitaque",
    "population": 82,
    "county": "Briscoe",
    "gps_location": {
      "latitude": 34.364264409728634,
      "longitude": -101.06125961914063
    },
    "incorporated": true
  },
  {
    "name": "Lakeview",
    "population": 38,
    "county": "Hall",
    "gps_location": {
      "latitude": 34.6747399620645,
      "longitude": -100.69782947549098
    },
    "incorporated": false
  },
  {
    "name": "Estelline",
    "population": 131,
    "county": "Hall",
    "gps_location": {
      "latitude": 34.54575302806872,
      "longitude": -100.44001572265626
    },
    "incorporated": true
  },
  {
    "name": "Turkey",
    "population": 365,
    "county": "Hall",
    "gps_location": {
      "latitude": 34.3948,
      "longitude": -100.8956
    },
    "incorporated": true
  },
  {
    "name": "Memphis",
    "population": 2055,
    "county": "Hall",
    "gps_location": {
      "latitude": 34.727785468224766,
      "longitude": -100.5358732910156
    },
    "incorporated": true
  },
  {
    "name": "Samnorwood",
    "population": 20,
    "county": "Collingsworth",
    "gps_location": {
      "latitude": 35.05171788729583,
      "longitude": -100.28166033935545
    },
    "incorporated": false
  },
  {
    "name": "Wellington",
    "population": 1887,
    "county": "Collingsworth",
    "gps_location": {
      "latitude": 34.8556,
      "longitude": -100.2148
    },
    "incorporated": true
  },
  {
    "name": "Dodson",
    "population": 84,
    "county": "Collingsworth",
    "gps_location": {
      "latitude": 34.76552348905805,
      "longitude": -100.02338791503907
    },
    "incorporated": true
  },
  {
    "name": "Hedley",
    "population": 277,
    "county": "Donley",
    "gps_location": {
      "latitude": 34.866305002929785,
      "longitude": -100.65849506835936
    },
    "incorporated": true
  },
  {
    "name": "Clarendon",
    "population": 1708,
    "county": "Donley",
    "gps_location": {
      "latitude": 34.9348,
      "longitude": -100.8845
    },
    "incorporated": true
  },
  {
    "name": "Lelia Lake",
    "population": 85,
    "county": "Donley",
    "gps_location": {
      "latitude": 34.9013292746207,
      "longitude": -100.77299334241698
    },
    "incorporated": false
  },
  {
    "name": "Howardwick",
    "population": 377,
    "county": "Donley",
    "gps_location": {
      "latitude": 35.0351167962604,
      "longitude": -100.90926499466666
    },
    "incorporated": true
  },
  {
    "name": "Pampa",
    "population": 16867,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.5351,
      "longitude": -100.9643
    },
    "incorporated": true
  },
  {
    "name": "Lefors",
    "population": 427,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.437730715936745,
      "longitude": -100.80721534423829
    },
    "incorporated": true
  },
  {
    "name": "McLean",
    "population": 647,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.226831523729,
      "longitude": -100.60836117867447
    },
    "incorporated": true
  },
  {
    "name": "Alanreed",
    "population": 60,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.21335237264739,
      "longitude": -100.73502448730468
    },
    "incorporated": false
  },
  {
    "name": "Kings Mill",
    "population": null,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.48876874724735,
      "longitude": -101.05830063476564
    },
    "incorporated": false
  },
  {
    "name": "Laketon",
    "population": null,
    "county": "Gray",
    "gps_location": {
      "latitude": 35.54494030106206,
      "longitude": -100.63348996582033
    },
    "incorporated": false
  },
  {
    "name": "Miami",
    "population": 523,
    "county": "Roberts",
    "gps_location": {
      "latitude": 35.688931743840286,
      "longitude": -100.63736772460938
    },
    "incorporated": true
  },
  {
    "name": "Umbarger",
    "population": 26,
    "county": "Randall",
    "gps_location": {
      "latitude": 34.95459,
      "longitude": -102.10683
    },
    "incorporated": false
  },
  {
    "name": "Canyon",
    "population": 15733,
    "county": "Randall",
    "gps_location": {
      "latitude": 35.0178,
      "longitude": -101.9153
    },
    "incorporated": true
  },
  {
    "name": "Happy",
    "population": 647,
    "county": "Swisher",
    "gps_location": {
      "latitude": 34.7239,
      "longitude": -101.8439
    },
    "incorporated": true
  },
  {
    "name": "Tulia",
    "population": 4282,
    "county": "Swisher",
    "gps_location": {
      "latitude": 34.5323,
      "longitude": -101.7461
    },
    "incorporated": true
  },
  {
    "name": "Kress",
    "population": 118,
    "county": "Swisher",
    "gps_location": {
      "latitude": 34.36485330627251,
      "longitude": -101.7482701171875
    },
    "incorporated": true
  },
  {
    "name": "Vigo Park",
    "population": 40,
    "county": "Swisher",
    "gps_location": {
      "latitude": 34.65207204768599,
      "longitude": -101.49816966902529
    },
    "incorporated": false
  },
  {
    "name": "Dimmitt",
    "population": 3998,
    "county": "Castro",
    "gps_location": {
      "latitude": 34.5431,
      "longitude": -102.3142
    },
    "incorporated": true
  },
  {
    "name": "Hart",
    "population": 939,
    "county": "Castro",
    "gps_location": {
      "latitude": 34.384366792300206,
      "longitude": -102.11448044433594
    },
    "incorporated": true
  },
  {
    "name": "Nazareth",
    "population": 28,
    "county": "Castro",
    "gps_location": {
      "latitude": 34.53832461739737,
      "longitude": -102.10553250732421
    },
    "incorporated": true
  },
  {
    "name": "Summerfield",
    "population": 38,
    "county": "Castro",
    "gps_location": {
      "latitude": 34.73675597552451,
      "longitude": -102.51183164062503
    },
    "incorporated": false
  },
  {
    "name": "Hereford",
    "population": 14972,
    "county": "Deaf Smith",
    "gps_location": {
      "latitude": 34.8236,
      "longitude": -102.3978
    },
    "incorporated": true
  },
  {
    "name": "Dawn",
    "population": 52,
    "county": "Deaf Smith",
    "gps_location": {
      "latitude": 34.90960082352931,
      "longitude": -102.20111569547608
    },
    "incorporated": false
  },
  {
    "name": "Bootleg",
    "population": null,
    "county": "Deaf Smith",
    "gps_location": {
      "latitude": 34.82853170996501,
      "longitude": -102.81360987278755
    },
    "incorporated": false
  },
  {
    "name": "Wildorado",
    "population": 197,
    "county": "Oldham",
    "gps_location": {
      "latitude": 35.20819261603497,
      "longitude": -102.20009458007813
    },
    "incorporated": false
  },
  {
    "name": "Vega",
    "population": 879,
    "county": "Oldham",
    "gps_location": {
      "latitude": 35.24574956294569,
      "longitude": -102.42785993652345
    },
    "incorporated": true
  },
  {
    "name": "Adrian",
    "population": 147,
    "county": "Oldham",
    "gps_location": {
      "latitude": 35.2739,
      "longitude": -102.6739
    },
    "incorporated": true
  },
  {
    "name": "Boys Ranch",
    "population": 12,
    "county": "Oldham",
    "gps_location": {
      "latitude": 35.526789146532735,
      "longitude": -102.25434799804688
    },
    "incorporated": false
  },
  {
    "name": "Tascosa",
    "population": 8,
    "county": "Oldham",
    "gps_location": {
      "latitude": 35.50388152559069,
      "longitude": -102.25040585937501
    },
    "incorporated": false
  },
  {
    "name": "Channing",
    "population": 293,
    "county": "Hartley",
    "gps_location": {
      "latitude": 35.682106641770545,
      "longitude": -102.33199936523441
    },
    "incorporated": true
  },
  {
    "name": "Hartley",
    "population": 438,
    "county": "Hartley",
    "gps_location": {
      "latitude": 35.882745888897524,
      "longitude": -102.39596708984375
    },
    "incorporated": true
  },
  {
    "name": "Dumas",
    "population": 14142,
    "county": "Moore",
    "gps_location": {
      "latitude": 35.8648,
      "longitude": -101.9745
    },
    "incorporated": true
  },
  {
    "name": "Cactus",
    "population": 3185,
    "county": "Moore",
    "gps_location": {
      "latitude": 36.049460623203686,
      "longitude": -102.00200366210939
    },
    "incorporated": true
  },
  {
    "name": "Sunray",
    "population": 1740,
    "county": "Moore",
    "gps_location": {
      "latitude": 36.01368838834825,
      "longitude": -101.82593432617188
    },
    "incorporated": true
  },
  {
    "name": "Four Way",
    "population": 92,
    "county": "Moore",
    "gps_location": {
      "latitude": 35.69015664444735,
      "longitude": -101.96517758789062
    },
    "incorporated": false
  },
  {
    "name": "Masterson",
    "population": 50,
    "county": "Moore",
    "gps_location": {
      "latitude": 35.63394598246863,
      "longitude": -101.95946884765627
    },
    "incorporated": false
  },
  {
    "name": "Ware",
    "population": null,
    "county": "Moore",
    "gps_location": {
      "latitude": 36.18562032673744,
      "longitude": -102.71383359374998
    },
    "incorporated": false
  },
  {
    "name": "Dalhart",
    "population": 8447,
    "county": "Dallam",
    "gps_location": {
      "latitude": 36.0562,
      "longitude": -102.5213
    },
    "incorporated": true
  },
  {
    "name": "Texline",
    "population": 408,
    "county": "Dallam",
    "gps_location": {
      "latitude": 36.37815948347589,
      "longitude": -103.02408338623047
    },
    "incorporated": true
  },
  {
    "name": "Stratford",
    "population": 1949,
    "county": "Sherman",
    "gps_location": {
      "latitude": 36.33534418527221,
      "longitude": -102.07312670898438
    },
    "incorporated": true
  },
  {
    "name": "Texhoma",
    "population": 289,
    "county": "Sherman",
    "gps_location": {
      "latitude": 36.5142,
      "longitude": -101.7845
    },
    "incorporated": true
  },
  {
    "name": "Gruver",
    "population": 972,
    "county": "Hansford",
    "gps_location": {
      "latitude": 36.26452318117552,
      "longitude": -101.40363879394532
    },
    "incorporated": true
  },
  {
    "name": "Spearman",
    "population": 3025,
    "county": "Hansford",
    "gps_location": {
      "latitude": 36.193968796873605,
      "longitude": -101.19376971435547
    },
    "incorporated": true
  },
  {
    "name": "Morse",
    "population": 147,
    "county": "Hansford",
    "gps_location": {
      "latitude": 36.06125115129192,
      "longitude": -101.47543942871093
    },
    "incorporated": false
  },
  {
    "name": "Perryton",
    "population": 8492,
    "county": "Ochiltree",
    "gps_location": {
      "latitude": 36.3948,
      "longitude": -100.8045
    },
    "incorporated": true
  },
  {
    "name": "Booker",
    "population": 1312,
    "county": "Lipscomb",
    "gps_location": {
      "latitude": 36.45213716926306,
      "longitude": -100.53312670898435
    },
    "incorporated": true
  },
  {
    "name": "Follett",
    "population": 398,
    "county": "Lipscomb",
    "gps_location": {
      "latitude": 36.43353209896328,
      "longitude": -100.13602097304751
    },
    "incorporated": true
  },
  {
    "name": "Lipscomb",
    "population": 38,
    "county": "Lipscomb",
    "gps_location": {
      "latitude": 36.23065024418669,
      "longitude": -100.2731292480469
    },
    "incorporated": true
  },
  {
    "name": "Higgins",
    "population": 321,
    "county": "Lipscomb",
    "gps_location": {
      "latitude": 36.11807656413831,
      "longitude": -100.02931811523436
    },
    "incorporated": true
  },
  {
    "name": "Canadian",
    "population": 2233,
    "county": "Hemphill",
    "gps_location": {
      "latitude": 35.91146328504082,
      "longitude": -100.39135180664063
    },
    "incorporated": true
  },
  {
    "name": "Wheeler",
    "population": 1437,
    "county": "Wheeler",
    "gps_location": {
      "latitude": 35.44115825650823,
      "longitude": -100.27175341796875
    },
    "incorporated": true
  },
  {
    "name": "Shamrock",
    "population": 1723,
    "county": "Wheeler",
    "gps_location": {
      "latitude": 35.2148,
      "longitude": -100.2445
    },
    "incorporated": true
  },
  {
    "name": "Mobeetie",
    "population": 89,
    "county": "Wheeler",
    "gps_location": {
      "latitude": 35.53356658175661,
      "longitude": -100.44076708984375
    },
    "incorporated": true
  },
  {
    "name": "Allison",
    "population": 115,
    "county": "Wheeler",
    "gps_location": {
      "latitude": 35.60386955301356,
      "longitude": -100.1106529296875
    },
    "incorporated": false
  },
  {
    "name": "Twitty",
    "population": 50,
    "county": "Wheeler",
    "gps_location": {
      "latitude": 35.31144178106771,
      "longitude": -100.23467709960937
    },
    "incorporated": false
  },
  {
    "name": "Jericho",
    "population": 32,
    "county": "Donley",
    "gps_location": {
      "latitude": 35.1817332008785,
      "longitude": -100.97337949218752
    },
    "incorporated": false
  },
  {
    "name": "Amarillo",
    "population": 200393,
    "county": "Potter",
    "gps_location": {
      "latitude": 35.2073,
      "longitude": -101.8313
    },
    "incorporated": true
  },
  {
    "name": "Fritch",
    "population": 2103,
    "county": "Hutchinson",
    "gps_location": {
      "latitude": 35.64203766134771,
      "longitude": -101.59639053955078
    },
    "incorporated": true
  },
  {
    "name": "Stinnett",
    "population": 1637,
    "county": "Hutchinson",
    "gps_location": {
      "latitude": 35.823965875632084,
      "longitude": -101.44347003173829
    },
    "incorporated": true
  },
  {
    "name": "Borger",
    "population": 11953,
    "county": "Hutchinson",
    "gps_location": {
      "latitude": 35.664759154196865,
      "longitude": -101.39488696289061
    },
    "incorporated": true
  },
  {
    "name": "Sanford",
    "population": 149,
    "county": "Hutchinson",
    "gps_location": {
      "latitude": 35.69825334292095,
      "longitude": -101.531968359375
    },
    "incorporated": true
  },
  {
    "name": "Phillips",
    "population": 93,
    "county": "Hutchinson",
    "gps_location": {
      "latitude": 35.690446200699746,
      "longitude": -101.36102829589842
    },
    "incorporated": false
  },
  {
    "name": "Bushland",
    "population": 130,
    "gps_location": {
      "latitude": 35.1898588435917,
      "longitude": -102.06342639160157
    },
    "incorporated": false,
    "county": "Potter"
  },
  {
    "name": "Beaver",
    "population": 1491,
    "gps_location": {
      "latitude": 36.8127062421577,
      "longitude": -100.5199931640625
    },
    "incorporated": true,
    "county": "Beaver"
  },
  {
    "name": "Forgan",
    "population": 503,
    "gps_location": {
      "latitude": 36.9060055470956,
      "longitude": -100.53751572265627
    },
    "incorporated": true,
    "county": "Beaver"
  },
  {
    "name": "Gate",
    "population": 148,
    "gps_location": {
      "latitude": 36.85053792831321,
      "longitude": -100.05631669921874
    },
    "incorporated": true,
    "county": "Beaver"
  },
  {
    "name": "Knowles",
    "population": null,
    "gps_location": {
      "latitude": 36.868836247755894,
      "longitude": -100.18537551269532
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Turpin",
    "population": null,
    "gps_location": {
      "latitude": 36.864454628938326,
      "longitude": -100.87506120605468
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Bryans Corner",
    "population": null,
    "gps_location": {
      "latitude": 36.616051931190604,
      "longitude": -100.82809039306638
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Floris",
    "population": null,
    "gps_location": {
      "latitude": 36.86886368894863,
      "longitude": -100.71034228515626
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Elmwood",
    "population": null,
    "gps_location": {
      "latitude": 36.61461313234892,
      "longitude": -100.52301623535155
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Slapout",
    "population": null,
    "gps_location": {
      "latitude": 36.61588795849794,
      "longitude": -100.10976611328125
    },
    "incorporated": false,
    "county": "Beaver"
  },
  {
    "name": "Guymon",
    "population": 12965,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.6823,
      "longitude": -101.4832
    },
    "incorporated": true
  },
  {
    "name": "Goodwell",
    "population": 1291,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.5932551187421,
      "longitude": -101.62512639160155
    },
    "incorporated": true
  },
  {
    "name": "Optima",
    "population": 327,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.75871396044999,
      "longitude": -101.35650657166053
    },
    "incorporated": true
  },
  {
    "name": "Tyrone",
    "population": 762,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.95303654591476,
      "longitude": -101.06570588378908
    },
    "incorporated": true
  },
  {
    "name": "Hardesty",
    "population": 199,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.61436875550899,
      "longitude": -101.19543521728515
    },
    "incorporated": true
  },
  {
    "name": "Hooker",
    "population": 1735,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.8542,
      "longitude": -101.2253
    },
    "incorporated": true
  },
  {
    "name": "Adams Corner",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.75636397445801,
      "longitude": -101.07674663644502
    },
    "incorporated": false
  },
  {
    "name": "Baker Corner",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.8678527305814,
      "longitude": -101.0186438333723
    },
    "incorporated": false
  },
  {
    "name": "Balko",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.628012365692605,
      "longitude": -100.68471514892576
    },
    "incorporated": false
  },
  {
    "name": "Eva",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.78964987792117,
      "longitude": -101.91269480895997
    },
    "incorporated": false
  },
  {
    "name": "Hough",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.870502140535066,
      "longitude": -101.57698839907931
    },
    "incorporated": false
  },
  {
    "name": "Straight",
    "population": null,
    "county": "Texas",
    "gps_location": {
      "latitude": 36.87581852066499,
      "longitude": -101.45049248950245
    },
    "incorporated": false
  },
  {
    "name": "Boise City",
    "population": 1027,
    "county": "Cimarron",
    "gps_location": {
      "latitude": 36.728877220218315,
      "longitude": -102.51312670898439
    },
    "incorporated": true
  },
  {
    "name": "Keyes",
    "population": 245,
    "county": "Cimarron",
    "gps_location": {
      "latitude": 36.80816650087737,
      "longitude": -102.25171955566407
    },
    "incorporated": true
  },
  {
    "name": "Kenton",
    "population": 17,
    "county": "Cimarron",
    "gps_location": {
      "latitude": 36.90291122096339,
      "longitude": -102.96304377746581
    },
    "incorporated": false
  },
  {
    "name": "Felt",
    "population": null,
    "county": "Cimarron",
    "gps_location": {
      "latitude": 36.56700230255507,
      "longitude": -102.79317614746095
    },
    "incorporated": false
  },
  {
    "name": "Sturgis Corner",
    "population": null,
    "county": "Cimarron",
    "gps_location": {
      "latitude": 36.89343498416663,
      "longitude": -102.07104632568358
    },
    "incorporated": false
  },
  {
    "name": "Friona",
    "population": 4144,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.63832505053746,
      "longitude": -102.72913974609375
    },
    "incorporated": true
  },
  {
    "name": "Farwell",
    "population": 1389,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.38679996804674,
      "longitude": -103.03706088867187
    },
    "incorporated": true
  },
  {
    "name": "Bovina",
    "population": 1703,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.51462384830187,
      "longitude": -102.89160083007812
    },
    "incorporated": true
  },
  {
    "name": "Lazbuddie",
    "population": 248,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.391633376407185,
      "longitude": -102.61069428710938
    },
    "incorporated": true
  },
  {
    "name": "Black",
    "population": 100,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.686545616427686,
      "longitude": -102.60341174316403
    },
    "incorporated": false
  },
  {
    "name": "Clays Corner",
    "population": 15,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.38492179210559,
      "longitude": -102.71669665527344
    },
    "incorporated": false
  },
  {
    "name": "Hub",
    "population": 25,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.525212072897816,
      "longitude": -102.727322265625
    },
    "incorporated": false
  },
  {
    "name": "Lariat",
    "population": 100,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.33135381002558,
      "longitude": -102.91211573791506
    },
    "incorporated": false
  },
  {
    "name": "Oklahoma Lane",
    "population": 25,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.38567976313052,
      "longitude": -102.8862238616943
    },
    "incorporated": false
  },
  {
    "name": "Rhea",
    "population": 98,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.671108526010165,
      "longitude": -102.94968115997314
    },
    "incorporated": false
  },
  {
    "name": "Wilsey",
    "population": null,
    "county": "Parmer County",
    "gps_location": {
      "latitude": 34.450957044658054,
      "longitude": -102.95591265869139
    },
    "incorporated": false
  },
  {
    "name": "Childress",
    "population": 5737,
    "county": "Childress County",
    "gps_location": {
      "latitude": 34.4265,
      "longitude": -100.204
    },
    "incorporated": true
  },
  {
    "name": "Carey",
    "population": null,
    "county": "Childress County",
    "gps_location": {
      "latitude": 34.47152570965073,
      "longitude": -100.32579470825196
    },
    "incorporated": false
  },
  {
    "name": "Kirkland",
    "population": null,
    "county": "Childress County",
    "gps_location": {
      "latitude": 34.38048325156076,
      "longitude": -100.06166903686525
    },
    "incorporated": false
  },
  {
    "name": "Loco",
    "population": null,
    "county": "Childress County",
    "gps_location": {
      "latitude": 34.717624686171106,
      "longitude": -100.15291430664064
    },
    "incorporated": false
  },
  {
    "name": "Tell",
    "population": null,
    "county": "Childress County",
    "gps_location": {
      "latitude": 34.37615995973405,
      "longitude": -100.3948811645508
    },
    "incorporated": false
  },
  {
    "name": "Quanah",
    "population": 2279,
    "county": "Hardeman County",
    "gps_location": {
      "latitude": 34.2897271310091,
      "longitude": -99.74169837036135
    },
    "incorporated": true
  },
  {
    "name": "Chillicothe",
    "population": 555,
    "county": "Hardeman County",
    "gps_location": {
      "latitude": 34.256610255941,
      "longitude": -99.51648583068848
    },
    "incorporated": true
  },
  {
    "name": "Goodlett",
    "population": 80,
    "county": "Hardeman County",
    "gps_location": {
      "latitude": 34.33415052331501,
      "longitude": -99.88628359985351
    },
    "incorporated": true
  },
  {
    "name": "Medicine Mound",
    "population": 25,
    "county": "Hardeman County",
    "gps_location": {
      "latitude": 34.19417909505919,
      "longitude": -99.59525057983399
    },
    "incorporated": false
  },
  {
    "name": "Paducah",
    "population": 1063,
    "county": "Cottle County",
    "gps_location": {
      "latitude": 34.01283479995709,
      "longitude": -100.30174006347656
    },
    "incorporated": true
  },
  {
    "name": "Cee Vee",
    "population": null,
    "county": "Cottle County",
    "gps_location": {
      "latitude": 34.22300211763775,
      "longitude": -100.44577151489258
    },
    "incorporated": false
  },
  {
    "name": "Swearingen",
    "population": null,
    "county": "Cottle County",
    "gps_location": {
      "latitude": 34.14845455701077,
      "longitude": -100.1476145477295
    },
    "incorporated": false
  },
  {
    "name": "Northfield",
    "population": null,
    "county": "Motley County",
    "gps_location": {
      "latitude": 34.287203836379405,
      "longitude": -100.5988571182251
    },
    "incorporated": false
  },
  {
    "name": "Matador",
    "population": 567,
    "county": "Motley County",
    "gps_location": {
      "latitude": 34.0122439563943,
      "longitude": -100.8221452697754
    },
    "incorporated": true
  },
  {
    "name": "Roaring Springs",
    "population": 214,
    "county": "Motley County",
    "gps_location": {
      "latitude": 33.899384964635146,
      "longitude": -100.85705830688477
    },
    "incorporated": true
  },
  {
    "name": "Flomot",
    "population": null,
    "county": "Motley County",
    "gps_location": {
      "latitude": 34.22725218456885,
      "longitude": -100.98892182006836
    },
    "incorporated": false
  },
  {
    "name": "Floydada",
    "population": 3038,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 33.9844,
      "longitude": -101.3372
    },
    "incorporated": true
  },
  {
    "name": "Lockney",
    "population": 1481,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 34.123,
      "longitude": -101.4425
    },
    "incorporated": true
  },
  {
    "name": "South Plains",
    "population": null,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 34.2249429303119,
      "longitude": -101.31022996826172
    },
    "incorporated": false
  },
  {
    "name": "Muncy",
    "population": null,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 34.0664,
      "longitude": -101.3911
    },
    "incorporated": false
  },
  {
    "name": "Dougherty",
    "population": null,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 33.9417,
      "longitude": -101.0861
    },
    "incorporated": false
  },
  {
    "name": "Aiken",
    "population": null,
    "county": "Floyd County",
    "gps_location": {
      "latitude": 34.1422,
      "longitude": -101.5253
    },
    "incorporated": false
  },
  {
    "name": "Plainview",
    "population": 20165,
    "county": "Hale County",
    "gps_location": {
      "latitude": 34.1836,
      "longitude": -101.7183
    },
    "incorporated": true
  },
  {
    "name": "Hale Center",
    "population": 2062,
    "county": "Hale County",
    "gps_location": {
      "latitude": 34.06455978389325,
      "longitude": -101.84364658203125
    },
    "incorporated": true
  },
  {
    "name": "Petersburg",
    "population": 1014,
    "county": "Hale County",
    "gps_location": {
      "latitude": 33.8694,
      "longitude": -101.5975
    },
    "incorporated": true
  },
  {
    "name": "Abernathy",
    "population": 2865,
    "county": "Hale County",
    "gps_location": {
      "latitude": 33.8323,
      "longitude": -101.8429
    },
    "incorporated": true
  },
  {
    "name": "Edmonson",
    "population": 101,
    "county": "Hale County",
    "gps_location": {
      "latitude": 34.28239621501223,
      "longitude": -101.90034020080566
    },
    "incorporated": true
  },
  {
    "name": "Seth Ward",
    "population": 1603,
    "county": "Hale County",
    "gps_location": {
      "latitude": 34.2124,
      "longitude": -101.6961
    },
    "incorporated": false
  },
  {
    "name": "Cotton Center",
    "population": null,
    "county": "Hale County",
    "gps_location": {
      "latitude": 33.99160777750389,
      "longitude": -101.99287079467774
    },
    "incorporated": false
  },
  {
    "name": "Lubbock",
    "population": 263930,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.5767,
      "longitude": -101.8551
    },
    "incorporated": true
  },
  {
    "name": "Idalou",
    "population": 2250,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.6625,
      "longitude": -101.6834
    },
    "incorporated": true
  },
  {
    "name": "New Deal",
    "population": 794,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.737354743777,
      "longitude": -101.83675830688476
    },
    "incorporated": true
  },
  {
    "name": "Olton",
    "population": 2072,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.1833,
      "longitude": -102.1342
    },
    "incorporated": true
  },
  {
    "name": "Littlefield",
    "population": 5871,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 33.9172,
      "longitude": -102.3244
    },
    "incorporated": true
  },
  {
    "name": "Amherst",
    "population": 678,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.01272067448261,
      "longitude": -102.41362589416504
    },
    "incorporated": true
  },
  {
    "name": "Sudan",
    "population": 958,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.0678,
      "longitude": -102.5239
    },
    "incorporated": false
  },
  {
    "name": "Earth",
    "population": 1065,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.2331,
      "longitude": -102.4103
    },
    "incorporated": true
  },
  {
    "name": "Springlake",
    "population": 110,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.2317,
      "longitude": -102.3056
    },
    "incorporated": true
  },
  {
    "name": "Fieldton",
    "population": null,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 34.0392,
      "longitude": -102.2228
    },
    "incorporated": false
  },
  {
    "name": "Spade",
    "population": 71,
    "county": "Lamb County",
    "gps_location": {
      "latitude": 33.9262,
      "longitude": -102.1535
    },
    "incorporated": false
  },
  {
    "name": "Muleshoe",
    "population": 5160,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 34.2264,
      "longitude": -102.7236
    },
    "incorporated": true
  },
  {
    "name": "Bula",
    "population": 35,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 33.9115,
      "longitude": -102.638
    },
    "incorporated": false
  },
  {
    "name": "Enochs",
    "population": 50,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 33.8731,
      "longitude": -102.7599
    },
    "incorporated": false
  },
  {
    "name": "Maple",
    "population": 75,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 33.8487,
      "longitude": -102.8985
    },
    "incorporated": false
  },
  {
    "name": "Needmore",
    "population": 45,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 34.0331,
      "longitude": -102.7374
    },
    "incorporated": false
  },
  {
    "name": "Progress",
    "population": 49,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 34.2829,
      "longitude": -102.8099
    },
    "incorporated": false
  },
  {
    "name": "Stegall",
    "population": null,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 34.0034,
      "longitude": -102.9563
    },
    "incorporated": false
  },
  {
    "name": "Goodland",
    "population": null,
    "county": "Bailey County",
    "gps_location": {
      "latitude": 33.8729,
      "longitude": -102.9761
    },
    "incorporated": false
  },
  {
    "name": "Dora",
    "population": 117,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 33.9333,
      "longitude": -103.3369
    },
    "incorporated": true
  },
  {
    "name": "Portales",
    "population": 12137,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 34.18382073211824,
      "longitude": -103.33923386230468
    },
    "incorporated": true
  },
  {
    "name": "Elida",
    "population": 166,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 33.9469,
      "longitude": -103.6531
    },
    "incorporated": true
  },
  {
    "name": "Floyd",
    "population": 86,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 34.21425804634478,
      "longitude": -103.580175100708
    },
    "incorporated": true
  },
  {
    "name": "Causey",
    "population": 68,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 33.879093083067524,
      "longitude": -103.12649674072266
    },
    "incorporated": true
  },
  {
    "name": "Arch",
    "population": null,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 34.1129781435234,
      "longitude": -103.1414189208984
    },
    "incorporated": false
  },
  {
    "name": "Rogers",
    "population": 229,
    "county": "Roosevelt County",
    "gps_location": {
      "latitude": 33.9817,
      "longitude": -103.2306
    },
    "incorporated": false
  },
  {
    "name": "Clovis",
    "population": 38567,
    "county": "Curry County",
    "gps_location": {
      "latitude": 34.4047,
      "longitude": -103.2053
    },
    "incorporated": true
  },
  {
    "name": "Texico",
    "population": 956,
    "county": "Curry County",
    "gps_location": {
      "latitude": 34.39,
      "longitude": -103.0514
    },
    "incorporated": true
  },
  {
    "name": "Melrose",
    "population": 622,
    "county": "Curry County",
    "gps_location": {
      "latitude": 34.4281,
      "longitude": -103.6281
    },
    "incorporated": true
  },
  {
    "name": "Grady",
    "population": 86,
    "county": "Curry County",
    "gps_location": {
      "latitude": 34.8217,
      "longitude": -103.3158
    },
    "incorporated": true
  },
  {
    "name": "Tucumcari",
    "population": 5278,
    "county": "Quay County",
    "gps_location": {
      "latitude": 35.1699,
      "longitude": -103.7256
    },
    "incorporated": true
  },
  {
    "name": "San Jon",
    "population": 136,
    "county": "Quay County",
    "gps_location": {
      "latitude": 35.112036637248906,
      "longitude": -103.33092833862305
    },
    "incorporated": true
  },
  {
    "name": "Logan",
    "population": 968,
    "county": "Quay County",
    "gps_location": {
      "latitude": 35.36577965472577,
      "longitude": -103.41054948120117
    },
    "incorporated": true
  },
  {
    "name": "Nara Visa",
    "population": 51,
    "county": "Quay County",
    "gps_location": {
      "latitude": 35.6076243098679,
      "longitude": -103.10008696289063
    },
    "incorporated": false
  },
  {
    "name": "House",
    "population": 56,
    "county": "Quay County",
    "gps_location": {
      "latitude": 34.6494,
      "longitude": -103.9039
    },
    "incorporated": true
  },
  {
    "name": "Clayton",
    "population": 2643,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.452013598253885,
      "longitude": -103.18447528076172
    },
    "incorporated": true
  },
  {
    "name": "Des Moines",
    "population": 117,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.7613,
      "longitude": -103.8342
    },
    "incorporated": true
  },
  {
    "name": "Folsom",
    "population": 51,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.844781032110596,
      "longitude": -103.91781213684082
    },
    "incorporated": true
  },
  {
    "name": "Grenville",
    "population": 29,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.593061864764096,
      "longitude": -103.61351335449218
    },
    "incorporated": true
  },
  {
    "name": "Capulin",
    "population": 61,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.74202237657463,
      "longitude": -103.99511335449219
    },
    "incorporated": false
  },
  {
    "name": "Amistad",
    "population": 137,
    "county": "Union County",
    "gps_location": {
      "latitude": 35.9189,
      "longitude": -103.1538
    },
    "incorporated": false
  },
  {
    "name": "Sedan",
    "population": 134,
    "county": "Union County",
    "gps_location": {
      "latitude": 36.1444,
      "longitude": -103.1294
    },
    "incorporated": false
  },
  {
    "name": "Hollis",
    "population": 1795,
    "county": "Harmon County",
    "gps_location": {
      "latitude": 34.68251937658385,
      "longitude": -99.9123817565918
    },
    "incorporated": true
  },
  {
    "name": "Gould",
    "population": 103,
    "county": "Harmon County",
    "gps_location": {
      "latitude": 34.6692,
      "longitude": -99.7737
    },
    "incorporated": true
  },
  {
    "name": "Arnett",
    "population": null,
    "county": "Harmon County",
    "gps_location": {
      "latitude": 34.7472,
      "longitude": -99.965
    },
    "incorporated": false
  },
  {
    "name": "Mangum",
    "population": 2762,
    "county": "Greer County",
    "gps_location": {
      "latitude": 34.8785,
      "longitude": -99.5039
    },
    "incorporated": true
  },
  {
    "name": "Granite",
    "population": 1628,
    "county": "Greer County",
    "gps_location": {
      "latitude": 34.9623,
      "longitude": -99.3842
    },
    "incorporated": true
  },
  {
    "name": "Willow",
    "population": null,
    "county": "Greer County",
    "gps_location": {
      "latitude": 35.051416120854476,
      "longitude": -99.50944903564452
    },
    "incorporated": false
  },
  {
    "name": "Reed",
    "population": null,
    "county": "Greer County",
    "gps_location": {
      "latitude": 34.9006,
      "longitude": -99.6956
    },
    "incorporated": false
  },
  {
    "name": "Vinson",
    "population": 60,
    "county": "Greer County",
    "gps_location": {
      "latitude": 34.90055527373846,
      "longitude": -99.85988035202028
    },
    "incorporated": false
  },
  {
    "name": "Elk City",
    "population": 11561,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.41146692432088,
      "longitude": -99.40483743896485
    },
    "incorporated": true
  },
  {
    "name": "Sayre",
    "population": 4809,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.29179617590157,
      "longitude": -99.64002965087889
    },
    "incorporated": true
  },
  {
    "name": "Erick",
    "population": 1000,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.214949384767934,
      "longitude": -99.8666829788208
    },
    "incorporated": true
  },
  {
    "name": "Texola",
    "population": 36,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.21922607669095,
      "longitude": -99.99148044433593
    },
    "incorporated": true
  },
  {
    "name": "Carter",
    "population": 183,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.2181,
      "longitude": -99.5036
    },
    "incorporated": true
  },
  {
    "name": "Sweetwater",
    "population": null,
    "county": "Beckham County",
    "gps_location": {
      "latitude": 35.422254317556366,
      "longitude": -99.91104101562499
    },
    "incorporated": true
  },
  {
    "name": "Cheyenne",
    "population": 771,
    "county": "Roger Mills County",
    "gps_location": {
      "latitude": 35.61397023871363,
      "longitude": -99.67159348144531
    },
    "incorporated": true
  },
  {
    "name": "Reydon",
    "population": 137,
    "county": "Roger Mills County",
    "gps_location": {
      "latitude": 35.65353591763677,
      "longitude": -99.91930846557617
    },
    "incorporated": true
  },
  {
    "name": "Strong City",
    "population": 33,
    "county": "Roger Mills County",
    "gps_location": {
      "latitude": 35.6697,
      "longitude": -99.6003
    },
    "incorporated": true
  },
  {
    "name": "Roll",
    "population": null,
    "county": "Roger Mills County",
    "gps_location": {
      "latitude": 35.78727694668449,
      "longitude": -99.71311661376951
    },
    "incorporated": false
  },
  {
    "name": "McQueen",
    "population": null,
    "county": "Harmon County",
    "gps_location": {
      "latitude": 34.5348,
      "longitude": -99.9798
    },
    "incorporated": false
  },
  {
    "name": "Madge",
    "population": null,
    "county": "Harmon County",
    "gps_location": {
      "latitude": 34.9003,
      "longitude": -99.9584
    },
    "incorporated": false
  },
  {
    "name": "Shattuck",
    "population": 1249,
    "county": "Ellis County",
    "gps_location": {
      "latitude": 36.2724,
      "longitude": -99.8762
    },
    "incorporated": true
  },
  {
    "name": "Gage",
    "population": 433,
    "county": "Ellis County",
    "gps_location": {
      "latitude": 36.31884025766208,
      "longitude": -99.75678501586916
    },
    "incorporated": true
  },
  {
    "name": "Fargo",
    "population": 312,
    "county": "Ellis County",
    "gps_location": {
      "latitude": 36.3742,
      "longitude": -99.6223
    },
    "incorporated": true
  },
  {
    "name": "Catesby",
    "population": null,
    "county": "Ellis County",
    "gps_location": {
      "latitude": 36.493,
      "longitude": -99.9628
    },
    "incorporated": false
  },
  {
    "name": "Arnett (Ellis County)",
    "population": 495,
    "county": "Ellis County",
    "gps_location": {
      "latitude": 36.1345,
      "longitude": -99.7729
    },
    "incorporated": true
  },
  {
    "name": "Laverne",
    "population": 1223,
    "county": "Harper County",
    "gps_location": {
      "latitude": 36.7098,
      "longitude": -99.8935
    },
    "incorporated": true
  },
  {
    "name": "Buffalo",
    "population": 1039,
    "county": "Harper County",
    "gps_location": {
      "latitude": 36.8353,
      "longitude": -99.6278
    },
    "incorporated": true
  },
  {
    "name": "Rosston",
    "population": 52,
    "county": "Harper County",
    "gps_location": {
      "latitude": 36.8128,
      "longitude": -99.9328
    },
    "incorporated": true
  },
  {
    "name": "May",
    "population": null,
    "county": "Harper County",
    "gps_location": {
      "latitude": 36.617,
      "longitude": -99.747
    },
    "incorporated": true
  },
  {
    "name": "Selman",
    "population": 12,
    "county": "Harper County",
    "gps_location": {
      "latitude": 36.8014,
      "longitude": -99.4908
    },
    "incorporated": false
  },
  {
    "name": "Woodward",
    "population": 12900,
    "county": "Woodward County",
    "gps_location": {
      "latitude": 36.4315,
      "longitude": -99.3912
    },
    "incorporated": true
  },
  {
    "name": "Mooreland",
    "population": 1178,
    "county": "Woodward County",
    "gps_location": {
      "latitude": 36.4378,
      "longitude": -99.2048
    },
    "incorporated": true
  },
  {
    "name": "Fort Supply",
    "population": 317,
    "county": "Woodward County",
    "gps_location": {
      "latitude": 36.5722,
      "longitude": -99.5737
    },
    "incorporated": true
  },
  {
    "name": "Sharon",
    "population": 133,
    "county": "Woodward County",
    "gps_location": {
      "latitude": 36.2756,
      "longitude": -99.3381
    },
    "incorporated": true
  },
  {
    "name": "Mutual",
    "population": 63,
    "county": "Woodward County",
    "gps_location": {
      "latitude": 36.2299,
      "longitude": -99.1681
    },
    "incorporated": true
  },
  {
    "name": "Altus",
    "population": 18635,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.63804135617299,
      "longitude": -99.33356582031249
    },
    "incorporated": true
  },
  {
    "name": "Blair",
    "population": 727,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.7803,
      "longitude": -99.3333
    },
    "incorporated": true
  },
  {
    "name": "Duke",
    "population": 394,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.6628,
      "longitude": -99.5697
    },
    "incorporated": true
  },
  {
    "name": "Martha",
    "population": 162,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.7261,
      "longitude": -99.3867
    },
    "incorporated": true
  },
  {
    "name": "Elmer",
    "population": 65,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.4808,
      "longitude": -99.3522
    },
    "incorporated": true
  },
  {
    "name": "Eldorado",
    "population": 317,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.4731,
      "longitude": -99.6497
    },
    "incorporated": true
  },
  {
    "name": "Olustee",
    "population": 463,
    "county": "Jackson County",
    "gps_location": {
      "latitude": 34.5478,
      "longitude": -99.4242
    },
    "incorporated": true
  },
  {
    "name": "Frederick",
    "population": 3468,
    "county": "Tillman County",
    "gps_location": {
      "latitude": 34.392,
      "longitude": -99.0184
    },
    "incorporated": true
  },
  {
    "name": "Grandfield",
    "population": 919,
    "county": "Tillman County",
    "gps_location": {
      "latitude": 34.2307,
      "longitude": -98.6874
    },
    "incorporated": true
  },
  {
    "name": "Tipton",
    "population": 864,
    "county": "Tillman County",
    "gps_location": {
      "latitude": 34.5008,
      "longitude": -99.1364
    },
    "incorporated": true
  },
  {
    "name": "Manitou",
    "population": 171,
    "county": "Tillman County",
    "gps_location": {
      "latitude": 34.5072,
      "longitude": -98.9811
    },
    "incorporated": true
  },
  {
    "name": "Davidson",
    "population": 241,
    "county": "Tillman County",
    "gps_location": {
      "latitude": 34.2422,
      "longitude": -99.0781
    },
    "incorporated": true
  },
  {
    "name": "Hobart",
    "population": 3413,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 35.0244,
      "longitude": -99.0875
    },
    "incorporated": true
  },
  {
    "name": "Gotebo",
    "population": 174,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 35.0711,
      "longitude": -98.8742
    },
    "incorporated": true
  },
  {
    "name": "Mountain View",
    "population": 740,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 35.0994,
      "longitude": -98.7497
    },
    "incorporated": true
  },
  {
    "name": "Mountain Park",
    "population": 320,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 34.6989,
      "longitude": -98.9522
    },
    "incorporated": true
  },
  {
    "name": "Roosevelt",
    "population": 254,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 34.8483,
      "longitude": -99.0222
    },
    "incorporated": true
  },
  {
    "name": "Snyder",
    "population": 1301,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 34.6553,
      "longitude": -98.9533
    },
    "incorporated": true
  },
  {
    "name": "Cooperton",
    "population": 3,
    "county": "Kiowa County",
    "gps_location": {
      "latitude": 34.8664,
      "longitude": -98.8708
    },
    "incorporated": true
  },
  {
    "name": "Clinton",
    "population": 8521,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.5067,
      "longitude": -98.9706
    },
    "incorporated": true
  },
  {
    "name": "Weatherford",
    "population": 12076,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.5383,
      "longitude": -98.6872
    },
    "incorporated": true
  },
  {
    "name": "Arapaho",
    "population": 668,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.5778,
      "longitude": -98.9594
    },
    "incorporated": true
  },
  {
    "name": "Butler",
    "population": 208,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.6364,
      "longitude": -99.1864
    },
    "incorporated": true
  },
  {
    "name": "Hammon",
    "population": 479,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.6322,
      "longitude": -99.3814
    },
    "incorporated": true
  },
  {
    "name": "Thomas",
    "population": 1143,
    "county": "Custer County",
    "gps_location": {
      "latitude": 35.7453,
      "longitude": -98.745
    },
    "incorporated": true
  },
  {
    "name": "Cordell",
    "population": 2775,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.291656062276,
      "longitude": -98.98767655029297
    },
    "incorporated": true
  },
  {
    "name": "Sentinel",
    "population": 763,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.1569,
      "longitude": -99.1736
    },
    "incorporated": true
  },
  {
    "name": "Rocky",
    "population": 128,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.1564,
      "longitude": -99.0597
    },
    "incorporated": true
  },
  {
    "name": "Burns Flat",
    "population": 1948,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.34819046564552,
      "longitude": -99.16994793701171
    },
    "incorporated": true
  },
  {
    "name": "Dill City",
    "population": 420,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.27648414127236,
      "longitude": -99.13488746032715
    },
    "incorporated": true
  },
  {
    "name": "Corn",
    "population": 592,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.3792,
      "longitude": -98.7817
    },
    "incorporated": true
  },
  {
    "name": "Foss",
    "population": 101,
    "county": "Washita County",
    "gps_location": {
      "latitude": 35.45,
      "longitude": -99.1708
    },
    "incorporated": true
  },
  {
    "name": "Taloga",
    "population": 288,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 36.0403,
      "longitude": -98.9642
    },
    "incorporated": true
  },
  {
    "name": "Leedey",
    "population": 415,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 35.8686,
      "longitude": -99.345
    },
    "incorporated": true
  },
  {
    "name": "Vici",
    "population": 611,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 36.1489,
      "longitude": -99.2994
    },
    "incorporated": true
  },
  {
    "name": "Putnam",
    "population": 30,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 35.8558,
      "longitude": -98.9683
    },
    "incorporated": true
  },
  {
    "name": "Camargo",
    "population": 193,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 36.0178,
      "longitude": -99.2883
    },
    "incorporated": true
  },
  {
    "name": "Oakwood",
    "population": 74,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 35.9317,
      "longitude": -98.7031
    },
    "incorporated": true
  },
  {
    "name": "Fay",
    "population": 32,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 35.813594358481105,
      "longitude": -98.65757003173829
    },
    "incorporated": false
  },
  {
    "name": "Darrouzett",
    "population": 309,
    "county": "Lipscomb County",
    "state": "Texas",
    "gps_location": {
      "latitude": 36.4449,
      "longitude": -100.3258
    },
    "incorporated": true
  },
  {
    "name": "Morton",
    "population": 1690,
    "county": "Cochran County",
    "gps_location": {
      "latitude": 33.725,
      "longitude": -102.7594
    },
    "incorporated": true
  },
  {
    "name": "Whiteface",
    "population": 371,
    "county": "Cochran County",
    "gps_location": {
      "latitude": 33.60011607338343,
      "longitude": -102.61356473083497
    },
    "incorporated": true
  },
  {
    "name": "Bledsoe",
    "population": 132,
    "county": "Cochran County",
    "gps_location": {
      "latitude": 33.61871059590858,
      "longitude": -103.01963579101563
    },
    "incorporated": true
  },
  {
    "name": "Levelland",
    "population": 12652,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.5873164,
      "longitude": -102.37796
    },
    "incorporated": true
  },
  {
    "name": "Ropesville",
    "population": 430,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.4134229,
      "longitude": -102.1543406
    },
    "incorporated": true
  },
  {
    "name": "Sundown",
    "population": 1477,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.457018,
      "longitude": -102.488283
    },
    "incorporated": true
  },
  {
    "name": "Smyer",
    "population": null,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.5842563,
      "longitude": -102.1632291
    },
    "incorporated": true
  },
  {
    "name": "Anton",
    "population": 907,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.8111,
      "longitude": -102.1639
    },
    "incorporated": true
  },
  {
    "name": "Whitharral",
    "population": null,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.7375948,
      "longitude": -102.3271221
    },
    "incorporated": true
  },
  {
    "name": "Opdyke West",
    "population": null,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.593241,
      "longitude": -102.298924
    },
    "incorporated": false
  },
  {
    "name": "Roundup",
    "population": 20,
    "county": "Hockley County",
    "gps_location": {
      "latitude": 33.7622,
      "longitude": -102.0972
    },
    "incorporated": false
  },
  {
    "name": "Shallowater",
    "population": 2630,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.68908313117221,
      "longitude": -101.99701955566407
    },
    "incorporated": true
  },
  {
    "name": "Wolfforth",
    "population": 4889,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.506055993574954,
      "longitude": -102.00937980957033
    },
    "incorporated": true
  },
  {
    "name": "Slaton",
    "population": 5889,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.4348,
      "longitude": -101.6413
    },
    "incorporated": true
  },
  {
    "name": "Buffalo Springs",
    "population": 453,
    "county": "Lubbock County",
    "gps_location": {
      "latitude": 33.53228999878111,
      "longitude": -101.70809329223634
    },
    "incorporated": true
  },
  {
    "name": "Ralls",
    "population": 1665,
    "county": "Crosby County",
    "gps_location": {
      "latitude": 33.6794,
      "longitude": -101.3836
    },
    "incorporated": true
  },
  {
    "name": "Crosbyton",
    "population": null,
    "county": "Crosby County",
    "gps_location": {
      "latitude": 33.65971076550889,
      "longitude": -101.23823498413086
    },
    "incorporated": true
  },
  {
    "name": "Lorenzo",
    "population": null,
    "county": "Crosby County",
    "gps_location": {
      "latitude": 33.6702962,
      "longitude": -101.53525
    },
    "incorporated": true
  },
  {
    "name": "Cone",
    "population": 20,
    "county": "Crosby County",
    "gps_location": {
      "latitude": 33.7973048,
      "longitude": -101.3876574
    },
    "incorporated": false
  },
  {
    "name": "Dickens",
    "population": 219,
    "county": "Dickens County",
    "gps_location": {
      "latitude": 33.621341,
      "longitude": -100.834987
    },
    "incorporated": true
  },
  {
    "name": "Spur",
    "population": 863,
    "county": "Dickens County",
    "gps_location": {
      "latitude": 33.47765,
      "longitude": -100.857018
    },
    "incorporated": true
  },
  {
    "name": "McAdoo",
    "population": 75,
    "county": "Dickens County",
    "gps_location": {
      "latitude": 33.7339724,
      "longitude": -101.0062533
    },
    "incorporated": false
  },
  {
    "name": "Afton",
    "population": null,
    "county": "Dickens County",
    "gps_location": {
      "latitude": 33.75893529039222,
      "longitude": -100.81688593068849
    },
    "incorporated": false
  },
  {
    "name": "Guthrie",
    "population": 164,
    "county": "King County",
    "gps_location": {
      "latitude": 33.62082420188815,
      "longitude": -100.3226433227539
    },
    "incorporated": false
  },
  {
    "name": "Dumont",
    "population": 19,
    "county": "King County",
    "gps_location": {
      "latitude": 33.80963825755829,
      "longitude": -100.51619486999512
    },
    "incorporated": false
  },
  {
    "name": "Crowell",
    "population": 769,
    "county": "Foard County",
    "gps_location": {
      "latitude": 33.9838,
      "longitude": -99.7242
    },
    "incorporated": true
  },
  {
    "name": "Margaret",
    "population": 50,
    "county": "Foard County",
    "gps_location": {
      "latitude": 34.048259432675614,
      "longitude": -99.65154116210938
    },
    "incorporated": false
  },
  {
    "name": "Thalia",
    "population": 50,
    "county": "Foard County",
    "gps_location": {
      "latitude": 33.98449822924229,
      "longitude": -99.53818041992187
    },
    "incorporated": false
  },
  {
    "name": "Rayland",
    "population": 30,
    "county": "Foard County",
    "gps_location": {
      "latitude": 34.06427438756471,
      "longitude": -99.48108498687745
    },
    "incorporated": false
  },
  {
    "name": "Vernon",
    "population": 10045,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.1526,
      "longitude": -99.2906
    },
    "incorporated": true
  },
  {
    "name": "Lockett",
    "population": 357,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.08292586708168,
      "longitude": -99.37216311035156
    },
    "incorporated": true
  },
  {
    "name": "Harrold",
    "population": 129,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.08079359068989,
      "longitude": -99.03195591430664
    },
    "incorporated": true
  },
  {
    "name": "Odell",
    "population": 100,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.34429567123448,
      "longitude": -99.41856731262206
    },
    "incorporated": false
  },
  {
    "name": "Oklaunion",
    "population": 77,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.13135729773161,
      "longitude": -99.14183554840088
    },
    "incorporated": true
  },
  {
    "name": "White City",
    "population": 40,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.280005084052085,
      "longitude": -99.3453142074585
    },
    "incorporated": false
  },
  {
    "name": "Farmers Valley",
    "population": 30,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.16736183211425,
      "longitude": -99.45575865325928
    },
    "incorporated": false
  },
  {
    "name": "Doans",
    "population": 20,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 34.2282,
      "longitude": -99.5914
    },
    "incorporated": false
  },
  {
    "name": "Grayback",
    "population": 10,
    "county": "Wilbarger County",
    "gps_location": {
      "latitude": 33.99083441158501,
      "longitude": -99.17467764892578
    },
    "incorporated": false
  },
  {
    "name": "Benjamin",
    "population": 200,
    "county": "Knox County",
    "gps_location": {
      "latitude": 33.5836894,
      "longitude": -99.793032
    },
    "incorporated": true
  },
  {
    "name": "Knox City",
    "population": 1052,
    "county": "Knox County",
    "gps_location": {
      "latitude": 33.41728397689776,
      "longitude": -99.81937424316408
    },
    "incorporated": true
  },
  {
    "name": "Munday",
    "population": 1240,
    "county": "Knox County",
    "gps_location": {
      "latitude": 33.449116758731314,
      "longitude": -99.62289705810547
    },
    "incorporated": true
  },
  {
    "name": "Goree",
    "population": 162,
    "county": "Knox County",
    "gps_location": {
      "latitude": 33.46697565933825,
      "longitude": -99.52359883422852
    },
    "incorporated": true
  },
  {
    "name": "Truscott",
    "population": 50,
    "county": "Knox County",
    "gps_location": {
      "latitude": 33.754245110634784,
      "longitude": -99.8112500305176
    },
    "incorporated": false
  },
  {
    "name": "Seymour",
    "population": 2537,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.59383381506738,
      "longitude": -99.26040651855469
    },
    "incorporated": true
  },
  {
    "name": "Lake Kemp",
    "population": null,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.763475321002254,
      "longitude": -99.1988860107422
    },
    "incorporated": false
  },
  {
    "name": "Mabelle",
    "population": null,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.66989409410287,
      "longitude": -99.13928981475831
    },
    "incorporated": false
  },
  {
    "name": "Bomarton",
    "population": null,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.508045124686525,
      "longitude": -99.42566256103515
    },
    "incorporated": false
  },
  {
    "name": "Westover",
    "population": null,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.4972007717963,
      "longitude": -99.01730092773437
    },
    "incorporated": false
  },
  {
    "name": "Red Springs",
    "population": null,
    "county": "Baylor County",
    "gps_location": {
      "latitude": 33.61278677780569,
      "longitude": -99.41178233947754
    },
    "incorporated": false
  },
  {
    "name": "Archer City",
    "population": 1584,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.5937634,
      "longitude": -98.625701
    },
    "incorporated": true
  },
  {
    "name": "Holliday",
    "population": 1570,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.8144,
      "longitude": -98.6897
    },
    "incorporated": true
  },
  {
    "name": "Lakeside City",
    "population": 1150,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.828789720259486,
      "longitude": -98.5453276611328
    },
    "incorporated": true
  },
  {
    "name": "Scotland",
    "population": 419,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.659491592353795,
      "longitude": -98.47065509033203
    },
    "incorporated": true
  },
  {
    "name": "Windthorst",
    "population": 344,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.57414390434588,
      "longitude": -98.43909809570313
    },
    "incorporated": true
  },
  {
    "name": "Megargel",
    "population": 177,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.45055901486582,
      "longitude": -98.9248607421875
    },
    "incorporated": true
  },
  {
    "name": "Dundee",
    "population": 12,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.7406,
      "longitude": -98.9018
    },
    "incorporated": false
  },
  {
    "name": "Mankins",
    "population": 10,
    "county": "Archer County",
    "gps_location": {
      "latitude": 33.78067372148089,
      "longitude": -98.79754096832275
    },
    "incorporated": false
  },
  {
    "name": "Wichita Falls",
    "population": 102988,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 33.9137,
      "longitude": -98.4972
    },
    "incorporated": true
  },
  {
    "name": "Burkburnett",
    "population": 10975,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 34.09733189138004,
      "longitude": -98.57096482543945
    },
    "incorporated": true
  },
  {
    "name": "Iowa Park",
    "population": 6547,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 33.951247954804316,
      "longitude": -98.66902865600584
    },
    "incorporated": true
  },
  {
    "name": "Electra",
    "population": 2282,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 34.0312,
      "longitude": -98.9256
    },
    "incorporated": true
  },
  {
    "name": "Kamay",
    "population": 640,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 33.85773686277203,
      "longitude": -98.80835635986328
    },
    "incorporated": false
  },
  {
    "name": "Pleasant Valley",
    "population": 356,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 33.938643992891976,
      "longitude": -98.5895611114502
    },
    "incorporated": true
  },
  {
    "name": "Cashion Community",
    "population": 288,
    "county": "Wichita County",
    "gps_location": {
      "latitude": 34.03555193017923,
      "longitude": -98.50035803222656
    },
    "incorporated": false
  },
  {
    "name": "Lawton",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.6089,
      "longitude": -98.3903
    },
    "incorporated": true
  },
  {
    "name": "Cache",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.62925208768927,
      "longitude": -98.6286638305664
    },
    "incorporated": true
  },
  {
    "name": "Chattanooga",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.42204791778551,
      "longitude": -98.65495382080078
    },
    "incorporated": true
  },
  {
    "name": "Elgin",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.78144886241791,
      "longitude": -98.29147265625
    },
    "incorporated": true
  },
  {
    "name": "Faxon",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.45797130923728,
      "longitude": -98.57911470947266
    },
    "incorporated": true
  },
  {
    "name": "Geronimo",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.48089248773209,
      "longitude": -98.3830701171875
    },
    "incorporated": true
  },
  {
    "name": "Indiahoma",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.61911469804248,
      "longitude": -98.75210778808594
    },
    "incorporated": true
  },
  {
    "name": "Medicine Park",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.728785781248305,
      "longitude": -98.5040798095703
    },
    "incorporated": true
  },
  {
    "name": "Sterling",
    "population": null,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 34.74944909382849,
      "longitude": -98.17197346191406
    },
    "incorporated": true
  },
  {
    "name": "Fort Cobb",
    "population": 518,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.09805754082941,
      "longitude": -98.43689134521485
    },
    "incorporated": true
  },
  {
    "name": "Anadarko",
    "population": null,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.0726,
      "longitude": -98.2437
    },
    "incorporated": true
  },
  {
    "name": "Binger",
    "population": 438,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.30884896919343,
      "longitude": -98.34189837036132
    },
    "incorporated": true
  },
  {
    "name": "Hinton",
    "population": 4917,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.47156502711398,
      "longitude": -98.35509674072264
    },
    "incorporated": true
  },
  {
    "name": "Carnegie",
    "population": 1430,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.10371285412931,
      "longitude": -98.60356238098144
    },
    "incorporated": true
  },
  {
    "name": "Gracemont",
    "population": 279,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.1878,
      "longitude": -98.2592
    },
    "incorporated": true
  },
  {
    "name": "Apache",
    "population": null,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 34.89367760337433,
      "longitude": -98.36572394714355
    },
    "incorporated": true
  },
  {
    "name": "Cyril",
    "population": 827,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 34.89810163764841,
      "longitude": -98.20091131744383
    },
    "incorporated": true
  },
  {
    "name": "Lookeba",
    "population": 78,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.36265002387567,
      "longitude": -98.36707573547362
    },
    "incorporated": true
  },
  {
    "name": "Cement",
    "population": 436,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 34.93254103410101,
      "longitude": -98.14051987304688
    },
    "incorporated": true
  },
  {
    "name": "Eakly",
    "population": null,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.30471764425763,
      "longitude": -98.55683716430666
    },
    "incorporated": true
  },
  {
    "name": "Washita",
    "population": 83,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.102855176969314,
      "longitude": -98.34131416931152
    },
    "incorporated": false
  },
  {
    "name": "Bridgeport",
    "population": 97,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.5474,
      "longitude": -98.3775
    },
    "incorporated": true
  },
  {
    "name": "Albert",
    "population": 67,
    "county": "Caddo County",
    "gps_location": {
      "latitude": 35.23293061470082,
      "longitude": -98.41203680419922
    },
    "incorporated": true
  },
  {
    "name": "Watonga",
    "population": 2690,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 35.844808190850394,
      "longitude": -98.41381009521484
    },
    "incorporated": true
  },
  {
    "name": "Okeene",
    "population": null,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 36.11610181501535,
      "longitude": -98.31703811645508
    },
    "incorporated": true
  },
  {
    "name": "Canton",
    "population": 468,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 36.0535427959829,
      "longitude": -98.58848583068846
    },
    "incorporated": true
  },
  {
    "name": "Longdale",
    "population": 186,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 36.1338,
      "longitude": -98.5511
    },
    "incorporated": true
  },
  {
    "name": "Hitchcock",
    "population": 102,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 35.9678,
      "longitude": -98.3497
    },
    "incorporated": true
  },
  {
    "name": "Eagle City",
    "population": 40,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 35.9330702809713,
      "longitude": -98.5915591217041
    },
    "incorporated": false
  },
  {
    "name": "Greenfield",
    "population": 114,
    "county": "Blaine County",
    "gps_location": {
      "latitude": 35.7292,
      "longitude": -98.3776
    },
    "incorporated": true
  },
  {
    "name": "Seiling",
    "population": 850,
    "county": "Dewey County",
    "gps_location": {
      "latitude": 36.152,
      "longitude": -98.9256
    },
    "incorporated": true
  },
  {
    "name": "Waynoka",
    "population": 708,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.5822,
      "longitude": -98.8798
    },
    "incorporated": true
  },
  {
    "name": "Alva",
    "population": null,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.8019,
      "longitude": -98.666
    },
    "incorporated": true
  },
  {
    "name": "Freedom",
    "population": null,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.7692,
      "longitude": -99.1133
    },
    "incorporated": true
  },
  {
    "name": "Dacoma",
    "population": 109,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.6597,
      "longitude": -98.5637
    },
    "incorporated": true
  },
  {
    "name": "Capron",
    "population": null,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.89707542802379,
      "longitude": -98.5778977355957
    },
    "incorporated": true
  },
  {
    "name": "Hopeton",
    "population": 22,
    "county": "Woods County",
    "gps_location": {
      "latitude": 36.68847855091036,
      "longitude": -98.66610570373535
    },
    "incorporated": false
  },
  {
    "name": "Fairview",
    "population": 2751,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.2689,
      "longitude": -98.4798
    },
    "incorporated": true
  },
  {
    "name": "Cleo Springs",
    "population": 287,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.4047,
      "longitude": -98.44
    },
    "incorporated": true
  },
  {
    "name": "Ringwood",
    "population": 401,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.38,
      "longitude": -98.2419
    },
    "incorporated": true
  },
  {
    "name": "Ames",
    "population": 193,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.247,
      "longitude": -98.1861
    },
    "incorporated": true
  },
  {
    "name": "Meno",
    "population": 198,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.3883,
      "longitude": -98.1781
    },
    "incorporated": true
  },
  {
    "name": "Isabella",
    "population": 114,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.2353,
      "longitude": -98.3353
    },
    "incorporated": false
  },
  {
    "name": "Chester",
    "population": 176,
    "county": "Major County",
    "gps_location": {
      "latitude": 36.2167,
      "longitude": -98.9208
    },
    "incorporated": false
  },
  {
    "name": "Cherokee",
    "population": 1469,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.7545,
      "longitude": -98.3567
    },
    "incorporated": true
  },
  {
    "name": "Aline",
    "population": 168,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.51,
      "longitude": -98.4486
    },
    "incorporated": true
  },
  {
    "name": "Amorita",
    "population": 38,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.9239,
      "longitude": -98.2936
    },
    "incorporated": true
  },
  {
    "name": "Helena",
    "population": 1537,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.5464,
      "longitude": -98.272
    },
    "incorporated": true
  },
  {
    "name": "Goltry",
    "population": 251,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.532,
      "longitude": -98.1509
    },
    "incorporated": true
  },
  {
    "name": "Carmen",
    "population": 445,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.578545804908536,
      "longitude": -98.4601546875
    },
    "incorporated": true
  },
  {
    "name": "Jet",
    "population": null,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.6658948958329,
      "longitude": -98.18139665527342
    },
    "incorporated": true
  },
  {
    "name": "Burlington",
    "population": 124,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.9003,
      "longitude": -98.4233
    },
    "incorporated": true
  },
  {
    "name": "Byron",
    "population": 37,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.9014,
      "longitude": -98.2944
    },
    "incorporated": true
  },
  {
    "name": "Lambert",
    "population": null,
    "county": "Alfalfa County",
    "gps_location": {
      "latitude": 36.68293478596273,
      "longitude": -98.42408967285157
    },
    "incorporated": true
  },
  {
    "name": "Wakita",
    "population": 311,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.88254769407341,
      "longitude": -97.92203752441407
    },
    "incorporated": true
  },
  {
    "name": "Medford",
    "population": 932,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.80656125133874,
      "longitude": -97.73380846557619
    },
    "incorporated": true
  },
  {
    "name": "Pond Creek",
    "population": 885,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.6678,
      "longitude": -97.8026
    },
    "incorporated": true
  },
  {
    "name": "Lamont",
    "population": 301,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.6914,
      "longitude": -97.5584
    },
    "incorporated": true
  },
  {
    "name": "Deer Creek",
    "population": 263,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.806383420958696,
      "longitude": -97.51808012695312
    },
    "incorporated": true
  },
  {
    "name": "Nash",
    "population": 192,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.665,
      "longitude": -98.052
    },
    "incorporated": true
  },
  {
    "name": "Manchester",
    "population": 90,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.99440000000001,
      "longitude": -98.03740325927734
    },
    "incorporated": true
  },
  {
    "name": "Renfrow",
    "population": 15,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.9247,
      "longitude": -97.657
    },
    "incorporated": true
  },
  {
    "name": "Jefferson",
    "population": 9,
    "county": "Grant County",
    "gps_location": {
      "latitude": 36.7203,
      "longitude": -97.7908
    },
    "incorporated": true
  },
  {
    "name": "Enid",
    "population": 51307,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.3956,
      "longitude": -97.8784
    },
    "incorporated": true
  },
  {
    "name": "Waukomis",
    "population": 1213,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.27992146388332,
      "longitude": -97.8978986022949
    },
    "incorporated": true
  },
  {
    "name": "North Enid",
    "population": 948,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.43627157574504,
      "longitude": -97.87139348144531
    },
    "incorporated": true
  },
  {
    "name": "Garber",
    "population": 725,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.4367,
      "longitude": -97.5814
    },
    "incorporated": true
  },
  {
    "name": "Lahoma",
    "population": 539,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.3881,
      "longitude": -98.0903
    },
    "incorporated": true
  },
  {
    "name": "Covington",
    "population": 472,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.3074,
      "longitude": -97.5865
    },
    "incorporated": true
  },
  {
    "name": "Drummond",
    "population": 455,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.3017,
      "longitude": -98.0359
    },
    "incorporated": true
  },
  {
    "name": "Kremlin",
    "population": 247,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.5467,
      "longitude": -97.8322
    },
    "incorporated": true
  },
  {
    "name": "Carrier",
    "population": 90,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.4792,
      "longitude": -98.0172
    },
    "incorporated": true
  },
  {
    "name": "Fairmont",
    "population": 132,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.3561,
      "longitude": -97.7056
    },
    "incorporated": true
  },
  {
    "name": "Bison",
    "population": 56,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.19593853122726,
      "longitude": -97.89007523803711
    },
    "incorporated": false
  },
  {
    "name": "Breckinridge",
    "population": 199,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.4369,
      "longitude": -97.7317
    },
    "incorporated": true
  },
  {
    "name": "Hillsdale",
    "population": 75,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.5633,
      "longitude": -97.9928
    },
    "incorporated": true
  },
  {
    "name": "Hunter",
    "population": 145,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.5639,
      "longitude": -97.6625
    },
    "incorporated": true
  },
  {
    "name": "Douglas",
    "population": 51,
    "county": "Garfield County",
    "gps_location": {
      "latitude": 36.2606,
      "longitude": -97.6667
    },
    "incorporated": true
  },
  {
    "name": "Kingfisher",
    "population": 4964,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 35.859404721533934,
      "longitude": -97.93169252929688
    },
    "incorporated": true
  },
  {
    "name": "Hennessey",
    "population": 2151,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 36.1056,
      "longitude": -97.8989
    },
    "incorporated": true
  },
  {
    "name": "Dover",
    "population": 400,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 35.9814,
      "longitude": -97.9109
    },
    "incorporated": true
  },
  {
    "name": "Loyal",
    "population": 71,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 35.9728,
      "longitude": -98.1181
    },
    "incorporated": true
  },
  {
    "name": "Cashion",
    "population": 850,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 35.8009,
      "longitude": -97.6769
    },
    "incorporated": true
  },
  {
    "name": "Okarche",
    "population": 1141,
    "county": "Kingfisher County",
    "gps_location": {
      "latitude": 35.725,
      "longitude": -97.9758
    },
    "incorporated": true
  },
  {
    "name": "El Reno",
    "population": 16989,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.53192504836054,
      "longitude": -97.95236708984376
    },
    "incorporated": true
  },
  {
    "name": "Yukon",
    "population": 23630,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.507144971311334,
      "longitude": -97.75909348144532
    },
    "incorporated": true
  },
  {
    "name": "Union City",
    "population": 1794,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.391884638504756,
      "longitude": -97.93697233886719
    },
    "incorporated": true
  },
  {
    "name": "Mustang",
    "population": 24143,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.38483179972529,
      "longitude": -97.72238664550781
    },
    "incorporated": true
  },
  {
    "name": "Calumet",
    "population": 443,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.6006,
      "longitude": -98.1203
    },
    "incorporated": true
  },
  {
    "name": "Cedar Lake",
    "population": 404,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.4274,
      "longitude": -98.1931
    },
    "incorporated": false
  },
  {
    "name": "Geary",
    "population": 994,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.6295,
      "longitude": -98.3181
    },
    "incorporated": true
  },
  {
    "name": "Oklahoma City",
    "population": 681054,
    "county": "Oklahoma County",
    "gps_location": {
      "latitude": 35.4689,
      "longitude": -97.5164
    },
    "incorporated": true
  },
  {
    "name": "Piedmont",
    "population": 7402,
    "county": "Canadian County",
    "gps_location": {
      "latitude": 35.64184139896756,
      "longitude": -97.74700683593751
    },
    "incorporated": true
  },
  {
    "name": "Chickasha",
    "population": 16231,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.05149974959967,
      "longitude": -97.936213671875
    },
    "incorporated": true
  },
  {
    "name": "Rush Springs",
    "population": 1074,
    "county": "Grady County",
    "gps_location": {
      "latitude": 34.78239383932293,
      "longitude": -97.96271303710938
    },
    "incorporated": true
  },
  {
    "name": "Ninnekah",
    "population": 775,
    "county": "Grady County",
    "gps_location": {
      "latitude": 34.94947915666559,
      "longitude": -97.92418646545411
    },
    "incorporated": true
  },
  {
    "name": "Minco",
    "population": 1500,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.31133672923809,
      "longitude": -97.94414689941408
    },
    "incorporated": true
  },
  {
    "name": "Verden",
    "population": 508,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.0984,
      "longitude": -98.0356
    },
    "incorporated": true
  },
  {
    "name": "Pocasset",
    "population": 183,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.19269093328988,
      "longitude": -97.95233354492187
    },
    "incorporated": true
  },
  {
    "name": "Amber",
    "population": 812,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.159319871667535,
      "longitude": -97.87931208496094
    },
    "incorporated": true
  },
  {
    "name": "Tuttle",
    "population": 8373,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.290729735046106,
      "longitude": -97.81272385253907
    },
    "incorporated": true
  },
  {
    "name": "Alex",
    "population": 482,
    "county": "Grady County",
    "gps_location": {
      "latitude": 34.914636134227834,
      "longitude": -97.7793182434082
    },
    "incorporated": true
  },
  {
    "name": "Bridge Creek",
    "population": 336,
    "county": "Grady County",
    "gps_location": {
      "latitude": 35.2347,
      "longitude": -97.7353
    },
    "incorporated": true
  },
  {
    "name": "Bradley",
    "population": null,
    "county": "Grady County",
    "gps_location": {
      "latitude": 34.8781,
      "longitude": -97.7083
    },
    "incorporated": true
  },
  {
    "name": "Norge",
    "population": 129,
    "county": "Grady County",
    "gps_location": {
      "latitude": 34.98803745264472,
      "longitude": -97.99625993652344
    },
    "incorporated": true
  },
  {
    "name": "Marlow",
    "population": 4635,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.64799390790064,
      "longitude": -97.95770357666017
    },
    "incorporated": true
  },
  {
    "name": "Duncan",
    "population": 22692,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.50112313888271,
      "longitude": -97.95739379882811
    },
    "incorporated": true
  },
  {
    "name": "Comanche",
    "population": 1378,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.36854258341506,
      "longitude": -97.96429030761719
    },
    "incorporated": true
  },
  {
    "name": "Velma",
    "population": 603,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.45821219171742,
      "longitude": -97.67344943847655
    },
    "incorporated": true
  },
  {
    "name": "Empire City",
    "population": 905,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.4201543768227,
      "longitude": -98.02721574707031
    },
    "incorporated": true
  },
  {
    "name": "Bray",
    "population": 952,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.63785324074345,
      "longitude": -97.81707003173828
    },
    "incorporated": true
  },
  {
    "name": "Central High",
    "population": 1181,
    "county": "Stephens County",
    "gps_location": {
      "latitude": 34.60859472164274,
      "longitude": -98.08922639160156
    },
    "incorporated": true
  },
  {
    "name": "Waurika",
    "population": 1837,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.166875319744875,
      "longitude": -98.00037003173829
    },
    "incorporated": true
  },
  {
    "name": "Ringling",
    "population": 869,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.1772,
      "longitude": -97.5914
    },
    "incorporated": true
  },
  {
    "name": "Terral",
    "population": 273,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 33.8962,
      "longitude": -97.9375
    },
    "incorporated": true
  },
  {
    "name": "Ryan",
    "population": 667,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.020739017063214,
      "longitude": -97.95578084716797
    },
    "incorporated": true
  },
  {
    "name": "Addington",
    "population": 83,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.2431,
      "longitude": -97.9667
    },
    "incorporated": true
  },
  {
    "name": "Hastings",
    "population": 104,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.2245,
      "longitude": -98.1087
    },
    "incorporated": true
  },
  {
    "name": "Cornish",
    "population": 110,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.15905462771492,
      "longitude": -97.5964
    },
    "incorporated": true
  },
  {
    "name": "Sugden",
    "population": 43,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.0813,
      "longitude": -97.9787
    },
    "incorporated": true
  },
  {
    "name": "Temple",
    "population": 862,
    "county": "Cotton County",
    "gps_location": {
      "latitude": 34.2731,
      "longitude": -98.235
    },
    "incorporated": true
  },
  {
    "name": "Walters",
    "population": 2412,
    "county": "Cotton County",
    "gps_location": {
      "latitude": 34.36063317503308,
      "longitude": -98.31010810546876
    },
    "incorporated": true
  },
  {
    "name": "Randlett",
    "population": 289,
    "county": "Cotton County",
    "gps_location": {
      "latitude": 34.1772,
      "longitude": -98.4639
    },
    "incorporated": true
  },
  {
    "name": "Devol",
    "population": 93,
    "county": "Cotton County",
    "gps_location": {
      "latitude": 34.1952,
      "longitude": -98.5884
    },
    "incorporated": true
  },
  {
    "name": "Henrietta",
    "population": 3054,
    "county": "Clay County",
    "gps_location": {
      "latitude": 33.815998354704426,
      "longitude": -98.19633322753906
    },
    "incorporated": true
  },
  {
    "name": "Petrolia",
    "population": 414,
    "county": "Clay County",
    "gps_location": {
      "latitude": 34.0132,
      "longitude": -98.2312
    },
    "incorporated": true
  },
  {
    "name": "Bellevue",
    "population": 310,
    "county": "Clay County",
    "gps_location": {
      "latitude": 33.6352,
      "longitude": -98.0156
    },
    "incorporated": true
  },
  {
    "name": "Byers",
    "population": 453,
    "county": "Clay County",
    "gps_location": {
      "latitude": 34.0697,
      "longitude": -98.1912
    },
    "incorporated": true
  },
  {
    "name": "Dean",
    "population": 503,
    "county": "Clay County",
    "gps_location": {
      "latitude": 33.949957729783826,
      "longitude": -98.34518497314453
    },
    "incorporated": true
  },
  {
    "name": "Jolly",
    "population": 162,
    "county": "Clay County",
    "gps_location": {
      "latitude": 33.86588216836035,
      "longitude": -98.34955993652345
    },
    "incorporated": true
  },
  {
    "name": "Springfield",
    "population": 1325,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.40831813548367,
      "longitude": -102.61641611633303
    },
    "incorporated": true
  },
  {
    "name": "Two Buttes",
    "population": 34,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.5607,
      "longitude": -102.3965
    },
    "incorporated": true
  },
  {
    "name": "Walsh",
    "population": 546,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.386096162036765,
      "longitude": -102.27789266662597
    },
    "incorporated": true
  },
  {
    "name": "Campo",
    "population": 103,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.105,
      "longitude": -102.5797
    },
    "incorporated": true
  },
  {
    "name": "Pritchett",
    "population": 112,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.37,
      "longitude": -102.8587
    },
    "incorporated": true
  },
  {
    "name": "Vilas",
    "population": 104,
    "county": "Baca County",
    "gps_location": {
      "latitude": 37.37551081312725,
      "longitude": -102.44734562988282
    },
    "incorporated": true
  },
  {
    "name": "Elkhart",
    "population": 1888,
    "county": "Morton County",
    "gps_location": {
      "latitude": 37.0031,
      "longitude": -101.8944
    },
    "incorporated": true
  },
  {
    "name": "Rolla",
    "population": 384,
    "county": "Morton County",
    "gps_location": {
      "latitude": 37.1183,
      "longitude": -101.6325
    },
    "incorporated": true
  },
  {
    "name": "Richfield",
    "population": 30,
    "county": "Morton County",
    "gps_location": {
      "latitude": 37.2653,
      "longitude": -101.7828
    },
    "incorporated": true
  },
  {
    "name": "Johnson City",
    "population": 1464,
    "county": "Stanton County",
    "gps_location": {
      "latitude": 37.5706,
      "longitude": -101.7528
    },
    "incorporated": true
  },
  {
    "name": "Manter",
    "population": 132,
    "county": "Stanton County",
    "gps_location": {
      "latitude": 37.525,
      "longitude": -101.8831
    },
    "incorporated": true
  },
  {
    "name": "Big Bow",
    "population": 32,
    "county": "Stanton County",
    "gps_location": {
      "latitude": 37.565,
      "longitude": -101.5617
    },
    "incorporated": false
  },
  {
    "name": "Hugoton",
    "population": 3747,
    "county": "Stevens County",
    "gps_location": {
      "latitude": 37.1746,
      "longitude": -101.3449
    },
    "incorporated": true
  },
  {
    "name": "Moscow",
    "population": 272,
    "county": "Stevens County",
    "gps_location": {
      "latitude": 37.325,
      "longitude": -101.2067
    },
    "incorporated": true
  },
  {
    "name": "Liberal",
    "population": 19825,
    "county": "Seward County",
    "gps_location": {
      "latitude": 37.0467,
      "longitude": -100.9278
    },
    "incorporated": true
  },
  {
    "name": "Kismet",
    "population": 340,
    "county": "Seward County",
    "gps_location": {
      "latitude": 37.2045,
      "longitude": -100.7017
    },
    "incorporated": true
  },
  {
    "name": "Meade",
    "population": 1505,
    "county": "Meade County",
    "gps_location": {
      "latitude": 37.2836,
      "longitude": -100.3431
    },
    "incorporated": true
  },
  {
    "name": "Fowler",
    "population": 534,
    "county": "Meade County",
    "gps_location": {
      "latitude": 37.3828,
      "longitude": -100.1956
    },
    "incorporated": true
  },
  {
    "name": "Plains",
    "population": 1037,
    "county": "Meade County",
    "gps_location": {
      "latitude": 37.2642,
      "longitude": -100.5897
    },
    "incorporated": true
  },
  {
    "name": "Englewood",
    "population": 58,
    "county": "Clark County",
    "gps_location": {
      "latitude": 37.0406,
      "longitude": -99.9875
    },
    "incorporated": true
  },
  {
    "name": "Ashland",
    "population": 783,
    "county": "Clark County",
    "gps_location": {
      "latitude": 37.1867,
      "longitude": -99.7697
    },
    "incorporated": true
  },
  {
    "name": "Minneola",
    "population": 738,
    "county": "Clark County",
    "gps_location": {
      "latitude": 37.442,
      "longitude": -100.0131
    },
    "incorporated": true
  },
  {
    "name": "Sitka",
    "population": 71,
    "county": "Clark County",
    "gps_location": {
      "latitude": 37.175,
      "longitude": -99.6514
    },
    "incorporated": false
  },
  {
    "name": "Coldwater",
    "population": 687,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 37.26858112897344,
      "longitude": -99.32770063476562
    },
    "incorporated": true
  },
  {
    "name": "Protection",
    "population": 498,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 37.2003,
      "longitude": -99.4839
    },
    "incorporated": true
  },
  {
    "name": "Wilmore",
    "population": 37,
    "county": "Comanche County",
    "gps_location": {
      "latitude": 37.335,
      "longitude": -99.2099
    },
    "incorporated": true
  },
  {
    "name": "Medicine Lodge",
    "population": 1781,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.28106593940966,
      "longitude": -98.58092833862304
    },
    "incorporated": true
  },
  {
    "name": "Kiowa",
    "population": 897,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.0172,
      "longitude": -98.4854
    },
    "incorporated": true
  },
  {
    "name": "Hardtner",
    "population": 167,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.0144,
      "longitude": -98.6492
    },
    "incorporated": true
  },
  {
    "name": "Hazelton",
    "population": 82,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.0894,
      "longitude": -98.4017
    },
    "incorporated": true
  },
  {
    "name": "Isabel",
    "population": 68,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.4672,
      "longitude": -98.5514
    },
    "incorporated": true
  },
  {
    "name": "Sun City",
    "population": 37,
    "county": "Barber County",
    "gps_location": {
      "latitude": 37.379,
      "longitude": -98.9175
    },
    "incorporated": true
  },
  {
    "name": "Anthony",
    "population": 2108,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.153427488482606,
      "longitude": -98.03160031738281
    },
    "incorporated": true
  },
  {
    "name": "Attica",
    "population": 516,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.2421,
      "longitude": -98.2275
    },
    "incorporated": true
  },
  {
    "name": "Bluff City",
    "population": 45,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.0761,
      "longitude": -97.8753
    },
    "incorporated": true
  },
  {
    "name": "Danville",
    "population": 29,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.2858,
      "longitude": -97.8919
    },
    "incorporated": true
  },
  {
    "name": "Harper",
    "population": 1313,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.28608172041222,
      "longitude": -98.0279139892578
    },
    "incorporated": true
  },
  {
    "name": "Freeport",
    "population": 86,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.197551554810374,
      "longitude": -97.85493974609375
    },
    "incorporated": true
  },
  {
    "name": "Waldron",
    "population": 9,
    "county": "Harper County",
    "gps_location": {
      "latitude": 37.0017,
      "longitude": -98.1825
    },
    "incorporated": true
  },
  {
    "name": "Belle Plaine",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.393244225620116,
      "longitude": -97.27948152465822
    }
  },
  {
    "name": "Caldwell",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.032353816421114,
      "longitude": -97.60755341796875
    }
  },
  {
    "name": "South Haven",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.050480349787634,
      "longitude": -97.40129379882812
    }
  },
  {
    "name": "Oxford",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.27415165748332,
      "longitude": -97.16905699462889
    }
  },
  {
    "name": "Argonia",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.26618641067732,
      "longitude": -97.76497678222657
    }
  },
  {
    "name": "Mayfield",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.25818155398663,
      "longitude": -97.5464798095703
    }
  },
  {
    "name": "Milan",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.259690581575484,
      "longitude": -97.67316740722657
    }
  },
  {
    "name": "Milton",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.38883421231483,
      "longitude": -97.63973403320313
    }
  },
  {
    "name": "Wellington KS",
    "county": "Sumner County",
    "gps_location": {
      "latitude": 37.27053057770082,
      "longitude": -97.3983684020996
    }
  },
  {
    "name": "Ponca City",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.7078,
      "longitude": -97.0845
    }
  },
  {
    "name": "Newkirk",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.881529755254526,
      "longitude": -97.05331009521484
    }
  },
  {
    "name": "Blackwell",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.80524782896037,
      "longitude": -97.28310715332033
    }
  },
  {
    "name": "Kaw City",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.76497043926324,
      "longitude": -96.86730501708985
    }
  },
  {
    "name": "Tonkawa",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.6782717030642,
      "longitude": -97.30977329101565
    }
  },
  {
    "name": "Braman",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.923026213273694,
      "longitude": -97.33369904785155
    }
  },
  {
    "name": "White Eagle",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.60426122928229,
      "longitude": -97.07622893066406
    }
  },
  {
    "name": "Kildare",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.80905809264255,
      "longitude": -97.0484680419922
    }
  },
  {
    "name": "Nardin",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.805588471039904,
      "longitude": -97.4463546875
    }
  },
  {
    "name": "Peckham",
    "county": "Kay County",
    "gps_location": {
      "latitude": 36.88674728815355,
      "longitude": -97.17507384033203
    }
  },
  {
    "name": "Perry",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.28899781418748,
      "longitude": -97.28598696289062
    }
  },
  {
    "name": "Red Rock",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.45846937099321,
      "longitude": -97.17561892089844
    }
  },
  {
    "name": "Billings",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.527213277963575,
      "longitude": -97.44643481445311
    }
  },
  {
    "name": "Marland",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.7448,
      "longitude": -97.2573
    }
  },
  {
    "name": "Morrison",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.295637995825295,
      "longitude": -97.00765659179687
    }
  },
  {
    "name": "Sumner",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.31854213658693,
      "longitude": -97.12094609375
    }
  },
  {
    "name": "Lucien",
    "county": "Noble County",
    "gps_location": {
      "latitude": 36.27512911873238,
      "longitude": -97.45646550292969
    }
  },
  {
    "name": "Crescent",
    "population": 1420,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.9519,
      "longitude": -97.595
    },
    "incorporated": true
  },
  {
    "name": "Coyle",
    "population": 376,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.9565855948291,
      "longitude": -97.2353275238037
    },
    "incorporated": true
  },
  {
    "name": "Langston",
    "population": 1747,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.944411726808156,
      "longitude": -97.25531091003418
    },
    "incorporated": true
  },
  {
    "name": "Cimarron City",
    "population": 173,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.8885,
      "longitude": -97.6022
    },
    "incorporated": true
  },
  {
    "name": "Cedar Valley",
    "population": 446,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.86382786012896,
      "longitude": -97.56281796874998
    },
    "incorporated": true
  },
  {
    "name": "Mulhall",
    "population": 239,
    "county": "Logan County",
    "gps_location": {
      "latitude": 36.0633,
      "longitude": -97.4039
    },
    "incorporated": true
  },
  {
    "name": "Guthrie (Logan County)",
    "population": 11805,
    "county": "Logan County",
    "gps_location": {
      "latitude": 35.87907485151895,
      "longitude": -97.42515699462892
    },
    "incorporated": true
  },
  {
    "name": "Edmond",
    "population": 95618,
    "county": "Oklahoma County",
    "gps_location": {
      "latitude": 35.6539524580586,
      "longitude": -97.48035993652344
    },
    "incorporated": true
  },
  {
    "name": "Norman",
    "population": 128026,
    "county": "Cleveland County",
    "gps_location": {
      "latitude": 35.2208,
      "longitude": -97.4437
    },
    "incorporated": true
  },
  {
    "name": "Noble",
    "population": 7739,
    "county": "Cleveland County",
    "gps_location": {
      "latitude": 35.1390383950704,
      "longitude": -97.39399555664062
    },
    "incorporated": true
  },
  {
    "name": "Slaughterville",
    "population": 4214,
    "county": "Cleveland County",
    "gps_location": {
      "latitude": 35.08664044246012,
      "longitude": -97.33556948242186
    },
    "incorporated": true
  },
  {
    "name": "Moore",
    "population": 63470,
    "county": "Cleveland County",
    "gps_location": {
      "latitude": 35.339,
      "longitude": -97.4953
    },
    "incorporated": true
  },
  {
    "name": "Etowah",
    "population": 167,
    "county": "Cleveland County",
    "gps_location": {
      "latitude": 35.12620440613796,
      "longitude": -97.17019887695315
    },
    "incorporated": true
  },
  {
    "name": "Newcastle",
    "population": 13055,
    "county": "McClain County",
    "gps_location": {
      "latitude": 35.246749062455905,
      "longitude": -97.5994
    },
    "incorporated": true
  },
  {
    "name": "Goldsby",
    "population": 2694,
    "county": "McClain County",
    "gps_location": {
      "latitude": 35.152619603259524,
      "longitude": -97.47384038085937
    },
    "incorporated": true
  },
  {
    "name": "Byars",
    "population": 184,
    "county": "McClain County",
    "gps_location": {
      "latitude": 34.8727,
      "longitude": -97.0528
    },
    "incorporated": true
  },
  {
    "name": "Wayne",
    "population": 625,
    "county": "McClain County",
    "gps_location": {
      "latitude": 34.9168,
      "longitude": -97.3164
    },
    "incorporated": true
  },
  {
    "name": "Dibble",
    "population": 1093,
    "county": "McClain County",
    "gps_location": {
      "latitude": 35.03201724723354,
      "longitude": -97.62941257324219
    },
    "incorporated": true
  },
  {
    "name": "Washington",
    "population": 706,
    "county": "McClain County",
    "gps_location": {
      "latitude": 35.0593077907742,
      "longitude": -97.48442416992187
    },
    "incorporated": true
  },
  {
    "name": "Rosedale",
    "population": 62,
    "county": "McClain County",
    "gps_location": {
      "latitude": 34.9185,
      "longitude": -97.1846
    },
    "incorporated": true
  },
  {
    "name": "Cole",
    "population": 624,
    "county": "McClain County",
    "gps_location": {
      "latitude": 35.10252950130385,
      "longitude": -97.57117980957031
    },
    "incorporated": true
  },
  {
    "name": "Blanchard",
    "population": 9663,
    "county": "McClain",
    "gps_location": {
      "latitude": 35.13803471559647,
      "longitude": -97.65811172485351
    },
    "incorporated": true
  },
  {
    "name": "Pauls Valley",
    "population": 6053,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.740157077555345,
      "longitude": -97.22193481445312
    },
    "incorporated": true
  },
  {
    "name": "Elmore City",
    "population": 750,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.622825285667886,
      "longitude": -97.39600814819337
    },
    "incorporated": true
  },
  {
    "name": "Wynnewood",
    "population": 1705,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.64254214848932,
      "longitude": -97.17029968261718
    },
    "incorporated": true
  },
  {
    "name": "Paoli",
    "population": 584,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.82661813164897,
      "longitude": -97.25828338623046
    },
    "incorporated": true
  },
  {
    "name": "Lindsay",
    "population": 2864,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.83718212829093,
      "longitude": -97.60313354492186
    },
    "incorporated": true
  },
  {
    "name": "Hennepin",
    "population": 143,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.50886836300212,
      "longitude": -97.34965667724607
    },
    "incorporated": false
  },
  {
    "name": "Erin Springs",
    "population": 89,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.810704709501174,
      "longitude": -97.60669479370115
    },
    "incorporated": true
  },
  {
    "name": "Foster",
    "population": 246,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.6164742422966,
      "longitude": -97.48901512145996
    },
    "incorporated": true
  },
  {
    "name": "Katie",
    "population": 332,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.579434659118675,
      "longitude": -97.35227378845215
    },
    "incorporated": true
  },
  {
    "name": "Maysville",
    "population": 1087,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.817590903623994,
      "longitude": -97.40480651855471
    },
    "incorporated": true
  },
  {
    "name": "Davis",
    "population": 2823,
    "county": "Garvin County",
    "gps_location": {
      "latitude": 34.50466840027586,
      "longitude": -97.11926971435547
    },
    "incorporated": true
  },
  {
    "name": "Ardmore",
    "population": 24847,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.172840518035535,
      "longitude": -97.14373291015626
    },
    "incorporated": true
  },
  {
    "name": "Healdton",
    "population": 2361,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.232620336071996,
      "longitude": -97.4882891845703
    },
    "incorporated": true
  },
  {
    "name": "Lone Grove",
    "population": 5190,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.173872039678955,
      "longitude": -97.26307250976562
    },
    "incorporated": true
  },
  {
    "name": "Gene Autry",
    "population": 154,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.283234412680066,
      "longitude": -97.0383433227539
    },
    "incorporated": true
  },
  {
    "name": "Wilson",
    "population": 1606,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.160539361958556,
      "longitude": -97.42028808593749
    },
    "incorporated": true
  },
  {
    "name": "Springer",
    "population": 703,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.313994199106865,
      "longitude": -97.14351470947265
    },
    "incorporated": true
  },
  {
    "name": "Tatums",
    "population": 118,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.48097891265736,
      "longitude": -97.46257202148438
    },
    "incorporated": true
  },
  {
    "name": "Dickson",
    "population": 1379,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.18524459190259,
      "longitude": -96.98158569335938
    },
    "incorporated": true
  },
  {
    "name": "Ratliff City",
    "population": 64,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.44888268573818,
      "longitude": -97.509013671875
    },
    "incorporated": true
  },
  {
    "name": "Fox",
    "population": 92,
    "county": "Carter County",
    "gps_location": {
      "latitude": 34.362550701430784,
      "longitude": -97.49205993652345
    },
    "incorporated": false
  },
  {
    "name": "Grady (Jefferson County)",
    "population": null,
    "county": "Jefferson County",
    "gps_location": {
      "latitude": 34.0203,
      "longitude": -97.6656
    },
    "incorporated": false
  },
  {
    "name": "Marietta",
    "population": 2719,
    "county": "Love County",
    "gps_location": {
      "latitude": 33.937,
      "longitude": -97.1167
    },
    "incorporated": true
  },
  {
    "name": "Leon",
    "population": 74,
    "county": "Love County",
    "gps_location": {
      "latitude": 33.8772,
      "longitude": -97.4292
    },
    "incorporated": true
  },
  {
    "name": "Thackerville",
    "population": 400,
    "county": "Love County",
    "gps_location": {
      "latitude": 33.7935,
      "longitude": -97.1422
    },
    "incorporated": true
  },
  {
    "name": "Burneyville",
    "population": 815,
    "county": "Love County",
    "gps_location": {
      "latitude": 33.9044,
      "longitude": -97.2903
    },
    "incorporated": false
  },
  {
    "name": "Overbrook",
    "population": null,
    "county": "Love County",
    "gps_location": {
      "latitude": 34.0672,
      "longitude": -97.1411
    },
    "incorporated": false
  }
];
  
  export { cityTownData };
