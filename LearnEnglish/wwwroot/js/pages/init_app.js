
//--------------------- code for app_init starts here ---------------------
// block-1
var extLoaded = false;
var intLoaded = false;

var isIE = false;
var urlPath = window.location.pathname;
var arrTemp = urlPath.split('/');
var currentPage = arrTemp[arrTemp.length - 1];
var currentDir = arrTemp[arrTemp.length - 2];

function idrLoad() {
    idrLoaded = true;
    var bounds;
    var heights = new Array(160, 160, 160, 160, 160, 160, 160, 160, 160, 160);

    // var objTag = document.getElementById("svgImage");
    // objTag.addEventListener("load", function() {
    //     IDRViewer.makeNavBar(10, 3, 1125, 1125, 0, heights, '.jpg', bounds);
    //     document.getElementById("hide").remove();
    // }, false);
    //16 oct 2020
    IDRViewer.makeNavBar(10, 3, 1125, 1125, 0, heights, '.jpg', bounds);
    document.getElementById("hide").remove();
}
// block-1

// block-2
// Ensure that we're not replacing any onload events
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(function() {
 
    var pageNo = currentPage.substr(0, currentPage.indexOf('.'));
    pageNo = pageNo.toLowerCase();
    currentDir = currentDir.toLowerCase();
    if (currentDir == "grade3") {
        var f1 = [
            ['t1_1']
        ];
        load2(f1);
    } else if (currentDir == "welcomeback") {
        var f2 = [
            ['t4_2']
        ];
        var f3 = [
            ['tb_3']
        ];
        var f4 = [
            ['tf_4']
        ];

        if (pageNo == "welcomeback") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        }
    } else if (currentDir == "goodtoknow") {
        var f2 = [
            ['t4_2']
        ];

        var f3 = [
            ['ts_3']
        ];

        var f4 = [
            ['ti_4']
        ];

        if (pageNo == "goodtoknow") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        }
    } else if (currentDir == "wildanimals") {
        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1e_3']
        ];
        var f4 = [
            ['t1e_4']
        ];
        var f5 = [
            ['t2f_5']
        ];
        var f6 = [
            ['tf_6']
        ];
        var f7 = [
            ['tw_7']
        ];
        var f8 = [
            ['t1g_8']
        ];


        if (pageNo == "wildanimals") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        }
    } else if (currentDir == "opposites") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1h_3']
        ];
        var f4 = [
            ['t1b_4']
        ];
        var f5 = [
            ['t1a_5']
        ];

        var f6 = [
            ['tk_6']
        ];

        var f7 = [
            ['t1u_7']
        ];

        var f8 = [
            ['tr_8']
        ];


        if (pageNo == "opposites") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        }
    } else if (currentDir == "afterschool") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1e_3']
        ];
        var f4 = [
            ['t1c_4']
        ];
        var f5 = [
            ['tm_5']
        ];
        var f6 = [
            ['tr_6']
        ];
        var f7 = [
            ['t10_7']
        ];
        var f8 = [
            ['t1g_8']
        ];


        if (pageNo == "afterschool") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        }
    } else if (currentDir == "lunchtime") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1i_3']
        ];
        var f4 = [
            ['t1d_4']
        ];
        var f5 = [
            ['to_5']
        ];
        var f6 = [
            ['ty_6']
        ];
        var f7 = [
            ['t1n_7']
        ];
        var f8 = [
            ['t1m_8']
        ];


        if (pageNo == "lunchtime") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        }
    } else if (currentDir == "weather") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1b_3']
        ];
        var f4 = [
            ['t1b_4']
        ];
        var f5 = [
            ['t4_5']
        ];
        var f6 = [
            ['ti_6']
        ];
        var f7 = [
            ['t2f_7']
        ];
        var f8 = [
            ['tc_8']
        ];
        var f9 = [
            ['t1n_9']
        ];
        var f10 = [
            ['ts_10']
        ];


        if (pageNo == "weather") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        } else if (pageNo == "page7") {
            load2(f9);
        } else if (pageNo == "page8") {
            load2(f10);
        }
    } else if (currentDir == "partytime") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t1a_3']
        ];
        var f4 = [
            ['t1e_4']
        ];
        var f5 = [
            ['t4_5']
        ];
        var f6 = [
            ['t6_6']
        ];
        var f7 = [
            ['to_7']
        ];
        var f8 = [
            ['ts_8']
        ];
        var f9 = [
            ['t1i_9']
        ];
        var f10 = [
            ['t10_10']
        ];

        if (pageNo == "partytime") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        } else if (pageNo == "page7") {
            load2(f9);
        } else if (pageNo == "page8") {
            load2(f10);
        }
    } else if (currentDir == "everyday") {

        var f2 = [
            ['t6_2']
        ];
        var f3 = [
            ['t15_3']
        ];
        var f4 = [
            ['t15_4']
        ];
        var f5 = [
            ['t4_5']
        ];
        var f6 = [
            ['t6_6']
        ];
        var f7 = [
            ['tm_7']
        ];
        var f8 = [
            ['td_8']
        ];
        var f9 = [
            ['t16_9']
        ];
        var f10 = [
            ['t1p_10']
        ];
        if (pageNo == "everyday") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        } else if (pageNo == "page7") {
            load2(f9);
        } else if (pageNo == "page8") {
            load2(f10);
        }
    } else if (currentDir == "thehouse") {
        var f2 = [
            ['t4_2']
        ];
        var f3 = [
            ['t17_3']
        ];
        var f4 = [
            ['t1a_4']
        ];
        var f5 = [
            ['t3_5']
        ];
        var f6 = [
            ['t5_6']
        ];
        var f7 = [
            ['t1k_7']
        ];
        var f8 = [
            ['tv_8']
        ];
        var f9 = [
            ['ty_9']
        ];
        var f10 = [
            ['tr_10']
        ];


        if (pageNo == "thehouse") {
            load2(f2);
        } else if (pageNo == "index") {
            load2(f2);
        } else if (pageNo == "page1") {
            load2(f3);
        } else if (pageNo == "page2") {
            load2(f4);
        } else if (pageNo == "page3") {
            load2(f5);
        } else if (pageNo == "page4") {
            load2(f6);
        } else if (pageNo == "page5") {
            load2(f7);
        } else if (pageNo == "page6") {
            load2(f8);
        } else if (pageNo == "page7") {
            load2(f9);
        } else if (pageNo == "page8") {
            load2(f10);
        }
    }

});

