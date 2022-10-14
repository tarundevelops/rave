
const details_btn = document.querySelectorAll(".details_btn")
const details_div = document.querySelectorAll(".details_div")
const details_div_cont =document.querySelectorAll(".details_div_cont")
details_btn.forEach((e,i)=>{
    e.addEventListener("click",()=>{

        if(details_div[i].classList.contains("d-none")){
            details_div[i].classList.remove("details_div_close")
            details_div[i].classList.remove("d-none")
            details_div_cont[i].classList.remove("details_div_cont_op0")
            details_div_cont[i].classList.remove("d-none")
        }else{
            details_div[i].classList.add("details_div_close")
            details_div_cont[i].classList.add("details_div_cont_op0")
            setTimeout(()=>{
                details_div[i].classList.add("d-none")
            },1000)
        }
    
       
    })
})
