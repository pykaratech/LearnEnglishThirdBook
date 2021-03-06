var pages = [
   [
        0
    ],
    [
        4951.16, 5433.02, 5699.09, 6344.08, 6646.12, 6824.08, 6976.12, 7551.38, 8009.55, 8341, 8541
    ],
    [
        9734.74, 10138.14, 10690.05, 10940.05, 11940.64, 12335.19, 12656.64, 12936.64
    ],
    [
        13844.22, 14448.35, 14749.89, 14859.89, 15002.11, 15287.91, 16049.93, 16455.87, 16654.15, 17350.79, 17895.76
    ],
    [
       19303.54,19904.76,20281.86,20401.86,21207.03,21602,22102.7,22182.7
    ],
    [
     23413.61,24009.84,24209.84,24754.54,25200.95 ,25300.95  
    ],
    [
        26755.48,27296.68,27566.68,27870.53,28570.53,28752.89,29092.89
    ],
    [
        30354.34,31260.01,31734.98,31854.98,32468.13,33088.54,33665.95,33865.95
    ],
    [
        35414.59,35716.4,36118.35,36412.86,36745.04,37527.6,37802.66,38417.03,38619.48,38994.02
    ],
    [
        40824.66,41203.7,41385.88,41623.66,42125.29,42223.79,42403.79,42722.39
    ],
    [
        44275.19,44561.67,44762.85,45761.44,46226.77,46480.99,46609.9,46758.97
    ],
    [
       48269.43,48764.48,48995.66,50266.57,50661.31,50839.09,51029.09
    ],
    [
        52818.98,53160.66,53322.25,53728.23,53903.11,54808.55,55410.32,55611.95,56067.1
    ],
    [
        
       57501.75,57920.03,58197.51,59111.23,59406.42
    ],
    [
        61157.9,61352.87,61904.46,62969.42,63324.16,63798.67,64153.14
    ],
    [
       65964.12,66552.19,66793.12,67668.7,68056.18,68356.18
    ],
    [
        
      70136.23,70488.55,70692.79,71135.28,71237.05,71524.26,72435.37,72629.89,73084.35,73226.66,73721.18
    ],
    [
        75523.85,75925.49,76189.25,76939.95,77218.5
    ],
    [
        78777.57,79289.23,80078.35,80588.96,81480.39,81680.39,82386.55,82586.55
    ],
    [
        84397.71,85004.56,85279.3,86092,86380.16
    ],
    [
        88143.61,88338.03,88993.15,89624.58,89736.22,89931.05,90744.06,91725.88,92004.15,92344.15
    ],
    [
        
       94041.16,94918.69,95405.06,96525.38,96943.47,97100.77,97290.77
    ],
    [
       99219.66,100008.82,100358.82,100519.88,100621.52,102005.87,102490.38,102898.8
    ],
    [
        104421.02,104815.94,105087.21,105212.08,105700.16
    ],
    [

        107815.8,108380.02, 108790.02, 109007.14, 110207.77, 110407.77, 110825.37, 110984.01, 111076.18, 111323.83
    ]
];

