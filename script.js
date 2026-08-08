const menuToggle=document.getElementById("menuToggle");
const navbar=document.getElementById("navbar");

menuToggle.onclick=()=>{

navbar.classList.toggle("active");

};
const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},4000);