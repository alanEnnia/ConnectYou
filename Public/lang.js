const langSBtn = document.querySelector("#lBtn");
var actualLanguage = "EN";

langSBtn.addEventListener("click", function() {
    if ( actualLanguage == 'FR' ){ 
        actualLanguage = "EN";  
        switchLang(actualLanguage);
        langSBtn.style.animation = "LBtnDeactivate 550ms linear";
        langSBtn.style.transform = "translateY(0px)";
        langSBtn.textContent = "EN";

    } else
    if (actualLanguage == 'EN') {
        actualLanguage = "FR";
        switchLang(actualLanguage);
        langSBtn.style.animation = "LBtnActivate 550ms linear";
        langSBtn.style.transform = "translateY(67px)";     
        langSBtn.textContent = "FR";     
    }
});


function switchLang(actualLanguage){
    if(actualLanguage == "FR"){

        if (speciality == 'ID'){
            btnC4.value = 'Soins de santé';
            btn1C4.value = 'Télécommunications';
            btn2C4.value = 'Bancaire';  
        }else
        if (speciality == 'DD'){
            
            btnC4.value = 'Information&Media';
            btn1C4.value = 'Technology&Service';
            btn2C4.value = 'Telecommunication';
        }else 
        if(speciality == 'BM'){
            btnC4.value = 'Business Consulting';
            btn1C4.value = 'Financial Services';
            btn2C4.value = 'Information&Media';
        }

        firstText.innerHTML = "Salut! <br> laissez-moi vous aider à trouver votre prochain emploi :)";
        
        C1p.innerHTML = "Dites-moi d'abord....";
        C1p1.innerHTML = "Quel est ton nom :";
        C1Btn.innerHTML = "suivant";

        C2p.innerHTML =  "D'accord <span id='name' style='font-weight: 600;'></span> Travaillons dessus ! <br> Vous recherchez un vrai travail ou simplement un stage ?";
        C2Btn.innerHTML = 'Stage';
        C2Btn1.innerHTML = 'Emploi';

        C3p.innerHTML = 'Cool! maintenant, faites-le-moi savoir.... <br>Quelle est ta spécialité?';
        C3Btn.innerHTML = 'Infrastructure Digital';
        C3Btn1.innerHTML = 'Développement Digital';
        C3Btn2.innerHTML = "Gestion d'entreprise";

        C4p.innerHTML = "<span id='sp'></span>!!WOW Nice Spécialiste <span id='name'></span> <br>Maintenant, pour vous donner le meilleur résultat, j'ai besoin que vous me disiez ce qui vous intéresse le plus....  ";

        C5p.innerHTML = "<p>Okey, j'ai reçu vos informations !<br> donnez-moi une seconde pour voir quelles entreprises correspondent à vos états..... </p>";

        C6H0.innerHTML = "Voici votre liste :)";
        jobName.innerHTML = "nom du travail";
        companyName.innerHTML = "Nom de l'entreprise";
        locationC.innerHTML = "localisation";
        dateC.innerHTML = "date";
        jobType.innerHTML = "Type d'emploi";
        applyLink.innerHTML = "lien d'applique";
        

        nameC2 = document.querySelector('#C2 #name');
        nameC4 = document.querySelector("#C4 #name");
        specialityC= document.querySelector('#C4 #sp');

        nameC2.innerHTML = username;
        nameC4.innerHTML = username;
        specialityC.innerHTML = speciality;

        //part2
        document.querySelector('#C7 .header  ').innerHTML = 
        `<h1>Commençons par les bases !</h1>
 <p>remplissez ce formulaire et je vous aiderai à créer un excellent CV correspondant à vos états</p>`
        ;

        document.querySelector('#C7 #inputs #age').placeholder= 'âge' ;
        document.querySelector('#C7 #inputs #habits ').placeholder = 'basket-ball, course à pied';
        document.querySelector('#C7 #inputs #phoneNumber ').placeholder = 'numéro de téléphone';

        document.querySelector('#C8  .header h1').innerHTML = 'Avez-vous des expériences ?';
        document.querySelector('#C8 #inputs #companyName').placeholder = "nom de l'entreprise";
        document.querySelector('#C8 #inputs #jobTitle').placeholder = 'nom du travail';
        document.querySelector('#C8 #inputs #jobDesc').placeholder = 'Décrivez ce que vous avez fait dans le cadre de votre travail';
        document.querySelector('#C8 #inputs #fromDate').placeholder = 'De';
        document.querySelector('#C8 #inputs #toDate').placeholder = 'à';

        document.querySelectorAll('  .btns .Skip').forEach(element => {
            element.placeholder = 'Ignoré';
        });
        document.querySelectorAll(' .btns .Next').forEach(element => {
            element.placeholder = 'Suivant';
        });
        document.querySelectorAll(' .btns .Add').forEach(element => {
            element.placeholder = 'Ajouter';
        });

        document.querySelectorAll(' .btns .Submit').forEach(element => {
            element.placeholder = 'Soumettre';
        });

        document.querySelector('.btns #AgainGenAi').innerHTML = 'encore';
        

        
        

        document.querySelector('#C9 .header h1 ').innerHTML = 'Et les diplômes ?';
        document.querySelector('#C9 #inputs #degreeName').placeholder = 'Nom du diplôme';
        document.querySelector('#C9 #inputs #universityName').placeholder = "Nom de l'université";
        document.querySelector('#C9 #inputs #degreeDuration').placeholder = 'Durée par anne';

        document.querySelector('#C10 .header ').innerHTML = 'Des projets passés ?';
        document.querySelector('#C10 #inputs #projectName').placeholder = 'Nom du projet';
        document.querySelector('#C10 #inputs #projectDesc').placeholder = 'Décrivez-le (ai aidera :>)';

        document.querySelector('#C11 .header ').innerHTML = `
            <h1>J'ai créé une section "à propos de moi" pour vous</h1>
 <p>Voyez s'il y a quelque chose qui doit être modifié !</p>
        `;

        document.querySelector('#downCV').innerHTML = "télécharger le cv"





    } else 
    if (actualLanguage == 'EN'){
        
        if (speciality == 'ID'){
                
            btnC4.value = 'Healthcare';
            btn1C4.value = 'Telecommunications';
            btn2C4.value = 'Banking';
        }else
        if(speciality == 'DD'){

            btnC4.value = 'Information&Media';
            btn1C4.value = 'Technology&Service';
            btn2C4.value = 'Telecommunication';
        }else 
        if (speciality == 'BM'){

            btnC4.value = 'Business Consulting';
            btn1C4.value = 'Financial Services';
            btn2C4.value = 'Information&Media';
        }


        firstText.innerHTML = "Hey There! <br> let’s me help you find your next job :)";
        
        C1p.innerHTML = "Tell me first..";
        C1p1.innerHTML = "What is your name :";
        C1Btn.innerHTML = "next";

        C2p.innerHTML =  "Okay <span id='name' style='font-weight: 600;'></span> Let's work on it! <br> Are you looking for a real job or just an internship? ";
        C2Btn.innerHTML = 'Internship';
        C2Btn1.innerHTML = 'Job';

        C3p.innerHTML = 'Cool! now Let Me Know.... <br>What is Your  speciality?';
        C3Btn.innerHTML = 'Infrastructure Digital';
        C3Btn1.innerHTML = 'Development Digital';
        C3Btn2.innerHTML = "Business Management";

        C4p.innerHTML = "<span id='sp'></span>!! WOW Nice Specialist <span id='name'></span> <br> Now to give you the best result i need you to tell me about what interest you more....";

        C5p.innerHTML = "<p>Okey,i received your informations!<br>  give me a second to see what jobs matches with your states..... </p>";

        C6H0.innerHTML = "Here is your List :)";
        jobName.innerHTML = "Job Name";
        companyName.innerHTML = "Company Name";
        locationC.innerHTML = "Location";
        dateC.innerHTML = "Date";
        jobType.innerHTML = "Job Type";
        applyLink.innerHTML = "Apply Link";

        nameC2 = document.querySelector('#C2 #name');
        nameC4 = document.querySelector("#C4 #name");
        specialityC= document.querySelector('#C4 #sp');

        nameC2.textContent = username;
        nameC4.textContent = username;
        specialityC.textContent = speciality;

        //part2
document.querySelector('#C7 .header').innerHTML = 
`<h1>Let's start with the basics!</h1>
<p>Fill out this form and I'll help you create an excellent CV matching your states.</p>`;

document.querySelector('#C7 #inputs #age').placeholder = 'age';
document.querySelector('#C7 #inputs #habits').placeholder = 'basketball, running';
document.querySelector('#C7 #inputs #phoneNumber').placeholder = 'phone number';

document.querySelector('#C8 .header h1').innerHTML = 'Do You Have Any Experiences?';
document.querySelector('#C8 #inputs #companyName').placeholder = "company name";
document.querySelector('#C8 #inputs #jobTitle').placeholder = 'job title';
document.querySelector('#C8 #inputs #jobDesc').placeholder = 'Describe what you did as part of your job';
document.querySelector('#C8 #inputs #fromDate').placeholder = 'from';
document.querySelector('#C8 #inputs #toDate').placeholder = 'to';

document.querySelectorAll('.btns .Skip').forEach(element => {
    element.innerHTML = 'Skip';
});
document.querySelectorAll('.btns .Next').forEach(element => {
    element.innerHTML = 'Next';
});
document.querySelectorAll('.btns .Add').forEach(element => {
    element.innerHTML = 'Add';
});

document.querySelectorAll('.btns .Submit').forEach(element => {
    element.innerHTML = 'Submit';
});

document.querySelector('.btns #AgainGenAi').innerHTML = 'Again';

document.querySelector('#C9 .header h1').innerHTML = 'And the degrees?';
document.querySelector('#C9 #inputs #degreeName').placeholder = 'degree name';
document.querySelector('#C9 #inputs #universityName').placeholder = "university name";
document.querySelector('#C9 #inputs #degreeDuration').placeholder = 'duration per year';

document.querySelector('#C10 .header').innerHTML = 'Any past projects?';
document.querySelector('#C10 #inputs #projectName').placeholder = 'project name';
document.querySelector('#C10 #inputs #projectDesc').placeholder = 'Describe it (AI will help :>)';

document.querySelector('#C11 .header').innerHTML = `
    <h1>I have created an "about me" section for you</h1>
    <p>See if there is anything that needs to be changed!</p>
`;

document.querySelector('#downCV').innerHTML = "Download The CV";


          
    }
}