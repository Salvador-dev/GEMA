const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g,
    "<span>$&</span>");

    const element = document.querySelectorAll("span");
    for(let i = 0; i<element.length; i++){
        element[i].style.transform = "rotate("+i*18+"deg) "
        
    }

    document.addEventListener('scroll', e=>{
        document.querySelector('.text').style.transform = `rotate(-${80+scrollY/3}deg)`

    })

img = document.querySelectorAll("IMG");


img.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let el = document.querySelector("." + item.getAttribute("data-link"));
        el.scrollIntoView({block: "center", behavior: "smooth"});
        
        
        
    })
})
    
