
const objrow_2 = document.querySelector(".obj-eff_2")
const col_2 =document.querySelector(".obj-eff-col_2")
const col2_2 =document.querySelector(".obj-eff-col2_2")

const obj_p =document.querySelectorAll(".obj-eff-col2_2 p")




objrow_2.addEventListener("mouseenter",()=>{
col_2.classList.add("col_b_expand")
col2_2.classList.add("col2_2_expand")

})
objrow_2.addEventListener("mouseleave",()=>{
col_2.classList.remove("col_b_expand")
col2_2.classList.remove("col2_2_expand")
})





// let check=false;

// function callback(mutationsList, observer) {
//     mutationsList.forEach(mutation => {
//         if (mutation.attributeName === 'class') {

//             if(!check){
//                 wsp.classList.add("wsp-opacity")
//                 check=true;
//             }
           
//             if(ci1.classList.contains("active")){
//                 ws1.classList.add("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.innerHTML="Information about Shooting Floor"
//                 wsp.classList.remove("wsp-animate")
//                 setTimeout(()=>{
                  
//                     wsp.classList.add("wsp-animate")
                    
//                 },1000)
               

//             } else if(ci2.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.add("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.innerHTML="Information about Kitchen Set"
//                 wsp.classList.remove("wsp-animate")
//                 setTimeout(()=>{
                  
//                     wsp.classList.add("wsp-animate")
                
//                 },1000)
               

//             }else if(ci3.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.add("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.innerHTML="Information about Photo Studio"
//                 wsp.classList.remove("wsp-animate")
//                 setTimeout(()=>{
                    
//                     wsp.classList.add("wsp-animate")
                  
//                 },1000)
               

//             }else if(ci4.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.add("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.innerHTML="Information about Recording Facility"
//                 wsp.classList.remove("wsp-animate")
//                 setTimeout(()=>{
                  
//                     wsp.classList.add("wsp-animate")
//                 },1000)
               
//             }else if(ci5.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.add("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.classList.remove("wsp-animate")
//                 wsp.innerHTML="Information about Chroma Setup"
//                 setTimeout(()=>{
                   
//                     wsp.classList.add("wsp-animate")
//                 },1000)
               
//             }else if(ci6.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.add("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.classList.remove("wsp-animate")
//                 wsp.innerHTML="Information about Makeup room"
//                 setTimeout(()=>{
                   
//                     wsp.classList.add("wsp-animate")
//                 },1000)
               
//             }else if(ci7.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.add("fs-4")
//                 ws8.classList.remove("fs-4")
//                 wsp.classList.remove("wsp-animate")
//                 wsp.innerHTML="Information about Equipments"
//                 setTimeout(()=>{
                   
//                     wsp.classList.add("wsp-animate")
//                 },1000)
               
//             }else if(ci8.classList.contains("active")){
//                 ws1.classList.remove("fs-4")
//                 ws2.classList.remove("fs-4")
//                 ws3.classList.remove("fs-4")
//                 ws4.classList.remove("fs-4")
//                 ws5.classList.remove("fs-4")
//                 ws6.classList.remove("fs-4")
//                 ws7.classList.remove("fs-4")
//                 ws8.classList.add("fs-4")
//                 wsp.classList.remove("wsp-animate")
//                 wsp.innerHTML="Information about Properties"
//                 setTimeout(()=>{
                   
//                     wsp.classList.add("wsp-animate")
//                 },1000)
               
//             }
//         }
//     })
// }

// const mutationObserver = new MutationObserver(callback)

// mutationObserver.observe(ci1, { attributes: true })
// mutationObserver.observe(ci2, { attributes: true })
// mutationObserver.observe(ci3, { attributes: true })
// mutationObserver.observe(ci4, { attributes: true })
// mutationObserver.observe(ci5, { attributes: true })
// mutationObserver.observe(ci6, { attributes: true })
// mutationObserver.observe(ci7, { attributes: true })
// mutationObserver.observe(ci8, { attributes: true })

// const explorebtn=document.querySelector(".explore-btn")
// const logoSpan=document.querySelector(".logo-span-edit")

// explorebtn.addEventListener("click",()=>{
// logoSpan.style="display:inline;"
// explorebtn.style="display:none;"
// })

// const depexplorebtn=document.querySelector(".dep-explore")
// const row2=document.querySelector(".row2")
// const row3=document.querySelector(".row3")
// const depboxes=document.querySelectorAll(".dep-box")
// const r2c2=document.querySelector(".r2c2")
// const r2c3=document.querySelector(".r2c3")
// const r3c2=document.querySelector(".r3c2")
// const r3c3=document.querySelector(".r3c3")
// const r2c1=document.querySelector(".r2c1")
// const r3c1=document.querySelector(".r3c1")
// const r1c2=document.querySelector(".r1c2")
// const r1c3=document.querySelector(".r1c3")

// depexplorebtn.addEventListener("click",()=>{
// depexplorebtn.style="display:none;"
// row2.style="display:flex; height:35vh;"
// row3.style="display:flex; height:35vh;"
// depboxes[0].classList.add("dep-box1-translate")
// depboxes[1].classList.add("dep-box2-translate")
// setTimeout(()=>{
// r2c2.style="height:25vh;display:flex;align-items:center;justify-content:center;"
// r2c3.style="height:35vh;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;"
// r3c2.style="height:25vh;display:flex;align-items:center;justify-content:center;"
// r3c3.style="height:35vh;display:block;font-size:13px;font-weight:500;"
// r2c1.style="height:35vh;display:block;"
// r3c1.style="height:35vh;display:block;"
// r1c2.style="height:25vh;display:flex;align-items:center;justify-content:center;"
// r1c3.style="height:35vh;display:block;font-size:13px;font-weight:500;"
// depboxes[0].style="display:none"
// depboxes[1].style="display:none"
// },2000)
// })

