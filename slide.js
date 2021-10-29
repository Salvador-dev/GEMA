const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g,
    "<span>$&</span>");

    const element = document.querySelectorAll("span");
    for(let i = 0; i<element.length; i++){
        element[i].style.transform = "rotate("+i*12+"deg) ";
        element[i].style.background = "transparent";
        
    }

    document.addEventListener('scroll', e=>{
        text.style.transform = `rotate(-${75+scrollY/3}deg)`

    })

img = document.querySelectorAll("IMG");


img.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let el = document.querySelector("." + item.getAttribute("data-link"));
        el.scrollIntoView({block: "center", behavior: "smooth"});
        
        
        
    })
})
    
