
//block 1
var domainName = window.location.hostname;
//var grade = getParameterByName('grade');
var type = getParameterByName('type');

var allChaptersLink = "/";
var currentChapterLink = "/" + type;
$('.valijKapitel a')[0].setAttribute('href', allChaptersLink);
$('.valijSida a')[0].setAttribute('href', currentChapterLink);

//block 1

//block 2
window.onresize = function() {
    makeResponsive();
}
makeResponsive();

function makeResponsive() {
    var width = $(window).width(),
        height = $(window).height();

    var scaleW = width / 1920;
    var scaleH = height / 979;
    var scale = scaleW > scaleH ? scaleW : scaleH;
    $('.controls').css('-moz-transform', 'scale(' + scale + ')');
    $('.controls').css('-ms-transform', 'scale(' + scale + ')');
    $('.controls').css('-o-transform', 'scale(' + scale + ')');
    $('.controls').css('-webkit-transform', 'scale(' + scale + ')');
    $('.controls').css('transform', 'scale(' + scale + ')');
}
var context;
$(document).ready(function() {
    var canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    $(".overlay").show();
    initCanvas();
    var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
        var isIE = /*@@cc_on!@@*/ false || !!document.documentMode;
        var IEVersion = document.documentMode;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isiPad = /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        //var isiPad = (navigator.userAgent.match(/iPad/i) != null);
        if (isIE) {
            $("html").addClass("ie");
        }
        if (isEdge) {
            $("html").addClass("ieedge");
        }
});

//block 2

var stage;

var hiddenObj_type = "Pictures",
    burstCount = -1,
    speedOffset = 400;

var ballonFadeOut_Timeout = 500 + speedOffset,
    burst_Timeout = ballonFadeOut_Timeout + 500 + speedOffset,
    hiddenObj_Timeout = burst_Timeout + 500 + speedOffset,
    Ease_Timeout = 500 + speedOffset,
    totalObjInvisible_Timeout = (Ease_Timeout * 2) + hiddenObj_Timeout + speedOffset,
    totalObjInvisible_Wait = 500 + speedOffset;

var soundID = 'Balloon_Burst';

$(".ballonOption label").click(function() {
    hiddenObj_type = this.innerText;
});

$('#points').change(function() {
    if ($('#points').val() == 0) { //low 5sec
        speedOffset = 850;
    } else if ($('#points').val() == 1) { //medium 3sec
        speedOffset = 400;
    } else if ($('#points').val() == 2) { //high 2sec
        speedOffset = 100;
    }
    ballonFadeOut_Timeout = 500 + speedOffset,
        burst_Timeout = ballonFadeOut_Timeout + 500 + speedOffset,
        hiddenObj_Timeout = burst_Timeout + 500 + speedOffset,
        Ease_Timeout = 500 + speedOffset,
        totalObjInvisible_Timeout = (Ease_Timeout * 2) + hiddenObj_Timeout + speedOffset,
        totalObjInvisible_Wait = 500 + speedOffset;
});

var currChapter = getParameterByName('type');

