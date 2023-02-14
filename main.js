$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-115px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '20px'
        }, 'slow');
    });
});