function adjustWordSpacing(widths) {
    var i, allLinesDone = false;
    var isDone = [];
    var currentSpacing = [];
    var elements = [];

    // Initialise arrays
    for (i = 0; i < widths.length; i++) {
        elements[i] = document.getElementById(widths[i][0]);
        ///16 oct 2020
        if(elements[i] && elements[i]!="")
        {
        if (isIE) widths[i][1] = widths[i][1] * 4;
        currentSpacing[i] = Math.floor((widths[i][1] - elements[i].offsetWidth) / elements[i].innerHTML.match(/\s.|&nbsp;./g).length); //min
        if (isIE) currentSpacing[i] = Math.floor(currentSpacing[i] / 4);
        isDone[i] = false;
         }
    }

    while (!allLinesDone) {
        // Add each adjustment to the render queue without forcing a render
        for (i = 0; i < widths.length; i++) {
            if (!isDone[i]) {
                //16 oct 2020
              if(elements[i] && elements[i]!="")
              {
                elements[i].style.wordSpacing = currentSpacing[i] + 'px';
                 }
            }
        }

        allLinesDone = true;
        // If elements still need to be wider, add 1 to the word spacing
        for (i = 0; i < widths.length; i++) {
            if (!isDone[i] && currentSpacing[i] < 160) {
                if (elements[i].offsetWidth >= widths[i][1]) {
                    isDone[i] = true;
                } else {
                    currentSpacing[i]++;
                    allLinesDone = false;
                }
            }
        }
    }

    for (i = 0; i < widths.length; i++) {
         //16 oct 2020
      if(  elements[i] &&   elements[i]!="")
      {
        elements[i].style.wordSpacing = (currentSpacing[i] - 1) + 'px';
          }
    }
}
// block-2

function load1() {}

function load2(val) {
    var timeout = 100;
    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) timeout = 500;
    setTimeout(function() {
        adjustWordSpacing(val);
    }, timeout);
}

// block-3
if (extLoaded) {
    idrLoad();
} else {
    intLoaded = true;
}
// block-3

// module for play audio songs

function song_setIndex() {


    document.getElementById("playAudio_song1").style.display = 'inline';
    document.getElementById("playAudio_song1").style.zIndex = '4';
    document.getElementById("playAudio_song2").style.display = 'inline';
    document.getElementById("playAudio_song2").style.zIndex = '4';

}

