document.addEventListener('DOMContentLoaded', function() {
var navbarToggle = document.querySelector('.burgerMenuInMain');

navbarToggle.addEventListener('click', function() {
  var navbarMenu = document.querySelector('.navbar');
  if(navbarMenu.style.display==='flex'){
    document.querySelector('.leftElementBlock').style.width=74+"px";
    navbarMenu.style.display='none';
    document.querySelector('.fourElementsInMain ').style.flexDirection="column";
    document.querySelector('.leftElementBlock ').style.flexDirection="row";
    document.querySelector('.buttonTranslate').style.width="100%";
    document.querySelector('.burgerMenuInMain ').classList.toggle('rotate');
    console.log("43");
  }
  else{
    
    document.querySelector('.fourElementsInMain ').style.flexWrap="wrap";
    document.querySelector('.fourElementsInMain ').style.flexDirection="row";
    document.querySelector('.buttonTranslate').style.width="86%";
    document.querySelector('.leftElementBlock ').style.flexDirection="column";
    document.querySelector('.leftElementBlock').style.width=222+"px";
    navbarMenu.style.display='flex';
    document.querySelector('.burgerMenuInMain ').classList.toggle('rotate');
    console.log("fd");
  }

});
});