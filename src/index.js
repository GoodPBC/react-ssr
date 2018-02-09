const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
	console.log('server is running on:', {PORT});
});

app.get('/', (req, res) => {
	const content = renderToString(<Home/>);

	res.send(content);
});
