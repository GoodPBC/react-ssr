import React from 'react';

const Home = () => {
	return (<div>
		<h1 style={HomeStyle}>I am the Home Component</h1>
		<button onClick={() => alert('Ouch!')}>Home Button</button>
	</div>);
};

const HomeStyle = {
	color: 'white',
	backgroundColor: 'blue'
};

export default Home;
