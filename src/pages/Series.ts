import getData from '../utils/getData';
import amiiboType from '../utils/amiiboType';
import getHash from '../utils/getHash';

const Series = async () => {
	const hash = getHash();
	const amiibos = await getData(`amiibo/?amiiboSeries=${hash}`);
	const serie = await getData(`amiiboseries?key=${hash}`);

	const view = `
		<div class="Amiibos">
		<h2>Amiibo Series: ${serie.amiibo.name}</h2>
		${amiibos.amiibo.map((amiibo: amiiboType) => `
			<article class="Amiibo-item">
				<img src="${amiibo.image}" alt="${amiibo.character} picture">
					<a href="#/${amiibo.head}${amiibo.tail}/">
						<h2>${amiibo.character} from ${amiibo.gameSeries}</h2>
					</a>
			</article>
		`).join("")}
		</div>
	`;
	return view;
}

export default Series;