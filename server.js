const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/age', (req, res) => { // calcs days until you are 100 years old based on your age
    const { age } = req.query; 

    if (!age || isNaN(age)) {
        return res.status(400).json({ error: 'Please provide a valid age as a query parameter.' });
    }

    const currentAge = parseInt(age);
    if (currentAge >= 100) {
        return res.status(400).json({ error: 'You are already 100 or older' });
    }

    const yearsUntil100 = 100 - currentAge;
    const daysUntil100 = yearsUntil100 * 365;

    res.json({ message: `You have ${daysUntil100} days left until you turn 100.` });
});




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
