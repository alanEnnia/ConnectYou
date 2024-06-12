async function turnPDF(username,Email,PhoneNumber,OutputPrompt,Experiences,Degrees,Projects,habits,speciality,actualLanguage){
    let sp
    if (speciality == 'DD'){
         sp = 'developement digital'; 
    }else
    if(speciality == 'ID'){
        sp = 'Infrastructure digital';
    }else 
    if (speciality == 'BM'){
        sp = 'Business Management';
    }
    var skills  = await genTxt (sp,actualLanguage);
    
 
    fetch('resume.html')
    .then(response => response.text())
    .then(async html => {
        // Modify the fetched HTML if needed
        // For example, replace all instances of "old-text" with "new-text"
        html = html.replace(/old-text/g, 'new-text');

        // Insert the modified HTML into the main HTML file
        document.querySelector('#survey #C12').innerHTML = html;
        const fNameCC = document.querySelector('#survey #C12 .first-name');
        const lNameCC = document.querySelector('#survey #C12 .last-name');
        const EmailC = document.querySelector('#survey #C12 .email-val');
        const NumC = document.querySelector('#survey #C12 .phone-val');
        const aboutMeC = document.querySelector('#C12 .about .desc');
        const SkillsC = document.querySelector('#C12 .SKills .name');
        EmailC.textContent = Email;
        NumC.textContent = PhoneNumber;
        aboutMeC.textContent = OutputPrompt;

        //Experiences
        if (Experiences.length != 0){ 
            if(Experiences.length == 1){
                const ExperienceC = document.querySelector('.ExpSec');
                if (Experiences && Experiences[0]) {
                    var innerExp = `
                        <div class="section__list-item" style="    margin-top: 5px;   width:600px;      display: flex; gap: 140px;">
                          <div class="left">
                            <div class="name">${Experiences[0].company}</div>
                            <div class="addr"></div>
                            <div class="duration" style=" font-size: 10px; opacity: .9; width:200px;">From: ${Experiences[0].fromDate} , To: ${Experiences[0].toDate}</div>
                          </div>
                          <div class="right">
                            <div class="name">${Experiences[0].jobTitle}</div>
                            <div class="desc"  style=" width: 190px;">${Experiences[0].jobDesc}</div>
                          </div>
                        </div>
                    `;
                
                    ExperienceC.innerHTML = innerExp;
                } else {
                    console.error("Experiences array is not defined or empty");
                }
            }else{ 
        Experiences.forEach(Experience => {
            const ExperienceC = document.querySelector('.ExpSec');
            ExperienceC.innerHTML += `
            <div class="section__list-item" style="    margin-top: 5px; width:600px;     display: flex; gap: 140px;">
            <div class="left">
            <div class="name">${Experience.company}</div>
            <div class="addr"></div>
            <div class="duration" style=" font-size: 10px; opacity: .9; width:200px;">From: ${Experience.fromDate}  , To: ${Experience.toDate} </div>
          </div>
          <div class="right">
            <div class="name">${Experience.jobTitle}</div>
            <div class="desc" style=" width: 190px;">${Experience.jobDesc}</div>
          </div></div>
            `; 
        });}

        }else{
                document.querySelector("#C12 .Experiences .section__list ").innerHTML = "";
            }


            //Degrees
            if (Degrees.length != 0){
                if(Degrees.length == 1 ){
                    const DegreeC = document.querySelector('#C12 .Degrees .section__list');
                    DegreeC.innerHTML += `
                        <div class="section__list-item" style="    display: flex;
                            align-items: center;
                            gap: 14px;
                            width: 50%;
                        }
                        ">
                        <div class="left">
                            <div class="name">${Degrees[0].degreeName}</div>
                            <div class="addr" style=" font-size: 10px; opacity: .9; ">${Degrees[0].universityName} ,  ${Degrees[0].degreeDate} </div>
                            <div class="duration">${Degrees[0].degreeDuration} Years</div>
                        </div>
                        </div>
                        `; 
                }else{
                Degrees.forEach(Degree => {
                    const DegreeC = document.querySelector('#C12 .Degrees .section__list');
                    DegreeC.innerHTML += `
                    <div class="section__list-item"  style="    display: flex;
    align-items: center;
    gap: 14px;
    width: 50%;
}
">
                    <div class="left">
                        <div class="name">${Degree.degreeName}</div>
                        <div class="addr" style=" font-size: 10px; opacity: .9;"> ${Degree.universityName} ,  ${Degree.degreeDate} </div>
                        <div class="duration">${Degree.degreeDuration} Years</div>
                    </div>
                    </div>
                    `; }
                )
                }}else{
                    document.querySelector("#C12 .Degrees .section__list ").innerHTML = "";
                };
       
       
                //Projects
                if (Projects.length != 0){
                    if(Projects.length == 1){
                        var projectDescGenAi = await prjGenAI (Projects[0].projectDesc,actualLanguage);

                        const ProjectC = document.querySelector('#C12 .Projects .section__list');
                        ProjectC.innerHTML += `
                    <div class="section__list-item" style="margin-left: 50px;">
                            <div class="name">${Projects[0].projectName}</div>
                            <div class="text">${projectDescGenAi}</div>
                     </div>
                 `;
                    }else{
                        const ProjectC = document.querySelector('#C12 .Projects .section__list'); 
                        Projects.forEach(async Project => {
                            var projectDescGenAi = await prjGenAI (Project.projectDesc,actualLanguage);
                        ProjectC.innerHTML += `
                        <div class="section__list-item" style="margin-left: 50px;" >
                                <div class="name">${Project.projectName}</div>
                                <div class="text">${projectDescGenAi}</div>
                        </div>
                        `;
                    
                    })} }else{
                            document.querySelector("#C12 .Projects .section__list ").innerHTML = "";
                        };

        const HabitC = document.querySelector('#C12 .Habits .name');
        SkillsC.textContent = skills;
        HabitC.innerHTML = habits.value;
        var names = username.split(" ");
        var firstName = names[0];
        var lastName = names.slice(1).join(" ");
        fNameCC.textContent = firstName;
        lNameCC.textContent = lastName;
    })
    .catch(error => console.error('Error fetching HTML:', error));
    
}

async function genTxt (speciality,actualLanguage){
    let promptInput = `give me 4 skills important in this ${speciality} speciality , give them to me with "," between them. just give me general skills , **just 4 words **  ,on this language ${actualLanguage} `; 

    const response = await fetch('/generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptInput }) 
    });
    const result = await response.text();

  return result;
}


async function prjGenAI (desc, actualLanguage){
    let promptInput = ` '${desc}' **fix grammar and keep this just one line and make it more creative and riche . make it on this lang : ${actualLanguage} **`; 

    const response = await fetch('/generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptInput }) 
    });
    const result = await response.text();

  return result;
}

document.querySelector('#downCV').addEventListener('click', function () {
    html2canvas(document.querySelector('.container1'), {
        width: 364.2, // Adjust width to include the entire content
        height: 523.8, // Adjust height to include the entire content
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var doc = new jsPDF();
            doc.addImage(imgData, 'PNG', 5, 5);
            doc.save('CV.pdf');
        }
    });
});
