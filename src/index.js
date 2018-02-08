const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
	console.log('server is running on:', {PORT});
});

app.get('/', (req, res) => {
	res.send('This is a basic express route');
});
