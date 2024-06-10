
let password;
document.addEventListener('DOMContentLoaded', function() {
    let loginTubOn = document.querySelector('.loginTubStyle');
    let loginTubOf = document.querySelector('.loginWindowVECTOR');
    let registrationForm = document.getElementById('registration-form');
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
        displayRegisteredClients();
        document.body.style.overflow = 'hidden';
    });
    regTubOf.addEventListener('click', function() {
        document.querySelector('.registrationWindow').classList.remove('open');
        document.querySelector('.overlay').classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    let passTubOf = document.getElementById('passwordWindowButton');
    passTubOf.addEventListener('click', function() {
      document.querySelector('.passwordWindow').classList.remove('open');
      document.querySelector('.registrationWindow').style.filter = 'brightness(1)';
      document.body.style.overflow = 'auto';
  });

    let generatenickname = document.getElementById('generate-nickname');
    let nicknameAttempts = 0;
    generatenickname.addEventListener('click', function() {
      if(nicknameAttempts ==0){
        nickname = localStorage.length+1+'user';
        document.getElementById('nickname').value=nickname;
    }
    if(nicknameAttempts ==1){
        nickname ='userNunber' +localStorage.length+1;
        document.getElementById('nickname').value=nickname;
    }
    if(nicknameAttempts ==2){
        nickname ='user';
        document.getElementById('nickname').value=nickname;
    }if(nicknameAttempts ==3){
        nickname =localStorage.length+1+'client';
        document.getElementById('nickname').value=nickname;
    }if(nicknameAttempts ==4){
        nickname = 'client';
        document.getElementById('nickname').value=nickname;
    }

      if (nicknameAttempts >= 5) {
        document.getElementById('nickname').value='Введите желаемый никнейм';
      }

    nicknameAttempts++;
  });

    // let login = document.querySelector('.loginWindowInfoButton');
    // login.addEventListener('click', function() {

    // regWindowInfoButton


    //     window.location.href ="C:/веб/course/htmlForClient.html";
    // });

    let reg = document.getElementById('regWindowInfoButton');
    reg.addEventListener('click', function() {
        // window.location.href ="htmlForClient.html";
        
        console.log('1');
          
        registrationForm.addEventListener('submit', function(event) {
          
          console.log('2');
            if(isValid()){
              console.log('3');
            registration()};
          
        });
        
    });

    function registration(){
      console.log('4');
      event.preventDefault(); 
      console.log('Регистрация началась');
        let formData = {
          fullName: registrationForm.elements.fullName.value,
          phoneNumber: registrationForm.elements.phoneNumber.value,
          email: registrationForm.elements.email.value,
          password: password,
          nickname: registrationForm.elements.nickname.value,
          birthdate: registrationForm.elements.birthdate.value
        };
        
        // Отправляем данные на сервер для сохранения
        saveRegistrationData(formData);
        
        // Очищаем форму
        registrationForm.reset();
        
        console.log('Регистрация успешна');
        displayRegisteredClients();
        window.location.href ="/htmlForClient.html";
    }

    });


    


    let confirmPassword;
      let passwordMethodSelect = document.getElementById('password-method');

    document.addEventListener('DOMContentLoaded', function() {
      
      passwordMethodSelect = document.getElementById('password-method');
      let manualPasswordGroup = document.getElementById('manual-password-group');
      let autoPasswordGroup = document.getElementById('password-method-auto');
      
      
        passwordMethodSelect.addEventListener('change', () => {
          manualPasswordGroup.style.display = passwordMethodSelect.value === 'manual' ? 'flex' : 'none';
          autoPasswordGroup.style.display = passwordMethodSelect.value === 'auto' ? 'flex' : 'none';
          if(passwordMethodSelect.value === 'auto'){
            password =generatePassword();
            confirmPassword =password;
            console.log(password);
          }
          document.getElementById('password-method').style.display =  'none' ;
        });





       
      });
      
      

      function isValid(){
        if (document.getElementById('tel').value.length !== 13 || !document.getElementById('tel').value.startsWith('+375')) {
          document.getElementById('tel').value='Номер телефона должен быть формата +375XXXXXXXXX';
          console.log('Номер телефона должен быть формата +375XXXXXXXXX');
          return  false;
      }

      if (new Date(document.getElementById('birthdate').value) > new Date(new Date().getFullYear() - 16, new Date().getMonth(), new Date().getDate())) {
        
       document.getElementById('passwordWindowtext').textContent = 'Вы должны быть старше 16 лет';
       document.querySelector('.passwordWindow').classList.add('open');
       document.querySelector('.registrationWindow').style.filter = 'brightness(0.5)';

        return  false;
      }

      if(passwordMethodSelect.value === 'manual'){
        password = document.getElementById('password').value;
        confirmPassword = document.getElementById('password-confirm').value;

              if (!password) {
                document.getElementById('password').value='Заполните!';
                return  false;
            }
            if (!confirmPassword) {
                document.getElementById('password-confirm').value='Заполните!';
                return  false;
            }
            if(password !== confirmPassword) {
                document.getElementById('password-confirm').value='Пароли не совпадают';
                return  false;
            }

            if (!isPasswordValid(password)) {
                document.getElementById('password').value='Неверный формат';
                return  false;
            }
          }

          let agreementCheckbox = document.getElementById('user-agreement');
          if (agreementCheckbox.checked) {
            console.log('Пользователь отметил чекбокс.');
          } else {
            console.log('Пользователь не отметил чекбокс.');
            return  false;
          }
      
          return true;
      }



      function isPasswordValid(password) {
        if (password.length < 8 || password.length > 20) {
          return false;
        }
    
        let hasUppercase = false, hasLowercase = false, hasDigit = false, hasSpecial = false;
        for (let i = 0; i < password.length; i++) {
          if (/[A-Z]/.test(password[i])) hasUppercase = true;
          if (/[a-z]/.test(password[i])) hasLowercase = true;
          if (/\d/.test(password[i])) hasDigit = true;
          if (!/[A-Za-z0-9]/.test(password[i])) hasSpecial = true;
        }
    
        if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecial) {
          return false;
        }
    
        const topPasswords = ['password123', '123456789', '111111', 'letmein', 'abc123'];
        if (topPasswords.includes(password)) {
          return false;
        }
        
        return true;
      }


      
      

      let pass = '';
      function generatePassword() {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numericChars = '0123456789';
        const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      
        const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
      
        let pass = '';
      
        for (let i = 0; i < 10; i++) {
          pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
       console.log(pass);
       document.getElementById('password-method-auto').value=pass;
       document.getElementById('passwordWindowtext').textContent = 'Запомните пароль!';
       document.getElementById('passwordWindowCod').textContent = pass;
       document.querySelector('.passwordWindow').classList.add('open');
       document.querySelector('.registrationWindow').style.filter = 'brightness(0.5)';
       return pass;
      }
      

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
          console.log('Никнейм:', client.nickname);
          console.log('Дата рождения:', client.birthdate);
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
            localStorage.setItem('lastClient', JSON.stringify(matchingClient));
            window.location.href ="/htmlForClient.html";
          } else {
            console.log('Неверный номер телефона, электронная почта или пароль');
          }
      
          // Очищаем форму
          loginForm.reset();
        });
      });



