
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// to import page.js of corresponding story
var story = getParameterByName('story'),
    story = story.toLowerCase();
grade = "grade" + getParameterByName('grade');

var ebook = getParameterByName('ebook');
var allChaptersLink = "/";
var currentChapterLink =  ebook;
$('.valijKapitel a')[0].setAttribute('href', allChaptersLink);
$('.valijSida a')[0].setAttribute('href', currentChapterLink);

// block 1
$.fn.preload = function () {
    this.each(function () {
        $('<iframe/>')[0].src = this;
    });
}
// block 1

// block 2
//browser detection scripts
//$('#chart_div').hide();
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isIE = /*@@cc_on!@@*/ false || !!document.documentMode; // At least IE6
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
clickHandler = 'click';
if (isIE) {
    $("html").addClass("ie" + document.documentMode);
    IEVersion = document.documentMode;
}

if (isSafari) {
    $("html").addClass("safari " + isiPhone());
    //$('img.startImage').attr('src', '../../Content/img/ovrig/start-safari.png');
    //$('.circle').css('opacity', 0);
}

function isiPhone() {
    if (navigator.platform.indexOf("iPhone") != -1)
        return 'iphone';
    if (navigator.platform.indexOf("iPod") != -1)
        return 'ipod';
    if (navigator.platform.indexOf("iPad") != -1)
        return 'ipad';
}
// block 2

// block 3
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var currentPage = null;
var autoPlay = false;
var jplayerInitialized = false;
var audioEnded = false;
var position = "first"; //first|last|middle
var jpPlayTime = $("#jplayer_play_time");
var jpTotalTime = $("#jplayer_total_time");
var jpPlayer = $('#jquery_jplayer');
var highlightClass = 'highlight';
var audioStatus = 0; // 0-Stopped | 1-Playing | 2-Paused
var goingToHome = false;
init_jPlayer();

var autoSwitch = false;

function setCurrentPage(cp) {
    currentPage = cp;
    currentPage.on("click", '.page-wrapper:not(', function (e) {
        if (!$(e.target).parent().is(".speakable")) {
            jpPlayer.jPlayer("stop");
            jpPlayer.jPlayer("stop");
            audioStatus = 0;
            this.wordIndex = 0;
            this.currentWord = 0;
            audioEnded = true;
            removeHighlights();
            setTimeout(function () {
                jpPlayer.jPlayer("stop");
            }, 100);
        }

    });
    currentPage.parent().find('#seperator').hide();

    currentPage.bind("turning", function (event, page, view) {
        updateDepth(currentPage, page)
    });
    updateDepth(currentPage, 1)

}
$(window).on('resize', function () {
    if (currentPage) {
        updateDepth(currentPage, currentPage.turn('page'))
    }
});

function updateDepth(book, newPage) {

    var page = book.turn('page'),
        pages = book.turn('pages'),
        depthWidth = 16 * Math.min(1, page * 2 / pages);
    var depthElement = currentPage.find('.depth');
    newPage = newPage || page;
    var container = document.getElementById('container');
    var style = window.getComputedStyle(container, null);

    var containerLeft = parseInt(style.getPropertyValue("left").replace('px', ''));
    var containerTop = parseInt(style.getPropertyValue("top").replace('px', ''));
    var containerWidth = parseInt(style.getPropertyValue("width").replace('px', ''));
    var containerHeight = parseInt(style.getPropertyValue("height").replace('px', ''));
    var transformScale = zoomRate;
    if (isIE && IEVersion === 9) {
        transformScale = 1;
    }
    //if first or last page
    var left = containerLeft - depthWidth + (containerWidth * transformScale * 1 / 4)
    var right = containerLeft + (containerWidth * transformScale * 3 / 4)
    if (newPage > 3) {
        $('.depth.left').css({
            width: depthWidth,
            left: containerLeft - depthWidth,
            height: ((containerHeight + (0.2 * containerHeight / 100)) * transformScale)

        });
    } else {
        $('.depth.left').css({ width: 0 });
    }
    depthWidth = 16 * Math.min(1, (pages - newPage) * 2 / pages);

    if (newPage <= pages - 3) {
        if (newPage == 1 && page !== newPage) {
            $('.depth.right').css({ opacity: 0 });
            $('.depth.right').animate({
                width: depthWidth,
                opacity: 1
            }, 3500);
        } else {
            $('.depth.right').css({
                width: depthWidth,
                left: containerLeft + (containerWidth * transformScale),
                height: ((containerHeight + (0.1 * containerHeight / 100)) * transformScale)
            });
        }
    } else {
        $('.depth.right').css({ width: 0 });
    }
    if (newPage == 1) {
        $('.depth.right').css({ left: right });
    }
    if (newPage == pages) {
        $('.depth.left').css({ left: left });
    }
    if (isiPad) {
        if (newPage === '1') {

            if (screen.height > screen.width) {
                $('.flipbook').css("marginLeft", "-375px");
            } else {
                $('.flipbook').css("marginLeft", "-200px");
            }
        } else {
            if (screen.height > screen.width) {
                $('.flipbook').css("marginLeft", "500px");
            } else {
                $('.flipbook').css("marginLeft", "200px");
                $('.highlightingText').css("position", "absolute");
                $('.highlightingText').css("left", "1em");
                $('.highlightingText').css("bottom", "2.5em");
                $('.highlightingText').css("letter-spacing", "1px");
                $('.highlightingText').css("font-size", "1.75em");
                $('.highlightingText').css("FONT-FAMILY", "NexaBold");
            }

        }

    }
}

