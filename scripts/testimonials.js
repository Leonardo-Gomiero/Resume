document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.js-testimonials-slider', {
        grabCursor: true,
        spaceBetween: `15vh`,
        pagination: {
            el: '.js-testimonials-pagination',
            clickable: true
        },
        breakpoints: {
            767: {
                slidesPerView: 2
            }
        }
    });
});