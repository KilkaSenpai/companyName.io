//Search input
document.querySelector('.open-js').onclick = function () {
    this.classList.add('open');
    document.querySelector('.close-js').classList.add('close');
    document.querySelector('.search-js').classList.add('search');
    document.querySelector('.header__box').classList.add('open');
};

document.querySelector('.close-js').onclick = function () {
    this.classList.remove('close');
    document.querySelector('.header__box').classList.remove('open');
    document.querySelector('.search-js').classList.remove('search');
    document.querySelector('.header__box').classList.remove('open');
    document.querySelector('.open-js').classList.remove('open');
};

//Slider
new Swiper('.service-preview__container', {
    navigation: {
        nextEl: '.service-preview__arrow--right',
        prevEl: '.service-preview__arrow--left',
    },
    pagination: {
        el: '.service-preview__pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000
    },
    speed: 1000,
    loop: true,
    autoHeight: true,
});

//Slider
new Swiper('.reviews__container', {
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        757: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1,

        }
    },
    loop: true,
    slidesPerView: 3,



});

//Slider
new Swiper('.projects__container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.projects__pagination',
        clickable: true,
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
            autoHeight: true
        },
    }

});

//popup
$('.projects__link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500,
        easing: 'ease-in-out',
    },
    navigateByImgClick: true,
});

//rating
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
};

function initRatings() {
    let ratingActive, ratingValue;
    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating--set')) {
            setRating(rating);
        };
    };

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    };

    function setRatingActiveWidth(i = ratingValue.innerHTML) {
        const ratingActiveWidth = i / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    };

    function setRating(rating) {
        const ratingInputs = rating.querySelectorAll('.rating__input');
        for (let i = 0; i < ratingInputs.length; i++) {
            const ratingInput = ratingInputs[i];
            ratingInput.addEventListener("mouseenter", function (e) {
                initRatingVars(rating);

                setRatingActiveWidth(ratingInput.value);
            });

            ratingInput.addEventListener("mouseleave", function (e) {
                setRatingActiveWidth();
            });

            ratingInput.addEventListener("click", function (e) {
                initRatingVars(rating);
                if (rating.dataset.ajax) {
                    setRatingValue(ratingInput.value, rating);
                } else {
                    ratingValue.innerHTML = i + 1;
                    setRatingActiveWidth();
                }
            });
        }
    };
};

//num
$(function () {
    $(".form-control").mask("+38(999) 999-9999");
})

//fixed header
const headerFix = document.querySelector('.header');

window.addEventListener('scroll', toggleClassOnScroll.bind(headerFix, 200));

function toggleClassOnScroll(pxAmount) {
    let scrollTop = window.pageYOffset;
    if (scrollTop > pxAmount) {
        this.classList.add('js-fix');
        document.querySelector('.service-preview').classList.add('js-fix');
        document.querySelector('.anchor').style.display = 'flex';
    } else {
        this.classList.remove('js-fix');
        document.querySelector('.service-preview').classList.remove('js-fix');
        document.querySelector('.anchor').style.display = 'none';
    }

};

//go-top

$(function () {
    $(".anchor").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500,);
        return false;
    });

});

//filter menu
$('.js_btn').on('click', function () {
    $(this).next('.js_list').slideToggle();
    $(this).parent().toggleClass("active");
});

//header-menu
document.querySelector('.js-mobileOn').onclick = function () {
    document.querySelector('.header-menu').style.left = '0';
    document.querySelector('body').classList.add('dark');
}

document.querySelector('.js-mobileOff').onclick = function () {
    document.querySelector('.header-menu').style.left = '-150%';
    document.querySelector('body').classList.remove('dark');
}
