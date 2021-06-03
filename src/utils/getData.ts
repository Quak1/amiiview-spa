const API = 'https://www.amiiboapi.com/api/';

const getData = async (id?: string) => {
	const apiURL = id ? `${API}${id}` : API;
	try {
		console.log(apiURL);
		const response = await fetch(apiURL);
		debugger;
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log('Fetch error', error);
	};
};

export default getData;