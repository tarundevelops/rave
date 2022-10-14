const divi=document.querySelector(".div-i2")
const li1=document.querySelector(".li-s1")
const li2=document.querySelector(".li-s2")
const li3=document.querySelector(".li-s3")
const li4=document.querySelector(".li-s4")

window.onscroll = ()=>{

    if(window.scrollY>100 && window.scrollY<=1205){
        li1.innerHTML="About"
        li2.innerHTML=""
        li3.innerHTML=""
        li4.innerHTML=""
    }else if(window.scrollY>1205 && window.scrollY<=1995){
        li2.innerHTML="Business"
        li1.innerHTML=""
        li3.innerHTML=""
        li4.innerHTML=""
    }else if(window.scrollY>1995 && window.scrollY<=3375){
        li2.innerHTML=""
        li1.innerHTML=""
        li3.innerHTML="Objectives"
        li4.innerHTML=""
    }
    else if(window.scrollY>3375){
        li2.innerHTML=""
        li1.innerHTML=""
        li3.innerHTML=""
        li4.innerHTML="Newsroom"
    }

}