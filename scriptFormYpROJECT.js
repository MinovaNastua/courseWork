document.addEventListener('DOMContentLoaded', function() {

    let login = document.getElementById('requestFrameButton');
    login.addEventListener('click', function() {
        window.location.href ="index.html";
    });

    let myPrFrameTub = document.getElementById('myPrFrameTub');
    myPrFrameTub.addEventListener('click', function() {
        
        window.location.href ="htmlForClient.html";
    });

    let profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', function() {
        
        window.location.href ="youProfile.html";
    });

    let massageWindowClose = document.getElementById('massageWindowClose');
    massageWindowClose.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.remove('open');
        document.querySelector('.myProjectFrame').style.filter = 'brightness(1)';
        });


        let masageButton = document.getElementById('masageButton');
       
        masageButton.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.add('open');
        document.querySelector('.myProjectFrame').style.filter = 'brightness(0.8)';
        });



        if(localStorage.getItem('tema') === 'moon')
            {
                document.querySelector('.requestFrameNav').style.background="#977760";
                document.querySelector('body').style.backgroundColor="#977760";
                document.querySelector('.myProjectFrame').style.opacity="0.9";
                document.querySelector('.deskTop').style.filter = 'brightness(0.7)';

            }
            else{
                document.querySelector('body').style.backgroundColor="#B0947B";
                document.querySelector('.myProjectFrame').style.opacity="1";
                document.querySelector('.deskTop').style.filter = 'brightness(1)';
            }
    
            if (localStorage.getItem('lang') === 'EN') {
                document.getElementById('profileButtontext').textContent = "My profile";
                document.getElementById('myPrFrameTub').textContent = "New project";
                document.getElementById('masageButton').textContent = "Notifications";
                document.getElementById('requestFrameButtonText').textContent = "Home";

                document.getElementById('1').textContent = "My projects";
                document.querySelector('.myProjectFrameBigText1').textContent = "In progress";
                document.querySelector('.myProjectFrameBigText2').textContent = "Read more...";
                document.querySelector('.myProjectFramePlasTecst').textContent = "Kitchen Design";

                document.getElementById('2').textContent = "Close";
                document.getElementById('massageWindowClosetext').textContent = "Select design type";
            }
            else{
                document.getElementById('profileButtontext').textContent = "Мой профиль";
                document.getElementById('myPrFrameTub').textContent = "Новый проект";
                document.getElementById('masageButton').textContent = "Уведомления";
                document.getElementById('requestFrameButtonText').textContent = "Главная";

                document.getElementById('1').textContent = "Мои проекты";
                document.querySelector('.myProjectFrameBigText1').textContent = "В процессе";
                document.querySelector('.myProjectFrameBigText2').textContent = "Подробнее...";
                document.querySelector('.myProjectFramePlasTecst').textContent = "Дизайн Кухни";

                document.getElementById('2').textContent = "Уведомлений нет";
                document.getElementById('massageWindowClosetext').textContent = "Закрыть";
            }
    });