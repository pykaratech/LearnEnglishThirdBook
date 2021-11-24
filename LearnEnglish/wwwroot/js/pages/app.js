
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
//browser detection scripts
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
var isIExplorer = /*@@cc_on!@@*/ false || !!document.documentMode; // At least IE6
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
clickHandler = 'click';
if (isIExplorer) {
    $("html").addClass("ie");
    $("html").addClass("ie" + document.documentMode);
    IEVersion = document.documentMode;
}

if (isEdge) {
    $("html").addClass("ie ieedge");
}

if (isSafari) {
    $("html").addClass("safari " + isiPhone());

}

var orientation = 'landscape';

function detectIPadOrientation() {
    if (orientation == 0) {
        orientation = 'portrait';
    } else if (orientation == 90) {
        orientation = 'landscape';
    } else if (orientation == -90) {
        orientation = 'landscape';
    } else if (orientation == 180) {
        orientation = 'portrait';
    }

}

function setOrientation() {
    orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
}
setOrientation();
window.onorientationchange = detectIPadOrientation;


function isiPhone() {
    if (navigator.platform.indexOf("iPhone") != -1)
        return 'iphone';
    if (navigator.platform.indexOf("iPod") != -1)
        return 'ipod';
    if (navigator.platform.indexOf("iPad") != -1)
        return 'ipad';
}


(function(factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // CommonJS
            factory(require('jquery'));
        } else {
            // Browser globals
            factory(jQuery);
        }
    }


    (function($) {

        var pluses = /\+/g;


        function encode(s) {
            return config.raw ? s : encodeURIComponent(s);
        }

        function decode(s) {
            return config.raw ? s : decodeURIComponent(s);
        }

        function stringifyCookieValue(value) {
            return encode(config.json ? JSON.stringify(value) : String(value));
        }

        function parseCookieValue(s) {
            if (s.indexOf('"') === 0) {
                // This is a quoted cookie as according to RFC2068, unescape...
                s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            }

            try {
                // Replace server-side written pluses with spaces.
                // If we can't decode the cookie, ignore it, it's unusable.
                // If we can't parse the cookie, ignore it, it's unusable.
                s = decodeURIComponent(s.replace(pluses, ' '));
                return config.json ? JSON.parse(s) : s;
            } catch (e) {}
        }

        function read(s, converter) {
            var value = config.raw ? s : parseCookieValue(s);
            return $.isFunction(converter) ? converter(value) : value;
        }

        var config = $.cookie = function(key, value, options) {

            // Write

            if (value !== undefined && !$.isFunction(value)) {
                options = $.extend({}, config.defaults, options);

                if (typeof options.expires === 'number') {
                    var days = options.expires,
                        t = options.expires = new Date();
                    t.setTime(+t + days * 864e+5);
                }

                return (document.cookie = [
                    encode(key), '=', stringifyCookieValue(value),
                    options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                    options.path ? '; path=' + options.path : '',
                    options.domain ? '; domain=' + options.domain : '',
                    options.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            var result = key ? undefined : {};

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            var cookies = document.cookie ? document.cookie.split('; ') : [];

            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split('=');
                var name = decode(parts.shift());
                var cookie = parts.join('=');

                if (key && key === name) {
                    // If second argument (value) is a function it's a converter...
                    result = read(cookie, value);
                    break;
                }

                // Prevent storing a cookie that we couldn't decode.
                if (!key && (cookie = read(cookie)) !== undefined) {
                    result[name] = cookie;
                }
            }

            return result;
        };

        config.defaults = {};

        $.removeCookie = function(key, options) {
            if ($.cookie(key) === undefined) {
                return false;
            }

            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, {
                expires: -1
            }));
            return !$.cookie(key);
        };

    }));

//------------ code for Application Insights -----------------------
var appInsights = window.appInsights || function (config) {
    function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = "AuthenticatedUserContext", h = "start", c = "stop", l = "Track", a = l + "Event", v = l + "Page", y = u.createElement(o), r, f; y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(y); try { t.cookie = u.cookie } catch (p) { } for (t.queue = [], t.version = "1.0", r = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; r.length;) i("track" + r.pop()); return i("set" + s), i("clear" + s), i(h + a), i(c + a), i(h + v), i(c + v), i("flush"), config.disableExceptionTracking || (r = "onerror", i("_" + r), f = e[r], e[r] = function (config, i, u, e, o) { var s = f && f(config, i, u, e, o); return s !== !0 && t["_" + r](config, i, u, e, o), s }), t
}({
    instrumentationKey: "524cd669-32d5-4f89-bcce-727a8209a0f4"
});

