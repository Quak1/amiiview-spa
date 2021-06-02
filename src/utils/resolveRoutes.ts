const resolveRoutes = (route: string) => {
	if (/[a-z]+$/.test(route)){
		return `/${route}`;
	}

	return route === '/' ? route : '/:id';
}

export default resolveRoutes;