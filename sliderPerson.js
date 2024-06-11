document.addEventListener('DOMContentLoaded', function() {

document.getElementById('languageToggle').addEventListener('click', function() 
    {
      translate2();
      translate();
      }

      )

    let button = document.getElementById('porsonalVector');
    let button2 = document.getElementById('porsonalVector2');
    let i=1;
    let article1ru = "Хай! Я Евгений Башаримов, но ты можешь называть меня просто Евген. Мои работы представляют мою страсть к дизайну и мой талант в создании эстетически привлекательных и функциональных решений. Я стремлюсь к инновациям, воплощая уникальные идеи в ярких и эмоциональных проектах, которые вдохновляют и взаимодействуют с аудиторией. В моих работах сочетаются креативность, техническая экспертиза и внимание к деталям, чтобы создать превосходный пользовательский опыт и достичь поставленных целей.";
    let article1en = "Hi! I'm Evgeny Basharimov, but you can just call me Evgen. My work represents my passion for design and my talent for creating aesthetically pleasing and functional solutions. I strive to innovate by translating unique ideas into vibrant and emotional projects that inspire and connect with audiences. My work combines creativity, technical expertise and attention to detail to create a superior user experience and achieve your goals."
    
    let article2ru = "Меня зовут Степан Казаков, и я возглавляю эту студию уже 10 лет. Моя история с дизайном началась еще в студенческие годы, когда я с головой погрузилась в изучение графического дизайна, типографики и иллюстрации. После окончания университета я работала в нескольких ведущих дизайн-студиях, постепенно накапливая опыт и оттачивая свои профессиональные навыки.";
    let article2en = "My name is Stepan Kazakov, and I have been heading this studio for 10 years. My history with design began back in my student years, when I plunged headlong into studying graphic design, typography and illustration. After graduating from university, I worked in several leading design studios, gradually gaining experience and honing my professional skills."
    
    let article4ru = "Меня зовут Виктория Книга, и я являюсь менеджером этой студии уже 5 лет. Моя история с дизайном началась несколько иначе - после окончания экономического факультета я пришел в эту студию в качестве ассистента менеджера. Мне сразу же понравилась атмосфера творчества и инноваций, царившая здесь. Я решил посвятить себя развитию этого бизнеса и постепенно вырос до должности менеджера проектов."
    let article4en = "My name is Viktoria Kniga, and I have been the manager of this studio for 5 years. My story with design began a little differently - after graduating from the Faculty of Economics, I came to this studio as an assistant manager. I immediately liked the atmosphere of creativity and innovation that reigned here. I decided to devote myself to developing this business and gradually rose to the position of project manager."
    
    let article3ru = "Дизайн экстерьеров - это моя давняя страсть. Еще со студенческих лет меня увлекала идея создания гармоничных, функциональных и эстетически привлекательных пространств вокруг зданий. Я всегда стремился найти баланс между практическими потребностями, инженерными решениями и визуальной привлекательностью."
    let article3en = "Exterior design has been a long-time passion of mine. Ever since my student years, I have been fascinated by the idea of ​​creating harmonious, functional and aesthetically pleasing spaces around buildings. I have always strived to find a balance between practical needs, engineering solutions and visual appeal."
    
    

    document.querySelector('.personalSkrollPagin2').addEventListener('click', function() 
    {
      i=3;
      button2.click();
    })

    document.querySelector('.personalSkrollPagin1').addEventListener('click', function() 
    {
      i=2;
      button.click();
    })

    button2.addEventListener('click', function() 
  {
    
    const windowWidth = window.innerWidth;
        
    if(i==4){
        i=1;
    }
    else{
      i++;  
    }

    if(i==1){
        document.querySelector('.fotoPerson-SliderLine').style.left = 0 + 'px';
        document.getElementById('1v').style.fill="#8C694F";
        document.getElementById('2v').style.fill="#B0947B";
        document.getElementById('3v').style.fill="#B0947B";
    }

    if(i==2){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth+ 'px';
        document.getElementById('scrollPersonalDownText2').textContent = '';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#8C694F";
        document.getElementById('3v').style.fill="#B0947B";
    }

    if(i==3){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth*2+ 'px';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#8C694F";
        document.getElementById('3v').style.fill="#B0947B";
    }

    if(i==4){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth*3+ 'px';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#B0947B";
        document.getElementById('3v').style.fill="#8C694F";
    }

    translate();
  }
);

button.addEventListener('click', function() 
  {
    if(i==1){
        i=4;
    }
    else{
      i--;  
    }

    if(i==1){
        document.querySelector('.fotoPerson-SliderLine').style.left = 0 + 'px';
        document.getElementById('1v').style.fill="#8C694F";
        document.getElementById('2v').style.fill="#B0947B";
        document.getElementById('3v').style.fill="#B0947B";
    }

    if(i==2){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth+ 'px';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#8C694F";
        document.getElementById('3v').style.fill="#B0947B";
    }

    if(i==3){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth*2+ 'px';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#8C694F";
        document.getElementById('3v').style.fill="#B0947B";
    }


    if(i==4){
        document.querySelector('.fotoPerson-SliderLine').style.left = -document.querySelector('.fotoPerson').offsetWidth*3+ 'px';
        document.getElementById('1v').style.fill="#B0947B";
        document.getElementById('2v').style.fill="#B0947B";
        document.getElementById('3v').style.fill="#8C694F";
    }

    translate();
  }
);


    var button3 = document.querySelector('.reviewVector');
    var button4 = document.querySelector('.reviewVector2');
    var j=1;

    button3.addEventListener('click', function() 
  {
    
    const windowWidth = window.innerWidth;
        
    if(j==3){
        j=1;
    }
    else{
      j++;  
    }

    if(j==1){
        document.getElementById('reviewSlider').style.left = 0 + 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fiveStar.svg)';
        });document.querySelectorAll('.numberOfPunct4star').forEach(element => {
          element.style.content = 'url(fotoForProject/fourStar.svg)';
        });
        document.getElementById('w1').style.fill="#8C694F";
        document.getElementById('w2').style.fill="#B0947B";
        document.getElementById('w3').style.fill="#B0947B";
    }

    if(j==2){
        document.getElementById('reviewSlider').style.left = -document.getElementById('reviewSlider').offsetWidth/3+ 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fourBrownStar.svg)';});
        document.getElementById('w1').style.fill="#B0947B";
        document.getElementById('w2').style.fill="#8C694F";
        document.getElementById('w3').style.fill="#B0947B";
    }

    if(j==3){
        document.getElementById('reviewSlider').style.left = -document.getElementById('reviewSlider').offsetWidth/3*2+ 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fiveStar.svg)';
        });
        
        document.querySelectorAll('.numberOfPunct4star').forEach(element => {
          element.style.content = 'url(fotoForProject/FIVEVITESTAR.svg)';
        });
        document.getElementById('w1').style.fill="#B0947B";
        document.getElementById('w2').style.fill="#B0947B";
        document.getElementById('w3').style.fill="#8C694F";
    }
    translate2();
  }
);