window.appInsights = appInsights;
appInsights.trackPageView();
//------------ code for Application Insights End -----------------------

var documentId = $('body').data('id');

$(document).ready(function() {
    licenseId = $.cookie("licenseId");

});

document.addEventListener('touchstart', function(e) {
    storeDocumentData();
}, false);
document.addEventListener('click', function(e) {
    storeDocumentData();
}, false);

$(function() {
    $(document).on('click', '.tick', function() {
        $(this).toggleClass('ticked');
    });
    $('#resetBtn').on('click', function() {
        resetForm();
    });
    documentId = $('body').data('id');
    loadDocumentData();
    $('.jump').keyup(function(e) {
        if ($(this).val().length == $(this).attr('maxlength')) {
            var ntabindex = parseInt($(this).attr('tabindex'));
            ntabindex++;
            $('input[tabindex=' + ntabindex + ']').focus();
        }
    })

});

$(document).on('click', '#leftSide,#rightSide', function(event) {

    closeAllPopups();
});


function loadDocumentData() {

    $('input[type=text]').each(function(i, e) {
        var storedValue = localStorage.getItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'));
        $(e).val(storedValue);
    });
    $('textarea').each(function(i, e) {
        var storedValue = localStorage.getItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'));
        $(e).val(storedValue);
    });
}

function resetForm() {
    $('input[type=text]').each(function(i, e) {
        $(e).val('');
    });
    $('textarea').each(function(i, e) {
        $(e).val('');
    });
    $('input[type=checkbox').each(function(i, e) {
        $(e).prop('checked', false);
    });
}

function storeDocumentData() {

    $('input[type=text]').each(function(i, e) {
        localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).val());
    });
    $('textarea').each(function(i, e) {
        localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).val());
    });
    $('input[type=checkbox').each(function(i, e) {
        localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).prop('checked'));
    });
}

function $$(seletor) {
    return document.getElementById(seletor);
}

var currentAudio = 0;
var jplayerAudioId = $("#jquery_jplayer_1 audio")[0] ? $("#jquery_jplayer_1 audio")[0].id : '';
var audioPlayerElement = $$(jplayerAudioId);
$(document).on('click', '.label,.label_img,.labelSong,.label_1', function() {
     try {// application Insights
        var evntname = "Media-Label-Seek_" + this.dataset.seektimestart + '_' + this.dataset.seektimeend,
            url = window.location.href;
        var evt = "Name: " + evntname + "; URL: " + url;
        appInsights.trackEvent(evt);
    } catch (e) { }

    var seekTime = $(this).data('seektimestart');

    var repeatSeekTime = $(this).data('repeattimestart');
    if (repeatSeekTime && repeatSeekTime < audioPlayerElement.currentTime) {
        audioPlayerElement.currentTime = ($(this).data('rhymes') != null) ? parseInt(repeatSeekTime) + 0.9 : repeatSeekTime;
    } else {
        audioPlayerElement.currentTime = ($(this).data('rhymes') != null) ? parseInt(seekTime) + 0.9 : seekTime;
    }

});

$(document).on('click', '.LearnNew_Words,.LearnNew_Rap', function (e) {
    
    try {// application Insights
        
        var evntname = e.currentTarget.id,
            url = window.location.href,
            evetclass = '';
        var get_evetclass = e.currentTarget.className;

        if (get_evetclass.indexOf('LearnNew_Words') >= 0) {
            evetclass = 'LearnNew_Words';
        } else if (get_evetclass.indexOf('LearnNew_Rap') >= 0) {
            evetclass = 'LearnNew_Rap';
        }

        var evt = "Name: " + evntname + '; ' + evetclass + "; URL: " + url;
        appInsights.trackEvent(evt);
    } catch (e) { }

});


var currentAudioId;


