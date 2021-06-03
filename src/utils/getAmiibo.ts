import getData from './getData';

const getAmiibo = async (id: string) => {
	let amiibo = await getData(`amiibo?id=${id}`);
	return amiibo;
};

export default getAmiibo;