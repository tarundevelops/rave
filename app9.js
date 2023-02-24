const jbtn=document.querySelectorAll(".j_btn")
const j_img=document.querySelectorAll(".j_img")

// const j_p=document.querySelector(".j_p")

jbtn.forEach((e,i)=>{
    if(i===0){
        e.addEventListener("click",()=>{
            j_img[0].classList.add("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }


    if(i===1){
        e.addEventListener("click",()=>{
            j_img[1].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })

    }
    if(i===2){
        e.addEventListener("click",()=>{
            j_img[2].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===3){
        e.addEventListener("click",()=>{
            j_img[3].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===4){
        e.addEventListener("click",()=>{
            j_img[4].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===5){
        e.addEventListener("click",()=>{
            j_img[5].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===6){
        e.addEventListener("click",()=>{
            j_img[6].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===7){
        e.addEventListener("click",()=>{
            j_img[7].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[4].classList.remove("active")
            j_img[8].classList.remove("active")
        })
    }
    if(i===8){
        e.addEventListener("click",()=>{
            j_img[8].classList.add("active")
            j_img[0].classList.remove("active")
            j_img[1].classList.remove("active")
            j_img[2].classList.remove("active")
            j_img[3].classList.remove("active")
            j_img[5].classList.remove("active")
            j_img[6].classList.remove("active")
            j_img[7].classList.remove("active")
            j_img[4].classList.remove("active")
        })
    }
 
  
})



function callback(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
           
            if(j_img[0].classList.contains("active")){
                jbtn[0].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")

                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 1"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

                
            } else if(j_img[1].classList.contains("active")){
                jbtn[1].classList.add("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")

                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 2"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)


            }else if(j_img[2].classList.contains("active")){
                jbtn[2].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")
               
                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 3"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)


            }else if(j_img[3].classList.contains("active")){
                jbtn[3].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")
               
                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 4"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

          
            }else if(j_img[4].classList.contains("active")){
                jbtn[4].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")
           
                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 5"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

            }else if(j_img[5].classList.contains("active")){
                jbtn[5].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")

                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 6"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

           
            }else if(j_img[6].classList.contains("active")){
                jbtn[6].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")

                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 7"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

           
            }else if(j_img[7].classList.contains("active")){
                jbtn[7].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[8].classList.remove("j_btn_bbcw")
               
                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 8"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

           
            }else if(j_img[8].classList.contains("active")){
                jbtn[8].classList.add("j_btn_bbcw")
                jbtn[1].classList.remove("j_btn_bbcw")
                jbtn[2].classList.remove("j_btn_bbcw")
                jbtn[3].classList.remove("j_btn_bbcw")
                jbtn[0].classList.remove("j_btn_bbcw")
                jbtn[4].classList.remove("j_btn_bbcw")
                jbtn[5].classList.remove("j_btn_bbcw")
                jbtn[6].classList.remove("j_btn_bbcw")
                jbtn[7].classList.remove("j_btn_bbcw")
           
                // j_p.classList.add("d-none")
                // j_p.innerHTML="Journey Text 9"
                // setTimeout(()=>{
                //     j_p.classList.remove("d-none")
                // },1000)

            }
        }
    })
}

const mutationObserver2 = new MutationObserver(callback)

mutationObserver2.observe(j_img[0], { attributes: true })
mutationObserver2.observe(j_img[1], { attributes: true })
mutationObserver2.observe(j_img[2], { attributes: true })
mutationObserver2.observe(j_img[3], { attributes: true })
mutationObserver2.observe(j_img[4], { attributes: true })
mutationObserver2.observe(j_img[5], { attributes: true })
mutationObserver2.observe(j_img[6], { attributes: true })
mutationObserver2.observe(j_img[7], { attributes: true })
mutationObserver2.observe(j_img[8], { attributes: true })