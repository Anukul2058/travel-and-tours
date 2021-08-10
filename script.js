gsap.registerPlugin(ScrollTrigger);

// glide js animations

const config = {
    type : "carousel",
    perView : 1,
    animationDuration: 2000,
    autoplay:5000
    
};
new Glide('.glide',config).mount()




// gsap animations for index page
const t1 = gsap.timeline()
t1.to('.discover-nepal', {
    y: '-10vw', scrollTrigger: {
        trigger: ".discover-nepal",
        scrub: true,
        start: "380px 60%",
        end: "450px 20%",
        // markers: true,

    }
})
.to('.description', {
    y: '-10vw', scrollTrigger: {
        trigger: ".discover-nepal",
        scrub: true,
        start: "410px 60%",
        end: "470px 20%",
        // markers: true,

    }
})
.to('#nepal', {
    y: '-10vw', scrollTrigger: {
        trigger: ".discover-nepal",
        scrub: true,
        start: "500px 60%",
        end: "580px 20%",
        // markers: true,

    }
})
.from('.testimony', {
    x: '-100vw', scrollTrigger: {
        trigger: ".testimony",
        scrub: true,
        start: "-100px 60%",
        end: "0px 20%",
        // markers: true,

    }
})



// about page animations


