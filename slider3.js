document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.buttonLite');
    
        
    button.addEventListener('click', function() 
    {
        if(localStorage.getItem('tema') === 'sum')
        {
        document.querySelector('.buttonLiteSun').style.display="none";
        document.querySelector('.buttonLiteMoon').style.display="block";
        localStorage.setItem('tema','moon');

       
        //1
        document.querySelector('body').style.backgroundColor="#977760";
        document.querySelector('.mainBlockFon').style.backgroundImage="url(/fotoForProject/mainFon4.png)";
        document.querySelector('.headMenu').style.backgroundColor="#977760";
        document.querySelector('.leftElementBlock').style.backgroundColor="#977760";
        document.querySelector('.headerTextBig').style.color="#F7F6F2";
        document.querySelector('.headerTextSmall').style.color="#F7F6F2";
        document.querySelector('.registrationWindow').style.backgroundColor="#B0947B";
        
        document.querySelector('.loginWindow').style.backgroundColor="#B0947B";
        document.querySelector('.passwordWindow').style.backgroundColor="#B0947B";
        document.querySelectorAll('.loginWindowMainText').forEach(element => {
            element.style.color = '#F7F6F2';
          });
          document.querySelectorAll('.loginWindowSSecondText').forEach(element => {
            element.style.color = '#F7F6F2';
          });
          document.querySelectorAll('.loginWindowLitleText').forEach(element => {
            element.style.color = '#F7F6F2';
          });
          document.querySelectorAll('.loginWindowLitleTextInfo').forEach(element => {
            element.style.color = '#69432C';
          });
          
          document.querySelectorAll('.Obligatoryfield').forEach(element => {
            element.style.color = '#F7F6F2';
          });
          
        document.querySelectorAll('.plaseForInfo').forEach(element => {
            element.style.background = 'linear-gradient(90deg, #F7F6F2 0%, rgba(247, 246, 242, 0) 100%)';
            
          });

         
        //2
        document.querySelector('.servesesFoto').style.filter="brightness(0.6)";
        document.querySelector('.serveses').style.backgroundColor="#977760";
        document.querySelector('.servesesLitleText').style.color="#F7F6F2";
        document.querySelector('.servesesHeader').style.color="#F7F6F2";
        document.querySelector('.servesesMainInfo').style.color="#F7F6F2";

        //3
        document.querySelector('.modernTecFoto').style.filter="brightness(0.6)";
        document.querySelector('.modernTec').style.backgroundColor="#977760";
        document.querySelector('.SmallTextEl1').style.color="#F7F6F2";
        document.querySelector('.modernTecHeadHeaderMein').style.color="#F7F6F2";

        //4
        document.querySelector('.arFrame').style.backgroundColor="#977760";
        document.querySelector('.arFrameFoto').style.filter="brightness(0.7)";

        //5
        document.querySelector('.exspirienseFoto').style.filter="brightness(0.7)";

        //6
        document.querySelector('.portfolioFotoBlock').style.filter="brightness(0.7)";

        //7
        document.querySelector('.scrollPersonal').style.backgroundColor="#977760";
        document.querySelector('.scrollPersonalHeadSmall').style.color="#F7F6F2";
        document.getElementById('scrollPersonalHeadSmall2').style.color="#F7F6F2";
        document.querySelector('.scrollPersonMain').style.backgroundColor="#B0947B";
        document.querySelector('.fotoPerson').style.filter="brightness(0.6)";

        //8
        document.querySelector('.reviewsFrameColor').style.backgroundColor="#B0947B";
        document.querySelector('.collOR1').style.backgroundColor="#B0947B";
        document.querySelector('.mainTextREVIEWS').style.color="#F7F6F2";
        document.querySelector('.reviewScroll').style.filter="brightness(0.9)";


          document.querySelectorAll('.loginWindowInfoButton').forEach(element => {
            element.style.background = 'rgb(247, 246, 242)';
          });

          document.querySelectorAll('.loginWindowInfoButtonText').forEach(element => {
            element.style.color = '#B0947B';
          });
          document.querySelectorAll('.oginWindowLitleText').forEach(element => {
            element.style.color = '#B0947B';
          });
          
          
        }
        else{
            localStorage.setItem('tema','sum');
            
         

            document.querySelector('.loginWindow').style.backgroundColor="#F0ECE6";
            document.querySelectorAll('.oginWindowLitleText').forEach(element => {
              element.style.color = '#B0947B';
            });
            document.querySelector('.passwordWindow').style.backgroundColor="#F0ECE6";
            document.querySelector('.buttonLiteSun').style.display="block";
            document.querySelector('.buttonLiteMoon').style.display="none";

        document.querySelector('.registrationWindow').style.backgroundColor="#F0ECE6";

            document.querySelectorAll('.loginWindowSSecondText').forEach(element => {
                element.style.color = '#69432C';
              });
              document.querySelectorAll('.loginWindowMainText').forEach(element => {
                element.style.color = '#69432C';
              });
              document.querySelectorAll('.loginWindowLitleText').forEach(element => {
                element.style.color = '#69432C';
              });
              document.querySelectorAll('.Obligatoryfield').forEach(element => {
                element.style.color = '#69432C';
              });

              document.querySelectorAll('.plaseForInfo').forEach(element => {
                element.style.background = null;
                
              });

                document.querySelectorAll('.loginWindowInfoButton').forEach(element => {
                    element.style.background = '#8C694F';
                  });
        
                  document.querySelectorAll('.loginWindowInfoButtonText').forEach(element => {
                    element.style.color = '#F0ECE6';
                  });
    

        
        
          document.querySelectorAll('.loginWindowLitleTextInfo').forEach(element => {
            element.style.color = '#F7F6F2';
          });
            // 1
            document.querySelector('body').style.backgroundColor="#B0947B";
            document.querySelector('.mainBlockFon').style.backgroundImage="url(/fotoForProject/mainFon.jpg)";
            document.querySelector('.headMenu').style.backgroundColor="#B0947B";
            document.querySelector('.leftElementBlock').style.backgroundColor="#B0947B";
            document.querySelector('.headerTextBig').style.color="#131F45";
            document.querySelector('.headerTextSmall').style.color="#2F3F6B";

            //2
            document.querySelector('.servesesFoto').style.filter="brightness(1)";
            document.querySelector('.serveses').style.backgroundColor="#EAE4DD";
            document.querySelector('.servesesLitleText').style.color="#8C694F";
            document.querySelector('.servesesHeader').style.color="#69432C";
            document.querySelector('.servesesMainInfo').style.color="#69432C";

            //3
            document.querySelector('.modernTecFoto').style.filter="brightness(1)";
            document.querySelector('.modernTec').style.backgroundColor="#B0947B";
            document.querySelector('.SmallTextEl1').style.color="#8C694F";
            document.querySelector('.modernTecHeadHeaderMein').style.color="#8C694F";

            //4
            document.querySelector('.arFrame').style.backgroundColor="#B0947B";
            document.querySelector('.arFrameFoto').style.filter="brightness(1)";

            //5
            document.querySelector('.exspirienseFoto').style.filter="brightness(1)";

            //6
            document.querySelector('.portfolioFotoBlock').style.filter="brightness(1)";

            //7
            document.querySelector('.scrollPersonal').style.backgroundColor="#F0ECE6";
            document.querySelector('.scrollPersonalHeadSmall').style.color="#B0947B";
            document.getElementById('scrollPersonalHeadSmall2').style.color="#B0947B";
            document.querySelector('.scrollPersonMain').style.backgroundColor="#EAE4DD";
            document.querySelector('.fotoPerson').style.filter="brightness(1)";

            //8
            document.querySelector('.reviewsFrameColor').style.backgroundColor="#EAE4DD";
            document.querySelector('.collOR1').style.backgroundColor="#EAE4DD";
            document.querySelector('.mainTextREVIEWS').style.color="#8C694F";
            document.querySelector('.reviewScroll').style.filter="brightness(1)";


            
        }
    }
);


if (localStorage.getItem('tema') =='sum'){
    localStorage.setItem('tema','moon');
  }
  else{
      localStorage.setItem('tema','sum') 
  }
  button.click();

});

