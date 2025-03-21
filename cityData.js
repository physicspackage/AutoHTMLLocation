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
    }
  ];
  
  export { cityTownData };
