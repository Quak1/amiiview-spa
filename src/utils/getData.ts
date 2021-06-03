const API = 'https://www.amiiboapi.com/api/';

const getData = async (id?: string) => {
	const apiURL = id ? `${API}${id}` : API;
	try {
		console.log(apiURL);
		const response = await fetch(apiURL);
		console.log(":)")
		console.log(response);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Fetch error', error);
	};
};

export default getData;