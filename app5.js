const flip_1=document.querySelector(".flip1")

const flip_2 =document.querySelector(".flip2")

flip_1.addEventListener("mouseenter",()=>
{
    flip_1.classList.remove("flip-box")
    flip_1.classList.remove("flip1-back")
    flip_2.classList.remove("flip2-back")
    flip_1.classList.add("flip1-rotate")

    setTimeout(()=>{
        flip_2.classList.remove("flip-box")
        flip_2.classList.add("flip2-rotate")
        flip_1.classList.add("flip-box")
    },500)
})

flip_2.addEventListener("mouseleave",()=>{
    flip_2.classList.add("flip2-back")
   
    setTimeout(()=>{
        flip_1.classList.remove("flip-box")
        flip_1.classList.remove("flip1-rotate")
        flip_1.classList.add("flip1-back")
        flip_2.classList.add("flip-box")
    },500)
})