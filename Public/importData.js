const jobName = document.querySelector("#C6 #jobName");
const companyName = document.querySelector("#C6 #companyName");
const locationC = document.querySelector('#C6 #location');
const dateC = document.querySelector('#C6 #date');
const jobType = document.querySelector('#C6 #jobType');
const applyLink = document.querySelector('#C6 #applyLink');



function loadJSONData(username,statue,speciality,interest) {

    if (speciality == 'ID'){
        if (interest == 'Banking' || interest == 'Bancaire') {
            fetch('./data/Infrastructure digital/banking.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Healthcare' || interest == 'Soins de santé'  ){
            fetch('./data/Infrastructure digital/healthcare.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Telecommunication' || interest == 'Télécommunications' ){
            fetch('./data/Infrastructure digital/telecommunication.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }
    }else
    if (speciality == 'DD'){
        if (interest == 'Information&Media' || interest == 'Informations Et Médias') {
            fetch('./data/Infrastructure digital/banking.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Technology&Service' || interest == 'Technologie Et Service'  ){
            fetch('./data/Infrastructure digital/healthcare.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Telecommunication' || interest == 'Télécommunications' ){
            fetch('./data/Infrastructure digital/telecommunication.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }
    } else 
    if (speciality == 'BM'){
        if (interest == 'Business Consulting' || interest == 'Conseil aux entreprises') {
            fetch('./data/Infrastructure digital/banking.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Financial Services' || interest == 'Services Financiers'  ){
            fetch('./data/Infrastructure digital/healthcare.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }else 
        if(interest == 'Information&Media' || interest == 'Informations et Médias' ){
            fetch('./data/Infrastructure digital/telecommunication.json')
            .then(response => response.json())
            .then(data => insertDataIntoTable(data))
            .catch(error => console.error('Error loading JSON data:', error));
        }
    }
}

function insertDataIntoTable(data) {
    const tableBody = document.querySelector('#resultTable tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    data.forEach(item => {
        const row = document.createElement('tr');
        
        const jobNameC = document.createElement('td');
        jobNameC.textContent = item.job_title;
        row.appendChild(jobNameC);

        const companyNameC = document.createElement('td');
        companyNameC.textContent = item.company_name;
        row.appendChild(companyNameC);

        const locationCC = document.createElement('td');
        locationCC.textContent = item.location;
        row.appendChild(locationCC);
        

        const dateCC = document.createElement('td');
        dateCC.textContent = item.date;
        row.appendChild(dateCC);

        const jobTypeC = document.createElement('td');
        jobTypeC.textContent = item.job_type;
        row.appendChild(jobTypeC);

        const applyLinkC = document.createElement('td');
        applyLinkC.classList.add("applyC");
        const aLink = document.createElement('a');
        aLink.classList.add("applyLink"); 
        aLink.href = item.apply_link;
        aLink.textContent = 'Apply';
        aLink.target = '_blank';
        applyLinkC.appendChild(aLink);
        row.appendChild(applyLinkC);

        tableBody.appendChild(row);


    });
}
