gsap.to(".wave1", { rotate: 3600, duration: 300, repeat: -1 });
gsap.to(".wave2", { rotate: 3600, duration: 200, repeat: -1 });

$(document).ready(function() {
    let visible1 = false;

    $(".btnn1").on("click", function() {
        console.log("ready")
        if (!visible1) {
            $(".about1").animate({ scale: 1});
            $(".tog1").animate({ scale: 0 });
            gsap.to(".line1",{rotate:560,duration:1})
        } else {
            $(".tog1").animate({  scale: 1 });
            $(".about1").animate({  scale: 0 });
            gsap.to(".line1",{rotate:0,duration:1})
        }

        visible1 = !visible1;
    });
});

$(document).ready(function() {
    let visible2 = false;

    $(".macho").on("click", function() {
        console.log("ready")
        if (!visible2) {
            $(".about2").animate({ scale: 1 });
            $(".tog2").animate({ scale: 0 });
            gsap.to(".line1", { rotate: 560, duration: 1 });
        } else {
            $(".about2").animate({ scale: 0 });
            $(".tog2").animate({ scale: 1 });
            gsap.to(".line2", { rotate: 0, duration: 1 });
        }

        visible2 = !visible2;
    });
});

$(document).ready(function() {
    let visible3 = false;

    $(".btnn3").on("click", function() {
        if (!visible3) {
            $(".about3").animate({ scale: 1 });
            $(".tog3").animate({ scale: 0 });
            gsap.to(".line3",{rotate:560,duration:1})
        } else {
            $(".tog3").animate({ scale: 1 });
            $(".about3").animate({ scale: 0 });
            gsap.to(".line3",{rotate:0,duration:1})
        }

        visible3 = !visible3;
    });
});


const tl = gsap.timeline({ defaults: { duration: 1 } });

const targets2 = $(".part2");
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tl.fromTo(".part22", { y: 10000 }, { y: 0 });
        }else{
            tl.to(".part22", { y: 1000 })
        }
    });
}, { threshold: 0.3});

targets2.each(function() {
    observer2.observe(this);
});



$(".customer1").hover(
    ()=>{
    $(".customer1").animate({height:"33rem"})
    $(".customer1").css({top:"3rem"})
    $(".hide1").animate({scale:1,height:"25rem"})
    $(".hide1").css({transform:"translateY(2rem)"})
    },
    ()=>{
    $(".customer1").animate({height:"18rem"})
    $(".customer1").css({top:"10rem"})
    $(".hide1").animate({scale:0,height:0})
    })

$(".customer2").hover(
    ()=>{
    $(".customer2").animate({height:"33rem"})
    $(".customer2").css({top:"3rem"})
    $(".hide2").animate({scale:1,height:"25rem"})
    $(".hide2").css({transform:"translateY(2rem)"})
    },
    ()=>{
    $(".customer2").animate({height:"18rem"})
    $(".customer2").css({top:"6rem"})
    $(".hide2").animate({scale:0,height:0})
    })

$(".customer3").hover(
    ()=>{
    $(".customer3").animate({height:"33rem"})
    $(".hide3").animate({scale:1,height:"25rem"})
    $(".hide3").css({transform:"translateY(2rem)"})
    },
    ()=>{
    $(".customer3").animate({height:"18rem"})
    $(".hide3").animate({scale:0,height:0})
    })
    
