import Header from '../templates/Header';
import Home from '../pages/Home';
import Amiibo from '../pages/Amiibo';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Series from '../pages/Series'
import Loading from "../templates/Loading"

const routes = {
	'/': Home,
	'/:id': Amiibo,
	'/series': Series,
	// '/contact': 'Contact',
};

// https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
// https://basarat.gitbook.io/typescript/type-system
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
	return key in obj
}

const router = async () => {
	const header = document.getElementById('header');
	const content = document.getElementById('content');
	const loading = document.getElementById('loading');

	loading!.innerHTML = Loading();
	header!.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash);

	let render = hasKey(routes, route) ? routes[route] : Error404;
	content!.innerHTML = await render() as string;
};

export default router;