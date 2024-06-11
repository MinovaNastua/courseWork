document.addEventListener('DOMContentLoaded', function() {

    let login = document.getElementById('requestFrameButton');
    login.addEventListener('click', function() {
        window.location.href ="index.html";
    });

    let myPrFrameTub = document.getElementById('myPrFrameTub');
    myPrFrameTub.addEventListener('click', function() {
        
        window.location.href ="newProject.html";
    });

    let profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', function() {
        
        window.location.href ="youProfile.html";
    });

    let dropdownmenu = document.getElementById('dropdownmenuButton');
    let flag = true;
    let punct1 = document.getElementById('dropdownmenu1');
    let punct2 = document.getElementById('dropdownmenu2');
    let punct3 = document.getElementById('dropdownmenu3');
   
    punct1.addEventListener('click', function() {
        dropdownmenu.click();
        document.getElementById('dropdownmenupunct').textContent=punct1.textContent;

    });

    punct2.addEventListener('click', function() {
        document.getElementById('dropdownmenupunct').textContent=punct2.textContent;

        dropdownmenu.click();
        
    });
    punct3.addEventListener('click', function() {
        document.getElementById('dropdownmenupunct').textContent=punct3.textContent;

        dropdownmenu.click();
    });

    dropdownmenu.addEventListener('click', function() {
        
        if(flag){
        document.querySelector('.dropdownmenu').classList.add('dropdownmenuOpen');
        document.querySelectorAll('.requestFrameFormSmallTextPunct').forEach(element => {
            element.style.overflow = 'visible';
            element.style.opacity = 1;
          });
          flag = false;
          dropdownmenu.classList.add('rotate')
        }
        else{
            document.querySelector('.dropdownmenu').classList.remove('dropdownmenuOpen');
        document.querySelectorAll('.requestFrameFormSmallTextPunct').forEach(element => {
            element.style.overflow = 'hidden';
            element.style.opacity = 0;
          });
          flag = true;
          dropdownmenu.classList.remove('rotate')
        }
    });


    let massageWindowClose = document.getElementById('massageWindowClose');
    massageWindowClose.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.remove('open');
        document.querySelector('.requestFrame').style.filter = 'brightness(1)';
        });


        let masageButton = document.getElementById('masageButton');
    masageButton.addEventListener('click', function() {
        document.querySelector('.massageWindow').classList.add('open');
        document.querySelector('.requestFrame').style.filter = 'brightness(0.5)';
        });


    let pic1 = document.getElementById('requestFrameFormThirtPlaceBlock1');
    let pic2 = document.getElementById('requestFrameFormThirtPlaceBlock2');
    let pic3 = document.getElementById('requestFrameFormThirtPlaceBlock3');

    let time;
   

    pic1.addEventListener('click', function() {
    document.querySelector('.passwordWindow').classList.add('open');
    document.querySelector('.requestFrame').style.filter = 'brightness(0.5)'; 
    document.querySelector('.passwordWindowpicture').style.display='flex';
    getRandomImages();
    time=pic1;
    });

    pic2.addEventListener('click', function() {
        document.querySelector('.passwordWindow').classList.add('open');
        document.querySelector('.requestFrame').style.filter = 'brightness(0.5)';
        document.querySelector('.passwordWindowpicture').style.display='flex';
        getRandomImages();
        time=pic2;
        });

    pic3.addEventListener('click', function() {
        document.querySelector('.passwordWindow').classList.add('open');
        document.querySelector('.requestFrame').style.filter = 'brightness(0.5)'; 
        document.querySelector('.passwordWindowpicture').style.display='flex';
        getRandomImages();
        time=pic3;
        });

    let i=0;
    let tub=false;

    

        document.querySelector('.passwordWindow').addEventListener('click', function(){
            console.log('true');
                tub = true
                console.log(i);
            })
    document.addEventListener('click', function(){
            i++;
            if (!tub & i>1) {
                i=0;
                console.log('close');
                document.querySelector('.passwordWindow').classList.remove('open');
                document.querySelector('.requestFrame').style.filter = 'brightness(1)';
                document.querySelector('.passwordWindowpicture').style.display='none';
            }
            tub=false;
        
    } )

    let imageUrls = [
        ' url(fotoForProject/portfolio1.png)',
        ' url(fotoForProject/portfolio2.png)',
        ' url(fotoForProject/portfolio3.png)',
        ' url(fotoForProject/portfolio4.png)',
        ' url(fotoForProject/servesesFoto1.png)',
        ' url(fotoForProject/zapros.png)',
        ' url(fotoForProject/EXTERIOR3.jpg)',
        ' url(fotoForProject/EXTERIOR2.jpg)',
        ' url(fotoForProject/EXTERIOR1.jpg)',
        ' url(fotoForProject/1.jpg)',
        ' url(fotoForProject/2.jpg)',
        ' url(fotoForProject/3.jpg)',
        ' url(fotoForProject/4.jpg)',
        ' url(fotoForProject/5.jpg)',
        ' url(fotoForProject/6.jpg)',
        ' url(fotoForProject/exspiriense.png)'
      ];

        let randomIndex;
      function getRandomImages() {
        const selectedImages = [];
        for (let i = 0; i < 4; i++) {
          
          do {
            randomIndex = Math.floor(Math.random() * imageUrls.length);
          } while (selectedImages.includes(randomIndex));
          selectedImages.push(randomIndex);
        }
        randomImages = selectedImages.map(index => imageUrls[index]);
        let number=0;
        document.querySelectorAll('.picture').forEach(element => {
            
            element.style.backgroundImage = randomImages[number];
            number++;
            });
      }
      
            document.getElementById('p1').addEventListener('click', function(){
            time.style.backgroundImage = randomImages[0];
            i=0
            document.querySelector('.passwordWindow').classList.remove('open');
            document.querySelector('.requestFrame').style.filter = 'brightness(1)';
            document.querySelector('.passwordWindowpicture').style.display='none';
            })

            document.getElementById('p2').addEventListener('click', function(){
                time.style.backgroundImage = randomImages[1];
                i=0
                document.querySelector('.passwordWindow').classList.remove('open');
                document.querySelector('.requestFrame').style.filter = 'brightness(1)';
                document.querySelector('.passwordWindowpicture').style.display='none';
                })

            document.getElementById('p3').addEventListener('click', function(){
                time.style.backgroundImage = randomImages[2];
                i=0
                document.querySelector('.passwordWindow').classList.remove('open');
                document.querySelector('.requestFrame').style.filter = 'brightness(1)';
                document.querySelector('.passwordWindowpicture').style.display='none';
                })

            document.getElementById('p4').addEventListener('click', function(){
                time.style.backgroundImage = randomImages[3];
                i=0
                document.querySelector('.passwordWindow').classList.remove('open');
                document.querySelector('.requestFrame').style.filter = 'brightness(1)';
                document.querySelector('.passwordWindowpicture').style.display='none';
                })


      let moreTAKE = document.getElementById('moreTAKE');

      moreTAKE.addEventListener('click', function() {
    getRandomImages();
    });
     
    

    });