button4.addEventListener('click', function() 
  {
    if(j==1){
        j=3;
    }
    else{
      j--;  
    }

    if(j==1){
        document.getElementById('reviewSlider').style.left = 0 + 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fiveStar.svg)';
        });
        document.getElementById('w1').style.fill="#8C694F";
        document.getElementById('w2').style.fill="#B0947B";
        document.getElementById('w3').style.fill="#B0947B";
    }

    if(j==2){
        document.getElementById('reviewSlider').style.left =  -document.getElementById('reviewSlider').offsetWidth/3+ 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fourBrownStar.svg)';});
          document.querySelectorAll('.numberOfPunct4star').forEach(element => {
            element.style.content = 'url(fotoForProject/fourStar.svg)';
          });
        document.getElementById('w1').style.fill="#B0947B";
        document.getElementById('w2').style.fill="#8C694F";
        document.getElementById('w3').style.fill="#B0947B";
    }

    if(j==3){
        document.getElementById('reviewSlider').style.left =  -document.getElementById('reviewSlider').offsetWidth/3*2+ 'px';
        document.querySelectorAll('.numberOfPunct5star').forEach(element => {
          element.style.content = 'url(fotoForProject/fiveStar.svg)';
        });
        document.querySelectorAll('.numberOfPunct4star').forEach(element => {
          element.style.content = 'url(fotoForProject/FIVEVITESTAR.svg)';
        });
        document.getElementById('w1').style.fill="#B0947B";
        document.getElementById('w2').style.fill="#B0947B";
        document.getElementById('w3').style.fill="#8C694F";
    }
    translate2();
  }
);



  function translate(){
    if(localStorage.getItem('lang') === 'RU'){
      if(i==1){
        document.getElementById('scrollPersonalHeadName').textContent = 'Евгений Башаримов';
        document.getElementById('scrollPersonalHeadSmall2').textContent = 'Дизайн интерьера и экстерьера';
        document.getElementById('scrollPersonalDownText').textContent = '5 лет в профессии';
        document.getElementById('scrollPersonalDownText1').textContent = 'Более 100 проектов';
        document.getElementById('scrollPersonalDownText2').textContent = 'Высшее художественное образование';
        document.getElementById('scrollPersonMainText').textContent = article1ru;
      }
          if(i==2){
            document.getElementById('scrollPersonalHeadName').textContent = 'Степан Казаков';
            document.getElementById('scrollPersonalHeadSmall2').textContent = 'Директор';
            document.getElementById('scrollPersonalDownText').textContent = 'Создал проект с нуля';
            document.getElementById('scrollPersonalDownText1').textContent = 'Владелец пяти франшиз';
            document.getElementById('scrollPersonalDownText2').textContent = '';
            document.getElementById('scrollPersonMainText').textContent = article2ru;
           }
        if(i==3){
          document.getElementById('scrollPersonalHeadName').textContent = 'Алексей Бирюков';
          document.getElementById('scrollPersonalHeadSmall2').textContent = 'Дизайн экстерьера';
          document.getElementById('scrollPersonalDownText').textContent = '17 лет в профессии';
          document.getElementById('scrollPersonalDownText1').textContent = 'Более 500 проектов';
          document.getElementById('scrollPersonalDownText2').textContent = 'Более 20 пройденных курсов';
          document.getElementById('scrollPersonMainText').textContent = article3ru;
        }
          if(i==4)
            {
              document.getElementById('scrollPersonalHeadName').textContent = 'Виктория Книга';
              document.getElementById('scrollPersonalHeadSmall2').textContent = 'Менеджер';
              document.getElementById('scrollPersonalDownText').textContent = '9 лет в профессии';
              document.getElementById('scrollPersonalDownText1').textContent = 'Ни одного негативного отзыва';
              document.getElementById('scrollPersonalDownText2').textContent = 'Высшее экономическое образование';
              document.getElementById('scrollPersonMainText').textContent = article4ru;
            }
            
      }
      else{
        if(i==1){
          document.getElementById('scrollPersonalHeadName').textContent = 'Evgeniy Basharimov';
          document.getElementById('scrollPersonalHeadSmall2').textContent = 'Interior and exterior design';
          document.getElementById('scrollPersonalDownText').textContent = '5 years in the profession';
          document.getElementById('scrollPersonalDownText1').textContent = 'More than 100 projects';
          document.getElementById('scrollPersonalDownText2').textContent = 'Higher art education';
          document.getElementById('scrollPersonMainText').textContent = article1en;
        }
            if(i==2){
              document.getElementById('scrollPersonalHeadName').textContent = 'Stepan Kazakov';
              document.getElementById('scrollPersonalHeadSmall2').textContent = 'Director';
              document.getElementById('scrollPersonalDownText').textContent = 'Created a project from scratch';
              document.getElementById('scrollPersonalDownText1').textContent = 'Owner of five franchises';
              document.getElementById('scrollPersonalDownText2').textContent = '';
              document.getElementById('scrollPersonMainText').textContent = article2en;
             }
          if(i==3){
            document.getElementById('scrollPersonalHeadName').textContent = 'Alexey Biryukov';
            document.getElementById('scrollPersonalHeadSmall2').textContent = 'Exterior design';
            document.getElementById('scrollPersonalDownText').textContent = '17 years in the profession';
            document.getElementById('scrollPersonalDownText1').textContent = 'More than 500 projects';
            document.getElementById('scrollPersonalDownText2').textContent = 'More than 20 completed courses';
            document.getElementById('scrollPersonMainText').textContent = article3en;
          }
            if(i==4)
              {
                document.getElementById('scrollPersonalHeadName').textContent = 'Victoria Kniga';
                document.getElementById('scrollPersonalHeadSmall2').textContent = 'Manager';
                document.getElementById('scrollPersonalDownText').textContent = '9 years in the profession';
                document.getElementById('scrollPersonalDownText1').textContent = 'Not a single negative review';
                document.getElementById('scrollPersonalDownText2').textContent = 'Higher economic education';
                document.getElementById('scrollPersonMainText').textContent = article4en;
              }
      }
  }


  function translate2(){
    
    if(localStorage.getItem('lang') == 'RU'){
      
      console.log('trans1');
            if(j==1){
              document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                element.textContent = 'Я полностью восхищен работой студии дизайна! Их креативный подход, внимание к деталям и профессионализм были впечатляющими. Они прекрасно поняли мои потребности и воплотили мои идеи в реальность. Коммуникация с командой была легкой и приятной, и я чувствовал себя важным участником процесса. Я безусловно рекомендую студию дизайна всем, кто ищет высококачественное и индивидуальное . . .';
              });
              
              document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                element.textContent = 'Я просто не могу нарадоваться на результаты, достигнутые студией дизайна! Их творческий подход и профессионализм впечатляют. Они действительно слушали и понимали мои потребности, и смогли воплотить мою видение в реальность. Весь процесс работы был гладким и эффективным, а их команда была отзывчивой и заботливой. Спасибо вам за ваше искусство и преданность качеству.';
              });
            }
                if(j==2){
                  document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                    element.textContent = "Я недавно работал со студией дизайна и был полностью удовлетворен их работой. Команда профессионалов, которые действительно понимают, как создавать уникальные и привлекательные дизайны. Их креативность и внимание к деталям произвели на меня большое впечатление. Я определенно буду рекомендовать их другим!";
                  });
                  
                  document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                    element.textContent = "Студия дизайна выполнила для нашей компании замечательную работу по редизайну нашего сайта. Они приложили все усилия, чтобы понять наши потребности и создать современный, привлекательный и функциональный дизайн. Процесс сотрудничества был гладким и приятным. Мы очень довольны результатом!" ;
                  });
                }


              if(j==3){document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                element.textContent = "Я работал со студией дизайна над созданием логотипа и фирменного стиля для моего нового бизнеса. Команда была очень креативной и отзывчивой на мои пожелания. Они смогли воплотить мои идеи в жизнь и создать яркий, запоминающийся бренд. Я рекомендую их всем, кто ищет талантливых дизайнеров!" ;
              });
              
              document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                element.textContent = "Студия дизайна выполнила для нас отличную работу по разработке дизайна наших маркетинговых материалов. Они смогли передать нашу корпоративную идентичность и создать визуально привлекательные материалы, которые производят большое впечатление на наших клиентов. Мы высоко ценим их профессионализм и творческий подход! ";
              });}

            
      }
      else{
                      
        console.log('trans2');
        if(j==1){
                document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                  element.textContent = "I am completely delighted with the work of the design studio! Their creativity, attention to detail and professionalism were impressive. They understood my needs perfectly and turned my ideas into reality. Communication with the team was easy and pleasant, and I felt like an important participant in the process. I would definitely recommend the design studio to anyone looking for high quality and custom design. . .";
                });
                
                document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                  element.textContent = "I just can't be happier with the results achieved by the design studio! Their creativity and professionalism are impressive. They truly listened and understood my needs and were able to turn my vision into reality. The entire process was smooth and efficient and their team was responsive and caring. Thank you for your art and dedication to quality.";
                });
              
              }

                  if(j==2){
                    document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                      element.textContent = "I recently worked with a design studio and was completely satisfied with their work. A team of professionals who truly understand how to create unique and eye-catching designs. I was very impressed with their creativity and attention to detail. I would definitely recommend them to others!";
                    
                    });
                    
                    document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                      element.textContent =  "The Design Studio did a wonderful job for our company in redesigning our website. They went out of their way to understand our needs and create a design that was modern, attractive and functional. The collaboration process was smooth and enjoyable. We are very happy with the result!";
                    });
                   }
                if(j==3){
                  document.querySelectorAll('.mainTextREVIEWS').forEach(element => {
                    element.textContent = "I worked with a design studio to create a logo and brand identity for my new business. The team was very creative and responsive to my needs. They were able to bring my ideas to life and create a vibrant, memorable brand. I would recommend them to anyone looking for talented designers !";
                  });
                  
                  document.querySelectorAll('.mainTextREVIEWS2').forEach(element => {
                    element.textContent =  "The design studio did an excellent job for us in developing the design of our marketing materials. They were able to convey our corporate identity and create visually appealing materials that make a great impression on our clients. We greatly appreciate their professionalism and creativity!";
                  });
                 }
      }
  }
})