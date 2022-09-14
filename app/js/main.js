$(function () {

    $('.methods__inner').slick({
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/arrow-next.svg" alt="arrow-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1.50014 12.5294L0.796655 13.2402L0.0859407 12.5367L0.789421 11.826L1.50014 12.5294ZM12.3553 24.6812L0.796655 13.2402L2.20362 11.8187L13.7623 23.2598L12.3553 24.6812ZM0.789421 11.826L12.2304 0.267293L13.6519 1.67426L2.21085 13.2329L0.789421 11.826Z" fill="white"/>\n' +
            '</svg></button> \n',
        responsive: [
            {
                breakpoint: 1178,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.advantages__inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/arrow-next.svg" alt="arrow-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1.50014 12.5294L0.796655 13.2402L0.0859407 12.5367L0.789421 11.826L1.50014 12.5294ZM12.3553 24.6812L0.796655 13.2402L2.20362 11.8187L13.7623 23.2598L12.3553 24.6812ZM0.789421 11.826L12.2304 0.267293L13.6519 1.67426L2.21085 13.2329L0.789421 11.826Z" fill="white"/>\n' +
            '</svg></button> \n',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    /* Open modal window */

    $('#modal-btn').click(function() {
        $('.modal').fadeIn();
        return false;
    });

    $('.modal-close').click(function() {
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').fadeOut();
        }
    });

    $('.modal').click(function(e) {
        if ($(e.target).closest('.modal__inner').length === 0) {
            $(this).fadeOut();
        }
    });

    let data = new URL(document.location).searchParams.get("slider");
    if (data !== null || true) {
        if ((new URL(document.location)).searchParams.get("slider") === "close") {
            $('.methods').css('display', 'none');
        }
    }
});

