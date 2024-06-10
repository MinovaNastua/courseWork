document.addEventListener('DOMContentLoaded', function() {
var button = document.getElementById('servesesVector');
var button2 = document.getElementById('servesesVector2');
var i=1;

document.getElementById('languageToggle').addEventListener('click', function() 
  {
    translate();
    }
    )



button.addEventListener('click', function() 
  {
    const windowWidth = window.innerWidth;
        
    if(i==3){
        i=1;
    }
    else{
      i++;  
    }
    
    if(i==1){
        document.getElementById('interior').textContent = 'ИНТЕРЬЕP';
        var servesesMainInfo = "Интерьер - это искусство создания пространства, где архитектура, дизайн и функциональность взаимодействуют в гармонии. Он воплощает настроение, стиль и характер, отражая индивидуальность и потребности его обитателей. Интерьерный дизайн способен преобразить обычное помещение в уникальное и уютное место, вызывающее эмоции и вдохновляющее жизнь.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = 0 + 'px';
        document.getElementById('1o').style.fill="#8C694F";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#B0947B";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '289%';
        }
    }

    if(i==2){
        document.getElementById('interior').textContent = 'ЭКСТЕРЬЕР';
        document.getElementById('interior').style.letterSpacing = '0.6em';
        var servesesMainInfo = "Экстерьер - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth+ 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#8C694F";
        document.getElementById('3o').style.fill="#B0947B";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '247%';
        }
    }

    if(i==3){
        document.getElementById('interior').textContent = 'ОДЕЖДА';
        document.getElementById('interior').style.letterSpacing = '0.71em';
        var servesesMainInfo = "Дизайн одежды - это процесс создания и воплощения идей в уникальные и привлекательные внешние образы одежды. Он включает в себя выбор тканей, цветов, фасонов и деталей, чтобы создать стиль, который отражает индивидуальность и эстетические предпочтения. Дизайн одежды также учитывает функциональность и комфорт, обеспечивая гармоничное сочетание между внешним видом и практичностью одежды для различных сезонов и случаев.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth*2 + 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#8C694F";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '247%';
        }
    }



    translate();
  }
);

button2.addEventListener('click', function() 
  {

    const windowWidth = window.innerWidth;
    
    if(i==1){
        i=3;
    }
    else{
      i--;  
    }

    if(i==2){
        document.getElementById('interior').textContent = 'ЭКСТЕРЬЕР';
        document.getElementById('interior').style.letterSpacing = '0.6em';
        var servesesMainInfo = "Экстерьер - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth+ 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#8C694F";
        document.getElementById('3o').style.fill="#B0947B";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '247%';
        }
    }

    if(i==3){
        document.getElementById('interior').textContent = 'ОДЕЖДА';
        var servesesMainInfo = "Одежда - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth*2 + 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#8C694F";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '247%';
        }
        
        if(windowWidth < 845) {
          document.getElementById('interior').style.fontSize = '289%';
        }
    }

    if(i==1){
        document.getElementById('interior').textContent = 'ИНТЕРЬЕ';
        document.getElementById('interior').style.letterSpacing = '0.71em';
        var servesesMainInfo = "Интерьер - это искусство создания пространства, где архитектура, дизайн и функциональность взаимодействуют в гармонии. Он воплощает настроение, стиль и характер, отражая индивидуальность и потребности его обитателей. Интерьерный дизайн способен преобразить обычное помещение в уникальное и уютное место, вызывающее эмоции и вдохновляющее жизнь.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = 0 + 'px';
        document.getElementById('1o').style.fill="#8C694F";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#B0947B";
        if(windowWidth < 943) {
          document.getElementById('interior').style.fontSize = '289%';
        }
        
        if(windowWidth < 845) {
          document.getElementById('interior').style.fontSize = '289%';
        }
    }

    translate();
  }
);

function translate(){
  if(localStorage.getItem('lang') === 'RU'){
    if(i==1){
        document.getElementById('interior').textContent = 'ИНТЕРЬЕP';
        document.getElementById('servesesMainInfo').textContent = "Интерьер - это искусство создания пространства, где архитектура, дизайн и функциональность взаимодействуют в гармонии. Он воплощает настроение, стиль и характер, отражая индивидуальность и потребности его обитателей. Интерьерный дизайн способен преобразить обычное помещение в уникальное и уютное место, вызывающее эмоции и вдохновляющее жизнь.";
        }
        if(i==2){
          document.getElementById('interior').textContent = 'ЭКСТЕРЬЕР';
          document.getElementById('servesesMainInfo').textContent = "Экстерьер - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
      }
      if(i==3){
        document.getElementById('interior').textContent = 'ОДЕЖДА';
        document.getElementById('servesesMainInfo').textContent = "Дизайн одежды - это процесс создания и воплощения идей в уникальные и привлекательные внешние образы одежды. Он включает в себя выбор тканей, цветов, фасонов и деталей, чтобы создать стиль, который отражает индивидуальность и эстетические предпочтения. Дизайн одежды также учитывает функциональность и комфорт, обеспечивая гармоничное сочетание между внешним видом и практичностью одежды для различных сезонов и случаев.";
        }
    }
    else{
      if(i==1){
        document.getElementById('interior').textContent = 'INTERIOR';
        document.getElementById('servesesMainInfo').textContent = "Interior design is the art of creating a space where architecture, design and functionality interact in harmony. It embodies mood, style and character, reflecting the personality and needs of its inhabitants. Interior design can transform an ordinary room into a unique and cozy place that evokes emotions and inspires life.";
        }
        if(i==2){
          document.getElementById('interior').textContent = 'EXTERIOR';
          document.getElementById('servesesMainInfo').textContent = "Exterior is the appearance or appearance of an object such as a building, car or person. It describes the external characteristics, shape, lines, textures and colors of an object. The exterior plays an important role in aesthetic perception and can be used to convey a certain atmosphere, style or functionality of a property.";
      }
      if(i==3){
        document.getElementById('interior').textContent = 'CLOTH';
        document.getElementById('servesesMainInfo').textContent = "Fashion design is the process of creating and translating ideas into unique and attractive clothing designs. It involves selecting fabrics, colors, cuts and details to create a style that reflects personality and aesthetic preferences. Fashion design also takes into account functionality and comfort, providing a harmonious balance between appearance and practicality of clothing for different seasons and occasions.";
        }
    }
}

}
);



