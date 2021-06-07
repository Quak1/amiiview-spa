const Loading = () => {
	const element = document.createElement("div");
	element.id = "loading";

	const inner = document.createElement("h3");
	inner.innerText = "Loading";

	element.appendChild(inner);

	return element;
};

export default Loading;