function playAudio(a) {
    currentAudioId = a.attributes.name.value;
    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            // $(this).jPlayer("setMedia", {
            //      mp3:"audio/1_1.mp3",
            //       oga:"audio/1_1.ogg"

            // });
        },
        swfPath: "lib",
        volume: 100,
        supplied: "m4a, oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });

    var sec = new Number();
    var min = new Number();
    var id = a.id;

    $(".label").removeClass('active');
    $(".label_img").removeClass('active');
    $(".labelSong").removeClass('active');
    $(".label_1").removeClass('active');

    audioOverlay(a.getAttribute('data-popupid'));
    audioPlayerElement = $$($("#jquery_jplayer_1 audio")[0].id);
    var randomId = '';
    if (isIExplorer) {
        randomId = "?id=" + Math.random();
    }
    
    $("#jquery_jplayer_1").jPlayer({
        supplied: "m4a, oga, mp3"
    }).jPlayer("setMedia", {
        mp3: a.getAttribute('data-audio-src') + ".mp3" + randomId,
        oga: a.getAttribute('data-audio-src') + ".ogg" + randomId
    });
    $("#jquery_jplayer_1").jPlayer("play", 0);

    if (a.getAttribute('data-audio-highlight')) {
        currentAudio = 1;
    } else {
        currentAudio = 0;
    }
    if (currentAudio == 1) {

        set_active();
    }

}

function set_active() {
    setTimeout(function() {
        if (currentAudioId != 'circle' && currentAudioId != 'point') {
            if (currentAudioId == 'playSong') {
                $(".labelSong").addClass('active');
            } else if (currentAudioId == 'label_1') {
                $(".label_1").addClass('active');
            } else {
                $(".label").addClass('active');
                $(".label_img").addClass('active');

            }
        }

    }, 200);
}



set_interval();

function set_interval() {
    setInterval(function() {
        highlightText();
        highlightTextTime();
    }, 200);
}

