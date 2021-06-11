<div class="container">
	<div class="borders borders-inline" />
	<div class="borders borders-block" />
	<div>
		<slot />
	</div>
</div>

<style>
	.container {
		position: relative;
		padding: 1.5rem;
	}

	.container > * {
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
		inset: 0;
	}
	.borders-inline::before,
	.borders-inline::after {
		width: 1px;
		height: 110%;
		transform: translateY(-5%);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black 5%,
			black 90%,
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
		inset: 0;
	}
	.borders-block::before,
	.borders-block::after {
		height: 1px;
		width: 110%;
		transform: translateX(-5%);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 5%,
			black 90%,
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
