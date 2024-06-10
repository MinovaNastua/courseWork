document.addEventListener('DOMContentLoaded', function() {
    

        if(localStorage.getItem('tema') === 'moon')
        {
        document.querySelector('.requestFrameNav').style.background="#977760";
        document.querySelector('.requestFrameForm').style.background="#977760";
        document.querySelector('.deskTop').style.background="black";
        document.querySelector('.requestFrame').style.opacity="0.9";
        document.querySelector('body').style.backgroundColor="#977760";
        document.querySelector('.passwordWindow').style.background="#B0947B";
        }
        else{
            document.querySelector('.requestFrameNav').style.background="#B0947B";
            document.querySelector('.requestFrameForm').style.background="#B0947B";
            document.querySelector('.deskTop').style.background="#B0947B";
            document.querySelector('.requestFrame').style.opacity="1";
            document.querySelector('body').style.backgroundColor="#B0947B";
            document.querySelector('.passwordWindow').style.background="#F0ECE6";
        }

        if (localStorage.getItem('lang') === 'EN') {
            document.getElementById('profileButton').textContent = "My profile";
            document.getElementById('myPrFrameTubText').textContent = "My projects";
            document.getElementById('masageButtonText').textContent = "Notifications";
            document.getElementById('requestFrameButtonText').textContent = "Home";
            document.querySelector('.requestFrameFormBigText').textContent = "Send request";
            document.querySelector('.textInput').textContent = "Please indicate your requirements for the project...";
            document.querySelector('.requestFrameFormSmallTextColor1').textContent = "For a more specific request, select examples from our portfolio";
            document.getElementById('1').textContent = "Send";
            document.getElementById('moreTAKE').textContent = "Load others";
            document.getElementById('dropdownmenu1').textContent = "Interior";
            document.getElementById('dropdownmenu2').textContent = "Exterior";
            document.getElementById('dropdownmenu3').textContent = "Cloth";
            document.getElementById('2').textContent = "No notifications";
            document.getElementById('massageWindowClose').textContent = "Close";
            document.getElementById('dropdownmenupunct').textContent = "Select design type";
        }
        else{
            document.getElementById('profileButton').textContent = "Мой профиль";
            document.getElementById('myPrFrameTubText').textContent = "Мои проекты";
            document.getElementById('masageButtonText').textContent = "Уведомления";
            document.getElementById('requestFrameButtonText').textContent = "Главная";
            document.querySelector('.requestFrameFormBigText').textContent = "Отправить запрос";
            document.querySelector('.textInput').textContent = "Укажите ваши требования к проету...";
            document.querySelector('.requestFrameFormSmallTextColor1').textContent = "Для более точного запроса выберите примеры из нашего портфолио";
            document.getElementById('1').textContent = "Отправить";
            document.getElementById('moreTAKE').textContent = "Загрузить другие";
            document.getElementById('dropdownmenu1').textContent = "Интерьер";
            document.getElementById('dropdownmenu2').textContent = "Экстерьер";
            document.getElementById('dropdownmenu3').textContent = "Одежда";
            document.getElementById('2').textContent = "Уведомлений нет";
            document.getElementById('massageWindowClosetext').textContent = "Закрыть";
            document.getElementById('dropdownmenupunct').textContent = "Выберите тип дизайна";
        }

});