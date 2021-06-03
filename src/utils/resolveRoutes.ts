const resolveRoutes = (route: string) => {
	if (/[a-z]+$/.test(route)){
		return `/${route}`;
	} else if (route.startsWith('0x')) {
		return `/series`;
	}

	return route === '/' ? route : '/:id';
}

export default resolveRoutes;