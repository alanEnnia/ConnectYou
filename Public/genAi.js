 async function genAi(username,speciality,interest,Age,langs,Habits,Experiences,Degrees,actualLanguage) {


    let promptInput = `create 4 lines short about me section to be in a job resume , start with the name  ${username} , ${speciality} , talk about interests ${interest} 
    , put my age too ${Age}, languages that i speak ${langs} , the quality of languages seems to diminish as we move down the list , talk about habits ${Habits}, start with hey i'm ${username} ,dont use any #  or * , just regular string , on ${actualLanguage}
       `; // Get the value from the input field

    // Fetch the result from the server with the input value as the prompt
    const response = await fetch('/generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: promptInput }) // Send the prompt as JSON data
    });
    const result = await response.text();

    // Update the content of the result div
  return result;
};
