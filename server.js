var express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Wuuuuu!');
});

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});