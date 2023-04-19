const finalizeButton = document.getElementById('finalize');

const container = document.getElementById('container');

finalizeButton.addEventListener('click', () => {
	container.classList.add("finalForm");
});

finalizeButton.addEventListener('click', () => {
	container.classList.remove("finalForm");
});