function initStory() {
    var src = '/js/storybook/Grade3' + '/' + story + '/index.html';
   
    $('#container').append($('<div class="loaderWrapper"><div class="la-ball-spin-clockwise"><div></div><div></div><div></div><div></div><div></div><div></div> <div></div> <div></div></div></div>'));
    $("#container").append($('<iframe id="storyContent" height="100%" width="100%" style="width:100%;height:100%;overflow:hidden"/>'))
    $('iframe')[0].src = src;   

   
}

function iframeLoaded() {
    $('.loaderWrapper').hide();
    $('#footerContent').css('visibility', 'visible');
  
}
// var FlipWaittime = (story == 'den') ? 100 : (story == 'wetpaint') ? 700 : (story == 'swap') ? 800 : (story == 'jacket') ? 800 : (story == 'storm') ? 1900 : (story == 'scarf') ? 800 : (story == 'case') ? 500 : 1000; // wait time after page turn/flip

var FlipWaittime = (story == 'den') ? 100 : (story == 'wetpaint') ? 700 : (story == 'swap') ? 800 : (story == 'storm') ? 200 : (story == 'jacket') ? 100 : (story == 'scarf') ? 800 : (story == 'case') ? 500 : 1000; // wait time after page turn/flip

function init_jPlayer() {
  
    var check = 0; // this variable is used to avoid play button cannot change while playing song.
    jpPlayer.jPlayer({
        ready: function () {
            this.element.jPlayer("setFile", "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/audio/" + story + ".mp3", "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/audio/" + story + ".ogg", "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/audio/" + story + ".m4a");
            jplayerInitialized = true;
        },
        swfPath: "../scripts",
        volume: 100,
        oggSupport: true,
        supplied: 'm4a,mp3,ogg',
        preload: 'auto',
        solution: "flash,html",
        autoPlay: true
    }).jPlayer("onProgressChange", function (loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
        if (flips && currentPage) {
            $.each(flips, function (i, e) {
                if (e.page != currentPage.turn('page') && e.range.min < playedTime && (e.range.max > playedTime || e.range.max == "max")) {
                    audioStatus = 2;
                    if (check != (e.range.min + "New")) {
                        jpPlayer.jPlayer("pause");
                    }
                    check = e.range.min;
                    //jpPlayer.jPlayer("pause");
                    //console.log(FlipWaittime);
                    currentPage.turn('page', e.page);
                    setTimeout(function () {
                        audioStatus = 1;

                        setTimeout(function () {

                            check = e.range.min + "New";
                            jpPlayer.jPlayer("play");
                        }, (story == 'storm') ? 3000 : 1000)
                    }, FlipWaittime) // page delay after page flip/turn
                } else if (e.page == currentPage.turn('pages') && (totalTime - 300) < playedTime && e.range.max == "max" && totalTime != 0 && playedTime != 0) {
                    jpPlayer.jPlayer("stop");
                    if (!goingToHome) {
                        goingToHome = true;
                        setTimeout(function () {

                            jpPlayer.jPlayer("stop");
                            audioStatus = 0;
                            currentPage.turn('page', 1);
                            goingToHome = false;
                        }, 100)
                    }
                }
            });
        }
        audioEnded = false;
        if (jpPlayer.jPlayer("getData", "diag.isPlaying") == true) { }
    })
        .jPlayer("onSoundComplete", function () {

        });

}

