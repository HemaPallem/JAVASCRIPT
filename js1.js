let button=document.querySelector(".button");
let mode="light";
let body=document.querySelector("body");
button.addEventListener("click",()=>{
    if(mode==="light"){
        mode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
})