/* Handlers for smooth scrolling*/
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 500;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

/*end smooth scrolling handlers*/
var $rootScope = {}

$rootScope.ifDesktop = (/windows|linux|os\s+[x9]|solaris|bsd/i).test(navigator.userAgent) && !(/ipod|iphone/i).test(navigator.userAgent);
$rootScope.ifTablet = (/ipad/i).test(navigator.userAgent)||((/android/i).test(navigator.userAgent) && !(/mobile/i).test(navigator.userAgent));
$rootScope.ifMobile = (/ipod|iphone/i).test(navigator.userAgent)|| ((/android/i).test(navigator.userAgent) && (/mobile/i).test(navigator.userAgent)) ||(!$rootScope.ifDesktop && !$rootScope.ifTablet);
$rootScope.orientation = (jQuery(window).width() < jQuery(window).height())?'portrait':'landscape';
$rootScope.userDevice = $rootScope.ifMobile ? 'mobile' : 'desktop';

$(document).ready(function(){
    if ($rootScope.userDevice == 'desktop'){
	   var s = skrollr.init();
    };
    var vue = new Vue({
        el: '#vapp',
        data: {
            modalOpen : false,
            modal: {}
        }
    })
});

