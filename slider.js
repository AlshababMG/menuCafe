var swiper = new swiper(".mySwiper",
    {
        effect: "coverflow",
        grabCursor: true,
        centereedSlides: true,
        loop: true,
        slidesPerView: "1",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideshadows: false
        },
        keyboard: {
            enabled: true
        },
        mouseWheel: {
            thresholdDelta: 70
        },
        initialSlide: 0,
        on: {
            click(event) {
                swiper.slideTo(this.clickedIndex);
            }
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            }
        }
    });
console.log(swiper);