// document.addEventListener('DOMContentLoaded', function() {
//   let loginTubOn = document.getElementById('Login');
//   let loginTubOf = document.querySelector('.loginWindowVECTOR');

//   loginTubOn.addEventListener('click', function() {
//       document.querySelector('.loginWindow').classList.add('open');
//       document.querySelector('.overlay').classList.add('open');
//       document.body.style.overflow = 'hidden';


//   });
  
//   loginTubOf.addEventListener('click', function() {
//       document.querySelector('.loginWindow').classList.remove('open');     
//       document.querySelector('.overlay').classList.remove('open');
//       document.body.style.overflow = 'auto';
//   });

//   let regTubOn = document.getElementById('Registration');
//   let regTubOf = document.querySelector('.regWindowVECTOR');

//   regTubOn.addEventListener('click', function() {
      
//       document.querySelector('.overlay').classList.add('open');
//       document.querySelector('.registrationWindow').classList.add('open');
//       document.body.style.overflow = 'hidden';
//   });

//   regTubOf.addEventListener('click', function() {
//       document.querySelector('.registrationWindow').classList.remove('open');
//       document.querySelector('.overlay').classList.remove('open');
//       document.body.style.overflow = 'auto';
//   });

//   let registrationWindow = document.querySelector('.registrationWindow');

//   registrationWindow.addEventListener('submit', function(event) {
            
//     console.log('2');
//       if(isValid()){
//         console.log('3');
//         event.registration()};
    
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var loginForm = document.getElementById('login-form');
  
//     loginForm.addEventListener('submit', function(event) {
//       event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
//       var emailOrPhone = loginForm.elements.emailOrPhone.value;
//       var password = loginForm.elements.password.value;
  
//       // Загружаем данные зарегистрированных клиентов
//       var storedData = localStorage.getItem('registeredClients');
//       var clients = storedData ? JSON.parse(storedData) : [];
  
//       // Проверяем введенные данные с данными зарегистрированных клиентов
//       var matchingClient = clients.find(function(client) {
//         return (client.email === emailOrPhone || client.phoneNumber === emailOrPhone) && client.password === password;
//       });
  
