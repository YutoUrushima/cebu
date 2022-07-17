const axios = require('axios');

const token = process.env.BEARER_TOKEN;
const endpointURL = 'https://api.twitter.com/2/users/by';

exports.handler = async (event) => {
	const params = { usernames: event.queryStringParameters.name };
	const tweets = await getTweets(params);
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'OPTIONS,GET',
		},
		body: tweets,
	};
};

const getTweets = async (params) => {
	await axios({
		url: endpointURL,
		method: 'get',
		headers: {
			'authorization': `Bearer ${token}`,
		},
		params: {
			usernames: params.usernames,
		},
	})
		.then((response) => {
			console.log(response);
			return response.body;
		})
		.catch((error) => {
			console.log(error);
			throw new Error(error);
		});
};