$('.jp-pause').on('click', function () {
    audioStatus = 2;
});
jpPlayer.jPlayer("play");

$('.jp-play').on('click', function () {
    if (audioStatus != 2) {
        jpPlayer.jPlayer("playHeadTime", pageSeek[currentPage.turn('page')].seekTime);
    }

    audioStatus = 1;
});

$(document).on('clicks', '#jplayer_play', function (event) {
    isPlaying = true;
    audioStatus = 1;
});
$('.jp-stop').on('click', function () {
    this.wordIndex = 0;
    this.currentWord = 0;
    audioEnded = true;
    audioStatus = 0;
    setTimeout(function () {
        this.wordIndex = 0;
        this.currentWord = 0;
        audioEnded = true;
        audioStatus = 0;
        removeHighlights();
    }, 300);
    removeHighlights();
});
$('.jp-next').on('click', function () {
    currentPage.turn('next')
    removeHighlights();
    jpPlayer.jPlayer("stop");
    setTimeout(function () {
        jpPlayer.jPlayer("stop");
    }, 300);
});
$('.jp-previous').on('click', function () {
    currentPage.turn('previous')
    removeHighlights();
    jpPlayer.jPlayer("stop");
    setTimeout(function () {
        jpPlayer.jPlayer("stop");
    }, 300);
});
$('.jp-home').on('click', function () {
    currentPage.turn('page', 1);
    jpPlayer.jPlayer("stop");
    setTimeout(function () {
        jpPlayer.jPlayer("stop");
    }, 300);
    removeHighlights();
    audioStatus = 0;
});
$('.jp-caption').on('click', function () {
    if ($(this).hasClass('activate')) {
        highlightClass = 'highlight';
        $('.jp-caption.deactivate').show();
    } else {
        removeHighlights();
        highlightClass = '';
        $('.jp-caption.activate').show();

    }
    $(this).hide();
});
$('.inactive').on('click', function (event) {
    event.stopPropagation();
});