//       if (matchingClient) {
//         console.log('Вход выполнен успешно');
//         localStorage.setItem('lastClient', JSON.stringify(matchingClient));
//         window.location.href ="/htmlForClient.html";
//       } else {
//         console.log('Неверный номер телефона, электронная почта или пароль');
//       }
  
//       // Очищаем форму
//       loginForm.reset();
//     });
//   const form = document.getElementById('registration-form');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); 
//   });
//   });


//   function saveRegistrationData(formData) {
//     // Получаем ранее сохраненные данные
//     var storedData = localStorage.getItem('registeredClients');
//     var clients = storedData ? JSON.parse(storedData) : [];
    
//     // Добавляем нового клиента
//     clients.push(formData);
    
//     // Сохраняем обновленные данные
//     localStorage.setItem('registeredClients', JSON.stringify(clients));
//   }

//   function displayRegisteredClients() {
//     var storedData = localStorage.getItem('registeredClients');
//     var clients = storedData ? JSON.parse(storedData) : [];
    
//     // Выводим список зарегистрированных клиентов
//     clients.forEach(function(client) {
//       console.log('ФИО:', client.fullName);
//       console.log('Номер телефона:', client.phoneNumber);
//       console.log('Email:', client.email);
//       console.log('Пароль:', client.password);
//       console.log('Никнейм:', client.nickname);
//       console.log('Дата рождения:', client.birthdate);
//       console.log('-----------------');
//     });
//   }

//   let passwordMethodSelect = document.getElementById('password-method');
//   let manualPasswordGroup = document.getElementById('manual-password-group');
  
//   passwordMethodSelect.addEventListener('change', () => {
//     manualPasswordGroup.style.display = passwordMethodSelect.value === 'manual' ? 'flex' : 'none';
//   });

//   document.getElementById('register-button').addEventListener('click', function() {
//       console.log('g');
//       if(isValid()){
//       registerUser();
//       }
//     });

//   // const registrationForm = document.getElementById('registration-form');

//   // registrationForm.addEventListener('submit', function(event) {
//   // event.preventDefault();
//   // });




//   let registeredUsers = [];
  
//   let phoneNumber;
//   let email;
//   let birthDate;
//   let password;
//   let confirmPassword;
//   let fullName;

//   function isPasswordValid(password) {
//   if (password.length < 8 || password.length > 20) {
//     return false;
//   }

//   let hasUppercase = false, hasLowercase = false, hasDigit = false, hasSpecial = false;
//   for (let i = 0; i < password.length; i++) {
//     if (/[A-Z]/.test(password[i])) hasUppercase = true;
//     if (/[a-z]/.test(password[i])) hasLowercase = true;
//     if (/\d/.test(password[i])) hasDigit = true;
//     if (!/[A-Za-z0-9]/.test(password[i])) hasSpecial = true;
//   }

//   if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecial) {
//     return false;
//   }

//   const topPasswords = ['password123', '123456789', 'qwerty', 'letmein', 'abc123'];
//   if (topPasswords.includes(password)) {
//     return false;
//   }
//   return true;
// }

// function isValid(){
//   console.log('dasda');

  
//       phoneNumber = document.getElementById('phone').value;
  
//   if (phoneNumber.length == 0) {
//       document.getElementById('phone-error').textContent='Заполните!';
//       return  false;
//   }

//   if (phoneNumber.length !== 13 || !phoneNumber.startsWith('+375')) {
//       document.getElementById('phone-error').textContent='Номер телефона должен быть формата +375XXXXXXXXX';
//       console.log('Номер телефона должен быть формата +375XXXXXXXXX');
//       return  false;
//   }

//   document.getElementById('phone-error').textContent='';

//   try{
//       email = document.getElementById('email').value;
//   }
//   catch(error){
//           document.getElementById('email-error').textContent='Заполните!';
//           return  false;
//   }

//   document.getElementById('email-error').textContent='';

//   birthDate = document.getElementById('birthdate').value;
//   console.log(birthDate);
//   if (!birthDate) {
//       document.getElementById('birthdate-error').textContent='Заполните!';
//       return  false;
//   }

  
//   if (new Date(birthDate) > new Date(new Date().getFullYear() - 16, new Date().getMonth(), new Date().getDate())) {
//       document.getElementById('birthdate-error').textContent='Вы должны быть старше 16 лет';
//       console.log('Вы должны быть старше 16 лет');
//       return  false;
//     }
  
//     document.getElementById('birthdate-error').textContent='';


//     if(passwordMethodSelect.value === 'manual'){
//           password = document.getElementById('password').value;
//               if (!password) {
//                   document.getElementById('password-error').textContent='Заполните!';
//                   return  false;
//               }
//               document.getElementById('password-error').textContent='';
//               confirmPassword = document.getElementById('password-confirm').value;
//               if (!confirmPassword) {
//                   document.getElementById('password-confirm-error').textContent='Заполните!';
//                   return  false;
//               }

