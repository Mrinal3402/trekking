gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1,
        // markers:true
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:1,
        // markers:true
    }
})

var crsr=document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+'px'
    crsr.style.top=dets.y+'px'

    crsr_blur.style.left=dets.x-125+'px'
    crsr_blur.style.top=dets.y-125+'px'

    
})


// var h4all =document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale=2 
//         crsr.style.border="1px solid white"
//         crsr.style.backgroundColor="transparent"
//     })

//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale=1 
//         crsr.style.border="0px solid white"
//         crsr.style.backgroundColor="white"
//     })
   
   
// })




gsap.from(".aboutus img ,#aboutus-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        // markers:true,

        scrub:2
    }
})

gsap.from("#colon1",{
    y:-250,
    x:-200,
    
    scrollTrigger:{
        target:"#colon1",
        scroller:"body",
        
        scrub:1,
    }
})

gsap.from("#colon2",{
    y:250,
    x:200,
    
    scrollTrigger:{
        target:"#colon2",
        scroller:"body",
        scrub:2,
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 2,
    },
  });
  
