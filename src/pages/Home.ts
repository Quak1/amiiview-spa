import getData from '../utils/getData';

interface amiiboListType {
	key: string;
	name: string;
};

const makeList = async (series: amiiboListType) => {
	const amiiboList = await getData(`amiibo/?amiiboSeries=${series.key}`);
	const firstAmiibo = amiiboList.amiibo[0]
	const view = `
		<article class="Card-item">
			<a href="#/${series.key}/">
				<h2>${series.name}</h2>
			</a>
			<img src="${firstAmiibo.image}" alt="${firstAmiibo.name}">
		</article>`
	return view;
}

const Home = async () => {
	const seriesList = await getData('amiiboseries/');
	const view = `
		<h2>Available Amiibo Series:</h2>
		<div class="Card-grid">
		${(await Promise.all(
			seriesList.amiibo.map(
				async (series: amiiboListType) => makeList(series)))).join("")}
		</div>
	`;
	return view;
}

export default Home;