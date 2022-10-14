
if(window.screen.width <= 425){
    if(document.querySelector(".obj_s5_col")){
        document.querySelector(".obj_s5_col").classList.remove("col-5")
        document.querySelector(".obj_s5_col").classList.add("col-11")
    }
    if(document.querySelector(".obj_s5_col2")){
        document.querySelector(".obj_s5_col2").classList.remove("col-5")
        document.querySelector(".obj_s5_col2").classList.add("col-11")
    }
    if(document.querySelectorAll(".obj_hd")){
        document.querySelectorAll(".obj_hd")[0].classList.remove("pt-3")
        document.querySelectorAll(".obj_hd")[1].classList.remove("pt-3")
    }
}

const obj_b =document.querySelectorAll(".obj_b")
const obj_pp =document.querySelectorAll(".obj_pp")
const backgroundDiv=document.querySelector(".background_div")
const backgroundDiv2=document.querySelector(".background_div2")
const obj_hd = document.querySelectorAll(".obj_hd")

obj_b[0].addEventListener("mouseenter",()=>{
    obj_pp[0].classList.add("obj_pp_scale")
    obj_hd[0].classList.add("obj_hd_scale")
    backgroundDiv.classList.add("bg_scale")
})
obj_b[1].addEventListener("mouseenter",()=>{
    obj_pp[1].classList.add("obj_pp_scale")
    obj_hd[1].classList.add("obj_hd_scale")
    backgroundDiv2.classList.add("bg_scale_2")
})

obj_b[0].addEventListener("mouseleave",()=>{
    obj_pp[0].classList.remove("obj_pp_scale")
    obj_hd[0].classList.remove("obj_hd_scale")
    backgroundDiv.classList.remove("bg_scale")
})
obj_b[1].addEventListener("mouseleave",()=>{
    obj_pp[1].classList.remove("obj_pp_scale")
    obj_hd[1].classList.remove("obj_hd_scale")
    backgroundDiv2.classList.remove("bg_scale_2")
})
