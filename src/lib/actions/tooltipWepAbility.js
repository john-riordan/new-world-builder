import WepAbilityTip from '$lib/components/Tooltips/WepAbilityTip.svelte';

export function tooltipWepAbility(element, params) {
	let tooltipComponent;
	let timeout;

	function mouseOver() {
		const rect = element.getBoundingClientRect();

		timeout = setTimeout(() => {
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
		}, 250);
	}

	function mouseLeave() {
		clearTimeout(timeout);
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
