var pages = [
    [
        0
    ],
    [      
        5639.45,6150.42,6234.25,6600.89,7050.78,7348.68,7550.55,8240.15,8541.97,8843.84,9251.79,9633.39 
     ],
    [
        12434.07,12945.98,13340.82,13801.53,14253.63,14348.35,14952.17,15390.98,15991.42  
    ],
    [
        18999.55,19391.49,19790.39,20201.2,20999.66,21394.51,21789.22
    ],
    [
        24984.45,25386.27,25795.26,25881.1,26095.81,26679.55,27297.41,27496.16,27595.23,27779.94
    ],
    [
        31577.95,31963.71,32598.47,32980.33
    ],
    [
        36719.24,37101.37,37382.99,37694.99,37636.7,38209.28
    ],
    [
        41591.87,42093.81,42395.65,42597.46,42985.16,43798.38,44286,44700.15,45098.18
    ],
    [
        48757.11,49285.96,49400.64,49795.45,50197.32,50608.23,51106.88
    ], 
    [
        54300.03,54599.92,54923.92,55325.57,56131.21,56499.74,56827.77,57222.63,57617.22
    ],   
    [
        61114.46,61493.71,61894.29,62082.99
    ],
    [        
        65626.34,65898.14,66315.84,66697.73
    ],
    [
        70051.78,70553.62,70835.53,71166.26,71654.44,72068.7,72357.7,72652.52
    ],
    [
        76762.44,77620.12,77851.98
    ],
    [
       81602.52,82001.37,82290.16,82592,82986.75,83401.41,84203.1,84597.89,84992.65,85307.5,85752.72
    ],
    [
        89996.32,90182.05,90503.9,90921.79,91316.58,91804.34,92222.38
    ],
    [
        95349.01,95737.95,96100.77,96341.75,96743.49,97534.91,98345.68,98547.55
    ],
    [
        103150.94,103479.98,103791.97,103983.64,104385.52,104687.41,105880.58,106475.35
    ],
    [
        109617.67,110215.66,110710.85,110905.48,111219.82,111920.2,112314.42,112709.21,113020.04,113506.52,114009.55,114406.17
    ],
    [
        118206.71,118705.5,118891.36,119309.31,119596.95,120406.36,120708.29,121106.25,121593.88
    ],
    [
        125231.76,125640.18,125934.95,126509.66,126725.6
    ],
    [
        130688.83,131100.62,131399.58,131594.34,132383.89,132885.77,133584.22,134187.3,134400.83,134891.72
    ],

    [
        138852.15,139204,139586.05,139900.6,140620.32,141015.07,141409.93,141704.95,142219.47,142600.24
    ],
    [
       146536.32,147138.17,147700.99,147904.79,148309.51,149044.11,149439.21,149833.58,150135.45
    ],
    [
      154087.59,154482.33,154784.23,155085.99,155686.79,155988.41,156479.87,156874,157779.63,158174.39,158569.74,158987.41,159281.82,159576.6
    ]
];
var HighlightText = [
   [
        0
    ],
    [      
        5639.45-600,5848.42-300,6034.25-300,6448.89-350,6750.78-400,7148.68-500,7450.55-400,8240.15-600,8541.97-550,8843.84-550,9331.79-700,9633.39-650 
     ],
    [
        12444.07-600,12745.98-300,13140.82-300,13651.53-300,13953.63-350,14348.35-300,14952.17-300,15346.68-300,15741.42-300  
    ],
    [
        18999.55-600,19281.49-300,19490.39-200,20001.2-500,20999.66-600,21394.51-450,21789.22-500
    ],
    [
        24984.45-1000,25286.27-600,25495.26-450,25681.1-500,26095.81-650,26679.55-500,27097.41-400,27396.16-500,27585.23-600,27979.94-600
    ],
    [
        31677.95-600,31863.71-300,32278.47-300,32580.33-300
    ],
    [
        36719.24-600,37001.37-500,37302.99-500,37604.99-600,37906.7-750,38209.28-750
    ],
    [
        41591.87-700,41893.81-400,42195.65-450,42497.46-600,42985.16-650,43798.38-600,44286-550,44700.15-600,45098.18-600
    ],
    [
        48797.11-600,49005.96-400,49400.64-500,49795.45-500,50097.32-500,50608.23-650,50906.88-600
    ], 
    [
        54320.03-600,54529.12-550,54923.92-550,55225.57-500,56131.21-600,56429.74-400,56827.77-500,57222.63-400,57617.22-500
    ],   
    [
        61114.46-600,61303.71-300,61814.29-450,62112.99-580
    ],
    [        
        65506.34-600,65808.14-450,66315.84-450,66597.73-450
    ],
    [
        70051.78-500,70353.62-400,70655.53-350,71166.26-650,71654.44-400,72068.7-400,72257.7-400,72652.52-500
    ],
    [
        76762.44-600,77270.12-400,77551.98-300
    ],
    [
       81602.52-600,81901.37-400,82090.16-300,82392-400,82786.75-400,83201.41-400,84203.1-400,84597.89-400,84992.65-550,85387.5-750,85802.72-750
    ],
    [
        90016.32-600,90222.05-550,90503.9-450,90921.79-600,91316.58-800,91804.34-600,92222.38-650
    ],  
    [
        95349.0-600,95537.95-250,95839.77-200,96141.75-250,96443.49-250,97534.91-400,98045.68-300,98347.55-200
    ],
    [
        103090.94-600,103279.98-300,103491.97-200,103883.64-300,104185.52-200,104487.41-200,105880.58-400,106275.35-400
    ],
    [
        109617.67-600,110015.66-300,110410.85-300,110805.48-500,111219.82-600,111920.2-400,112314.42-400,112709.21-750,113220.04-800,113506.52-800,114009.55-500,114406.17-500
    ],
    [
        118296.71-600,118505.5-300,118691.36-300,119109.31-300,119596.95-400,120406.36-500,120708.29-350,121106.25-500,121593.88-550
    ],
    [
        125331.76-600,125540.18-350,125934.95-350,126329.66-350,126725.6-350
    ],
    [
        130688.83-600,130990.62-400,131199.58-400,131594.34-400,132383.89-500,132685.77-300,133684.22-500,133987.3-350,134400.83-400,134891.72-500
    ],

    [
        138902.15-600,139204-400,139506.05-350,139900.6-350,140620.32-400,141015.07-300,141409.93-500,141804.95-600,142219.47-650,142710.24-700
    ],
    [
       146536.32-600,146838.17-250,147139.99-250,147534.79-250,147929.51-300,149044.11-500,149439.21-400,149833.58-400,150135.45-400
    ],
    [
      154087.59-600,154482.33-650,154784.23-650,155085.99-750,155686.79-500,155988.41-500,156479.87-500,156874-500,157779.63-500,158174.39-500,158569.74-500,158987.41-650,159381.82-750,159776.6-700
    ]
];
// var flips = {
//     {
//         page: 1,
//         range: {min:3049.25,max: 5170.89}
//     }, {
//         page: 2,
//         range: {min:5170.89, max:14434.97}
//     }, {
//         page: 3,
//         range: {min:14434.97,max: 22875.81}
//     }, {
//         page: 4,
//         range: {min:22875.81,max: 31224.41}
//     }
// };
// var sec=2000;
var sec=800;
var flips = [
    {
        "page": 1,
        "range": {
            "min": 0,
            "max": 1800
        }
    },
      {
          "page": 3,
          "range": {
              "min": 1800,
              "max": 9733.39   
          }
      } ,
      {
          "page": 5,
          "range": {
              "min":  9833.39 +sec ,
              "max":  21889.22
          }
      },
      {
          "page": 7,
          "range": {
              "min": 21989.22+sec,
              "max": 32680.33
          }
      } ,
      {
          "page": 9,
          "range": {
              "min": 32780.33+sec,
              "max": 45198.18
          }
      },
     
      {
          "page": 11,
          "range": {
              "min": 45298.18+sec,
              "max": 57717.22
          }
      },     
      {
          "page": 13,
          "range": {
              "min": 57817.22+sec,
              "max": 66697.73
          }
    
      },     
     { "page": 15,
          "range": { 
              "min": 66797.73+sec,
              "max": 77651.98
          }
      },
      {
         "page": 17,
          "range": {
              "min": 77751.98+sec,
              "max": 92322.38 
          }
      },
      {

         "page": 19,
          "range": {
              "min": 92422.38+sec ,
              "max": 106375.35
          }
      },
       {

         "page": 21,
          "range": {
              "min": 106475.35+sec,
              "max": 121693.88
          }
      },
       {

         "page": 23,
          "range": {
              "min": 121793.88+sec,
              "max": 134991.72
          }
      },
       {

         "page": 25,
          "range": {
              "min": 135091.72+sec,
              "max": 150235.45
          }
      },
       
      {

         "page": 26,
          "range": {
              "min": 150335.45+sec,
              "max": 159876.6
          }
           },
       
      {

         "page": 28,
          "range": {
              "min": 160776.6,
              "max": "max"
          }
     }
];

