const API = 'https://www.amiiboapi.com/api/';
// const API = "https://rickandmortyapi.com/api/character";

const getData = async (id?: string) => {
	const apiURL = id ? `${API}${id}` : API;
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Fetch error', error);
	};
};

export default getData;