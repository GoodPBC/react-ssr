import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log('server is running on:', { PORT });
});

//publicly available to
app.use(express.static('public'));

app.get('/', (req, res) => {
  //this is our content
  const content = renderToString(<Home />);

  //html snippet to serve content in html and script tag.
  const html = `
		<html>
			<head></head>
			<body>
				<div>${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
  res.send(html);
});
