function attachLinks() {
	[...document.querySelectorAll('input[data-link]')].map(input => {
		updateLink(input)
		input.oninput = ({ target }) => updateLink(target)
	})
}

function updateLink(target) {
	const link = target.getAttribute('data-link')
	const elem = document.querySelector(`#${link}`)
	if (!elem) return

	switch (target.type) {
		case 'text': return elem.textContent = target.value || 'Szöveges mező'
		case 'file': return elem.src = URL.createObjectURL(target.files[0])
	}
}

attachLinks()

tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Poppins', 'sans-serif']
		}
	}
}