
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Xử lý tại Silder 
// 1. Hiện ảnh trong  
const items = $$('.carousel-item');
const nextBtn = $('.carousel-control-next');
const prevBtn = $('.carousel-control-prev');
const cricle = $$('.rounded-circle');
var currentIndex = 1;
nextBtn.onclick = function() {
    currentIndex = currentIndex < items.length ? ++currentIndex : 1;
}
prevBtn.onclick = function() {
    currentIndex = currentIndex > 1 ? --currentIndex : items.length;
} 
nextBtn.onmouseover = function() {
    cricle[1].style.backgroundImage = `url(assets/image/Slider/slider_${currentIndex + 1}.jpg)`;
}
prevBtn.onmouseover = function() {
    if (currentIndex !== 1) {
        cricle[0].style.backgroundImage = `url(assets/image/Slider/slider_${currentIndex - 1}.jpg)`;
    } else {
        cricle[0].style.backgroundImage = `url(assets/image/Slider/slider_8.jpg)`;
    }
}

// Xử lý scroll lên
const sliderElement = $('.slide');
const navbarElement = $('.navbar');
const captionElement = $('.carousel-caption');
const topBtn = $('.top-btn');
const undergroundElement = $('.underground');
const slideHeight = sliderElement.clientHeight;
const navbarHeight = navbarElement.clientHeight;
const captionTop = captionElement.offsetTop;
const undergroundTop = undergroundElement.offsetTop;

document.onscroll = function() {
    var scrollTop = window.scrollY;
    sliderElement.style.opacity = (slideHeight-scrollTop)/slideHeight > 0 ? (slideHeight-scrollTop)/slideHeight : 0.8;
    var newNavbarHeight = navbarHeight - scrollTop/20 > 60 ? navbarHeight - scrollTop/20 : 60;
    navbarElement.style.height = newNavbarHeight + 'px';
    if (newNavbarHeight < 70) {
        navbarElement.style.backgroundColor = "rgba(100, 100, 100, 0.8)";
    } else {
        navbarElement.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }

    captionElement.style.top = captionTop + scrollTop/3 + 'px';

    if (scrollTop > 350) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
    if (scrollTop > 1000) {
        undergroundElement.style.display = "flex";
    } else {
        undergroundElement.style.display = "none";
    }

    if (scrollTop > 3200) {
        undergroundElement.style.top = undergroundTop - (scrollTop-3200) /3 + 'px';
    }
} 


// Xử lý bấm vào achor trong navbar-nav

const navElements = $$('.nav-link');
const offcanvas = $('.offcanvas');
const bodyElement = $('body');

for (var navElement of navElements) {
    navElement.onclick = function() {
        const offcanvasBackdrop = $('.offcanvas-backdrop');
        if (offcanvas.getAttribute('class', 'show')) {
            offcanvas.classList.remove('show');
            offcanvas.style.visibility = 'hidden';
            offcanvas.setAttribute('aria-hidden', 'true')
            offcanvas.removeAttribute('aria-modal');
            offcanvas.removeAttribute('role');

            offcanvasBackdrop.parentNode.removeChild(offcanvasBackdrop);
            
            bodyElement.setAttribute('style', '');
        }
    }
}