//               if 
//               (password !== confirmPassword) {
//                   document.getElementById('password-error').textContent='Пароли не совпадают';
//                   return  false;
//               }

//               if (!isPasswordValid(password)) {
//                   document.getElementById('password-error').textContent='Неверный формат';
//                   return  false;
//               }
//               document.getElementById('password-error').textContent='';
//     }
//     else{
//       password =generatePassword();
//       confirmPassword =password;
//       console.log(password);
//       document.getElementById('password-method-error').textContent=password;
//     }
  

//   //53gHc368;



//                   fullName = document.getElementById('full-name').value;

//               if (!fullName) {
//                   document.getElementById('full-name-error').textContent='Заполните!';
//                   return  false;
//               }

//               document.getElementById('full-name-error').textContent='';
  
//   let agreementCheckbox = document.getElementById('user-agreement');
//   if (agreementCheckbox.checked) {
//       console.log('Пользователь отметил чекбокс.');
//     } else {
//       console.log('Пользователь не отметил чекбокс.');
//       return  false;
//     }

//    return true;

// }


// function registerUser() {
//   const user = {
//     phoneNumber,
//     email,
//     birthDate,
//     password,
//     fullName,
//     nickname
//   };
//   registeredUsers.push(user);

//   saveUsersToFile();
// //   console.log('a');

// // fetch('/users', {
  
// //   method: 'POST',
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify(user)
// // })

// // .then(response => response.json())
// // .then(data => {
// //   usersArray.push(data);
// //   console.log('Пользователь успешно зарегистрирован:', data);
// // })
// // .catch(error => {
// //   console.error('Ошибка при регистрации пользователя:', error);
// // });
// }

// // function saveUsersToFile() {
// //   const usersJSON = JSON.stringify(registeredUsers);
// //   fetch("user.json")
// //   .then(response => {
// //     console.log("Данные пользователей сохранены в файл user.json");
// //   })
// //   .catch(error => {
// //     console.error("Ошибка при сохранении данных пользователей: ", error);
// //   });
// // }
    
// // fetch('https://api.example.com/data')
// //   .then(response => {
// //     // Проверка статуса ответа
// //     if (response.ok) {
// //       return response.json(); // Преобразование ответа в JSON
// //     } else {
// //       throw new Error('Ошибка при получении данных');
// //     }
// //   })
// //   .then(data => {
// //     // Обработка полученных данных
// //     console.log('Полученные данные:', data);
// //   })
// //   .catch(error => {
// //     // Обработка ошибок
// //     console.error('Ошибка:', error);
// //   });

// //   let nicknameAttempts = 0;
// //   document.getElementById('generate-nickname').addEventListener('click', function() {


// //     if(nicknameAttempts ==0){
// //         nickname = registeredUsers.length+1+'user';
// //         document.getElementById('nickname').value=nickname;
// //     }
// //     if(nicknameAttempts ==1){
// //         nickname ='userNunber' +registeredUsers.length+1;
// //         document.getElementById('nickname').value=nickname;
// //     }
// //     if(nicknameAttempts ==2){
// //         nickname ='user';
// //         document.getElementById('nickname').value=nickname;
// //     }if(nicknameAttempts ==3){
// //         nickname = registeredUsers.length+1+'client';
// //         document.getElementById('nickname').value=nickname;
// //     }if(nicknameAttempts ==4){
// //         nickname = 'client';
// //         document.getElementById('nickname').value=nickname;
// //     }

// //       if (nicknameAttempts >= 5) {
// //         document.getElementById('nickname').value='';
// //         document.getElementById('nickname-error').textContent='Введите желаемый никнейм';
// //       }

// //     nicknameAttempts++;
// //   })

// function generatePassword() {
// const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
// const numericChars = '0123456789';
// const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

// const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

// let pass = '';

// for (let i = 0; i < 10; i++) {
//   pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
// }

// return pass;
// }



// function registration(){
// console.log('4');
// event.preventDefault(); 
// console.log('Регистрация началась');
//   let formData = {
//     fullName: registrationWindow.elements.fullName.value,
//     phoneNumber: registrationWindow.elements.phoneNumber.value,
//     email: registrationWindow.elements.email.value,
//     password:registrationWindow.elements.password.value,
//     nickname: registrationWindow.elements.nickname.value,
//     birthdate: registrationWindow.elements.birthdate.value
//   };
  
//   // Отправляем данные на сервер для сохранения
//   saveRegistrationData(formData);
  
//   // Очищаем форму
//   registrationWindow.reset();
  
//   console.log('Регистрация успешна');
//   displayRegisteredClients();
//   window.location.href ="/htmlForClient.html";
// }

//   });

      