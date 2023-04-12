$(document).ready(function () {
    /* Sticky nav */
    $('.js-section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /*Animation on scroll */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    /* Mobile navigator */
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon ion-icon');
    $('.js-nav-icon').click(function () {
        if (icon.attr("name") == "menu-outline") {
            icon.attr(("name"), "close-outline");
        } else {
            icon.attr(("name"), "menu-outline");
        }
        nav.slideToggle(200);
    });
    /* Close mobile nav */
    $('.js-main-nav a').click(function () {
        if (icon.attr("name") == "menu-outline") {
            icon.attr(("name"), "close-outline");
        } else {
            icon.attr(("name"), "menu-outline");
        }
        nav.slideToggle(200);
    });

});