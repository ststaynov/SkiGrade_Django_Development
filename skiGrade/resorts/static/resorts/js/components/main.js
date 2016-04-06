/**
 * Created by ststa on 3/24/2016.
 */


$('.c-grades').on('click', function () {
    $(this).css('background-color','red');
});

// open menu
$('.e-menu-title').on('click', function () {
    if($(this).hasClass('is-active')) {
        $('.e-menu-item').removeClass('is-active');
        $('.c-menu-overlay').removeClass('is-active');
    } else{
        $('.e-menu-item').addClass('is-active');
        $('.c-menu-overlay').addClass('is-active');
    }
});

// close menu when overlay is clicked
$('.c-menu-overlay').on('click', function () {
    $(this).removeClass('is-active');
    $('.e-menu-item').removeClass('is-active');
});

// if span width is more than parent width, span {display:block;}

$header = $('.e-menu-title');

$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll > 20) {
        $header.addClass('animated').removeClass('fix');
    } else {
        $header.removeClass('animated').addClass('fix');
    }

});