var hiddenObjs = [];
if (currChapter == 'opposites') {
    hiddenObjs = ['tall', 'short', 'big', 'small', 'clean', 'dirty', 'young', 'old', 'wet', 'dry', 'good', 'bad'];
} else if (currChapter == 'wildanimals') {
    hiddenObjs = ['lion', 'owl', 'monkey', 'crocodile', 'squirrel', 'deer', 'wolf', 'giraffe', 'hippo', 'fox', 'bear', 'elephant'];
} else if (currChapter == 'afterschool') {
    hiddenObjs = ['play the piano', 'go horse riding', 'play table tennis', 'go to the cinema', 'do gymnastics', 'sing in a choir', 'play basketball', 'go to the library', 'play computer games', 'walk the dog', 'bake a cake', 'take acting class'];
} else if (currChapter == 'lunchtime') {
    hiddenObjs = ['chicken', 'rice', 'carrots', 'hot dog', 'apple pie', 'meatballs', 'potatoes', 'sandwich', 'pasta', 'steak', 'fish', 'soup'];
} else if (currChapter == 'weather') {
    hiddenObjs = ['cold', 'warm', 'rainy', 'thunder', 'snowy', 'cloudy', 'sunny', 'windy', 'summer', 'autumn', 'winter', 'spring'];
} else if (currChapter == 'partytime') {
    hiddenObjs = ['ice cream', 'balloon', 'candles', 'lemonade', 'cupcake', 'surprise', 'flag', 'chocolate cake', 'fancy dress', 'gift', 'sweets', 'birthday card'];
} else if (currChapter == 'everyday') {
    hiddenObjs = ['wake up', 'brush my teeth', 'go to school', 'have a break', 'watch TV', 'take a shower', 'go to bed', 'have breakfast', 'do homework', 'chat with friends', 'eat dinner', 'get dressed'];
} else if (currChapter == 'thehouse') {
    hiddenObjs = ['door', 'garden', 'hall', 'stairs', 'kitchen', 'bedroom', 'bathroom', 'basement', 'window', 'wall', 'floor', 'living room'];
} else if (currChapter == 'goodtoknow') {
    hiddenObjs = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'fifty', 'one hundred'];
} else {
    hiddenObjs = ['tall', 'short', 'big', 'small', 'clean', 'dirty', 'young', 'old', 'wet', 'dry', 'good', 'bad'];
}

hiddenObjs = shuffle(hiddenObjs);

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//preload images
var queue = new createjs.LoadQueue(true, null, true); // allow cross origin images

for (var i = 1; i <= 12; i++) {
    var domainName = 'https://majemastoragelive.blob.core.windows.net/learn-english-test/';
    if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10) { // IE9 load image from website
        domainName = location.protocol + '//' + location.host + '/';
    }
    queue.loadManifest([{
        src: domainName + 'content/ballon/assets/images/ballon_' + i + '.png',
        id: 'image_' + i
    }]);
}
for (var i = 0; i < hiddenObjs.length; i++) {
    var img_ID = hiddenObjs[i].replace(/ /g, '-'); // replace space with '-' in image name 
    queue.loadManifest([{
        src: 'https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/' + currChapter + '/' + img_ID + '.png',       
        id: img_ID
    }]);
}
queue.loadManifest([
    { id: "img_dog_2", src: "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/images/dog_2.png" },
]);

var isResetBalloon = false;