function removeHighlights() {

    $('#storyContent').contents().find('.highlight').removeClass(highlightClass);
}
var Player = function () {
    this.textcontent = null;
    this.word = null;
    this.selectStart = null;
    this.selectEnd = null;
    this.selectPlaying = false;
    this.currentWord = 0;
    this.tempWord = null;
    this.wordIndex = 0;
    this.timer = null;
    this.wordTimes = null;
    this.highlightTimes = null;
    this.sideselector = '#rightDiv';
    this.speakableSelector = ".speakable";
    this.isLeftSide = false;
    this.wordTimesLeft = null;
    this.wordTimesRight = null;
    var context;

    //$('#rightDiv,#leftDiv')
    this.InitializePlayer = function (arrWordTimes, activeSideSelector, arrHighlightTimes) {
        context = this;
        context.sideselector = "#" + activeSideSelector;
        // put the words in an array
        if (activeSideSelector == 'left') {
            context.isLeftSide = true;
        } else {
            context.isLeftSide = false;
        }
        if (arrWordTimes) {
            context.textcontent = $(context.sideselector).contents().find(context.speakableSelector);
            //$('#textedit').val(context.textcontent.text());
            context.word = context.textcontent.text().split(" ");
            context.textcontent.text('');
            //var wordTimes = new Array(300.9, 533.09, 1136.75, 1380.54, 2019.04);
            context.wordTimes = arrWordTimes;
            context.highlightTimes = arrHighlightTimes;
            context.isLeftSide ? context.wordTimesLeft = arrWordTimes : context.wordTimesRight = arrWordTimes;
            context.wrapWords();
            context.checkMode();
            context.makeSeekable();
        }
    }

    this.checkMode = function () {
        clearInterval(context.timer);
        // checks every 10 ms NB for debugging may need to use 100ms as firebug has trouble keeping up
        context.timer = setInterval(context.checkTime, 10);
    }

    this.sumDigits = function (s) {
        s = s + "";
        var r = 0;
        for (i = 0; i < s.length; i++) {
            r = r + parseInt(s.charAt(i));
        }
        return r;
    }
    // This is called every 10 ms

    this.checkTime = function () {

        if (audioStatus != 0 && audioStatus != 2) {
            // Check for selected text

            if (context.selectEnd != null) { }

            if (context.selectStart != null && context.selectPlaying == false) {
                jpPlayer.jPlayer("playHeadTime", context.wordTimes[context.selectStart]);
                context.selectPlaying = true;
            }

            if (context.selectEnd == (context.currentWord - 1) && context.selectPlaying == true) {
                jpPlayer.jPlayer("pause");
                context.selectPlaying = false;
            }
            if (context.wordTimes.length > 0) {

                var currentTime = jpPlayer.jPlayer("getData", "diag.playedTime");

                if (context.currentWord != context.tempWord) {
                    context.tempWord = context.currentWord;
                }
                if (context.highlightTimes[context.currentWord] == null && context.currentWord < context.wordTimes.length) {
                    context.currentWord++;
                } else {
                    // check whether the time has arrived to display the word

                    if (audioEnded == false && currentTime >= context.highlightTimes[context.currentWord] && (context.currentWord >= (context.highlightTimes.length - 1) || currentTime <= context.highlightTimes[context.currentWord + 1])) {
                        //highlight word
                        context.highlightWord(context.currentWord);
                        context.currentWord++;
                    } else {
                        // Fast forward to the corresponding word

                        while ((currentTime > context.highlightTimes[context.currentWord + 1]) && (context.currentWord < context.wordTimes.length)) {
                            context.currentWord++;
                        }

                        // Rewind to the corresponding word

                        while ((currentTime < context.highlightTimes[context.currentWord - 1]) && (context.currentWord >= 0)) {
                            context.currentWord--;
                        }
                    }
                }
            }
            //if (context.currentWord > context.wordTimes.length) context.currentWord = 0;
        }
    }


    $(document).on('mouseup', this.speakableSelector, function (e) {

        var select = context.getSelText();
        select = new String(select).split(" ");

        var i = 0;
        var w = 0;
        var startindex = 0,
            endindex = 0,
            startfound = false,
            endfound = false,
            matches = 0;

        while (w < context.word.length) {

            while (context.clean(word[w]) == select[i]) {
                if (!startfound) {
                    startfound = true;
                    startindex = w;
                } else if (i == select.length - 1) {
                    endfound = true;
                    endindex = w;
                    context.selectStart = startindex;
                    context.selectEnd = endindex;
                    $("#selected").show().fadeOut(3000);

                    return false;
                }

                i++;
                w++;
            }
            i = 0;
            startfound = false;
            w++;
        }
    });


    this.roundToDp = function (p, d) {
        return (Math.round(p * Math.pow(10, d)) / Math.pow(10, d));
    }

    this.highlightWord = function (i) {
        this.removeHighlights();
        $('#storyContent').contents().find(this.speakableSelector + ' #w-' + i).addClass(highlightClass);
    }
    this.removeHighlights = function () {
        $('#storyContent').contents().find('.highlight').removeClass(highlightClass);
    }
    this.getSelText = function () {
        var txt = '';
        if (window.getSelection) {
            txt = window.getSelection();
        } else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        }

        return txt;
    }

    this.clean = function (s) {
        return (s.replace('\n', '', 'g')); // Strip out carriage returns
    }

    this.wrapWords = function () {
        var context = this;
        $.each(context.word, function (index, value) {
            context.textcontent.append('<a href="#' + index + '" id="w-' + index + '">' + value + " </a>");
        });
    }

    this.makeSeekable = function () {
        var context = this;
        $(context.sideselector).contents().on('click', this.speakableSelector + ' a', function () {
            $('.jp-pause').click();
            context.timer = null
            context.selectStart = null;
            context.selectEnd = null;
            context.selectPlaying = false;

            var wordNum = $(this).attr('href').replace('#', '');
            context.wordIndex = parseInt(wordNum);
            context.currentWord = parseInt(wordNum);
            jpPlayer.jPlayer("playHeadTime", context.wordTimes[wordNum] - 400);

            context.highlightWord(wordNum);
            setTimeout(function () {
                $('.jp-play').click()
                // checks every 10 ms NB for debugging may need to use 100ms as firebug has trouble keeping up
                context.timer = setInterval(context.checkTime, 10);
            }, 500);

            //setTimeout(function () {
            //    $('.jp-pause').click();
            //    setTimeout(function () {
            //        $('.jp-play').click()
            //    }, 900);
            //}, 700);

            return false;
        });
    }
};

function LoadPlayer(arrWordTimes, activeSideSelector, speakableSelector, arrHighlightTimes) {

    var p = new Player();
    p.speakableSelector = speakableSelector;
    p.InitializePlayer(arrWordTimes, activeSideSelector, arrHighlightTimes);
    if (activeSideSelector == 'left' && curRP > 1) {
        removeHighlights();
        jpPlayer.jPlayer("playHeadTime", arrWordTimes[0] - 300);
        if (audioStatus == 0 || audioStatus == 2) {
            jpPlayer.jPlayer("pause");
        }
        removeHighlights();
    } else if (curRP == 1) {
        jpPlayer.jPlayer("stop");
        removeHighlights();
        audioStatus = 0;

    }
    removeHighlights();
}

