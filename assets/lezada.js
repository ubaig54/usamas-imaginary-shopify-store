// hero slider
$(document).ready(function () {
    $('.hero-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        nextArrow: '<button>&rsaquo;</button>',
        prevArrow: '<button>&lsaquo;</button>',
    });
});