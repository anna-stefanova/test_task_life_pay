$(function () {

    $('.methods__inner').slick({
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        focusOnSelect: true,
        nextArrow: '<button class="nextArrow nav-prev"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M13 12.5L13.7071 11.7929L14.4142 12.5L13.7071 13.2071L13 12.5ZM2.20711 0.292893L13.7071 11.7929L12.2929 13.2071L0.792893 1.70711L2.20711 0.292893ZM13.7071 13.2071L2.20711 24.7071L0.792893 23.2929L12.2929 11.7929L13.7071 13.2071Z" fill="white"/>\n' +
            '</svg></button>',
        prevArrow: '<button class="slick-arrow slick-next"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1.50014 12.5294L0.796655 13.2402L0.0859407 12.5367L0.789421 11.826L1.50014 12.5294ZM12.3553 24.6812L0.796655 13.2402L2.20362 11.8187L13.7623 23.2598L12.3553 24.6812ZM0.789421 11.826L12.2304 0.267293L13.6519 1.67426L2.21085 13.2329L0.789421 11.826Z" fill="white"/>\n' +
            '</svg></button> \n',
        responsive: [
            {
                breakpoint: 1178,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: false
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