initStory();
makeAjaxPage('html', 8, 944, 1091, '', '.png', '../Content/storybooks/' + grade + '/' + story + '/');
String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + 1);
}
String.prototype.stripTags = function () {
    var orgStr = this;
    var newStr = orgStr.replace(/(<([^>]+)>)/ig, '');
    return newStr;
}


function NoClickDelay(el) {
    this.element = typeof el == 'object' ? el : document.getElementById(el);
    if (window.Touch)
        this.element.addEventListener('touchstart', this, false);
}
NoClickDelay.prototype = {
    handleEvent: function (e) {
        switch (e.type) {
            case 'touchstart':
                this.onTouchStart(e);
                break;
            case 'touchmove':
                this.onTouchMove(e);
                break;
            case 'touchend':
                this.onTouchEnd(e);
                break;
        }
    },
    onTouchStart: function (e) {
        e.preventDefault();
        this.moved = false;
        this.x = e.targetTouches[0].clientX;
        this.y = e.targetTouches[0].clientY;

        this.theTarget = document.elementFromPoint(this.x, this.y);
        if (this.theTarget.nodeType == 3) this.theTarget = theTarget.parentNode;
        this.theTarget.className += ' hover';
        this.element.addEventListener('touchmove', this, false);
        this.element.addEventListener('touchend', this, false);

        var theEvent = document.createEvent('MouseEvents');
        theEvent.initEvent('mousedown', true, true);
        this.theTarget.dispatchEvent(theEvent);
    },
    onTouchMove: function (e) {
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        if (Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) > 50) {
            this.moved = true;
            this.theTarget.className = this.theTarget.className.replace(/ hover/gi, '');
        } else {
            if (this.moved == true) {
                this.moved = false;
                this.theTarget.className += ' hover';
            }
        }
    },
    onTouchEnd: function (e) {
        this.element.removeEventListener('touchmove', this, false);
        this.element.removeEventListener('touchend', this, false);
        if (!this.moved && this.theTarget) {
            this.theTarget.className = this.theTarget.className.replace(/ hover/gi, '');
            var theEvent = document.createEvent('MouseEvents');
            theEvent.initEvent('click', true, true);
            this.theTarget.dispatchEvent(theEvent);

            theEvent = document.createEvent('MouseEvents');
            theEvent.initEvent('mouseup', true, true);
            this.theTarget.dispatchEvent(theEvent);
        }
        this.theTarget = undefined;
    }
};
NoClickDelay.prototype.offset = function () {
    var _x = _y = 0;
    var obj = document;

    if (obj.offsetParent) {
        do {
            _x += obj.offsetLeft;
            _y += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        x: _x,
        y: _y
    };
}
// block 3

//------------ code for Application Insights -----------------------
var appInsights = window.appInsights || function (config) {
    function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = "AuthenticatedUserContext", h = "start", c = "stop", l = "Track", a = l + "Event", v = l + "Page", y = u.createElement(o), r, f; y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(y); try { t.cookie = u.cookie } catch (p) { } for (t.queue = [], t.version = "1.0", r = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; r.length;) i("track" + r.pop()); return i("set" + s), i("clear" + s), i(h + a), i(c + a), i(h + v), i(c + v), i("flush"), config.disableExceptionTracking || (r = "onerror", i("_" + r), f = e[r], e[r] = function (config, i, u, e, o) { var s = f && f(config, i, u, e, o); return s !== !0 && t["_" + r](config, i, u, e, o), s }), t
}({
    instrumentationKey: "524cd669-32d5-4f89-bcce-727a8209a0f4"
});

window.appInsights = appInsights;
appInsights.trackPageView();
//------------ code for Application Insights End -----------------------

 //------------ applications Insights ----------------
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

setTimeout(function () { // delay for allowing highlight anchors to load completely
    var iframe = document.getElementById('storyContent');
    var doc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;

    var anchors = doc.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++) {
        $(anchors[i]).on('click', function (evt) {
            var evntname = "Story_Txt_" + evt.currentTarget.innerText,
                url = window.location.href;
            var evt = "Name: " + evntname + "; URL: " + url;
            appInsights.trackEvent(evt);
        });
    }
}, 5000);
// ------------ applications Insights ----------------