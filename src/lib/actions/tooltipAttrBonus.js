import AttrBonusTip from '$lib/components/Tooltips/AttrBonusTip.svelte';

export function tooltipAttrBonus(element, params) {
	let tooltipComponent;

	function mouseOver(event) {
		tooltipComponent = new AttrBonusTip({
			props: {
				bonuses: params.bonuses,
				pts: params.pts,
				side: params.side,
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
