
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('languageToggle');

  // 1

  button.addEventListener('click', function() 
  {
    if (button.textContent === 'EN') {
      button.textContent = 'RU';

      //5
      document.getElementById('exspirienseFrameWordSpase').textContent = "Большой опыт и  индивидуальный";
      document.getElementById('exspiriensenextLine').textContent = "подход к каждому клиенту";

      document.getElementById('articl5').textContent = "Каждый проект рассматривается с учетом уникальных потребностей и предпочтений клиента, а дизайнеры стремятся создать решения, соответствующие его индивидуальному стилю и визии. Этот подход позволяет достичь наибольшей удовлетворенности клиента и создать эксклюзивный дизайн, отражающий его личность и ценности. ";


      //6
      document.getElementById("portfolioHeader").style.content="url(C:/веб/course/fotoForProject/portfolio.svg)";

      document.getElementById('portfolioSmallHeader').textContent = "Недавние проекты";

      document.getElementById('interior2').textContent = 'Интерьер';
      document.getElementById('interior3').textContent = 'Интерьер';

      // 7

      document.getElementById('personalHeadHeader').textContent = "Внимательные и отзывчивые сотрудники";
      document.getElementById('personMainText').textContent = "Внимательные и отзывчивые сотрудники являются неотъемлемой частью нашей студии дизайна. Их способность слушать и понимать клиентов, улавливать их потребности и предпочтения позволяет создавать дизайн, идеально соответствующий их ожиданиям. Кроме того, наши сотрудники способны эффективно коммуницировать и сотрудничать, что способствует гармоничному взаимодействию внутри команды и достижению высоких результатов, что так же сказывается на качестве выполняемых ими проектов.";
    
      // 8
      document.getElementById('scrollPersonalHeadSmall1').textContent = "Сотруднки";
      document.getElementById('scrollPersonalHeadName').textContent = "Евгений Башаримов";
      document.getElementById('scrollPersonalHeadSmall2').textContent = "Дизайн интерьера и экстерьера";
      document.getElementById('scrollPersonalDownText').textContent = "5 лет в профессии";
      document.getElementById('scrollPersonalDownText1').textContent = "Более 100 проектов";
      document.getElementById('scrollPersonalDownText2').textContent = "Высшее художественное образование";
      document.getElementById('scrollPersonMainText').textContent = "Хай! Я Евгений Башаримов, но ты можешь называть меня просто Евген. Мои работы представляют мою страсть к дизайну и мой талант в создании эстетически привлекательных и функциональных решений. Я стремлюсь к инновациям, воплощая уникальные идеи в ярких и эмоциональных проектах, которые вдохновляют и взаимодействуют с аудиторией. В моих работах сочетаются креативность, техническая экспертиза и внимание к деталям, чтобы создать превосходный пользовательский опыт и достичь поставленных целей.";
    
      // 9
      document.getElementById('reviewsHeadHeader').textContent = "Положительные отзывы и хороший рейтинг среди конкурентов";
      document.getElementById('nikNameName1').textContent = "Максим Иванов";
      document.getElementById('nikNameName2').textContent = "Виктория Борко";
      document.getElementById('mainTextREVIEWS').textContent = "Я полностью восхищен работой студии дизайна! Их креативный подход, внимание к деталям и профессионализм были впечатляющими. Они прекрасно поняли мои потребности и воплотили мои идеи в реальность. Коммуникация с командой была легкой и приятной, и я чувствовал себя важным участником процесса. Я безусловно рекомендую студию дизайна всем, кто ищет высококачественное и индивидуальное . . .";
      document.getElementById('mainTextREVIEWS2').textContent = "Я просто не могу нарадоваться на результаты, достигнутые студией дизайна! Их творческий подход и профессионализм впечатляют. Они действительно слушали и понимали мои потребности, и смогли воплотить мою видение в реальность. Весь процесс работы был гладким и эффективным, а их команда была отзывчивой и заботливой. Спасибо вам за ваше искусство и преданность качеству.";

      //10
      document.getElementById('footerColumnBigText').textContent = "Рабочие часы";
      document.getElementById('footerColumnBigText1').textContent = "ПОН-СУБ";
      document.getElementById('footerColumnBigText2').textContent = "Контакты";
      document.getElementById('footerColumnBigText3').textContent = "Услуги";
      document.getElementById('footerColumnBigText4').textContent = "Интерьер";
      document.getElementById('footerColumnBigText5').textContent = "Ландшафт";
      document.getElementById('footerColumnBigText6').textContent = "Одежда";
      document.getElementById('footerColumnBigText7').textContent = "Страницы";
      document.getElementById('footerColumnBigText8').textContent = "Главная";
      document.getElementById('footerColumnBigText9').textContent = "Услуги";
      document.getElementById('footerColumnBigText10').textContent = "Портфолио";
      document.getElementById('footerColumnBigText11').textContent = "Сотрудники";
      document.getElementById('footerColumnBigText12').textContent = "Регистрация";
    } 
    
    else {
      button.textContent = 'EN';

      //5

      document.getElementById('exspirienseFrameWordSpase').textContent = "Extensive experience and";
      document.getElementById('exspiriensenextLine').textContent = "individual approach to clients";

      document.getElementById('articl5').textContent = "Each project is considered based on the client's unique needs and preferences, and designers strive to create solutions that fit their individual style and vision. This approach allows us to achieve the greatest customer satisfaction and create an exclusive design that reflects his personality and values.";


      //6
      document.getElementById("portfolioHeader").style.content="url(C:/веб/course/fotoForProject/PORTFOLIOEN.svg)";
      
      document.getElementById('portfolioSmallHeader').textContent = "Recent projects";

      document.getElementById('interior2').textContent = 'Interior';
      document.getElementById('interior3').textContent = 'Interior';

      // 7

      document.getElementById('personalHeadHeader').textContent = "Attentive and responsive staff";
      document.getElementById('personMainText').textContent = "Attentive and responsive employees are an integral part of our design studio. Their ability to listen and understand clients, grasping their needs and preferences allows them to create designs that perfectly match their expectations. In addition, our employees are able to communicate and collaborate effectively, which contributes to harmonious interaction within the team and the achievement of high results, which also affects the quality of the projects they carry out.";
    
      // 8
      document.getElementById('scrollPersonalHeadSmall1').textContent = "Employees";
      document.getElementById('scrollPersonalHeadName').textContent = "Evgeniy Basharimov";
      document.getElementById('scrollPersonalHeadSmall2').textContent = "Interior and exterior design";
      document.getElementById('scrollPersonalDownText').textContent = "5 years in the profession";
      document.getElementById('scrollPersonalDownText1').textContent = "More than 100 projects";
      document.getElementById('scrollPersonalDownText2').textContent = "Higher art education";
      document.getElementById('scrollPersonMainText').textContent = "Hi! I'm Evgeny Basharimov, but you can just call me Evgen. My work represents my passion for design and my talent for creating aesthetically pleasing and functional solutions. I strive to innovate by translating unique ideas into vibrant and emotional projects that inspire and connect with audiences. My work combines creativity, technical expertise and attention to detail to create a superior user experience and achieve your goals.";
    
      // 9

      document.getElementById('reviewsHeadHeader').textContent = "Positive reviews and good rating among competitors";
      document.getElementById('nikNameName1').textContent = "Maxim Ivanov";
      document.getElementById('nikNameName2').textContent = "Victoria Borko";
      document.getElementById('mainTextREVIEWS').textContent = "I am completely delighted with the work of the design studio! Their creativity, attention to detail and professionalism were impressive. They understood my needs perfectly and turned my ideas into reality. Communication with the team was easy and pleasant, and I felt like an important participant in the process. I would definitely recommend the design studio to anyone looking for high quality and custom design. . .";
      document.getElementById('mainTextREVIEWS2').textContent = "I just can't be happier with the results achieved by the design studio! Their creativity and professionalism are impressive. They truly listened and understood my needs and were able to turn my vision into reality. The entire process was smooth and efficient and their team was responsive and caring. Thank you for your art and dedication to quality.";

      //10

      document.getElementById('footerColumnBigText').textContent = "Working hours";
      document.getElementById('footerColumnBigText1').textContent = "MON-SAT";
      document.getElementById('footerColumnBigText2').textContent = "Contacts";
      document.getElementById('footerColumnBigText3').textContent = "Services";
      document.getElementById('footerColumnBigText4').textContent = "Interior";
      document.getElementById('footerColumnBigText5').textContent = "Landscape";
      document.getElementById('footerColumnBigText6').textContent = "Cloth";
      document.getElementById('footerColumnBigText7').textContent = "Pages";
      document.getElementById('footerColumnBigText8').textContent = "Home";
      document.getElementById('footerColumnBigText9').textContent = "Services";
      document.getElementById('footerColumnBigText10').textContent = "Portfolio";
      document.getElementById('footerColumnBigText11').textContent = "Employees";
      document.getElementById('footerColumnBigText12').textContent = "Registration";

    }  

    if (document.getElementById('serveses').textContent === 'Услуги') {
      document.getElementById('serveses').textContent = 'Serveses';
      document.getElementById('serveses1').textContent = 'Serveses';
    } else {
      document.getElementById('serveses').textContent = 'Услуги';
      document.getElementById('serveses1').textContent = 'Услуги';
    }

    if (document.getElementById('portfolio').textContent === 'Портфорио') {
      document.getElementById('portfolio').textContent = 'Portfolio';
    } else {
      document.getElementById('portfolio').textContent = 'Портфорио';
    }

    if (document.getElementById('employees1').textContent === 'Сотрудники') {
      document.getElementById('employees1').textContent = 'Employees';
    } else {
      document.getElementById('employees1').textContent = 'Сотрудники';
    }

    if (document.getElementById('login').textContent === 'Вход') {
      document.getElementById('login').textContent = 'Login';
    } else {
      document.getElementById('login').textContent = 'Вход';
    }
    
    if (document.getElementById('registration').textContent === 'Регистрация') {
      document.getElementById('registration').textContent = 'Registration';
    } else {
      document.getElementById('registration').textContent = 'Регистрация';
    }

    // 2

    if (document.getElementById('interior').textContent === 'ИНТЕРЬЕР') {
      document.getElementById('interior').textContent = 'INTERIOR';
    } else {
      document.getElementById('interior').textContent = 'ИНТЕРЬЕР';
    }

    var servesesMainInfo = "Интерьер - это искусство создания пространства, где архитектура, дизайн и функциональность взаимодействуют в гармонии. Он воплощает настроение, стиль и характер, отражая индивидуальность и потребности его обитателей. Интерьерный дизайн способен преобразить обычное помещение в уникальное и уютное место, вызывающее эмоции и вдохновляющее жизнь.";
    var servesesMainInfoInEnglish = "Interior design is the art of creating a space where architecture, design and functionality interact in harmony. It embodies mood, style and character, reflecting the personality and needs of its inhabitants. Interior design can transform an ordinary room into a unique and cozy place that evokes emotions and inspires life."
    
    if (document.getElementById('servesesMainInfo').textContent === servesesMainInfo) {
      document.getElementById('servesesMainInfo').textContent = servesesMainInfoInEnglish;
    } else {
      document.getElementById('servesesMainInfo').textContent = servesesMainInfo;
    }

    //3

    if (document.getElementById('5Reason').textContent === "5 причин выбрать нас") {
      document.getElementById('5Reason').textContent = "5 reasons to choose us";
      document.getElementById('5Reason1').textContent = "5 reasons to choose us";
      document.getElementById('5Reason2').textContent = "5 reasons to choose us";
      document.getElementById('5Reason3').textContent = "5 reasons to choose us";
      document.getElementById('5Reason4').textContent = "5 reasons to choose us";
    } else {
      document.getElementById('5Reason').textContent = "5 причин выбрать нас";
      document.getElementById('5Reason1').textContent = "5 причин выбрать нас";
      document.getElementById('5Reason2').textContent = "5 причин выбрать нас";
      document.getElementById('5Reason3').textContent = "5 причин выбрать нас";
      document.getElementById('5Reason4').textContent = "5 причин выбрать нас";
    }

    if (document.getElementById('a').textContent === "Современные средства визуализации") {
      document.getElementById('a').textContent = "Modern visualization tools";
    } else {
      document.getElementById('a').textContent = "Современные средства визуализации";
    }

    var modernTecMainText = "3D-моделирование позволяет дизайнерам создавать реалистичные визуализации продуктов и интерьеров, помогая клиентам лучше представить себе окончательный результат. Кроме того, оно облегчает коллаборацию между дизайнерами и заказчиками, ускоряет процесс принятия решений и снижает возможность ошибок, что делает его неотъемлемой частью современного процесса дизайна.";
    var modernTecMainTextEnglish = "3D modeling allows designers to create realistic renderings of products and interiors, helping clients better visualize the final result. In addition, it facilitates collaboration between designers and clients, speeds up decision-making and reduces the possibility of errors, making it an integral part of the modern design process."
    
    if (document.getElementById('modernTecMainText').textContent === modernTecMainTextEnglish) {
      document.getElementById('modernTecMainText').textContent = modernTecMainText;
      document.getElementById("numberOfPunct01").style.top="-156%";
    } else {
      document.getElementById('modernTecMainText').textContent = modernTecMainTextEnglish;
      document.getElementById("numberOfPunct01").style.top="-147%";
    }

    // 4

    if (document.getElementById('b').textContent === "Виртуальная  и    дополнительная") {
      document.getElementById('b').textContent = "Virtual and augmented";
      document.getElementById("numberOfPunct02").style.top="-157%";
    } else {
      document.getElementById('b').textContent = "Виртуальная  и    дополнительная";
      document.getElementById("numberOfPunct02").style.top="-162%";
    }

    if (document.getElementById('b1').textContent === "реальности") {
      document.getElementById('b1').textContent = "reality";
    } else {
      document.getElementById('b1').textContent = "реальности";
    }

    var arFrameMainText = "Использование виртуальной и дополнительной реальности открывает новые горизонты для креативности и взаимодействия с клиентами. Благодаря этим технологиям дизайнеры могут создавать иммерсивные визуализации, позволяющие клиентам погрузиться в виртуальное пространство и реально оценить дизайн предметов или интерьеров. Кроме того, использование виртуальной и дополнительной реальности упрощает процесс визуализации и внесения изменений, что способствует более эффективной коммуникации и улучшению конечного результата.";
    var arFrameMainTextEnglish = "The use of virtual and augmented reality opens up new horizons for creativity and customer interaction. Thanks to these technologies, designers can create immersive visualizations that allow clients to immerse themselves in virtual space and really appreciate the design of objects or interiors. In addition, the use of virtual and augmented reality simplifies the process of visualization and making changes, which leads to more effective communication and an improved final result."
    
    if (document.getElementById('arFrameMainText').textContent === arFrameMainTextEnglish) {
      document.getElementById('arFrameMainText').textContent = arFrameMainText;
    } else {
      document.getElementById('arFrameMainText').textContent = arFrameMainTextEnglish;
    }

    // 5

  }
);
});
  