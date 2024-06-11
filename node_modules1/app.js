const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyCFDew433boEuZcZnKACGR-v4GhTSM4444');

app.post('/generateContent', async (req, res) => {
    try {
        const prompt = req.body.prompt; // Get the prompt from the request body

        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Send the result back to the client
        res.send(text);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating content');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
