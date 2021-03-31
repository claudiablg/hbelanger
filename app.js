
const navSlide = () => {

    const hamburger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.main-menu');

    hamburger.addEventListener('click', () => {
         //Toggle Nav
        nav.classList.toggle('nav-active');
         //Hamburger Animation 
        hamburger.classList.toggle('toggle');
    });

}

targetElement.ontouchend = (e) => {
    e.preventDefault();
};

document.body.style.overflow = 'hidden';

navSlide();

//Carousel

$(".gallery").slick({
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: false,
    prevArrow: $('.gallery-arrow.prev'),
    nextArrow: $('.gallery-arrow.next')
});