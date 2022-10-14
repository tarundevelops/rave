const objrow = document.querySelector(".obj-eff")
const objrow2 = document.querySelector(".obj-row2")
const objrow3 = document.querySelector(".obj-row3")
const col =document.querySelector(".obj-eff-col")
const col2 =document.querySelector(".obj-eff-col2")
const col4 =document.querySelector(".obj-eff-col4")
const col1b =document.querySelector(".col1")
const col2b =document.querySelector(".col2")
const col3b =document.querySelector(".col3")
const col4b =document.querySelector(".col4")



objrow.addEventListener("mouseenter",()=>{
col.classList.add("col-expand")
col2.classList.add("col2-expand")

})
objrow.addEventListener("mouseleave",()=>{
col.classList.remove("col-expand")
col2.classList.remove("col2-expand")
})
objrow2.addEventListener("mouseenter",()=>{
col1b.classList.add("col-expand")
col2b.classList.add("col2-expand")

})
objrow2.addEventListener("mouseleave",()=>{
col1b.classList.remove("col-expand")
col2b.classList.remove("col2-expand")
})
objrow3.addEventListener("mouseenter",()=>{
col3b.classList.add("col-expand")
col4b.classList.add("col2-expand")

})
objrow3.addEventListener("mouseleave",()=>{
col3b.classList.remove("col-expand")
col4b.classList.remove("col2-expand")
})



// objrow2_2.addEventListener("mouseenter",()=>{
// col1b_2.classList.add("col-expand")
// col2b_2.classList.add("col2-expand")

// })
// objrow2_2.addEventListener("mouseleave",()=>{
// col1b_2.classList.remove("col-expand")
// col2b_2.classList.remove("col2-expand")
// })