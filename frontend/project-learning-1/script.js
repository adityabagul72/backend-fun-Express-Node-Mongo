var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets){
     crsr.style.left = dets.x+"px"
     crsr.style.top = dets.y+"px"
     blur.style.left = dets.x- 200 +"px"
     blur.style.top = dets.y- 200 +"px"
})



gsap.to('#nav',{
    backgroundColor:"black",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to('#main',{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})