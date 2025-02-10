import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import iziToast from 'izitoast';

const reviewList = document.querySelector('.reviews-section .swiper-wrapper');
const prevButton = document.querySelector('.reviews-section .swiper-btn-prev');
const nextButton = document.querySelector('.reviews-section .swiper-btn-next');
const swiperEl = document.querySelector('.reviews-section .swiper');
const reviewSection = document.querySelector('.reviews-section');

function initSwiper() {

    const swiper = new Swiper(swiperEl, {

        modules: [Navigation],
        speed: 450,
    easing: 'ease',
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            loop: false,
        },
        1440: {
            slidesPerView: 4,
            loop: false,
            slidesPerGroup: 2,
            spaceBetween: 16,
        },
        },
     keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  allowTouchMove: true,
        slidesPerGroup: 1,
        loop: true,
    });

    if (swiper.isBeginning) {
        prevButton.setAttribute('disabled', 'true');
        prevButton.classList.add('disabled'); 
    }
    
    swiper.on('reachEnd', () => {
        nextButton.setAttribute('disabled', 'true');
    });

    swiper.on('reachBeginning', () => {
        prevButton.setAttribute('disabled', 'true');
         prevButton.classList.add('disabled');
    });

    swiper.on('slideChange', () => {
        if (swiper.isBeginning) {
            prevButton.setAttribute('disabled', 'true');
             prevButton.classList.add('disabled');
    } else {
            prevButton.removeAttribute('disabled');
             prevButton.classList.remove('disabled');
    }
        
        if (swiper.isEnd) {
            nextButton.setAttribute('disabled', 'true');
        } else {
             nextButton.removeAttribute('disabled');
        }
        
    });
};

function fetchReviews() {
    return axios.get('https://portfolio-js.b.goit.study/api/reviews');
};

function reviewCard(reviewInfo) {
    return`
        <div class="swiper-slide reviews-section-swiper-slide">  
            <img src="${reviewInfo.avatar_url}" alt="${reviewInfo.author} picture" class="review-picture"/>
            <div class="reviews-text-info">
                <h3 class="author-name">${reviewInfo.author}</h3>
                <p class="text-review">${reviewInfo.review}</p>
            </div>
        </div>`;
}

async function fetchData () {
    try {
        const { data } = await fetchReviews();

         if (!data || data.length === 0) {
            reviewList.innerHTML =  `<div class="not-found">Not found</div>`;
            return;
        };
        
        const reviewsTemplate = data.map(el => reviewCard(el)).join('');
        reviewList.innerHTML = reviewsTemplate;
        initSwiper();

    } catch (error) {
        console.log(error);

       const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iziToast.show({
                        title: 'Error',
                        backgroundColor: 'red',
                        messageColor: 'white',
                        position: 'topRight',
                        message: 'Failed to load reviews. Please try again later.',
                        timeout: 5000,
                        close: true,
                    });
                    observer.disconnect(); 
                }
            });
        }, { threshold: 0.1 }); 

        observer.observe(reviewSection);

        reviewList.innerHTML =  `<div class="not-found">Not found</div>`;
    };
};
 
fetchData();