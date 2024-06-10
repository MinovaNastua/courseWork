document.addEventListener('DOMContentLoaded', function() {


let block1 = document.getElementById("foto1");
let block2 = document.getElementById("foto2");
let block3 = document.getElementById("foto33");
let block4 = document.getElementById("foto4");

block1.addEventListener('mouseenter', () => {
  block1.style.transform = 'scale(1.1)';
  block2.style.transform = 'scale(0.9)';
  block3.style.transform = 'scale(0.9)';
  block4.style.transform = 'scale(0.9)';
  block2.style.opacity = '0.5';
  block3.style.opacity = '0.5';
  block4.style.opacity = '0.5';
});
block1.addEventListener('mouseleave', () => {
  block1.style.transform = 'scale(1)';
  block2.style.transform = 'scale(1)';
  block3.style.transform = 'scale(1)';
  block4.style.transform = 'scale(1)';
  block2.style.opacity = '1';
  block3.style.opacity = '1';
  block4.style.opacity = '1';
});



block2.addEventListener('mouseenter', () => {
  
    block1.style.transform = 'scale(0.9)';
    block3.style.transform = 'scale(0.9)';
    block4.style.transform = 'scale(0.9)';
  block2.style.transform = 'scale(1.1)';    
  block1.style.opacity = '0.5';
  block3.style.opacity = '0.5';
  block4.style.opacity = '0.5';
  });
  
  block2.addEventListener('mouseleave', () => {
    block2.style.transform = 'scale(1)';
    block1.style.transform = 'scale(1)';
    block3.style.transform = 'scale(1)';
    block4.style.transform = 'scale(1)';
    block1.style.opacity = '1';
  block3.style.opacity = '1';
  block4.style.opacity = '1';
  });


  block3.addEventListener('mouseenter', () => {
  block1.style.transform = 'scale(0.9)';
  block2.style.transform = 'scale(0.9)';
  block4.style.transform = 'scale(0.9)';
  block3.style.transform = 'scale(1.1)';
    
  block2.style.opacity = '0.5';
  block1.style.opacity = '0.5';
  block4.style.opacity = '0.5';
  });
  
  block3.addEventListener('mouseleave', () => {
    block3.style.transform = 'scale(1)';
    block1.style.transform = 'scale(1)';
    block2.style.transform = 'scale(1)';
    block4.style.transform = 'scale(1)';
    block2.style.opacity = '1';
  block1.style.opacity = '1';
  block4.style.opacity = '1';
  });


  block4.addEventListener('mouseenter', () => {
    block4.style.transform = 'scale(1.1)';
  block1.style.transform = 'scale(0.9)';
  block2.style.transform = 'scale(0.9)';
  block3.style.transform = 'scale(0.9)';
    
  block2.style.opacity = '0.5';
  block3.style.opacity = '0.5';
  block1.style.opacity = '0.5';
  });
  
  block4.addEventListener('mouseleave', () => {
    block4.style.transform = 'scale(1)';
    block1.style.transform = 'scale(1)';
    block2.style.transform = 'scale(1)';
    block3.style.transform = 'scale(1)';
    block2.style.opacity = '1';
  block3.style.opacity = '1';
  block1.style.opacity = '1';
  });

    
  function animateOnScroll() {
  let animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', animateOnScroll);


  function updateBackgroundColor() {
    const pageWrapper = document.querySelector('.deskTop');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let currentSectionIndex = Math.floor(scrollPosition / 730);

    switch (currentSectionIndex) {
      case 0:
        document.body.style.backgroundColor = '#B0947B';
        break;
      case 1:
        document.body.style.backgroundColor = '#EAE4DD';
        break;
      case 2:
        document.body.style.backgroundColor = '#B0947B';
         break;
        case 3:
          document.body.style.backgroundColor = '#B0947B';
          break;
        case 4:
        document.body.style.backgroundColor = '#977760';
            break;
        case 5:
        document.body.style.backgroundColor = '#977760';
            break;
        case 6:
        document.body.style.backgroundColor = '#977760';
            break;
        case 7:
        document.body.style.backgroundColor = '#F0ECE6';
            break; 
            case 7:
        document.body.style.backgroundColor = '#977760';
            break; 
    }
  }
  
  // Добавляем обработчик события на скролл
  window.addEventListener('scroll', updateBackgroundColor);

})