function checkMq() {
    if (Modernizr.mq('only screen and (max-width: 767px)')) {
        $('#nav__trigger').change(function(){
        var c = this.checked ? 'hidden' : 'auto';
        $('body').css('overflow', c);
        });
    }
}

$(function() {
    checkMq();
    $(window).resize(function() {
        checkMq();
    });
});

if($('.nav + div').hasClass("content-nohero")){
    $(".nav").addClass("nav--black");
} else {
    $(".nav").removeClass("nav--black");
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".nav").addClass("scrolled");
    } else {
        $(".nav").removeClass("scrolled");
    }
});