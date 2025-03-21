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
      "county": "Childress, Cottle, Hall, and Motley Counties",
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
      "county": "Hale and Lubbock Counties",
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
      "population": null,
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
    }
  ];
  
  export { cityTownData };
