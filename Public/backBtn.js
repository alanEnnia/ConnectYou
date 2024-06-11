

var actualPart = 0;
const backBtn = document.querySelector('#backBtn');


/*backBtn logic */
backBtn.addEventListener("click",async function(){
    if (actualPart != 0){
        Cpart = 'C' + actualPart;
        Cpart = document.querySelector('#' + Cpart);
        Cpart.style.opacity = 0;
        if (actualPart != 6 && actualPart !=12 && actualPart !=7){        
            await delay(100);
            Cpart.style.display = "none";
            actualPart--;
            Cpart = 'C' + actualPart;
            Cpart = document.querySelector('#' + Cpart);
            Cpart.style.display = "flex";
            await delay(100);
            Cpart.style.opacity = 1;

            
            if (C1.style.display != "none"){
                backBtn.style.opacity = 0;
                backBtn.style.zIndex = '-33';
            }
                    }
        
        if(actualPart == 6) {
            Particle.style.animation = "part5AnParticleR 1s ease-in-out";
            survey.style.animation = "part5AnSurveyR 1s ease-in-out";
            C6btns.style.opacity = 0;       
            await delay(800);    
            C6btns.style.display = 'none';
            Particle.style.transform = 'translateY(0px)';
            Particle.style.marginLeft = '-38px';
            Particle.style.marginBottom = '-61px';
            survey.style.marginRight = '0px';
            Cpart.style.opacity = 0;
            await delay(100);
            Cpart.style.display = "none";
            actualPart = 4;
            Cpart = 'C' + actualPart;
            Cpart = document.querySelector('#' + Cpart);
            Cpart.style.display = "flex";
            await delay(800);
            Cpart.style.opacity = 1;
        }

        if (actualPart == 7){
            C7.style.opacity = 0;
            await delay(100);
            Particle.style.marginLeft = '-800px';
            Particle.style.marginBottom = '-285px';
            survey.style.marginRight = '-450px';
            Particle.style.transform = 'scale(1) translateY(0px)';
            C7.style.display = "none";
            actualPart = 6;
            C6.style.display  ='flex';
            await delay(100);
            C6.style.opacity = 1;
        }
         if(actualPart ==12) {
            downCV.style.opacity = 0;
            C12.style.display='none';
            await delay(100);
            C11.style.display = 'flex';
            document.querySelector('#particleCore').style.marginLeft = '16px';
            document.querySelector('#particleCore').style.marginBottom = '-236px';
            Particle.style.transform = 'scale(.6) translateY(-406px)';
            document.querySelector('#survey').style.marginRight = '0px';
            C11.style.opacity = 1;
            actualPart = 11;
        }

    }
});
