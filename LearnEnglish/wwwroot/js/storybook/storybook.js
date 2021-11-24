var ratio = 16 / 9;
var el = document.getElementById('storyBook');
var currentPage = null;
var isiPad = navigator.userAgent.match(/iPad/i) != null;

function loadApp() {

    // Create the flipbook

    currentPage = $('.flipbook').turn({
        // Width

        width: 1024,

        // Height

        height: 768,

        // Elevation

        elevation: 100,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true,

        acceleration: true,
        duration: 2000

    });

    var size = resize(el);
    // $(el).turn('size', size.width, size.height);
    window.addEventListener('resize', function(e) {
        var size = resize(el);
    });

    loadPlayer();
}

function loadPlayer() {
    //$ = window.parent.$;
    var $p = window.parent;
    $p.setCurrentPage(currentPage);
    //$p.setPageProperties(pages,flips);

    var wordTimeArr = [];
    for (var i = 1; i < pages.length; i++) {
        //   $p.LoadPlayer(pages, 'right');
        $p.LoadPlayer(pages[i], 'storyContent', '.speakable.page' + i, HighlightText[i]);
        $.each(pages[i], function(index, val) {
            /* iterate through array or object */
            wordTimeArr.push(val);
        });

    }
    //$p.LoadPlayer(wordTimeArr, 'storyContent', 'speakable page8');
    $p.iframeLoaded();
}

function resize(el) {
    // reset the width and height to the css defaults
    el.style.width = '';
    el.style.height = '';

    var width = el.clientWidth,
        height = Math.round(width / ratio),
        padded = Math.round(document.body.clientHeight * 0.9);

    // if the height is too big for the window, constrain it
    if (height > padded) {
        height = padded;
        width = Math.round(height * ratio);
    }

    // set the width and height matching the aspect ratio
    //el.style.width = width*1.5 + 'px';
    //el.style.height = height * 1.5 + 'px';
    height = document.body.clientHeight < $(window).height() ? $(window).height() : document.body.clientHeight;
    width = document.body.clientWidth < $(window).width() ? $(window).width() : document.body.clientWidth;
    if (isiPad) {
        //height = document.body.clientHeight < $(window).height() ? $(window).height() : document.body.clientHeight;
        //width = document.body.clientWidth < $(window).width() ? $(window).width() : document.body.clientWidth;
        height = 1091;
        width = 1885;
    }
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    $('.flipbook').turn('size', width, height);
}
// Load the HTML4 version if there's not CSS transform

yepnope({
    test: Modernizr.csstransforms,
    // yep: ['../../extras/jquery.min.1.7.js', '../../extras/modernizr.2.5.3.min.js', '../../lib/turn.min.js'],
    nope: ['../../lib/turn.html4.min.js'],
    both: ['../css/stories.css', 'css/basic.css'],
    complete: loadApp
});
