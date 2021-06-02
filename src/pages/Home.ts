import getData from '../utils/getData';
import amiiboType from "../utils/amiiboType";

const Home = async () => {
	const amiibos = await getData();
	console.log(amiibos);
	const view = `
		<div class="Amiibos">
		${amiibos.amiibo.map((amiibo: amiiboType) => `
			<article class="Amiibo-item">
				<img src="${amiibo.image}" alt="${amiibo.character} picture">
					<a href="#/${amiibo.head}${amiibo.tail}/">
						<h2>${amiibo.character} from ${amiibo.amiiboSeries}</h2>
					</a>
			</article>
		`)}
		</div>
	`;
	return view;
}

export default Home;