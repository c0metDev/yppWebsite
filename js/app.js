const scroll = new LocomotiveScroll({
    el: document.querySelector("#locomotive"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});
document.querySelector('.ham').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});

document.querySelector('.cross').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});

window.addEventListener('scroll', function () { var nav = document.querySelector('nav'); nav.classList.toggle('sticky', window.scrollY > 0); })

TweenMax.from('nav', 1, { delay: 1.5, x: -100, opacity: 0, ease: Power2.easeInOut })
TweenMax.from('.land img', 1, { delay: 0.5, y: -100, opacity: 0, ease: Power2.easeInOut })
TweenMax.from('.land .text', 1, { delay: 0.5, y: +100, opacity: 0, ease: Power2.easeInOut })