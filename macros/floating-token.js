let elevation = 10; // Example elevation value, you can replace this with the actual elevation value

let scaleFactor = 1 + elevation * 0.1; // Adjust the scale factor based on elevation
let shadowDistance = 65 + elevation * 5; // Adjust the shadow distance based on elevation

let params = [
    {
      "filterType": "transform",
      "filterId": "dodgeStance",
      "padding": 5,
      "animated": {
        "translationX": {
          "animType": "sinOscillation",
          "val1": -0.0000125,
          "val2": 0.0000125,
          "loopDuration": 1400
        },
        "translationY": {
          "animType": "cosOscillation",
          "val1": -0.0035,
          "val2": 0.0035,
          "loopDuration": 1400
        },
        "scaleX": {
          "animType": "static",
          "val1": scaleFactor,
          "val2": scaleFactor
        },
        "scaleY": {
          "animType": "static",
          "val1": scaleFactor,
          "val2": scaleFactor
        }
      },
      "rank": 10004,
      "enabled": true
    },
    {
      "filterType": "zapshadow",
      "filterId": "myZap",
      "alphaTolerance": 0.45,
      "rank": 2,
      "enabled": true
    },
    {
      "filterType": "shadow",
      "filterId": "myShadow",
      "rotation": 35,
      "blur": 9,
      "quality": 10,
      "distance": shadowDistance,
      "alpha": 0.5,
      "padding": 10,
      "shadowOnly": false,
      "color": 0,
      "zOrder": 6000,
      "animated": {
        "blur": {
          "active": false,
          "loopDuration": 1,
          "animType": "syncCosOscillation",
          "val1": 2,
          "val2": 4
        },
        "rotation": {
          "active": false,
          "loopDuration": 100,
          "animType": "syncSinOscillation",
          "val1": 33,
          "val2": 37
        }
      },
      "rank": 10002,
      "enabled": true
    }
  ];
  
  await TokenMagic.addUpdateFiltersOnSelected(params);