$('.multiple-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 476,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});