
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var courses_offered = [{id: 21, name: 'HCI'}, {id: 21, name: 'sweng'}];

app.get('/', (req, res) => res.send('Hello, world!'));

app.get('/courses', (req, res) => {
	req.json(courses_offered);
});

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));