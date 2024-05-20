document.addEventListener('DOMContentLoaded', function() {
    let loginTubOn = document.querySelector('.loginTubStyle');
    let loginTubOf = document.querySelector('.loginWindowVECTOR');

    loginTubOn.addEventListener('click', function() {
        document.querySelector('.loginWindow').classList.add('open');
        document.querySelector('.overlay').classList.add('open');
        document.body.style.overflow = 'hidden';


    });
    loginTubOf.addEventListener('click', function() {
        document.querySelector('.loginWindow').classList.remove('open');     
        document.querySelector('.overlay').classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    let regTubOn = document.querySelector('.regTubStyle');
    let regTubOf = document.querySelector('.regWindowVECTOR');

    regTubOn.addEventListener('click', function() {
        
        document.querySelector('.overlay').classList.add('open');
        document.querySelector('.registrationWindow').classList.add('open');
        
        document.body.style.overflow = 'hidden';
    });
    regTubOf.addEventListener('click', function() {
        document.querySelector('.registrationWindow').classList.remove('open');
        document.querySelector('.overlay').classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // let login = document.querySelector('.loginWindowInfoButton');
    // login.addEventListener('click', function() {



    //     window.location.href ="C:/веб/course/htmlForClient.html";
    // });

    // let reg = document.getElementById('regWindowInfoButton');
    // reg.addEventListener('click', function() {
    //     window.location.href ="C:/веб/course/htmlForClient.html";
    // });

    });



    document.addEventListener('DOMContentLoaded', function() {
        var registrationForm = document.getElementById('registration-form');
        
        registrationForm.addEventListener('submit', function(event) {
          event.preventDefault(); 
          
          var formData = {
            fullName: registrationForm.elements.fullName.value,
            phoneNumber: registrationForm.elements.phoneNumber.value,
            email: registrationForm.elements.email.value,
            password: registrationForm.elements.password.value
          };
          
          // Отправляем данные на сервер для сохранения
          saveRegistrationData(formData);
          
          // Очищаем форму
          registrationForm.reset();
          
          console.log('Регистрация успешна');
          window.location.href ="C:/веб/course/htmlForClient.html";
        displayRegisteredClients();
        });
      });
      
      function saveRegistrationData(formData) {
        // Получаем ранее сохраненные данные
        var storedData = localStorage.getItem('registeredClients');
        var clients = storedData ? JSON.parse(storedData) : [];
        
        // Добавляем нового клиента
        clients.push(formData);
        
        // Сохраняем обновленные данные
        localStorage.setItem('registeredClients', JSON.stringify(clients));
      }

      function displayRegisteredClients() {
        var storedData = localStorage.getItem('registeredClients');
        var clients = storedData ? JSON.parse(storedData) : [];
        
        // Выводим список зарегистрированных клиентов
        clients.forEach(function(client) {
          console.log('ФИО:', client.fullName);
          console.log('Номер телефона:', client.phoneNumber);
          console.log('Email:', client.email);
          console.log('Пароль:', client.password);
          console.log('-----------------');
        });
      }



      document.addEventListener('DOMContentLoaded', function() {
        var loginForm = document.getElementById('login-form');
      
        loginForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Предотвращаем отправку формы по умолчанию
      
          var emailOrPhone = loginForm.elements.emailOrPhone.value;
          var password = loginForm.elements.password.value;
      
          // Загружаем данные зарегистрированных клиентов
          var storedData = localStorage.getItem('registeredClients');
          var clients = storedData ? JSON.parse(storedData) : [];
      
          // Проверяем введенные данные с данными зарегистрированных клиентов
          var matchingClient = clients.find(function(client) {
            return (client.email === emailOrPhone || client.phoneNumber === emailOrPhone) && client.password === password;
          });
      
          if (matchingClient) {
            console.log('Вход выполнен успешно');
            window.location.href ="C:/веб/course/htmlForClient.html";
          } else {
            console.log('Неверный номер телефона, электронная почта или пароль');
          }
      
          // Очищаем форму
          loginForm.reset();
        });
      });