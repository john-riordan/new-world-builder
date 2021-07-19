import { cubicInOut } from 'svelte/easing';

export function slideIn() {
	return {
		duration: 350,
		css: (t, u) => {
			const eased = cubicInOut(u);

			return `
        transform: translateX(${-50 * eased}px);
        opacity: ${t};
      `;
		}
	};
}