var HighlightText = [
    [
        0
    ],
    [
        4951.16-450, 5253.02-330, 5439.09-200, 5647.89-50, 6042.72-170, 6344.08-170, 6646.12-150, 7551.38-300, 7853.79-300, 8039.55-250, 8341-350
    ],
    [
        9734.74-350, 9943.17-200, 10338.14-200, 10640.05-180, 11940.64-350, 12149.3-300, 12335.19-150, 12636.64-200
    ],
    [
        13844.22-400, 14146.21-200, 14448.35-300, 14749.89-400, 15052.11-500, 15237.91-350, 16049.93-350, 16235.87-350, 16654.15-300, 17350.79-150, 17745.76-150
    ],
    [
       19303.54-400,19604.76-300,19907.12-250,20301.86-350,21207.03-300,21602-300,21811.25-300,22112.7-350
    ],
    [
       23413.61-400,23808.3-320,24109.84-330,24504.54-300,25015.28-350,25200.95-300  
    ],
    [
        26755.48-400,26964.19-150,27266.68-200,27661.6-200,27870.53,28264.77-150,28752.89-350
    ],
    [
        30354.34-400,30865.77-300,31260.01-300,31654.98-320,32468.13-300,32862.82-300,33048.54-300,33465.95-300
    ],
    [
        35414.59-400,35716.4-330,36018.35-330,36412.86-350,36715.04-380,37527.6-400,37922.66-450,38317.03-300,38619.48-300,38944.02-300
    ],
    [
        40824.66-400,41103.7-450,41405.88-450,41823.66-650,42125.29-500,42403.79-600,42613.14-500,42822.39-500
    ],
    [
        44275.19-400,44461.67-350,44762.85-350,45761.44-300,46156.77-400,46480.99-500,46759.9-500,46968.97-600
    ],
    [
       48269.43-450,48664.48-300,48965.66-200,50266.57-450,50661.31-450,51079.09-750,51473.55-800 
    ],
    [
        52718.98-300,53020.66-350,53322.25-400,53508.23-350,53903.11-400,54808.55-300,55110.32-300,55411.95-300,55807.1-300
    ],
    [
        
       57501.75-400,57920.03-400,58407.51-400,59011.23-400,59406.42-400
    ],
    [
        61157.9-400,61552.87-450,61854.46-300,62969.42-400,63364.16-400,63758.67-400,64153.14-450
    ],
    [
       65964.12-400,66452.19-300,66963.12-450,67868.7-750,68356.18-800,68750.74-800
    ],
    [
        
      70136.23-500,70438.55-650,70832.79-550,71135.28-650,71437.05-700,71924.26-900,72435.37-650,72829.89-650,73224.35-750,73526.66-750,73921.18-850
    ],
    [
        75523.85-400,75825.49-400,76429.25-550,76939.95-400,77218.5-400
    ],
    [
        78777.57-400,79289.23-450,80078.35-650,80588.96-600,81680.39-650,82191.54-850,82586.55-850,82980.61-950
    ],
    [
        84397.71-400,84884.56-400,85279.3-400,86092-550,86580.16-550
    ],
    [
        88143.61-400,88538.03-550,88863.15-350,89234.58-350,89536.22-450,89931.05-450,90744.06-300,91138.48-300,91765.88-300,92044.15-250
    ],
    [
        
       94041.16-600,94528.69-300,95225.06-450,96525.38-400,96943.47-650,97430.77-750,97756.49-850
    ],
    [
       99219.66-400,99614.67-300,100008.82-500,100519.88-750,100821.52-700,102005.87-400,102400.38-350,102818.8-400
    ],
    [
        104421.02-400,104815.94-400,105117.21-400,105512.08-650,106000.16-700
    ],
    [

        107815.8-300, 108117.52-300, 108420.02-300, 108907.14-450, 109906.05-400, 110207.77-450, 110625.37-650, 110904.01-650, 111206.18-800, 111623.83-850
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
var sec = 800;
var flips = [{
        "page": 1,
        "range": {
            "min": 0,
            "max": 1800
        }
    }, {
        "page": 3,
        "range": {
            "min": 1800,
            "max": 7041
        }
    }, {
        "page": 5,
        "range": {
            "min": 8441 + sec,
            "max": 17245.76
        }
     } ,
    {
        "page": 7,
        "range": {
            "min": 17245.76+ sec,
            "max": 25300.95
        }
    },
     {
        "page": 9,
        "range": {
            "min": 25400.95 + sec,
            "max": 33565.95
        }
    }, 
    {
        "page": 11,
        "range": {
            "min": 33665.95 + sec,
            "max": 42922.39
        }
    }, 
    {
        "page": 13,
        "range": {
            "min": 42900.99+ sec,
            "max": 51573.55 
        }

    }, 
    {
        "page": 15,
        "range": {
            "min": 51493.95  + sec,
            "max": 59506.42
        }
    }, 
    {
        "page": 17,
        "range": {
            "min": 59506.42 + sec,
            "max": 68850.74
        }
    }, 
    {

        "page": 19,
        "range": {
            // "min": 68950.74 + sec,
             "min": 68750.74 + sec,
            "max": 77318.5
        }
    },
    {

        "page": 21,
        "range": {
            "min": 77318.5 + sec,
            "max": 86680.16
        }
    }, 

    {

        "page": 23,
        "range": {
            "min": 86680.16 + sec,
            "max": 97856.49
        }
    },

    {

        "page": 25,
        "range": {
            "min": 97756.49 + sec,
            "max": 106100.16
        }
    },

    {

        "page": 26,
        "range": {
            "min": 106200.16 + sec,
            "max": 111723.83
        }
    },

    {

        "page": 28,
        "range": {
            "min": 112923.83 + sec,
            "max": "max"
        }
    }
];

var pageSeek = [{
        "page": 0,
        "seekTime": 0
    }, {
        "page": 1,
        "seekTime": 0
    }, {
        "page": 2,

        "seekTime": 4530.5
    }, {
        "page": 3,
        "seekTime": 4530.5
    }, {
        "page": 4,
        "seekTime": 8741
    }, {
        "page": 5,
        "seekTime": 8741    
    },
    {
        "page": 6,
        "seekTime": 18095.76
    }, {
        "page": 7,
        "seekTime": 18095.76
    }, {
        "page": 8,
        "seekTime": 25700.95  
    }, {
        "page": 9,
        "seekTime": 25700.95  
    }, {
        "page": 10,
        "seekTime": 34095.95
    }, {
        "page": 11,
        "seekTime": 34095.95
    }, {
        "page": 12,
        "seekTime": 43022.39
    }, {
        "page": 13,
        "seekTime": 43022.39
    }, {
        "page": 14,
        "seekTime": 51873.55
    }, {
        "page": 15,
        "seekTime": 51873.55
    }, {
        "page": 16,
        "seekTime": 59806.42
    }, {
        "page": 17,
        "seekTime": 59806.42
    }, {
        "page": 18,
        "seekTime": 68950.74
    }, {
        "page": 19,
        "seekTime": 68950.74
    }, {
        "page": 20,
        "seekTime": 77318.5
    }, {
        "page": 21,
        "seekTime": 77318.5
    }, {
        "page": 22,
        "seekTime": 86880.16
    }, {
        "page": 23,
        "seekTime": 86880.16
    }, {
        "page": 24,
        "seekTime": 97956.49
    }, {
        "page": 25,
        "seekTime": 97956.49
    }, {
        "page": 26,
        "seekTime": 106200.16
    }, {
        "page": 27,
        "seekTime": 0

    }, {
        "page": 27,
        "seekTime": 0
    }
]
