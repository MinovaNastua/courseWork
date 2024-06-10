document.addEventListener('DOMContentLoaded', function() {
    var button3 = document.getElementById('portfolioVector');
    var button4 = document.getElementById('portfolioVector2');
    var i=1;
    
    document.getElementById('languageToggle').addEventListener('click', function() 
    {
      translate();
      }
      )

    button3.addEventListener('click', function() 
      {
        if(i==3){
            i=1;
        }
        else{
          i++;  
        }
        
        if(i==1){
            document.getElementById('interior3').textContent = 'Интерьер';
            document.getElementById('interior2').textContent = 'Интерьер';
            document.getElementById('foto1').style.content = "url(/fotoForProject/portfolio1.png)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/portfolio2.png)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/portfolio3.png)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/portfolio3.png)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/portfolio4.png)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/portfolio4.png)";
            document.getElementById('1d').style.fill="#B0947B";
            document.getElementById('2d').style.fill="#F7F6F2";
            document.getElementById('3d').style.fill="#F7F6F2";
        }
    
        if(i==2){
            document.getElementById('interior3').textContent = 'Ландшавт';
            document.getElementById('interior2').textContent = 'Ландшавт';
            document.getElementById('foto1').style.content = "url(/fotoForProject/EXTERIOR1.jpg)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/EXTERIOR2.jpg)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/EXTERIOR3.jpg)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/EXTERIOR4.jpg)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/EXTERIOR3.jpg)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/EXTERIOR4.jpg)";
            document.getElementById('1d').style.fill="#F7F6F2";
            document.getElementById('2d').style.fill="#B0947B";
            document.getElementById('3d').style.fill="#F7F6F2";
        }
    
        if(i==3){
            document.getElementById('interior3').textContent = 'Одежда';
            document.getElementById('interior2').textContent = 'Одежда';
            document.getElementById('foto1').style.content = "url(/fotoForProject/clothes1.png)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/clothes2.jpg)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/clothes3.jpg)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/clothes4.jpg)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/clothes3.jpg)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/clothes4.jpg)";
            document.getElementById('1d').style.fill="#F7F6F2";
            document.getElementById('2d').style.fill="#F7F6F2";
            document.getElementById('3d').style.fill="#B0947B";
        }
    
    
    
        translate();
      }
    );
    
    button4.addEventListener('click', function() 
      {
        if(i==1){
            i=3;
        }
        else{
          i--;  
        }
        if(i==1){
            document.getElementById('interior3').textContent = 'Интерьер';
            document.getElementById('interior2').textContent = 'Интерьер';
            document.getElementById('foto1').style.content = "url(/fotoForProject/portfolio1.png)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/portfolio2.png)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/portfolio3.png)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/portfolio3.png)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/portfolio4.png)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/portfolio4.png)";
            document.getElementById('1d').style.fill="#B0947B";
            document.getElementById('2d').style.fill="#F7F6F2";
            document.getElementById('3d').style.fill="#F7F6F2";
        }
    
        if(i==2){
            document.getElementById('interior3').textContent = 'Ландшавт';
            document.getElementById('interior2').textContent = 'Ландшавт';
            document.getElementById('foto1').style.content = "url(/fotoForProject/EXTERIOR1.jpg)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/EXTERIOR2.jpg)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/EXTERIOR3.jpg)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/EXTERIOR4.jpg)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/EXTERIOR3.jpg)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/EXTERIOR4.jpg)";
            document.getElementById('1d').style.fill="#F7F6F2";
            document.getElementById('2d').style.fill="#B0947B";
            document.getElementById('3d').style.fill="#F7F6F2";
        }
    
        if(i==3){
            document.getElementById('interior3').textContent = 'Одежда';
            document.getElementById('interior2').textContent = 'Одежда';
            document.getElementById('foto1').style.content = "url(/fotoForProject/clothes1.png)";
            document.getElementById('foto2').style.content = "url(/fotoForProject/clothes2.jpg)";
            document.getElementById('foto3').style.content = "url(/fotoForProject/clothes3.jpg)";
            document.getElementById('foto4').style.content = "url(/fotoForProject/clothes4.jpg)";
            document.getElementById('foto33').style.content = "url(/fotoForProject/clothes3.jpg)";
            document.getElementById('foto44').style.content = "url(/fotoForProject/clothes4.jpg)";
            document.getElementById('1d').style.fill="#F7F6F2";
            document.getElementById('2d').style.fill="#F7F6F2";
            document.getElementById('3d').style.fill="#B0947B";
        }
    
        translate();
      }
    );



    function translate(){
      if(localStorage.getItem('lang') === 'RU'){
        if(i==1){
          document.getElementById('interior3').textContent = 'Интерьер';
          document.getElementById('interior2').textContent = 'Интерьер';
        }
            if(i==2){
              document.getElementById('interior3').textContent = 'Ландшавт';
              document.getElementById('interior2').textContent = 'Ландшавт';
            }
          if(i==3){
            document.getElementById('interior3').textContent = 'Одежда';
            document.getElementById('interior2').textContent = 'Одежда';
           }
        }
        else{
          if(i==1){
            document.getElementById('interior3').textContent = 'Interior';
            document.getElementById('interior2').textContent = 'Interior';
          }
              if(i==2){
                document.getElementById('interior3').textContent = 'Exterior';
                document.getElementById('interior2').textContent = 'Exterior';
              }
            if(i==3){
              document.getElementById('interior3').textContent = 'Cloth';
              document.getElementById('interior2').textContent = 'Cloth';
             }
        }
    }
    

    }
    );