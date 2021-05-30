const Amiibo = () => {
	const view = `
		<div class="Amiibo-inner">
			<article class="Amiibo-card">
				<img src="image" alt="name">
				<h2>Name</h2>
			</article>
			<article class="Amiibo-card">
				<h3>Character:</h3>
				<h3>Game Series:</h3>
				<h3>Release Date:</h3>
				<h3>Amiibo Type:</h3>
			</article>
		</div>
	`;
	return view;
}

export default Amiibo;