import WepAbilityTip from '$lib/components/Tooltips/WepAbilityTip.svelte';

export function tooltipWepAbility(element, params) {
	let tooltipComponent;

	function mouseOver() {
		const rect = element.getBoundingClientRect();

		tooltipComponent = new WepAbilityTip({
			props: {
				abilityInfo: params.abilityInfo,
				side: params.side,
				offset: rect.width,
				x: rect.left,
				y: rect.top
			},
			target: document.body
		});
	}

	function mouseLeave() {
		tooltipComponent.$destroy();
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
