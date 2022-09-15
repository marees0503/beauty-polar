// show navbar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle')
toggle.onclick = function () {
    nav.classList.toggle('show-nav'); 
    console.log(Error)
}
// remove navber

const navLink =document.querySelectorAll('.nav-link')
function linkAtion(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n=> n.addEventListener('click',linkAtion))