function highlightTextTime() {

    if (audioPlayerElement != null) {
        sec = Math.floor(audioPlayerElement.currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;
        $("#jplayer_total_time").html(min + ":" + sec);

        if (audioPlayerElement.duration == audioPlayerElement.currentTime) {
            audioPlayerElement.pause();
            audioPlayerElement.currentTime = 0;
            $("#jplayer_total_time").html("00:00");
        }
    }

}

var seektime;
$(document).on('click', '#audio', function(event) {
    highlightText();
    highlightTextTime();
});

function highlightText() {

    var song_ChName = $$("playAudio_song1");
    song_ChName = song_ChName.getAttribute('data-audio-name');
    if (song_ChName == null) {
        song_ChName = 'line_';
    }
    var highlightsong = '.active.label';
    if (currentAudioId == 'circle') {
        highlightsong = '.label_circle';
    } else if (currentAudioId == 'point') {
        highlightsong = '.label_point';
    } else if (currentAudioId == 'playSong') {
        highlightsong = '.labelSong';
    } else if (currentAudioId == 'label_1') {
        highlightsong = '.label_1';
    }

    resetHighlights();

    switch (currentAudio) {


        case 0:
            break;
        case 1:
            $.each($(highlightsong), function(index, val) {

                var val_className = val.className;
                if (audioPlayerElement.duration == audioPlayerElement.currentTime && val_className.indexOf("songText") > -1) {
                    var songLinecount = $$("txtbgColor");
                    songLinecount = songLinecount.getAttribute('data-seektimestart');

                    songLinecount = Number(songLinecount);

                    for (var i = 1; i <= songLinecount; i++) {
                        var linecount = $$(song_ChName + i);
                        linecount.style.display = "inline";
                        linecount.style.zIndex = 3;
                        var lineTop = linecount.getAttribute('data-top');
                          // if (isiPhone() === 'ipad') {
                            //For mobile and desktopvise ipad compatibility(23-09-2020)
                        var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                            if(isIOS){

                            if (orientation == 0) {

                                lineTop = lineTop - 24.5;
                                lineTop = Number(lineTop);
                                if (i == 1) {
                                    linecount.style.top = lineTop + "%";
                                    linecount.style.color = "black";
                                    audioPlayerElement.pause();
                                    audioPlayerElement.currentTime = 0;
                                } else if (i == 2 || i == 3) {
                                    lineTop = lineTop + (7 * (i - 1));
                                    linecount.style.top = lineTop + "%";
                                    linecount.style.color = "#B2AFAD";
                                } else {
                                    linecount.style.zIndex = -1;
                                    linecount.style.color = "#B2AFAD";
                                }
                            } else {
                                // test// lineTop = lineTop -26.5;
                                lineTop = Number(lineTop);
                                if (i == 1) {
                                    linecount.style.top = lineTop + "%";
                                    linecount.style.color = "black";
                                    audioPlayerElement.pause();
                                    audioPlayerElement.currentTime = 0;
                                } else if (i == 2 || i == 3) {
                                    // test // lineTop = lineTop + (7 * (i - 1));
                                    lineTop = lineTop + (10 * (i - 1));
                                    linecount.style.top = lineTop + "%";
                                    linecount.style.color = "#B2AFAD";
                                } else {
                                    linecount.style.zIndex = -1;
                                    linecount.style.color = "#B2AFAD";
                                }
                            }

                        } else {

                            // test// lineTop = lineTop -26.5;
                            lineTop = Number(lineTop);
                            if (i == 1) {
                                linecount.style.top = lineTop + "%";
                                linecount.style.color = "black";
                                audioPlayerElement.pause();
                                audioPlayerElement.currentTime = 0;
                            } else if (i == 2 || i == 3) {
                                // test // lineTop = lineTop + (7 * (i - 1));
                                lineTop = lineTop + (10 * (i - 1));
                                linecount.style.top = lineTop + "%";
                                linecount.style.color = "#B2AFAD";
                            } else {
                                linecount.style.zIndex = -1;
                                linecount.style.color = "#B2AFAD";
                            }
                        }
                    }
                }

                if (audioPlayerElement.duration == audioPlayerElement.currentTime) {
                    audioPlayerElement.pause();
                    audioPlayerElement.currentTime = 0;
                }

                if (audioPlayerElement.currentTime > $(val).data('seektimestart') && audioPlayerElement.currentTime < $(val).data('seektimeend')) {

                    if (val_className.indexOf("songText") > -1) {
                        // "label songText active"
                        $('.songText').addClass('animated');

                        var seektimestart = $(val).data('seektimestart');
                        //console.log(seektimestart);
                        var songLinecount = $$("txtbgColor");
                        songLinecount = songLinecount.getAttribute('data-seektimestart');
                        songLinecount = Number(songLinecount);
                        if (seektime != seektimestart) {
                            var lineId = val.id;
                            var splLineId = lineId.split('_');
                            var lineNumber = Number(splLineId[1]);

                              // if (isiPhone() === 'ipad') {
                            //For mobile and desktopvise ipad compatibility(23-09-2020)
                        var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                            if(isIOS){

                                if (orientation == 0) {

                                    for (var lineCount = 1; lineCount <= songLinecount; lineCount++) {

                                        var line1 = $$(song_ChName + lineCount);
                                        line1.style.display = "inline";
                                        if (lineNumber == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "black";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop - 24.5;
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber + 1 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop - 24.5;
                                            linetop = linetop + 7;
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber + 2 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop - 24.5;
                                            linetop = linetop + 14;
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber - 1 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop - 24.5;
                                            linetop = linetop - 7;
                                            line1.style.top = linetop + "%";
                                        } else {
                                            line1.style.zIndex = -1;
                                        }

                                    }
                                } else {

                                    for (var lineCount = 1; lineCount <= songLinecount; lineCount++) {

                                        var line1 = $$(song_ChName + lineCount);
                                        line1.style.display = "inline";
                                        if (lineNumber == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "black";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber + 1 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop + 10;
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber + 2 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop + 20;
                                            line1.style.top = linetop + "%";
                                        } else if (lineNumber - 1 == lineCount) {
                                            line1.style.zIndex = 3;
                                            line1.style.color = "#B2AFAD";
                                            var linetop = line1.getAttribute('data-top');
                                            linetop = Number(linetop);
                                            linetop = linetop - 10;
                                            line1.style.top = linetop + "%";
                                        } else {
                                            line1.style.zIndex = -1;
                                        }

                                    }
                                }
                            } else {


                                for (var lineCount = 1; lineCount <= songLinecount; lineCount++) {

                                    var line1 = $$(song_ChName + lineCount);
                                    line1.style.display = "inline";
                                    if (lineNumber == lineCount) {
                                        line1.style.zIndex = 3;
                                        line1.style.color = "black";
                                        var linetop = line1.getAttribute('data-top');
                                        linetop = Number(linetop);
                                        line1.style.top = linetop + "%";
                                    } else if (lineNumber + 1 == lineCount) {
                                        line1.style.zIndex = 3;
                                        line1.style.color = "#B2AFAD";
                                        var linetop = line1.getAttribute('data-top');
                                        linetop = Number(linetop);
                                        linetop = linetop + 10;
                                        line1.style.top = linetop + "%";
                                    } else if (lineNumber + 2 == lineCount) {
                                        line1.style.zIndex = 3;
                                        line1.style.color = "#B2AFAD";
                                        var linetop = line1.getAttribute('data-top');
                                        linetop = Number(linetop);
                                        linetop = linetop + 20;
                                        line1.style.top = linetop + "%";
                                    } else if (lineNumber - 1 == lineCount) {
                                        line1.style.zIndex = 3;
                                        line1.style.color = "#B2AFAD";
                                        var linetop = line1.getAttribute('data-top');
                                        linetop = Number(linetop);
                                        linetop = linetop - 10;
                                        line1.style.top = linetop + "%";
                                    } else {
                                        line1.style.zIndex = -1;
                                    }

                                }
                            }
                        }
                    } else {
                        resetHighlights();
                        if (currentAudioId == 'circle') {
                            $(this).addClass('highlightCircle');
                        } else if (currentAudioId == 'point') {
                            $(this).addClass('highlight');
                        } else if (currentAudioId == 'label_1') {
                            $(this).addClass('highlight');
                        } else {
                            $(this).addClass('highlight');
                        }
                    }

                }

                //     if ($(val).data('repeat') == true) {
                //     if (audioPlayerElement.currentTime > $(val).data('repeattimestart') && audioPlayerElement.currentTime < $(val).data('repeattimeend')) {
                //         resetHighlights();
                //         $(this).addClass('highlight');
                //     }
                // }
            });
            break;

        case 2:
            break;

        default:
            break;
    }

}

function resetHighlights() {
    $('.highlight').removeClass('highlight');
    $('.highlightCircle').removeClass('highlightCircle');

}

function audioOverlay(popupid) {
 
    var audioPlayerElement = $$($("#jquery_jplayer_1 audio")[0].id);
    audioPlayerElement.style.display = "inline";
    audioPlayerElement.style.zIndex = 4;

    var audioPlayer = $$("audioPlayer");
    audioPlayer.style.display = "inline";
    audioPlayer.style.zIndex = 4;

    $('.playButton').css('z-index', 2);
    $('.' + popupid).css('z-index', 4);
    showImage(popupid);
    var propTop = getComputedStyleValue(popupid, "top");
    var topValue = (parseInt(propTop.replace("px", "")) + 30) + "px";

    if (popupid == "popup2") {
        $('.playButton').css('z-index', 2);
        $('.' + popupid).css('z-index', 2);
    }


    $$('divOverlay').style.zIndex = 3;
}

function getComputedStyleValue(elementId, property) {
    var element = document.getElementById(elementId),
        style = window.getComputedStyle(element);
    return style.getPropertyValue(property);
}

function clsAudio() {

    var txtbgColor = document.getElementById("txtbgColor");
    if (txtbgColor != null) {
        $$('txtbgColor').style.zIndex = -1;
        var dataset_left = txtbgColor.getAttribute('data-left');
        if (dataset_left != undefined) {
            $$('txtbgColor').style.left = txtbgColor.getAttribute('data-left');
            $$('txtbgColor').style.width = txtbgColor.getAttribute('data-width');
        }

        $('.songText').css('z-index', -1);
        $('.songText').removeClass('animated');
        var popup1 = document.getElementById("popup1");
        document.getElementById("popup1").src = popup1.getAttribute('data-imgurl');

        var lineCount = txtbgColor.getAttribute('data-seektimestart');

        var song_ChName = $$("playAudio_song1");
        song_ChName = song_ChName.getAttribute('data-audio-name');
        if (song_ChName == null) {
            song_ChName = 'line_';
        }

        lineCount = Number(lineCount);
        if (lineCount != 1) {
            for (var count = 1; count <= lineCount; count++) {
                var line1 = $$(song_ChName + count);
                line1.style.top = line1.getAttribute('data-top') + "%";
                line1.style.display = "none";
            }
        }

    }
    var audioPlayerElement = $$($("#jquery_jplayer_1 audio")[0].id);
    audioPlayerElement.style.display = "none";
    audioPlayerElement.pause();
    if (!audioPlayerElement.currentTime) {
        audioPlayerElement.currentTime = 0;
    }
    audioPlayerElement.src = "";
    audioPlayerElement.style.zIndex = 2;
    $("#jplayer_total_time").html("00:00");
    $('.playButton').css('z-index', 2);



    $(".label").removeClass('active');
    $(".label_img").removeClass('active');
    $(".labelSong").removeClass('active');
    $(".label_1").removeClass('active');

    $$('divOverlay').style.zIndex = -1;

    var audioPlayer = $$("audioPlayer");
    audioPlayer.style.display = "none";
    audioPlayer.style.zIndex = -1;

    closeAllPopups();

}


function showImage(id) {
 
    var el = $$(id);

    if (el.className != "popup clicked") {

        var elements = document.getElementsByClassName('popup');
        var highestZIndex = 2;
        for (var i = 0; i < elements.length; i++) {
            var zIndex = parseInt(elements[i].style.zIndex);
            if (zIndex > highestZIndex) {
                highestZIndex = zIndex;
            }

        }
        if (el.getAttribute('data-top') != "") {
            el.style.top = el.getAttribute('data-top');
        }

        el.style.zIndex = highestZIndex + 1;
        el.className = "popup clicked";

        var closeBtn = $$('closeBtn').cloneNode();
        closeBtn.id = "close_" + id;
        closeBtn.addEventListener('click', function() {

            closePopup(this);
        }, false);
        closeBtn.style.display = "block";

        var dataset_top = el.getAttribute('data-top');
        var dataset_topPercentage = el.getAttribute('data-top');
        dataset_top = dataset_top.replace('px', '');
        if (closeBtn.id == "close_popup3") {
            dataset_top = dataset_top - 6;
        } else {
            dataset_top = dataset_top - 11;
        }
        if (dataset_topPercentage.indexOf("%") > -1) {

            closeBtn.style.top = dataset_topPercentage;
            closeBtn.style.right = el.getAttribute('data-right') == '' || el.getAttribute('data-right') == undefined ? '14%' : el.getAttribute('data-right');
        } else {
            closeBtn.style.top = dataset_top + 'px';
            closeBtn.style.right = el.getAttribute('data-right') == '' || el.getAttribute('data-right') == undefined ? '12px' : el.getAttribute('data-right');

        }
        closeBtn.style.opacity = 1;
        closeBtn.className = "popup closeBtn";
        closeBtn.style.zIndex = highestZIndex + 2;
        var overlayPopup = $$('divOverlay');
        overlayPopup.style.zIndex = highestZIndex + 1;
        el.parentNode.insertBefore(closeBtn, el);
    } else {}
}

function closeAllPopups() {
    var closeBtn = document.getElementsByClassName('closeBtn');
    for (var i = 0; i < closeBtn.length; i++) {
        closeBtn[i].click();
    }

}

function closePopup(closeBtn) {
 
    var el = $$(closeBtn.id.replace('close_', ''));
    closeBtn.remove();
    el.className = "popup";
    el.style.zIndex = 2;
    el.position = "absolute";
    el.style.top = null;

    var overlayPopup = $$('divOverlay');
    overlayPopup.style.zIndex = -1; 

    var audioPlayerElement = $("#jquery_jplayer_1 audio");
    if (audioPlayerElement.length != 0) {
        clsAudio();
        $("#jquery_jplayer_1").jPlayer("destroy");
    }
}
$(document).on('loadComplete', function(e, IDR) {
    IDR.handleZoom();
});