function song_clearIndex() {
    document.getElementById("playAudio_song1").style.display = 'none';
    document.getElementById("playAudio_song1").style.zIndex = '1';
    document.getElementById("playAudio_song2").style.display = 'none';
    document.getElementById("playAudio_song2").style.zIndex = '1';
    document.getElementById("popup1").style.backgroundColor = 'white';

}

function popup1_BGcolorEmpty() {
    $('#popup1').css('background-color', 'transparent');
}


function viewAedioText(src) {

    document.getElementById("popup1").src = src;

    for (var i = 1; i <= 3; i++) {
        var linecount = $$("line_" + i);
        linecount.style.display = "inline";
        linecount.style.zIndex = 3;
        var lineTop = linecount.getAttribute('data-top');
        lineTop = Number(lineTop);
        if (i == 1) {

        } else {
            lineTop = lineTop + (10 * (i - 1));
            linecount.style.top = lineTop + "%";
        }
    }
    var txtbgColor = $$("txtbgColor");
    txtbgColor.style.display = "inline";
    txtbgColor.style.zIndex = 3;
}

function txtbgColor() {
    var txtbgColor = $$("txtbgColor");
    txtbgColor.style.display = "none";
    txtbgColor.style.zIndex = -1;
}

function viewAedioTextSong() {

    for (var i = 1; i <= 3; i++) {
        var linecount = $$("line_" + i);
        linecount.style.display = "inline";
        linecount.style.zIndex = 3;
        var lineTop = linecount.getAttribute('data-top');
        lineTop = Number(lineTop);
        if (i == 1) {

        } else {
            lineTop = lineTop + (10 * (i - 1));
            linecount.style.top = lineTop + "%";
        }
    }

    var txtbgColor = $$("txtbgColor");
    txtbgColor.style.display = "inline";
    txtbgColor.style.zIndex = 3;

}

function txtbgColorSong() {
    var txtbgColor = $$("txtbgColor");
    txtbgColor.style.display = "none";
    txtbgColor.style.zIndex = -1;

    for (var i = 1; i <= 3; i++) {
        var linecount = $$("line_" + i);
        linecount.style.display = "none";
    }
}
// module for play audio songs

// module to play videos
var videotimeOut = null;

function playvideo(src) {
    document.getElementById("video_1").style.display = "inline";
    document.getElementById("closeVideo").style.display = "inline";
    document.getElementById("video_1").style.zIndex = 4;
    document.getElementById("closeVideo").style.zIndex = 4;
    document.getElementById('divOverlay').style.zIndex = 3;

    var video = document.getElementById("video_1");
    videotimeOut = setTimeout(function() {
        video.src = src;
    }, 500);

}

function clsVideo() {
    clearTimeout(videotimeOut);
    var video = document.getElementById("video_1");
    video.pause();
    video.currentTime = 0;
    video.src = "";
    document.getElementById("video_1").style.display = "none";
    document.getElementById("closeVideo").style.display = "none";
    document.getElementById("video_1").style.zIndex = 2;
    document.getElementById("closeVideo").style.zIndex = 2;
    document.getElementById('divOverlay').style.zIndex = -1;
}
// module to play videos
//------------- code for app_init ends here -------------------------


//------------ code for Application Insights -----------------------

$.each($("input[type=button]"), function (key, value) {
    if (this != undefined) {
        $(this).on('click', function (evt) {
            var evntname = evt.currentTarget.type + "_" + evt.currentTarget.id,
                url = window.location.href;
            var evt = "Name: " + evntname + "; URL: " + url;
            appInsights.trackEvent(evt);
        });
    }
});

$.each($("a"), function (key, value) {
    if (this != undefined) {
        $(this).on('click', function (evt) {
            var evntname = "Anchor_" + evt.currentTarget.text,
                url = window.location.href;
            var evt = "Name: " + evntname + "; URL: " + url;
            appInsights.trackEvent(evt);
        });
    }
});

$.each($('[onclick]'), function (key, value) {
    if (this != undefined) {
        if ((this.nodeName == "INPUT" && this.type == 'button') || this.nodeName == "A") { } else {
            $(this).on('click', function (evt) {
                var evntname = evt.currentTarget.nodeName + "_" + evt.currentTarget.id,
                    url = window.location.href;
                var evt = "Name: " + evntname + "; URL: " + url;
                appInsights.trackEvent(evt);
            });
        }

    }
});

//------------ code for Application Insights -----------------------