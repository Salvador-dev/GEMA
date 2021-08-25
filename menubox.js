const menu = document.querySelector(".menu-res")
const menubox = document.createElement("DIV")
const x = document.createElement("DIV");
x.classList.add("x");
x.innerHTML = "x";





menubox.id = "menubox"
document.body.appendChild(menubox);


const nav = document.querySelector("ul")

menu.addEventListener("click", ()=>{
    menubox.classList.add("active")
    menubox.appendChild(x)
    x.classList.add("active")
    menubox.appendChild(nav)
    nav.classList.add("active")
 })
 
 x.addEventListener("click", ()=>{
     menubox.classList.remove('active')
     x.classList.remove('active')
 })