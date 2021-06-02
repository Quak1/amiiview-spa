import getData from '../utils/getData';
import getHash from '../utils/getHash';
import amiiboType from '../utils/amiiboType';

const Amiibo = async () => {
	const hash = getHash();
	const data = await getData(hash);
	const amiibo: amiiboType = data.amiibo;
	const view = `
		<div class="Amiibo-inner">
			<article class="Amiibo-card">
				<img src="${amiibo.image}" alt="${amiibo.name} picture">
				<h2>${amiibo.name}</h2>
			</article>
			<article class="Amiibo-card">
				<h3>Character: ${amiibo.character}</h3>
				<h3>Game Series: ${amiibo.gameSeries}</h3>
				<h3>Release Dates: <br>${Object.entries(amiibo.release).map((entry) => `
					${entry[0]}: ${entry[1]}<br>
				`).join("")}</h3>
				<h3>Amiibo Type: ${amiibo.type}</h3>
			</article>
		</div>
	`;
	return view;
}

export default Amiibo;