var pages = [
    [
        0
    ],
    [      
        5506.86,6339.86,6739.86,8188.7,8700.46,9090.63,9220.11
    ],
    [
        14568.24,15279.34,15704.09,16100,16600.77,17534.52,18050.86,18444.03,18972.27,19350.61
    ],
    [
        20968.1,21480.44,21900.53,22291.87,23406.14,23950.21
    ],
    [
        29521.55,30100.31,30331.06,30760.89,31250.06,31400.81,33016.08,33500.83,33644.32,33849.07,34600
    ],
    [        
        36612.19,37523.28,37726.45,38100.62,38234.38,40106.71,40711.46,40914.63,41423.15,42483.8,42886.97
    ],
    [
        48152.24,48650,49000.17,49400.82,49957.92,51870.25,52550.01,52879.76,53512.76,54450.51,54953.68
    ],
    [
        56197.77,56994.43,57533.94,58046.62,58652.96,59611.03,60150.78,60542.44,60947.2
    ],
    [
        66788.89,67083.64,67658.72,68000.89,68250.79,68348.54,69876.07,70280.24,70689.75,71112.92,71216.41
    ], 
    [
        73188.74,73391.91,74103.01,74556.18,76480.1,77000.27,77509.92,77900.26,78200.02
    ],   
    [
        83184.71,83600.88,84380.56,84750.73,86049.4,86454.16,87162.08,87700.01
    ],
    [        
        89442.34,90300,91413.09,92100.16,93282.26,94100.18,95029.52,95850.86,96400.2
    ],
    [
        102060.79,102203.96,102871.88,103175.05,103450.95,103581.39,104944.21,105347.38,105756.89,106160.06
    ],
    [
        108133.98,108750.74,109982.83,110706.9,110999.24,112156.75,112559.92,113066.26,113391.33,113819.57
    ],
    [
        119714.67,120450.01,121230.52,121620.03,122263.52,122468.28,123635.85,124221.88,124648.53,124980.87,125258.04,125461.21
    ],
    [
        127106.84,127998.25,128547.17,130317.92,132187.09,132850.84,132995.01
    ],
    [
        138565.63,139350.04,139900.79,140105.96,140432.62,141978.88,142284.63,142800.39,143194.73,143450.9
    ],
    [
       144945.16,145454.09,145856.26,146692.42,147150.18
    ],
    [
       152747.89,153271.96,153901.79,154400.96,154500.71,155855.39,156378.88,156700.22,156989.39,157251.56,157297.9,158258.99,158544.75
    ],
    [
       160081.33,160485.5,160957.98,161118.49,161542.57,161650.84
    ],
    [
       166887.52,167717.35,168200.11,168426.86,169874.12,170377.29,170700.32,170900.49,171397.31,171899.48,172104.55,172308.99
    ],
    [
       174201.64,174404.81,174909.57,175214.32,177289.83,178631.75,179435.5
    ],
    [
       184706.53,185100.7,185335.36,186452.79,186976.28,187009.13,188424.54,188950.13
    ],
    [
       190475.56,191104.8,191692.41,192933.92,193400.4
    ],
    [
       198703.95,199311.28,199837.94,200150.7,200347.45,201690.54,202196.3,202601.64,202806.39,203215.32,203437.81,204372.39,204576.56
    ]
];
var HighlightText = [
  [
        0
    ],
    [      
        5506.86 -750,6339.86-800,6739.86-750,8188.7-700,8700.46-600,9090.63-750,9220.11-750
    ],
    [
        14568.24-600,15279.34-650,15704.09-650,16100-750,16600.77-200,17534.52-550,18050.86-850,18444.03-800,18972.27-800,19350.61-750
    ],
    [
        20968.1-600,21480.44-600,21900.53-600,22291.87-600,23406.14-650,23950.21-600
    ],
    [
        29521.55-600,30100.31-750,30331.06-600,30760.89-700,31250.06-750,31400.81-650,33016.08-600,33500.83-750,33644.32-700,33849.07-700,34600-700
    ],
    [        
        36612.19-600,37523.28-750,37726.45-700,38100.62-800,38234.38-750,40106.71-750,40711.46-750,40914.63-700,41423.15-700,42483.8-700,42886.97-700
    ],
    [
        48152.24-600,48650-700,49000.17-700,49400.82-700,49957.92-750,51870.25-700,52550.01-700,52879.76-700,53512.76-700,54450.51-700,54953.68-750
    ],
    [
        56197.77-750,56994.43-750,57533.94-850,58046.62-600,58652.96-600,59611.03-600,60150.78-600,60542.44-600,60947.2-600
    ],
    [
        66788.89-900,67083.64-800,67658.72-600,68000.89-750,68250.79-750,68348.54-600,69876.07-600,70280.24-750,70689.75-800,71112.92-800,71216.41-600
    ], 
    [
        73188.74-900,73391.91-750,74103.01-600,74556.18-600,76480.1-700,77000.27-700,77509.92-700,77900.26-900,78200.02-900
    ],   
    [
        83184.71-600,83600.88-750,84380.56-850,84750.73-850,86049.4-700,86454.16-700,87162.08-700,87700.01-700
    ],
    [        
        89442.34-750,90300-850,91413.09-750,92100.16-850,93282.26-750,94100.18-850,95029.52-750,95850.86-900,96400.2-750
    ],
    [
        102060.79-600,102203.96-650,102871.88-600,103175.05-600,103450.95-650,103581.39-600,104944.21-700,105347.38-600,105756.89-620,106160.06-600
    ],
    [
        108133.98-600,108750.74-600,109982.83-950,110706.9-750,110999.24-600,112156.75-750,112559.92-750,113066.26-850,113391.33-750,113819.57-750
    ],
    [
        119714.67-750,120450.01-750,121230.52-750,121620.03-750,122263.52-800,122468.28-800,123635.85-750,124221.88-750,124648.53-850,124980.87-850,125258.04-800,125461.21-800
    ],
    [
        127106.84-700,127998.25-700,128547.17-700,130317.92-700,132187.09-700,132850.84-700,132995.01-650
    ],
    [
        138565.63-800,139350.04-750,139900.79-800,140105.96-750,140432.62-600,141978.88-600,142284.63-700,142800.39-780,143194.73-750,143450.9-700
    ],
    [
       144945.16-750,145454.09-750,145856.26-650,146692.42-750,147150.18-700
    ],
    [
       152747.89-900,153271.96-700,153901.79-700,154400.96-700,154500.71-600,155855.39-700,156378.88-650,156700.22-650,156989.39-650,157251.56-650,157297.9-500,158258.99-650,158544.75-650
    ],
    [
       160081.33-600,160485.5-600,160957.98-650,161118.49-500,161542.57-650,161650.84-550
    ],
    [
       166887.52-800,167717.35-750,168200.11-800,168426.86-750,169874.12-750,170377.29-650,170700.32-600,170900.49-650,171397.31-650,171899.48-750,172104.55-700,172308.99-650
    ],
    [
       174201.64-900,174404.81-600,174909.57-550,175214.32-550,177289.83-1150,178631.75-750,179435.5-750
    ],
    [
       184706.53-800,185100.7-500,185335.36-400,186452.79-600,186976.28-700,187009.13-500,188424.54-700,188950.13-800
    ],
    [
       190475.56-700,191104.8-700,191692.41-700,192933.92-700,193400.4-550
    ],
    [
       198703.95-800,199311.28-750,199837.94-750,200150.7-750,200347.45-750,201690.54-750,202196.3-750,202601.64-750,202806.39-750,203215.32-750,203437.81-750,204372.39-750,204576.56-650
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
var sec=2000;
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
              "max": 8920.11  
          }
      },
      {
          "page": 5,
          "range": {
              "min":  9020.11+sec,
              "max":  23731.21
          }
      },
      {
          "page": 7,
          "range": {
              "min": 24731.21+sec,
              "max": 42686.97
          }
      },
      {
          "page": 9,
          "range": {
              "min": 43686.97+sec,
              "max": 60647.2
          }
      },
      {
          "page": 11,
          "range": {
              "min": 61647.2+sec,
              "max": 77821.02
          }
      }, 
      {
          "page": 13,
          "range": {
              "min": 78821.02+sec,
              "max": 95842.2
          }
    
      },
     { "page": 15,
          "range": { 
              "min": 96842.2+sec,
              "max": 113619.57
          }
      },
      {
      	 "page": 17,
          "range": {
              "min": 114619.57+sec,
              "max": 132695.01
          }
      },
      {

      	 "page": 19,
          "range": {
              "min": 133695.01+sec ,
              "max": 146997.18
          }
      },
       {

         "page": 21,
          "range": {
              "min": 147997.18+sec,
              "max": 161523.84
          }
      },
       {

         "page": 23,
          "range": {
              "min": 162523.84+sec,
              "max": 178935.5
          }
      },
       {

         "page": 25,
          "range": {
              "min": 179935.5+sec,
              "max": 193157.4
          }
      },
       
      {

      	 "page": 26,
          "range": {
              "min": 194157.4+sec,
              "max": 204576.56
          }
           },
       
      {

      	 "page": 28,
          "range": {
              "min": 205576.56+sec,
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
          "page": 2, "seekTime": 1800
      }, {
          "page": 3, "seekTime": 1500
      }, {
          "page": 4, "seekTime": 9220.11
      }, {
          "page": 5, "seekTime": 9220.11
      }, {
          "page": 6, "seekTime": 24431.21
      }, {
          "page": 7, "seekTime": 24431.21
      }, {
          "page": 8, "seekTime": 43386.97
      }, {
          "page": 9, "seekTime": 43386.97
      }, {
          "page": 10, "seekTime": 61347.2
      }, {
          "page": 11, "seekTime": 61347.2
      }, {
          "page": 12, "seekTime":  78521.02
      }, {
          "page": 13, "seekTime":  78521.02
      }, {
          "page": 14, "seekTime":  96542.2
      }, {
          "page": 15, "seekTime":  96542.2
      }, {
          "page": 16, "seekTime": 114319.57
      }, {
          "page": 17, "seekTime": 114319.57
      }, {
          "page": 18, "seekTime": 133395.01
      },       {
          "page": 19, "seekTime": 133395.01
      }, {
          "page": 20, "seekTime": 147697.18
      },  {
          "page": 21, "seekTime": 147697.18
      },  {
          "page": 22, "seekTime": 162223.84
      },  {
          "page": 23, "seekTime": 162223.84
      },  {
          "page": 24, "seekTime": 179635.5
      }, {
          "page": 25, "seekTime": 179635.5
      }, 
      {
          "page": 26, "seekTime": 195157.4
       }, 
      {
          "page": 27, "seekTime": 0
      
       },{
          "page": 27, "seekTime": 0
      }
     
]