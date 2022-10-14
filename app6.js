const advideos = document.querySelectorAll(".advideo")

advideos.forEach((e)=>{
e.addEventListener("mouseenter",()=>{
    e.play()
})

e.addEventListener("mouseleave",()=>{
    e.pause()
})
})