var pageSeek = [
      {
          "page": 0, "seekTime": 0
      }, {
          "page": 1, "seekTime": 0
      }, {
          "page": 2, "seekTime": 7430.5
      }, {
          "page": 3, "seekTime": 7430.5
      },
       {
          "page": 4, "seekTime": 9633.39
      }, {
          "page": 5, "seekTime": 9633.39 
      }, {
          "page": 6, "seekTime":  21789.22
      }, {
          "page": 7, "seekTime":  21789.22
      }, {
          "page": 8, "seekTime": 32580.33
      }, {
          "page": 9, "seekTime": 32580.33
      }, {
          "page": 10, "seekTime": 45098.18
      }, {
          "page": 11, "seekTime": 45098.18
      }, {
          "page": 12, "seekTime": 57617.22
      }, {
          "page": 13, "seekTime": 57617.22
      }, {
          "page": 14, "seekTime": 66597.73
      }, {
          "page": 15, "seekTime": 66597.73
      }, {
          "page": 16, "seekTime": 77551.98
      }, {
          "page": 17, "seekTime": 77551.98
      }, {
          "page": 18, "seekTime": 92222.38 
      },       {
          "page": 19, "seekTime": 92222.38 
      }, {
          "page": 20, "seekTime": 106275.35
      },  {
          "page": 21, "seekTime": 106275.35
      },  {
          "page": 22, "seekTime": 121693.88
      },  {
          "page": 23, "seekTime": 121693.88
      },  {
          "page": 24, "seekTime": 134891.72
      }, {
          "page": 25, "seekTime": 134891.72
      }, 
      {
          "page": 26, "seekTime": 150135.45
       }, 
      {
          "page": 27, "seekTime": 0
      
       },{
          "page": 27, "seekTime": 0
      }
     
]