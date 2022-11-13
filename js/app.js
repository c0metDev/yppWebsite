const scroll = new LocomotiveScroll({
    el: document.querySelector("#locomotive"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});

gsap.from('.icon-scroll', {
    duration: 1,
    y: '-50px',
    delay: 3,
    opacity: 0,
    ease: 'power1',
    markers: true
})
