const scroll = new LocomotiveScroll({
    el: document.querySelector("#locomotive"),
    smooth: true,
    tablet: { smooth: false },
    smartphone: { smooth: false }
});

gsap.from('#content1', {
    duration: 1,
    y: '-100px',
    delay: 0.5,
    opacity: 0,
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#about',
    animation: gsap.from('#content2', { duration: 1, y: '-100px', delay: 1, opacity: 0 }),
});



ScrollTrigger.create({
    trigger: '#about',
    animation: gsap.from('#content3', { duration: 1, y: '-100px', delay: 2, opacity: 0 }),
});

document.querySelector('.ham').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});

document.querySelector('.cross').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});