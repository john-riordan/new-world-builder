import TextTip from '$lib/components/Tooltips/TextTip.svelte';

export function tooltipText(element, params) {
	let tooltipComponent;

	function mouseOver(event) {
		tooltipComponent = new TextTip({
			props: {
				bonuses: params.text,
				x: event.pageX,
				y: event.pageY
			},
			target: document.body
		});
	}
	function mouseMove(event) {
		tooltipComponent.$set({
			x: event.pageX,
			y: event.pageY
		});
	}
	function mouseLeave() {
		tooltipComponent.$destroy();
	}

	element.addEventListener('mouseover', mouseOver);
	element.addEventListener('mouseleave', mouseLeave);
	element.addEventListener('mousemove', mouseMove);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseOver);
			element.removeEventListener('mouseleave', mouseLeave);
			element.removeEventListener('mousemove', mouseMove);
		}
	};
}
