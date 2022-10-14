const menu = document.querySelector("#menu")
const button =document.querySelector(".menu-button")

const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".logo-img")
const cbtn=document.querySelector(".contactusbtn")
const moptn = document.querySelector(".menu-options")
const menurow = document.querySelector(".menu-row")
const menuarrow = document.querySelector(".menu-arrow")

cbtn.addEventListener("click",(e)=>{
    window.location="./contactus.html"
    e.stopPropagation()
})

logo.addEventListener("click",(e)=>{
    window.location="./index.html"
    e.stopPropagation()
})
navbar.addEventListener("click",(e)=>{

    if(moptn.style.display !== "block"){
    moptn.classList.remove("menu-box")
    menurow.classList.remove("menu-options-opacity")
    moptn.style="display:block;"
    menurow.style="display:flex"
    navbar.classList.add("bg-light")
    }else{

        menurow.classList.add("menu-options-opacity")
        moptn.classList.add("menu-box")
    
        
        
        setTimeout(()=>{
            moptn.style="display:none"
            navbar.classList.remove("bg-light")
        },1000)
    }
    e.stopPropagation()
})

document.body.addEventListener("contextmenu",(e)=>{
e.preventDefault()
})

let checkLeave = false;

moptn.addEventListener("mouseenter",()=>{
    checkLeave=true;
    // moptn.classList.remove("menu-box")
    // menurow.classList.remove("menu-options-opacity")
    // moptn.style="display:block;"
    // menurow.style="display:flex"
})

// moptn.addEventListener("mouseleave",()=>{
//     checkLeave=false;
//     menurow.classList.add("menu-options-opacity")
//     moptn.classList.add("menu-box")
//     setTimeout(()=>{
//         moptn.style="display:none"
//     },1000)

// })

// navbar.addEventListener("mouseleave",(e)=>{


//         menurow.classList.add("menu-options-opacity")
//         moptn.classList.add("menu-box")    
//         setTimeout(()=>{
//             moptn.style="display:none"
//         },1000)
    
    
//     e.stopPropagation()

// })


document.body.addEventListener("click",()=>{

    menurow.classList.add("menu-options-opacity")
    moptn.classList.add("menu-box")
  
   
    setTimeout(()=>{
        moptn.style="display:none"
        navbar.classList.remove("bg-light")
    },1000)   
})

if(window.screen.width <=375){
    document.querySelector(".footer_menu_div").classList.remove("my-3")
}



if(window.screen.width <=1024){
    document.querySelector(".menu-row").classList.remove("mx-4")
}



if(window.screen.width <= 425 && window.screen.width >= 375){
document.querySelector(".footer_menu_div").classList.remove("my-3")
}
// document.querySelector("#j-scroll li").addEventListener("click",()=>{
//     document.querySelector(".j-row").style.backgroundImage=""
//     document.querySelector(".j-row").classList.add("changeBackground")
    
      
      
//     setTimeout(()=>{
//         document.querySelector(".j-row").style.backgroundImage="url('./res/equip.png')"
//     },700)

       
//         setTimeout(()=>{

//             document.querySelector(".j-row").classList.remove("changeBackground")
//         },1000)
// }
//     )
// advideoplay.addEventListener("",()=>{
//     document.querySelector(".ad-video-play iframe").style.display="block"
//     document.querySelector(".ad-video-play img").style.display="none"
// })

// const navbar =document.querySelector("#nav")

// button.addEventListener("click",()=>{
//     menu.style.display="block";
//     navbar.style.position="static"
//     navbar.style.opacity="0"
//     document.querySelector("#button").style.opacity="0"
//     document.querySelector(".p1").style.opacity="0"
//     document.querySelector("#carouselExampleIndicators").style.opacity="0"
//     document.querySelector(".p2").style.opacity="0"
//     document.querySelector("#objectives").style.display="none"
// })

// const buttonClose=document.querySelector(".close")

// buttonClose.addEventListener("click",()=>{
//     menu.style.display="none"
//     navbar.style.position="fixed"
//     document.querySelector("#button").style.opacity="1"
//     document.querySelector(".p1").style.opacity="1"
//     document.querySelector("#carouselExampleIndicators").style.opacity="1"
//     navbar.style.opacity="1"
//     document.querySelector(".p2").style.opacity="1"
//     document.querySelector("#objectives").style.display="block"
// })


