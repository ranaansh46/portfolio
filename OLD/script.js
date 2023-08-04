let navb0 = document.getElementById("navbutton0");
let navb1 = document.getElementById("navbutton1");
let navb2 = document.getElementById("navbutton2");
let navb3 = document.getElementById("navbutton3");
let back_to_Top = document.getElementById('back_to_Top');
let portfolio = document.getElementById('Portfolio');
let trident = document.getElementById('Trident');
let thunder_bat = document.getElementById('Thunderbat');

navb0.addEventListener('click', () => {
    window.open('Index.html');
})
navb1.addEventListener('click', () => {
    window.open('https://twitter.com/ranaansh46', '_blank');
})
navb2.addEventListener('click', () => {
    window.open('https://medium.com/@ranaansh46', '_blank');
})
navb3.addEventListener('click', () => {
    window.open('https://www.youtube.com/@moon.ranaansh46/featured', '_blank');
})

back_to_Top.addEventListener('click',()=>{
    scrollTo(0,0)
})
trident.addEventListener('click',()=>{
    window.open('https://github.com/ranaansh46/trident','_blank');
})
thunder_bat.addEventListener('click',()=>{
    window.open('https://github.com/ranaansh46/thunder_Bat','_blank');
})
portfolio.addEventListener('click',()=>{
    window.open('https://github.com/ranaansh46/portfolio','_blank');
})


var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  