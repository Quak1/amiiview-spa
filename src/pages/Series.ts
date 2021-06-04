import getData from '../utils/getData';
import amiiboType from '../utils/amiiboType';
import getHash from '../utils/getHash';

const Series = async () => {
	const hash = getHash();
	const amiibos = await getData(`amiibo/?amiiboSeries=${hash}`);
	const serie = await getData(`amiiboseries/?key=${hash}`);

	const view = `
		<h2>Series: ${serie.amiibo.name}</h2>
		<div class="Card-grid">
			${amiibos.amiibo.map((amiibo: amiiboType) => `
				<article class="Card-item">
					<a href="#/${amiibo.head}${amiibo.tail}/">
						<h2>${amiibo.name}</h2>
					</a>
					<img src="${amiibo.image}" alt="${amiibo.character} picture">
				</article>
			`).join("")}
		</div>
	`;
	return view;
}

export default Series;