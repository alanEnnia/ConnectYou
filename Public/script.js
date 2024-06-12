const survey = document.querySelector("#survey");
const firstText = document.querySelector("#firstText");
const containers = document.querySelectorAll(".container");


const C1 = document.querySelector("#C1");
const C2 = document.querySelector("#C2");
const C3 = document.querySelector("#C3");
const C4 = document.querySelector("#C4");
const C5 = document.querySelector("#C5");
const C6 = document.querySelector("#C6");
const formC = document.querySelector('form#formC');
var username = '';
var nameC2 = document.querySelector('#C2 span#name');
const C2Btns  = document.querySelectorAll('#C2 .btns button ');
var statue = '';
const C3Btns = document.querySelectorAll('#C3 .btns button');
var speciality = '';
var specialityC = document.querySelector('#C4 #sp');
var nameC4 = document.querySelector('#C4 #name');
const btnC4 = document.querySelector('#C4 #btn');
const btn1C4 = document.querySelector('#C4 #btn1');
const btn2C4 = document.querySelector('#C4 #btn2 ')
const C4Btns = document.querySelectorAll('#C4 .btns input[type="button"]');
var interest = '';
const Particle = document.querySelector('#particleCore');
const C6btns = document.querySelector('#particleCore #btnContainer');
const C6ExportBtn = document.querySelector('#btnContainer #expoBtn');
const C6ResumeBtn = document.querySelector('#btnContainer #resuBtn');
/** */
const C1p = document.querySelector('#C1 #part2p0');
const C1p1 = document.querySelector('#C1 #part2p1');
const C1Btn = document.querySelector('#C1 #C1Btn');

const C2p  = document.querySelector('#C2  #pContainer');
const C2Btn = document.querySelector('#C2 #internship');
const C2Btn1 =document.querySelector('#C2 #job');

const C3p = document.querySelector('#C3 #pContainer');
const C3Btn = document.querySelector('#C3 #ID');
const C3Btn1 = document.querySelector('#C3 #DD');
const C3Btn2 = document.querySelector('#C3 #BM');

const C4p = document.querySelector("#C4 #pContainer");

const C5p = document.querySelector("#C5 p");

const C6H0 = document.querySelector("#C6 #Header ");

const C7 = document.querySelector("#C7");
const C7ClearBtn = document.querySelector('#C7 .btns .Clear');
const C7Age = document.querySelector('#C7 #age ');
const C7Citizenship = document.querySelector('#C7 select');
const C7Lang = document.querySelector('#C7 #languages');
const C7Email = document.querySelector('#C7 #email');
const C7Phone = document.querySelector('#C7 #phoneNumber');
const C7Habits = document.querySelector('#C7 #habits');
const C7Submit = document.querySelector('#C7 .Submit');


var  Age;
var  langs;
var   Email ;
var   PhoneNumber ;
var   Habits;
var Citizenship;

const C8 = document.querySelector("#C8");
var copanyName = document.querySelector("#C8 #companyName");
var jobTitle = document.querySelector("#C8 #jobTitle");
var jobDesc = document.querySelector("#C8 #jobDesc");
var fromDate = document.querySelector("#C8 #fromDate");
var toDate = document.querySelector("#C8 #toDate");

const C8Skip  = document.querySelector("#C8 .Skip");
const C8Next = document.querySelector('#C8 .Next');
const C8Add = document.querySelector('#C8 .Add');

var Experiences = [];
var Experience;

const C9 = document.querySelector('#C9');

const C9Skip = document.querySelector('#C9 .Skip');
const C9Next = document.querySelector('#C9 .Next');
const C9Add = document.querySelector('#C9 .Add');

const   degreeName       = document.querySelector('#C9 #degreeName');
const    universityName  = document.querySelector('#C9 #universityName');
const    degreeDate = document.querySelector('#C9 #degreeDate');
const    degreeDuration = document.querySelector('#C9 #degreeDuration');

let Degrees = [];
let Degree;
var OutputPrompt;

const pPrompt = document.querySelector('#C11 #body p');
const againBtn = document.querySelector('#C11 #AgainGenAi');

const C10 = document.querySelector("#C10");

const C10Skip = document.querySelector('#C10 .Skip');
const C10Next = document.querySelector("#C10 .Next");
const C10Add = document.querySelector("#C10 .Add");


const C11 = document.querySelector("#C11");


