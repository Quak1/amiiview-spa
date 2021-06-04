const resolveRoutes = (route: string) => {
	if (route.startsWith('0x')) {
		return `/series`;
	}
	else if (/[a-z]+$/.test(route)){
		return `/${route}`;
	}

	return route === '/' ? route : '/:id';
}

export default resolveRoutes;