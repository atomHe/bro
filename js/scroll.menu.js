$(window).scroll(function() {
if ($(this).scrollTop()>100) $('#header').css({'background':'rgba(0,0,0,.5)'});
else $('#header').css({'background':'rgba(0,0,0,0)'});
});