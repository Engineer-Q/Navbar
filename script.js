const bars=document.querySelector(".bars")
const navMenu= document.querySelector(".nav-menu")
const navLink=document.querySelectorAll(".nav-link")


bars.addEventListener("click", ()=>{
navMenu.classList.toggle("active")
bars.classList.toggle("active")
})

navLink.forEach(n=>{
    n.addEventListener("click",()=>{
        navMenu.classList.remove("active");
        bars.classList.remove("active");
    })
})