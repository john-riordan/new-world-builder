<div class="line-container">
	<div class="borders borders-inline" />
	<div class="borders borders-block" />
	<div>
		<slot />
	</div>
</div>

<style>
	.line-container {
		--line-overflow: 40px;
		position: relative;
	}

	.line-container > * {
		position: relative;
	}

	.borders::before,
	.borders::after {
		content: '';
		background: var(--white);
		position: absolute;
		opacity: 0.3;
	}

	/* Left and right borders */
	.borders-inline {
		position: absolute;
		inset: -1px;
	}
	.borders-inline::before,
	.borders-inline::after {
		width: 1px;
		height: calc(100% + var(--line-overflow));
		transform: translateY(calc(var(--line-overflow) / 2 * -1));
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black var(--line-overflow),
			black calc(100% - var(--line-overflow)),
			transparent 100%
		);
	}
	.borders-inline::before {
		left: 0;
	}
	.borders-inline::after {
		right: 0;
	}

	/* Top and bottom borders */
	.borders-block {
		position: absolute;
		inset: -1px;
	}
	.borders-block::before,
	.borders-block::after {
		height: 1px;
		width: calc(100% + var(--line-overflow));
		transform: translateX(calc(var(--line-overflow) / 2 * -1));
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black var(--line-overflow),
			black calc(100% - var(--line-overflow)),
			transparent 100%
		);
	}
	.borders-block::before {
		top: 0;
	}
	.borders-block::after {
		bottom: 0;
	}
</style>
