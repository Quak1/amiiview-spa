import getData from '../utils/getData';
import getHash from '../utils/getHash';
import amiiboType from '../utils/amiiboType';

const Amiibo = async () => {
	const hash = getHash();
	const data = await getData(`amiibo/?id=${hash}`);
	const amiibo: amiiboType = data.amiibo;

	const serie = await getData(`amiiboseries/?name=${amiibo.amiiboSeries}`);

	const view = `
		<a href="#/${serie.amiibo[0].key}/">
			<h2>Amiibo series: ${serie.amiibo[0].name}</h2>
		</a>
		<div class="Amiibo">
			<article class="Amiibo__image">
				<img src="${amiibo.image}" alt="${amiibo.name} picture">
			</article>
			<article class="Amiibo__info">
				<h2>${amiibo.name}</h2>
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