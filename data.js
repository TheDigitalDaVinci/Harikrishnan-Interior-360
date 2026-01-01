var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7452930272244132,
        "pitch": 0.30941013714038945,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.18132820280744966,
          "pitch": 0.07327161880084176,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": 0.28681186774109335,
          "pitch": 0.08390126921183239,
          "rotation": 1.5707963267948966,
          "target": "5-gf-bed"
        },
        {
          "yaw": -0.6163998669141524,
          "pitch": 0.06506214299903057,
          "rotation": 4.71238898038469,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0365274537667046,
        "pitch": 0.09395070079732193,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.8418421672332173,
          "pitch": 0.30480369225977455,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 1.9613970898678108,
          "pitch": 0.17953567594106445,
          "rotation": 0,
          "target": "2-courtyard"
        },
        {
          "yaw": 3.027392489912625,
          "pitch": 0.13189692279997445,
          "rotation": 0,
          "target": "5-gf-bed"
        },
        {
          "yaw": 0.7636908066626802,
          "pitch": 0.12166598807147899,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.353770056663853,
          "pitch": 0.1281564555523289,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.562729577040443,
        "pitch": 0.08927354560371015,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -2.9702243746116626,
          "pitch": 0.03507175005859153,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -2.1837264185826193,
          "pitch": -0.049657380850243626,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.7381321055542127,
          "pitch": -0.020627475764964487,
          "rotation": 4.71238898038469,
          "target": "5-gf-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.367838886252157,
          "pitch": 0.03209687033964492,
          "rotation": 1.5707963267948966,
          "target": "4-work-area"
        },
        {
          "yaw": 2.5034015995262155,
          "pitch": 0.13589254524565675,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5226995764313447,
          "pitch": 0.16730303846872552,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-bed",
      "name": "GF BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7845039612881308,
          "pitch": 0.035177775401393774,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": 0.36060879290374004,
          "pitch": 0.07946698188209567,
          "rotation": 1.5707963267948966,
          "target": "6-gf-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gf-bed",
      "name": "GF BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7769250108030858,
          "pitch": 0.08112854709959372,
          "rotation": 1.5707963267948966,
          "target": "5-gf-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-studio",
      "name": "Studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1569078984632473,
          "pitch": 0.09216451168340711,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bed-1",
      "name": "FF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5806745765024743,
          "pitch": 0.025463215524636595,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.032058961720265344,
          "pitch": 0.14803525265451256,
          "rotation": 1.5707963267948966,
          "target": "10-ff-bed-2"
        },
        {
          "yaw": -1.9357690128991862,
          "pitch": 0.07814618225207681,
          "rotation": 0,
          "target": "11-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.557611346974923,
          "pitch": 0.15578292480105205,
          "rotation": 0,
          "target": "9-ff-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2727730716416428,
          "pitch": 0.1747239241044234,
          "rotation": 0,
          "target": "7-studio"
        },
        {
          "yaw": 1.4979707789810828,
          "pitch": 0.20718811056503483,
          "rotation": 0,
          "target": "2-courtyard"
        },
        {
          "yaw": 2.9302429653750712,
          "pitch": 0.21461582012020486,
          "rotation": 1.5707963267948966,
          "target": "8-ff-bed-1"
        },
        {
          "yaw": 2.643141235393795,
          "pitch": 0.08614994402025644,
          "rotation": 0,
          "target": "9-ff-bed-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Harikrishnan's Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
