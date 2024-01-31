var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

})
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsrBlur.style.left = dets.x -150+"px"
    crsrBlur.style.top = dets.y -150+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "0.3px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })

})



gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11",
        scrub: 2
    }
    
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers:true
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-info",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.7,
    // scrollTrigger:{
    //     trigger:"#about-us",
    //     scroller:"body",
    //     markers:true
    //     start: "top 60%",
    //     end:"top 55%",
    //     scrub:3
    // }
})

gsap.from(".card",{
    scale:0.8,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 75%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})

gsap.from("#pg4>h1",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"pg4 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})