const button2 = document.querySelector("#button")
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const slider=document.querySelector("#carousel")
const objdisplay=document.querySelector(".obj-display")

const divi=document.querySelector(".div-i")
const li1=document.querySelector(".li1")
const li2=document.querySelector(".li2")
const li3=document.querySelector(".li3")
const li4=document.querySelector(".li4")

// const topbarp=document.querySelectorAll(".top-bar-span")

// window.onscroll = ()=>{



//     // if(window.scrollY>733){
//     //     button2.classList.add("button")

//     //     setTimeout(()=>{
//     //     button2.classList.add("button2")
//     //     p1.style.display="block"
//     //     p2.style.display="block"
//     //     slider.style.display="block"
//     //     },1000)
//     // }


//     if(window.scrollY<100){
//         topbarp[0].classList.remove("top-bar-p-an")
//         topbarp[1].classList.remove("top-bar-p-an")
//         topbarp[2].classList.remove("top-bar-p-an")   
//     }

//     if(window.scrollY>100 && window.scrollY<=1205){
//         // li1.innerHTML="About"
//         // li2.innerHTML=""
//         // li3.innerHTML=""
//         // li4.innerHTML=""
//         topbarp[0].classList.add("top-bar-p-an")
//         topbarp[1].classList.remove("top-bar-p-an")
//         topbarp[2].classList.remove("top-bar-p-an")

//     }else if(window.scrollY>1205 && window.scrollY<=1995){
//         // li2.innerHTML="Business"
//         // li1.innerHTML=""
//         // li3.innerHTML=""
//         // li4.innerHTML=""
//         topbarp[1].classList.add("top-bar-p-an")
//         topbarp[0].classList.remove("top-bar-p-an")
//         topbarp[2].classList.remove("top-bar-p-an")
       
//     }else if(window.scrollY>1995 && window.scrollY<=3375){
//         // li2.innerHTML=""
//         // li1.innerHTML=""
//         // li3.innerHTML="Objectives"
//         // li4.innerHTML=""
//         topbarp[2].classList.add("top-bar-p-an")
//         topbarp[0].classList.remove("top-bar-p-an")
//         topbarp[1].classList.remove("top-bar-p-an")
      
//     }
//     else if(window.scrollY>3375){
//         // li2.innerHTML=""
//         // li1.innerHTML=""
//         // li3.innerHTML=""
//         // li4.innerHTML="Newsroom"

//     }
//     // if(window.scrollY<155){
//     //     window.scrollTo(0,0)
//     // }
//     // if(window.scrollY>=155 && window.scrollY<=250){
//     //     window.scrollTo(0,733)
//     // }
   
//     // if(window.scrollY>=1406 && window.scrollY<1500){
//     //     window.scrollTo(0,1866)
//     // }
   
// }
// topbarp[0].addEventListener("click",()=>{
//     window.scrollTo(0,653)
// })

// topbarp[1].addEventListener("click",()=>{
//     window.scrollTo(0,1753)
// })

// topbarp[2].addEventListener("click",()=>{
//     window.scrollTo(0,2586)
// })


const newsrooms= document.querySelectorAll(".newsroom")
const spanedit1=document.querySelector(".span1")
const spanedit2=document.querySelector(".span2")
const spanedit3=document.querySelector(".span3")
newsrooms[0].addEventListener("mouseenter",()=>{
    spanedit1.classList.add("newclass")
})
newsrooms[0].addEventListener("mouseleave",()=>{
    spanedit1.classList.remove("newclass")
})
newsrooms[1].addEventListener("mouseenter",()=>{
    spanedit2.classList.add("newclass")
})
newsrooms[1].addEventListener("mouseleave",()=>{
    spanedit2.classList.remove("newclass")
})
newsrooms[2].addEventListener("mouseenter",()=>{
    spanedit3.classList.add("newclass")
})
newsrooms[2].addEventListener("mouseleave",()=>{
    spanedit3.classList.remove("newclass")
})