function initCanvas() {
    queue.on('complete', function() {
        $(".overlay").hide();
    });
    stage = new createjs.Stage("canvas");
    stage.enableMouseOver(10);
    function resize_stage() {
        var rectangle_box_1 = new createjs.Shape();
        var container_width = 1000;
        var container_height = 930;
        rectangle_box_1.graphics.beginFill('red').setStrokeStyle(2).beginStroke('red').drawRoundRect(400, 60, 1000, 930, 1);
        rectangle_box_1.alpha = 0;
        stage.addChild(rectangle_box_1);
        stage.update();
        
        var screenwidth = screen.width ;
        var screenheight = screen.height;
       // alert("Your screen resolution is: " + screen.width + "x" + screen.height);

        var current_scale_size = 1;
        var current_x_axis = 0;
        var current_y_axis = 0;

        var orientation_test = window.matchMedia("(orientation: portrait)").matches;

        var orientation = "landscape";
        if (orientation_test)
        {
            orientation="portrait";
        }

        var current_resolution = screenwidth + " X " + screenheight;
        //alert(current_resolution + "(" + orientation +")");
        //config scaling
        var scale_array =
            [
                { "screen_size": "1366 X 768", "current_scale_size": 0.9, "current_x_axis": 45, "current_y_axis": 25, "orientation": ""  },
                //{ "screen_size": "1366 X 625", "current_scale_size": 0.84, "current_x_axis": 80, "current_y_axis": 40, "orientation": ""   },
                //{ "screen_size": "1080 X 740", "current_scale_size": 0.7, "current_x_axis": -150, "current_y_axis": 50, "orientation": ""   },
                //{ "screen_size": "810 X 1010", "current_scale_size": 0.5, "current_x_axis": -90, "current_y_axis": 70, "orientation": ""   },
                { "screen_size": "1680 X 1050", "current_scale_size": 0.9, "current_x_axis": 45, "current_y_axis": 25, "orientation": ""   },
                { "screen_size": "1600 X 900", "current_scale_size": 0.9, "current_x_axis": 45, "current_y_axis": 25, "orientation": ""  },
                //{ "screen_size": "1366 X 638", "current_scale_size": 0.9, "current_x_axis": 45, "current_y_axis": 40, "orientation": ""   },
                { "screen_size": "1536 X 864", "current_scale_size": 0.6, "current_x_axis": 15, "current_y_axis": 160, "orientation": ""   },
                { "screen_size": "810 X 1080", "current_scale_size": 0.4, "current_x_axis": -70, "current_y_axis": 150, "orientation": "portrait"   },
                { "screen_size": "810 X 1080", "current_scale_size": 0.5, "current_x_axis": 10, "current_y_axis": 230, "orientation": "landscape"  },
                { "screen_size": "768 X 1024", "current_scale_size": 0.4, "current_x_axis": -70, "current_y_axis": 120, "orientation": "portrait" },
                { "screen_size": "768 X 1024", "current_scale_size": 0.5, "current_x_axis": 10, "current_y_axis":200, "orientation": "landscape"  }
            ];

        var curret_data_array = scale_array.filter(function (person) { return ((person['screen_size'] == current_resolution && person['orientation'] == '') || (person['screen_size'] == current_resolution && person['orientation'] == orientation)) });
        if (curret_data_array.length > 0) {
            current_scale_size = curret_data_array[0]['current_scale_size'];
            current_x_axis = curret_data_array[0]['current_x_axis'];
            current_y_axis = curret_data_array[0]['current_y_axis'];
        }
        stage.scaleX = stage.scaleY = current_scale_size;
        stage.x = current_x_axis;
        stage.y = current_y_axis;
        stage.update();
    }
    resize_stage();
    /*window.onresize = function () {
        resize_stage();
    }*/
    createjs.Sound.registerSound("https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/Balloon_Burst.mp3", soundID);

    //image instances
    var image_1 = (isResetBalloon == true) ? queue.getResult('image_1') : queue._loadItemsById.image_1._loader._tag;
    var image_2 = (isResetBalloon == true) ? queue.getResult('image_2') : queue._loadItemsById.image_2._loader._tag;
    var image_3 = (isResetBalloon == true) ? queue.getResult('image_3') : queue._loadItemsById.image_3._loader._tag;
    var image_4 = (isResetBalloon == true) ? queue.getResult('image_4') : queue._loadItemsById.image_4._loader._tag;
    var image_5 = (isResetBalloon == true) ? queue.getResult('image_5') : queue._loadItemsById.image_5._loader._tag;
    var image_6 = (isResetBalloon == true) ? queue.getResult('image_6') : queue._loadItemsById.image_6._loader._tag;
    var image_7 = (isResetBalloon == true) ? queue.getResult('image_7') : queue._loadItemsById.image_7._loader._tag;
    var image_8 = (isResetBalloon == true) ? queue.getResult('image_8') : queue._loadItemsById.image_8._loader._tag;
    var image_9 = (isResetBalloon == true) ? queue.getResult('image_9') : queue._loadItemsById.image_9._loader._tag;
    var image_10 = (isResetBalloon == true) ? queue.getResult('image_10') : queue._loadItemsById.image_10._loader._tag;
    var image_11 = (isResetBalloon == true) ? queue.getResult('image_11') : queue._loadItemsById.image_11._loader._tag;
    var image_12 = (isResetBalloon == true) ? queue.getResult('image_12') : queue._loadItemsById.image_12._loader._tag;

    var img_dog_1 = new Image();
    img_dog_1.crossOrigin = "Anonymous";
    img_dog_1.src = "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/images/dog_1.png";

    var img_burst_effect = new Image();
    img_burst_effect.src = "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/images/burst_effect.png";

    var img_hidden = new Image();
    // img_hidden.src = "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/images/burst_effect.png";
    //end

    var hidden_text_Pos = {
        x: 860,
        y: 450
    };

    var hidden_text = new createjs.Text("Kiwi", "bold 40px Arial");
    hidden_text.textAlign = 'center';
    hidden_text.setTransform(hidden_text_Pos.x, hidden_text_Pos.y);
    hidden_text.visible = false;

    var hidden_img_Pos = {
        x: 750,
        y: 390
    };

    var hidden_img = new createjs.Bitmap(img_hidden);
    hidden_img.setTransform(hidden_img_Pos.x, hidden_img_Pos.y);
    hidden_img.visible = false;

    var burst_effect_Pos = {
        x: 600,
        y: 240
    };

    var burst_effect = new createjs.Bitmap(img_burst_effect);
    burst_effect.setTransform(burst_effect_Pos.x, burst_effect_Pos.y);
    burst_effect.visible = false;

    var ballons = [];

    var ballon_1 = new createjs.Bitmap(image_1);
    ballon_1.setTransform(710, 360);
    ballons.push(ballon_1);

    var ballon_2 = new createjs.Bitmap(image_2);
    ballon_2.setTransform(873, 300);
    ballons.push(ballon_2);

    var ballon_3 = new createjs.Bitmap(image_3);
    ballon_3.setTransform(875, 300);
    ballons.push(ballon_3);

    var ballon_4 = new createjs.Bitmap(image_4);
    ballon_4.setTransform(670, 85);
    ballons.push(ballon_4);

    var ballon_5 = new createjs.Bitmap(image_5);
    ballon_5.setTransform(435, 270);
    ballons.push(ballon_5);

    var ballon_6 = new createjs.Bitmap(image_6);
    ballon_6.setTransform(860, 160);
    ballons.push(ballon_6);

    var ballon_7 = new createjs.Bitmap(image_7);
    ballon_7.setTransform(875, 495);
    ballons.push(ballon_7);

    var ballon_8 = new createjs.Bitmap(image_8);
    ballon_8.setTransform(490, 530);
    ballons.push(ballon_8);

    var ballon_9 = new createjs.Bitmap(image_9);
    ballon_9.setTransform(520, 170);
    ballons.push(ballon_9);

    var ballon_10 = new createjs.Bitmap(image_10);
    ballon_10.setTransform(760, 60);
    ballons.push(ballon_10);

    var ballon_11 = new createjs.Bitmap(image_11);
    ballon_11.setTransform(875, 180);
    ballons.push(ballon_11);

    var ballon_12 = new createjs.Bitmap(image_12);
    ballon_12.setTransform(875, 365);
    ballons.push(ballon_12);

    var dog_1 = new createjs.Bitmap(img_dog_1);
    dog_1.setTransform(595, 680);
    dog_1.name = "dog";

    function trackAnalyticEvent(evtName) { // tracking events in app-Insights
        try {
            var evntname = evtName,
                url = window.location.href;
            var evt = "Name: " + evntname + "; URL: " + url;
            appInsights.trackEvent(evt);
        } catch (e) {}
    }

    // event start
    ballon_1.on('click', function(evt) {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_1");
        clickedBalloonIndex = 0;
        handleBallonClick(ballon_1, 0, 0, 0);
    });
    ballon_2.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_2")
        clickedBalloonIndex = 1;
        handleBallonClick(ballon_2, 1, 200, 0);
    });
    ballon_3.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_3")
        clickedBalloonIndex = 2;
        handleBallonClick(ballon_3, 2, 270, 0);
    });
    ballon_4.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_4")
        clickedBalloonIndex = 3;
        handleBallonClick(ballon_4, 3, -70, -170);
    });
    ballon_5.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_5")
        clickedBalloonIndex = 4;
        handleBallonClick(ballon_5, 4, -200, 0);
    });
    ballon_6.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_6")
        clickedBalloonIndex = 5;
        handleBallonClick(ballon_6, 5, 120, -180);
    });
    ballon_7.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_7")
        clickedBalloonIndex = 6;
        handleBallonClick(ballon_7, 6, 400, 100);
    });
    ballon_8.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_8")
        clickedBalloonIndex = 7;
        handleBallonClick(ballon_8, 7, -260, 120);
    });
    ballon_9.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_9")
        clickedBalloonIndex = 8;
        handleBallonClick(ballon_9, 8, -230, -150);
    });
    ballon_10.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_10")
        clickedBalloonIndex = 9;
        handleBallonClick(ballon_10, 9, 0, -220);
    });
    ballon_11.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_11")
        clickedBalloonIndex = 10;
        handleBallonClick(ballon_11, 10, 250, -180);
    });
    ballon_12.on('click', function() {
        if (balloonClicked == true) {
            return;
        }
        trackAnalyticEvent("Balloon_12")
        clickedBalloonIndex = 11;
        handleBallonClick(ballon_12, 11, 420, 0);
    });
    dog_1.on('click', function(evt) {
        trackAnalyticEvent("Balloon_Dog_Click");
        stage.removeAllChildren();
        stage.update();
        createjs.Tween.removeAllTweens();
        isResetBalloon = true;
        initCanvas();
        // balloonClicked = false;
        burstCount = -1;
    });
    // eventt end

    stage.addChild(ballon_12, ballon_11, ballon_10, ballon_9, ballon_8, ballon_7, ballon_6, ballon_5, ballon_4, ballon_3, ballon_2, ballon_1, dog_1, burst_effect, hidden_img, hidden_text);

    // compatibility start
    var canvasScaleX = 1,
        canvasScaleY = 1,
        transX = 0,
        transY = 0;

    var burstImgScale = 1.1,
        hiddenObjScale = 1.5;

    var width = screen.width,
        height = screen.height;
    var is_iPad = /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    //var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    if (width == 1366 && height == 768) {
        transX = 0,
            transY = 0,
            canvasScaleX = 0.7,
            canvasScaleY = 0.7,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 768 && height == 1024 && is_iPad == true && window.matchMedia("(orientation: landscape)").matches) {
     /*   transX = -10,
            transY = 150,
            canvasScaleX = 0.55,
            canvasScaleY = 0.55,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
        */
    } else if (width == 768 && height == 1024 && is_iPad == true && window.matchMedia("(orientation: portrait)").matches) {
        //transX = -20,
        //transY = 180,
        //    canvasScaleX = .50,
        //    canvasScaleY = .50,
        /*transX = -50,
            transY = 120,
            canvasScaleX = 2,
            canvasScaleY = 5,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
        */
    } else if (width == 1024 && height == 768) {
        transX = -150,
            transY = 50,
            canvasScaleX = 0.63,
            canvasScaleY = 0.63,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1680 && height == 1050) {
        transX = -100,
            transY = 0,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1600 && height == 900) {
        transX = 0,
            transY = 0,
            canvasScaleX = 0.85,
            canvasScaleY = 0.85,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 1024) {
        transX = -130,
            transY = 170,
            canvasScaleX = 0.75,
            canvasScaleY = 0.75,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 960) {
        transX = -200,
            transY = 65,
            canvasScaleX = 0.8,
            canvasScaleY = 0.8,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 800) {
        transX = 0,
            transY = 0,
            canvasScaleX = 0.7,
            canvasScaleY = 0.7,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 720) {
        transX = 70,
            transY = 25,
            canvasScaleX = 0.6,
            canvasScaleY = 0.6,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 768) {
        transX = 20,
            transY = 20,
            canvasScaleX = 0.65,
            canvasScaleY = 0.65,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1600 && height == 1200) {
        transX = -200,
            transY = 100,
            canvasScaleX = 0.9,
            canvasScaleY = 0.9,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1280 && height == 1050) {
        transX = -200,
            transY = 150,
            canvasScaleX = 0.8,
            canvasScaleY = 0.8,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1440 && height == 900) {
        transX = 0,
            transY = 10,
            canvasScaleX = 0.8,
            canvasScaleY = 0.8,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 2560 && height == 1440) {
        transX = -30,
            transY = 40,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1920 && height == 1200) {
        transX = -80,
            transY = 40,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 2880 && height == 1800) {
        transX = -50,
            transY = 0,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 2560 && height == 1600) {
        transX = -50,
            transY = 0,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    } else if (width == 1600 && height == 1024) {
        transX = -150,
            transY = -40,
            canvasScaleX = 1,
            canvasScaleY = 1,
            burstImgScale = burstImgScale - (1 - canvasScaleX),
            hiddenObjScale = hiddenObjScale - (1 - canvasScaleX);
        for (var i = 0; i < stage.children.length; i++) {
            stage.children[i].x = (stage.children[i].x * canvasScaleX) + transX;
            stage.children[i].y = (stage.children[i].y * canvasScaleY) + transY;
            stage.children[i].scaleX = stage.children[i].scaleY = canvasScaleY;
        };
    }


    // compatibility end

    stage.update();

    var balloonID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    balloonID = shuffle(balloonID);
    var clickedBalloonIndex;

    function startBalloonBurst() { // automatically burst all balloons
        var arg1, arg2, arg3, arg4;
        if (balloonID[burstCount] == 0) {
            arg1 = ballon_1, arg2 = 0, arg3 = 0, arg4 = 0;
        } else if (balloonID[burstCount] == 1) {
            arg1 = ballon_2, arg2 = 1, arg3 = 200, arg4 = 0;
        } else if (balloonID[burstCount] == 2) {
            arg1 = ballon_3, arg2 = 2, arg3 = 270, arg4 = 0;
        } else if (balloonID[burstCount] == 3) {
            arg1 = ballon_4, arg2 = 3, arg3 = -70, arg4 = -170;
        } else if (balloonID[burstCount] == 4) {
            arg1 = ballon_5, arg2 = 4, arg3 = -200, arg4 = 0;
        } else if (balloonID[burstCount] == 5) {
            arg1 = ballon_6, arg2 = 5, arg3 = 120, arg4 = -180;
        } else if (balloonID[burstCount] == 6) {
            arg1 = ballon_7, arg2 = 6, arg3 = 400, arg4 = 100;
        } else if (balloonID[burstCount] == 7) {
            arg1 = ballon_8, arg2 = 7, arg3 = -260, arg4 = 120;
        } else if (balloonID[burstCount] == 8) {
            arg1 = ballon_9, arg2 = 8, arg3 = -230, arg4 = -150;
        } else if (balloonID[burstCount] == 9) {
            arg1 = ballon_10, arg2 = 9, arg3 = 0, arg4 = -220;
        } else if (balloonID[burstCount] == 10) {
            arg1 = ballon_11, arg2 = 10, arg3 = 250, arg4 = -180;
        } else if (balloonID[burstCount] == 11) {
            arg1 = ballon_12, arg2 = 11, arg3 = 420, arg4 = 0;
        }

        if (burstCount <= 11) {
            if (arg2 != clickedBalloonIndex) {
                handleBallonClick(arg1, arg2, arg3, arg4);
            } else {
                burstCount++;
                startBalloonBurst();
            }
        }
    }

    // startBalloonBurst();    

    var balloonClicked = false;

    function handleBallonClick(ballon, ballonIndex, hiddenXTrans, hiddenYTrans) {
        balloonClicked = true;

        var hiddenText = hiddenObjs[ballonIndex];
        hiddenText = hiddenText.trim();

        for (var i = 0; i < ballons.length; i++) {
            if (i == ballonIndex) { //ballon
                continue;
            }
            createjs.Tween.get(ballons[i]).to({ alpha: 0.3 }, ballonFadeOut_Timeout);
        }
        createjs.Tween.get(dog_1).to({ alpha: 0.3 }, ballonFadeOut_Timeout);

        createjs.Tween.get(burst_effect).wait(burst_Timeout).to({
            x: (burst_effect_Pos.x + hiddenXTrans + transX) * canvasScaleX,
            y: (burst_effect_Pos.y + hiddenYTrans + transY) * canvasScaleY,
            scaleX: 1,
            scaleY: 1,
            alpha: 1,
            visible: true
        }, 0).call(function() {
            createjs.Sound.play(soundID);
            createjs.Tween.get(burst_effect).to({ scaleX: burstImgScale, scaleY: burstImgScale }, Ease_Timeout, createjs.Ease.elasticOut);

            if (hiddenObj_type == "WORDS") {
                hidden_text.visible = true;
                hidden_text.scaleX = hidden_text.scaleY = 1;
                hidden_text.x = (hidden_text_Pos.x + hiddenXTrans + transX) * canvasScaleX;
                hidden_text.y = (hidden_text_Pos.y + hiddenYTrans + transY) * canvasScaleY;
                hidden_text.text = hiddenText;
                createjs.Tween.get(hidden_text).to({ scaleX: hiddenObjScale, scaleY: hiddenObjScale }, Ease_Timeout, createjs.Ease.elasticOut).wait(totalObjInvisible_Wait)
                    .call(function() {
                        hidden_text.visible = false;
                        hidden_img.visible = false;
                        burst_effect.visible = false;
                        for (var i = 0; i < ballons.length; i++) {
                            if (i == ballonIndex) { //ballon
                                continue;
                            }
                            ballons[i].alpha = 1;
                        }
                        dog_1.alpha = 1;
                        startBalloonBurst();
                    });
            } else {
                hidden_img.visible = true;
                hidden_img.scaleX = hidden_img.scaleY = 1;
                hidden_img.x = (hidden_img_Pos.x + hiddenXTrans + transX) * canvasScaleX;
                hidden_img.y = (hidden_img_Pos.y + hiddenYTrans + transY) * canvasScaleX;
                hiddenText = hiddenText.replace(/ /g, '-'); // replace space with '-' in image name 
                // hidden_img.image.src = 'https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/' + currChapter + '/' + hiddenText + '.png';
                hidden_img.image = queue.getResult(hiddenText); //get preloaded image
                createjs.Tween.get(hidden_img).to({ scaleX: hiddenObjScale, scaleY: hiddenObjScale }, Ease_Timeout, createjs.Ease.elasticOut).wait(totalObjInvisible_Wait)
                    .call(function() {
                        hidden_text.visible = false;
                        hidden_img.visible = false;
                        burst_effect.visible = false;
                        for (var i = 0; i < ballons.length; i++) {
                            if (i == ballonIndex) { //ballon
                                continue;
                            }
                            ballons[i].alpha = 1;
                        }
                        dog_1.alpha = 1;
                        startBalloonBurst();
                    });
            }

            ballon.visible = false;

            var invisibleCnt = 0;
            for (var i = 0; i < ballons.length; i++) {
                if (ballons[i].visible == false) {
                    invisibleCnt++;
                }
            }
            if (invisibleCnt == 12) {
                // dog_1.image.src = "https://majemastoragelive.blob.core.windows.net/learn-english-test/content/ballon/assets/images/dog_2.png";
                dog_1.image = queue.getResult('img_dog_2'); //get preloaded image 
            }
        });

        burstCount++;
    }
}

createjs.Ticker.addEventListener("tick", handleTick);
createjs.Ticker.setInterval(25);
createjs.Ticker.setFPS(40);

function handleTick(event) {
    stage.update();
}

$.each($("a"), function(key, value) { // Track application Insights
    if (this != undefined) {
        var evntname = "Anchor_" + this.text,
            url = window.location.href;
        var evt = "Name: " + evntname + "; URL: " + url;
        appInsights.trackEvent(evt);
    }
});