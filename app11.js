if(window.screen.width <= 375){
 
    if(document.querySelector(".career_s1")){
        document.querySelector(".career_s1").classList.remove("mt-5")
        document.querySelector(".career_s1").classList.add("mt-3")
    }

    if(document.querySelector(".career_s2_div")){
        document.querySelector(".career_s2_div").classList.remove("mt-5")
        document.querySelector(".career_s2_div").classList.add("mt-4")
    }

    if(document.querySelector(".career_s5")){
        document.querySelector(".career_s5").classList.remove("mt-5")
    }
    if(document.querySelector(".career_s6")){
        document.querySelector(".career_s6").classList.remove("p-5")
        document.querySelector(".career_s6").classList.add("p-4")
    }

 
}

if(window.screen.width < 769){
    if(document.querySelector(".bs_col1")){
        document.querySelector(".bs_col1").classList.remove("col-7")
        document.querySelector(".bs_col1").classList.add("col-12")
    }
    if(document.querySelector(".bs_col2")){
        document.querySelector(".bs_col2").classList.remove("col-5")
        document.querySelector(".bs_col2").classList.add("col-12")

    }

    if(document.querySelector(".bs_col1yt")){
        document.querySelector(".bs_col1yt").classList.remove("col-6")
        document.querySelector(".bs_col1yt").classList.add("col-12")
    }

    if(document.querySelectorAll(".bs_colyt")){
        document.querySelectorAll(".bs_colyt").forEach((e,i)=>{
            
            e.classList.remove("col-2")
            e.classList.add("col-4")
            if(i !== 0){
            e.classList.add("pt-3")}
        })
    }
}

if(window.screen.width <= 375 && window.screen.width > 320){
    if(document.querySelector(".career_s1")){
        document.querySelector(".career_s1").classList.remove("mt-5")
        document.querySelector(".career_s1").classList.remove("mt-3")
        document.querySelector(".career_s1").classList.add("mt-4")
    }
}

if(window.screen.width <= 425 && window.screen.width > 375){

    if(document.querySelector(".career_s5")){
        document.querySelector(".career_s5").classList.remove("mt-5")
    }

    if(document.querySelector(".career_s1")){
        document.querySelector(".career_s1").classList.remove("mt-5")
        document.querySelector(".career_s1").classList.add("mt-4")
    }
    if(document.querySelector(".career_s6")){
        document.querySelector(".career_s6").classList.remove("p-5")
        document.querySelector(".career_s6").classList.add("p-4")
    }
}