document.addEventListener('DOMContentLoaded', function() {

    let profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', function() {
        window.location.href ="htmlForClient.html";
    });

    let myPrFrameTub = document.getElementById('myPrFrameTub');
    myPrFrameTub.addEventListener('click', function() {
        
        window.location.href ="newProject.html";
    });

    let requestFrameButton = document.getElementById('requestFrameButton');
    requestFrameButton.addEventListener('click', function() {
        
        window.location.href ="index.html";
    });


    let massageWindowClose = document.getElementById('massageWindowClose');
    massageWindowClose.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.remove('open');
        document.querySelector('.profileFrame').style.filter = 'brightness(1)';
        });


        let masageButton = document.getElementById('masageButton');
       
        masageButton.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.add('open');
        document.querySelector('.profileFrame').style.filter = 'brightness(0.5)';
        });


        let lastClientData = JSON.parse(localStorage.getItem('lastClient'));
        
        document.getElementById('fullName').textContent=lastClientData.fullName;
        document.getElementById('NUMBERfIELD').textContent=lastClientData.phoneNumber;
        document.getElementById('EmailIELD').textContent=lastClientData.email;
        document.getElementById('birthdatefIELD').textContent=lastClientData.birthdate;
        document.getElementById('nicknamefIELD').textContent=lastClientData.nickname;





        if(localStorage.getItem('tema') === 'moon')
            {
                document.querySelectorAll('.loginWindowMainText').forEach(element => {
                    element.style.color = '#F0ECE6';
                  });

            document.querySelector('.profileFrame').style.background="#977760";
            document.querySelector('.requestFrameNav').style.background="#977760";
            document.querySelector('body').style.backgroundColor="#977760";
            }
            else{
                document.querySelector('.profileFrame').style.background="#EAE4DD";
                document.querySelector('.requestFrameNav').style.background="#B0947B";
                document.querySelector('body').style.backgroundColor="#B0947B";
                document.querySelectorAll('.loginWindowMainText').forEach(element => {
                    element.style.color = '#69432C';
                  });
            }
    
            if (localStorage.getItem('lang') === 'EN') {
                document.getElementById('profileButton').textContent = "New project";
                document.getElementById('myPrFrameTubText').textContent = "My projects";
                document.getElementById('masageButtonText').textContent = "Notifications";
                document.getElementById('requestFrameButtonText').textContent = "Home";
                document.getElementById('1').textContent = "My profile";
                document.getElementById('moreTAKE').textContent = "Phone number:";
                document.getElementById('dropdownmenu1').textContent = "Date of Birth:";
                document.getElementById('dropdownmenu2').textContent = "Nickname:";
                document.getElementById('2').textContent = "No notifications";
                document.getElementById('massageWindowClose').textContent = "Close";
            }
            else{
                document.getElementById('profileButton').textContent = "Новый проект";
                document.getElementById('myPrFrameTubText').textContent = "Мои проекты";
                document.getElementById('masageButtonText').textContent = "Уведомления";
                document.getElementById('requestFrameButtonText').textContent = "Главная";

                
                document.getElementById('1').textContent = "Мой профиль";
                document.getElementById('moreTAKE').textContent = "Номер телефона:";
                document.getElementById('dropdownmenu1').textContent = "Дата рождения:";
                document.getElementById('dropdownmenu2').textContent = "Никнейм:";
                document.getElementById('2').textContent = "Уведомлений нет";
                document.getElementById('massageWindowClosetext').textContent = "Закрыть";
            }


    });