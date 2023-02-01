import axios from 'axios';
import { CONSTANT } from './constantApi';

const instance = axios.create({
	baseURL: CONSTANT.API_MANAGEMENT_HOST,
	headers: {
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}
});
instance.defaults.withCredentials = false;

instance.interceptors.request.use(async(config) => {
	return config;
}, (error) => {
	return Promise.reject(error);
});

instance.interceptors.response.use(response => {
	return response;
}, error => {
	console.groupCollapsed('===== subscriber error =====');
	console.log('error', error);

	if (error.response) {
		/*
		* The request was made and the server responded with a
		* status code that falls out of the range of 2xx
		*/
		console.log('error.response', error.response);
		console.log('error.response.data', error.response.data);
		console.log('error.response.status', error.response.status);
		console.log('error.response.statusText', error.response.statusText);
		console.log('error.response.headers', error.response.headers);

		if(error.response.status === CONSTANT.UNAUTHORIZED_CODE) {
			console.log('error.response.status 401', (error.response.status === CONSTANT.UNAUTHORIZED_CODE));
			console.groupEnd();
		}
		if((error.response.status === CONSTANT.FORBIDDEN_CODE) && error.response.data.error === CONSTANT.UNALLOWED_TEXT) {
			console.log('error.response.status 403', (error.response.status === CONSTANT.FORBIDDEN_CODE));
			console.groupEnd();
		}

		console.groupEnd();
		return error.response;
	}
	else if (error.request) {
		/*
		* The request was made but no response was received, `error.request`
		* is an instance of XMLHttpRequest in the browser and an instance
		* of http.ClientRequest
		*/
		console.log('error.request', error.request);
		console.groupEnd();

		return Promise.reject(error.message);
	}
	else {
		// Something happened in setting up the request and triggered an Error
		console.log('error.message', error.message);
		console.groupEnd();

		return Promise.reject(error.message);
	}
});

export default instance;