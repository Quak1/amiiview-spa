const Header = () => {
	const view = `
		<div class="header__logo">
			<h1>
				<a href="/amiiview-spa/#">
					Amiiview
				</a>
				<!--<a href="/">
					Amiiview-home
				</a> -->
			</h1>
		</div>
		<div class="header__nav">
			<a href="#/about/">
				About
			</a>
		</div>
	`;
	return view;
}

export default Header;
