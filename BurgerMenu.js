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



// Получаем все ссылки с якорями на странице
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события клика на каждую ссылку
anchorLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  // Предотвращаем стандартное поведение ссылки
  event.preventDefault();

  // Получаем целевой элемент по якорю
  const targetElement = document.querySelector(this.getAttribute('href'));

  // Вычисляем положение целевого элемента относительно верха страницы
  const targetPosition = targetElement.getBoundingClientRect().top;

  // Определяем продолжительность анимации (например, 1 секунда)
  const scrollDuration = 500;

  // Запускаем анимацию прокрутки
  let currentPosition = 0;
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let progress = Math.min(timeElapsed / scrollDuration, 1);

    window.scrollTo(0, startPosition + (targetPosition * progress));

    if (timeElapsed < scrollDuration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, startPosition + targetPosition);
    }
  }

  requestAnimationFrame(animation);
}



});