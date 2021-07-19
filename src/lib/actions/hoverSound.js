export function hoverSound(element, params) {
	let audio;

	function mouseOver() {
		switch (params.type) {
			case 'btn-hover':
			default:
				audio = new Audio('/static/btn-hover.mp3');
				break;
		}

		if (audio) {
			audio.volume = 1;
			audio.play();
		}
	}

	function mouseLeave() {
		audio = null;
	}

	element.addEventListener('mouseover', mouseOver);
	element.addEventListener('mouseleave', mouseLeave);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseOver);
			element.removeEventListener('mouseleave', mouseLeave);
		}
	};
}
