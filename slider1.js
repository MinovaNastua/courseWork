document.addEventListener('DOMContentLoaded', function() {
var button = document.getElementById('servesesVector');
var button2 = document.getElementById('servesesVector2');
var i=1;

button.addEventListener('click', function() 
  {
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
    }

    if(i==2){
        document.getElementById('interior').textContent = 'ЭКСТЕРЬЕР';
        // document.getElementById('interior').style.fontSize = '398%';
        var servesesMainInfo = "Экстерьер - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth+ 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#8C694F";
        document.getElementById('3o').style.fill="#B0947B";
    }

    if(i==3){
        document.getElementById('interior').textContent = 'ОДЕЖДА';
        var servesesMainInfo = "Дизайн одежды - это процесс создания и воплощения идей в уникальные и привлекательные внешние образы одежды. Он включает в себя выбор тканей, цветов, фасонов и деталей, чтобы создать стиль, который отражает индивидуальность и эстетические предпочтения. Дизайн одежды также учитывает функциональность и комфорт, обеспечивая гармоничное сочетание между внешним видом и практичностью одежды для различных сезонов и случаев.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth*2 + 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#8C694F";
    }



  }
);

button2.addEventListener('click', function() 
  {
    if(i==1){
        i=3;
    }
    else{
      i--;  
    }

    if(i==2){
        document.getElementById('interior').textContent = 'ЭКСТЕРЬЕР';
        // document.getElementById('interior').style.fontSize = '398%';
        var servesesMainInfo = "Экстерьер - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth+ 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#8C694F";
        document.getElementById('3o').style.fill="#B0947B";
    }

    if(i==3){
        document.getElementById('interior').textContent = 'ОДЕЖДА';
        var servesesMainInfo = "Одежда - это внешний вид или внешний облик объекта, такого как здание, автомобиль или человек. Он описывает внешние характеристики, форму, линии, текстуры и цвета объекта. Экстерьер играет важную роль в эстетическом восприятии и может быть использован для передачи определенной атмосферы, стиля или функциональности объекта.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = -document.getElementById('servesesFoto').offsetWidth*2 + 'px';
        document.getElementById('1o').style.fill="#B0947B";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#8C694F";
    }

    if(i==1){
        document.getElementById('interior').textContent = 'ИНТЕРЬЕ';
        var servesesMainInfo = "Интерьер - это искусство создания пространства, где архитектура, дизайн и функциональность взаимодействуют в гармонии. Он воплощает настроение, стиль и характер, отражая индивидуальность и потребности его обитателей. Интерьерный дизайн способен преобразить обычное помещение в уникальное и уютное место, вызывающее эмоции и вдохновляющее жизнь.";
        document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
        document.querySelector('.servesesFoto-SliderLine').style.left = 0 + 'px';
        document.getElementById('1o').style.fill="#8C694F";
        document.getElementById('2o').style.fill="#B0947B";
        document.getElementById('3o').style.fill="#B0947B";
    }

  }
);
}
);