var Projects = [];
var Project;
const prjName = document.querySelector('#C10 #projectName');
const prjDesc = document.querySelector('#C10 #projectDesc');

const C11Next = document.querySelector('#C11 #FinalNext');

var C12;

const downCV  = document.querySelector(' #downCV');







function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function loadingParts(){
    document.body.addEventListener('click',async function audioP() {
    playAudio(0);
    document.body.removeEventListener('click', audioP);
    firstText.style.opacity = 1;
    await delay(3000);
    firstText.style.opacity = 0;
    await delay(800);
    firstText.style.display  ="none";
    C1.style.display = "block";
    await delay(100);
    actualPart = 1;
    C1.style.opacity = 1;
    playAudio(actualPart);
    });

    formC.addEventListener('submit',async function(e){
        e.preventDefault();
        username = document.querySelector('#username').value;
        console.log(username);
        C1.style.opacity = 0;
        await delay(800);
        C1.style.display = "none";
        C2.style.display = "block";
        nameC2.textContent = username;
        await delay(100);
        actualPart = 2;
        backBtn.style.opacity = 1;
        backBtn.style.zIndex = 400;
        C2.style.opacity = 1;
        playAudio(actualPart);
    });

    C2Btns.forEach((btn)=>{
            btn.addEventListener("click",async function(){
                statue = this.id;
                console.log(statue);
                C2.style.opacity = 0;
                await delay(800);
                C2.style.display = "none";
                C3.style.display = "block";
                await delay(100);
                actualPart = 3;
                C3.style.opacity = 1;
                playAudio(actualPart);
            });
    });

    C3Btns.forEach((btn)=>{
            btn.addEventListener("click",async function(){
                speciality = this.id;
                console.log(speciality);
                C3.style.opacity = 0;
                await delay(800);
                C3.style.display = 'none';
                C4.style.display = "block";
                specialityC.textContent = speciality;
                nameC4.textContent = username;
                if (speciality == 'ID'){
                    if (actualLanguage == "EN"){ 
                        btnC4.value = 'Healthcare';
                        btn1C4.value = 'Telecommunication';
                        btn2C4.value = 'Banking';
                    } 
                    if (actualLanguage == "FR") {
                        btnC4.value = 'Soins de santé';
                        btn1C4.value = 'Télécommunications';
                        btn2C4.value = 'Bancaire';                                                                                                            }
                }
                if (speciality == 'DD'){
                    if (actualLanguage == "EN") { 
                        btnC4.value = 'Information&Media';
                        btn1C4.value = 'Technology&Service';
                        btn2C4.value = 'Telecommunication';
                    }
                    if (actualLanguage == "FR") { 
                        btnC4.value = 'Informations Et Médias';
                        btn1C4.value = 'Technologie Et Service';
                        btn2C4.value = 'Télécommunications';
                    }
                }
                if (speciality == 'BM'){
                    if (actualLanguage == "EN") { 
                        btnC4.value = 'Business Consulting';
                        btn1C4.value = 'Financial Services';
                        btn2C4.value = 'Information&Media';
                     }
                    if (actualLanguage == "FR") {
                        btnC4.value = 'Conseil aux entreprises';
                        btn1C4.value = 'Services Financiers';
                        btn2C4.value = 'Informations et Médias';
                    }}
                await delay(100);
                actualPart = 4;
                C4.style.opacity = 1;
                playAudio(actualPart);
            });
    });

    C4Btns.forEach((btn)=>{
                btn.addEventListener('click',async function(){
                    interest = btn.value;
                    console.log(interest);
                    C4.style.opacity = 0;
                    await delay(800);
                    C4.style.display = 'none';
                    actualPart = 5;
                    backBtn.style.opacity = 0;
                    C5.style.display = "block";
                    Particle.style.animation = "part5AnParticle 1s ease-in-out";
                    survey.style.animation = "part5AnSurvey 1s ease-in-out";
                    Particle.style.marginLeft = '-800px';
                    Particle.style.marginBottom = '-285px';
                    survey.style.marginRight = '-450px';
                    await delay(100);
                    backBtn.style.opacity = 0;
                    actualPart = 5;
                    C5.style.marginBottom = '-120px!important';
                    C5.style.opacity = 1; 
                    
                    playAudio(actualPart);
                    loadJSONData(username,statue,speciality,interest);
                    await delay(6000);
                    C5.style.opacity = 0;   
                    await delay(500);
                    C5.style.display = 'none';
                    actualPart = 6;
                    backBtn.style.opacity = 1;
                    backBtn.style.zIndex = 400;
                    C6.style.display = 'flex';
                    C6btns.style.display = 'flex';
                    await delay(800);
                    C6btns.style.opacity = 1;
                    playAudio(actualPart);
                    C6ExportBtn.style.animation = "fromTheTop .8s ease-in-out";
                    C6ResumeBtn.style.animation = "fromTheTop .6s ease-in-out";
                    Particle.style.transform = 'translateY(-20px)';
                    C6.style.opacity = 1;
                });
    });

    C6ResumeBtn.addEventListener('click',async ()=>{
        actualPart = 6;
        C6.style.opacity = 0;
        await delay(800);
        C6.style.display = 'none';
        actualPart = 7;
        C7.style.display = 'flex';
        Particle.style.animation = "part5AnParticleR1 1s ease-in-out";
        survey.style.animation = "part5AnSurveyR1 1s ease-in-out";
        await delay (1200);
        Particle.style.marginLeft = '16px';
        Particle.style.marginBottom = '-236px';
        Particle.style.transform = ' scale(.6) translateY(-406px)';
        survey.style.marginRight = '0px';
        survey.style.marginTop = '-305px!important';
        C6btns.style.display = 'none';     
        await delay(100);
        playAudio(actualPart);
        C7.style.opacity = 1;
    });

    C7ClearBtn.addEventListener('click', ()=>{
        C7Age.value = '';
        C7Lang.value = '';
        C7Email.value = '';
        C7Phone.value = '';
        C7Habits.value = '';
    });

    C7Submit.addEventListener('click', async ()=>{
        if(C7Age.value === '' || C7Lang.value === '' || C7Email.value === '' || C7Habits.value === '' || C7Phone.value == '' ){
            alert('Fill Your Informations!');
        }else {
              Age = C7Age.value;
              langs = C7Lang.value;
               Email =  C7Email.value;
               PhoneNumber = C7Phone.value;
               Habits = C7Habits.value;
             Citizenship = C7Citizenship.value;
            C7.style.opacity = 0;
            await delay(800);
            C7.style.display = 'none';
            actualPart = 8;
            C8.style.display = 'flex';
            await delay(100);
            playAudio(actualPart);
            C8.style.opacity = 1;   
        }
    });

    C8Add.addEventListener('click',()=>{

        if (copanyName.value ==''|| jobTitle.value  == '' || jobDesc.value == '' || fromDate.value == ''|| toDate.value == '' ){
            alert('Fill Your Work Experience!');
        }else{
            var Experience = {
                company: copanyName.value,
                jobTitle: jobTitle.value,
                jobDesc: jobDesc.value,
                fromDate: fromDate.value,
                toDate: toDate.value
            };

            Experiences.push(Experience);
            console.log(Experience);
            console.log(Experiences);
            copanyName.value = '';
            jobTitle.value = '';
            jobDesc.value = '';
            fromDate.value = '';
            toDate.value = '';
            alert('Done');
        }
    });

    C8Skip.addEventListener('click', async ()=>{
        Experiences = [];
        C8.style.opacity = 0;
        await delay(800);
        C8.style.display = 'none';
        C9.style.display = 'flex';
        actualPart = 9;
        await delay(100);
        playAudio(actualPart);
        C9.style.opacity = 1;
    });

    C8Next.addEventListener('click', async ()=>{
        if (Experiences.length == 0){

            alert('Fill Your Work Experience!');
            
        }else {
            C8.style.opacity = 0;
            await delay(800);
            C8.style.display = 'none';
            C9.style.display = 'flex';
            actualPart = 9;
            await delay(100);
            playAudio(actualPart);
            C9.style.opacity = 1;
        }
    });

    C9Skip.addEventListener('click',async ()=>{
        Degrees = [];
        C9.style.opacity = 0;
        await delay(800);
        C9.style.display = 'none';
        C10.style.display = 'flex';
        actualPart = 10;
        await delay(100);
        playAudio(actualPart);
        C10.style.opacity = 1;
    });

    C9Add.addEventListener('click', async ()=>{
        if (degreeName.value === '' || universityName.value === '' || degreeDate.value === ''  || degreeDuration.value === ''){
            alert('Please Fill All The Fields!');
        } else {
             Degree = {
                degreeName: degreeName.value,
                universityName: universityName.value,
                degreeDate: degreeDate.value,
                degreeDuration: degreeDuration.value
            };
            Degrees.push(Degree);
            degreeName.value = '';
            universityName.value = '';
            degreeDate.value = '';
            degreeDuration.value = '';
            alert('Done');
        }
    });

    C9Next.addEventListener('click',async ()=>{
        if (Degrees.length == 0){
            alert('Please Add At Least One Degree!');
        } else{
            C9.style.opacity = 0;
            await delay(800);
            C9.style.display = 'none';
            OutputPrompt = await  genAi(username,speciality,interest,Age,langs,Habits,Experiences,Degrees,actualLanguage);
            pPrompt.innerHTML  = OutputPrompt;
            C10.style.display = 'flex';
            actualPart = 10;
            await delay(100);
            C10.style.opacity  = 1;
            const aiImg = document.querySelector('#particleCore img#AiImg');
            aiImg.style.display = 'block';
            await delay(100);
            aiImg.style.opacity = 1;
            playAudio(actualPart);
            await delay(100);
            aiImg.style.transform = 'translate(214px, -24px)';
        }
    });


    C10Add.addEventListener('click',async ()=>{
        if (prjName.value == '' || prjDesc.value == '') {
            alert('Please Fill All The Fields!');
        }else{
             Project = {
                projectName: prjName.value,
                projectDesc: prjDesc.value       
             }

             Projects.push(Project);
             prjName.value = '';
             prjDesc.value = '';
             if(actualLanguage == 'FR'){ 
                alert('Projet Ajouté avec Succès!');

             }else{
                alert('Project Added Successfully!');
             }
    } });
    
    C10Skip.addEventListener('click',async ()=>{

        Projects = [];
        C10.style.opacity = 0;
        document.querySelector('#particleCore img#AiImg').style.opacity = 0;
        await delay(800);
        C10.style.display = 'none';
        OutputPrompt = await  genAi(username,speciality,interest,Age,langs,Habits,Experiences,Degrees,actualLanguage);
        pPrompt.innerHTML  = OutputPrompt;
        C11.style.display = 'flex';
        actualPart = 11;
        await delay(100);
        playAudio(actualPart);
        C11.style.opacity = 1;
    });


    C10Next.addEventListener('click',async ()=>{
        if (Projects.length == 0){
            alert('Please Add At Least One Project!');
        } else{
            C10.style.opacity = 0;
            document.querySelector('#particleCore img#AiImg').style.opacity = 0;
            await delay(800);
            C10.style.display = 'none';
            OutputPrompt = await  genAi(username,speciality,interest,Age,langs,Habits,Experiences,Degrees,actualLanguage);
            pPrompt.innerHTML  = OutputPrompt;
            C11.style.display = 'flex';
            actualPart = 11;
            await delay(100);
            C11.style.opacity  = 1;
            const aiImg = document.querySelector('#particleCore img#AiImg');
            aiImg.style.display = 'block';
            await delay(100);
            playAudio(actualPart);
            aiImg.style.opacity = 1;
            aiImg.style.transform = 'translate(214px, -24px)';
        }
    });

    againBtn.addEventListener('click',async ()=>{
        pPrompt.style.opacity = 0;
        OutputPrompt = await genAi(username,speciality,interest,Age,langs,Habits,Experiences,Degrees,actualLanguage);
        await delay(100);        
        pPrompt.innerHTML  = OutputPrompt;
        pPrompt.style.opacity = 1;
    });


    C11Next.addEventListener('click',async ()=>{
        C11.style.opacity = 0;
        await delay(400);
        C11.style.display = 'none';        
        await turnPDF(username,Email,PhoneNumber,OutputPrompt,Experiences,Degrees,Projects,habits,speciality,actualLanguage);
        C12 = document.querySelector('#C12');
        C12.style.display = 'block';
        C12.style.opacity = 1;
        document.querySelector('#C12').style.opacity = 1;
        Particle.style.marginLeft = '-800px';
        Particle.style.marginBottom = '-1000px';
        Particle.style.transform = 'scale(1) translateY(-406px)';
        survey.style.marginRight = '-343px';
        C12.style.transform = 'scale(.7)';
        actualPart = 12;
        playAudio(actualPart);
        downCV.style.display = 'block';
        downCV.style.transform  = 'translateY(50px)';
        await delay(100);
        downCV.style.opacity = 1;
        await delay(300);
        downCV.style.transform  = 'translateY(0px)';
        aiImg.style.opacity = 0;
       
    });

 }
loadingParts();






