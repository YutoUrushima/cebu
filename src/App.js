import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

const endpointURL = 'https://api.twitter.com/2/users/by';
const token = process.env.REACT_APP_BEARER_TOKEN;

const App = async () => {
	const [state, setState] = useState();
	await axios(endpointURL, {
		headers: {
			'authorization': `Bearer ${token}`,
			'Access-Control-Allow-Origin': '*',
		},
		params: {
			usernames: 'developer_japan',
		},
	})
		.then((res) => {
			console.log(res);
			setState(res);
		})
		.catch((err) => {
			console.log(err);
		});
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<p>{state}</p>
		</div>
	);
};

export default App;
