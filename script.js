const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png"
        sosmed1.src = "img/instagramdark.svg"
        sosmed2.src = "img/linkedindark.svg"
        sosmed3.src = "img/tiktokdark.svg"
        sosmed4.src = "img/githubdark.svg"
        sosmed5.src = "img/spotifydark.svg"
    }
    else{
        icon.src = "img/moon.png"
        sosmed1.src = "img/instagram.svg"
        sosmed2.src = "img/linkedin.svg"
        sosmed3.src = "img/tiktok.svg"
        sosmed4.src = "img/github.svg"
        sosmed5.src = "img/spotify.svg"
    }
}

var sosmed1 = document.getElementById("sosmed1");
var sosmed2 = document.getElementById("sosmed2");
var sosmed3 = document.getElementById("sosmed3");
var sosmed4 = document.getElementById("sosmed4");
var sosmed5 = document.getElementById("sosmed5");

// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//     }
//     else{
//     }
// }
