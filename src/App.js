import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const endpointURL = process.env.REACT_APP_API_ENDPOINT_URL;

const App = async () => {
	const [state, setState] = useState('');
	await axios({
		url: endpointURL,
		params: { name: 'developer_japan' },
	})
		.then((response) => {
			console.log(response);
			setState(response);
		})
		.catch((error) => {
			console.log(error);
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
			<p>{!state ? '' : state}</p>
		</div>
	);
};

export default App;
