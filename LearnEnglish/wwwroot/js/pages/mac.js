alert("mac")
var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {

      } else {
        $("body").addClass("mac");
      }
    }

    
    if (/\bCrOS\b/.test(navigator.userAgent)) {
      $("body").addClass("chromebook");
    } else {
      // alert("chrome book no");
    }