import getData from '../utils/getData';
import getHash from '../utils/getHash';
import amiiboType from '../utils/amiiboType';

const Amiibo = async () => {
	const hash = getHash();
	const data = await getData(`amiibo/?id=${hash}`);
	const amiibo: amiiboType = data.amiibo;

	const serie = await getData(`amiiboseries/?name=${amiibo.amiiboSeries}`);

	const view = `
		<a href="#/${serie.amiibo[0].key}/" id="Amiibo-card-series">
			<h2>Amiibo series: ${serie.amiibo[0].name}</h2>
		</a>
		<div class="Amiibo">
			<article class="Amiibo__image">
				<img src="${amiibo.image}" alt="${amiibo.name} picture">
			</article>
			<article class="Amiibo__info">
				<h2>${amiibo.name}</h2>
				<h3>Character:</h3> ${amiibo.character}
				<h3>Game Series:</h3> ${amiibo.gameSeries}
				<h3>Release Dates:</h3>
					<ul>
					${Object.entries(amiibo.release).filter(entry => {
						if (entry[1] === null) {
							return false;
						}
						return true;
					}).map((entry) => `
						<li>${entry[0]}: ${entry[1]}</li>
					`).join("")}
					</ul>
				<h3>Amiibo Type:</h3> ${amiibo.type}
			</article>
		</div>
	`;
	return view;
}

export default Amiibo;