<script>
	import { availableAtrPts, anyPointsSet } from '../../stores';
	import { MAX_ATTR_PTS, MIN_ATTR_PTS, ATTR_PTS } from '../../constants';

	export let info;
	export let pts;

	$: barWidth = ($pts / MAX_ATTR_PTS) * 100;

	$: dot1Active = $pts >= 50;
	$: dot2Active = $pts >= 100;
	$: dot3Active = $pts >= 150;
	$: dot4Active = $pts >= 200;
	$: dot5Active = $pts >= 250;
	$: dot6Active = $pts >= 300;

	function add10() {
		if ($pts + 10 >= MAX_ATTR_PTS || $availableAtrPts - 10 <= 0) {
			pts.update((pts) => (pts += $availableAtrPts));
		} else if ($availableAtrPts - 10 >= 0) {
			pts.update((pts) => (pts += 10));
		}
	}
	function add1() {
		if ($pts + 1 >= MAX_ATTR_PTS && $availableAtrPts - 1 <= 0) {
			pts.set(MAX_ATTR_PTS);
		} else if ($availableAtrPts - 1 >= 0) {
			pts.update((pts) => (pts += 1));
		}
	}
	function sub10() {
		if ($pts - 10 <= MIN_ATTR_PTS && $availableAtrPts - 10 <= ATTR_PTS) {
			pts.set(MIN_ATTR_PTS);
		} else if ($availableAtrPts - 10 <= ATTR_PTS) {
			pts.update((pts) => (pts -= 10));
		}
	}
	function sub1() {
		if ($pts - 1 <= MIN_ATTR_PTS && $availableAtrPts - 1 <= ATTR_PTS) {
			pts.set(MIN_ATTR_PTS);
		} else if ($availableAtrPts - 1 <= ATTR_PTS) {
			pts.update((pts) => (pts -= 1));
		}
	}
</script>

{#if info}
	<section class="mask container" class:inactive={$anyPointsSet && $pts === MIN_ATTR_PTS}>
		<div class="left">
			<button on:click={sub10} on:mouseenter={() => context} class:disabled={$pts === MIN_ATTR_PTS}>
				<svg width="21" height="13" viewBox="0 0 21 13">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11 6.5L20 1V12L11 6.5ZM1.5 6.5L10.5 1V12L1.5 6.5Z"
					/>
					<path
						d="M20 1L19.7393 0.573359L20.5 0.108472V1H20ZM11 6.5L10.7393 6.92664L10.0411 6.5L10.7393 6.07336L11 6.5ZM20 12H20.5V12.8915L19.7393 12.4266L20 12ZM10.5 1L10.2393 0.573359L11 0.108472V1H10.5ZM1.5 6.5L1.23927 6.92664L0.541135 6.5L1.23927 6.07336L1.5 6.5ZM10.5 12H11V12.8915L10.2393 12.4266L10.5 12ZM20.2607 1.42664L11.2607 6.92664L10.7393 6.07336L19.7393 0.573359L20.2607 1.42664ZM19.5 12V1H20.5V12H19.5ZM11.2607 6.07336L20.2607 11.5734L19.7393 12.4266L10.7393 6.92664L11.2607 6.07336ZM10.7607 1.42664L1.76073 6.92664L1.23927 6.07336L10.2393 0.573359L10.7607 1.42664ZM10 12V1H11V12H10ZM1.76073 6.07336L10.7607 11.5734L10.2393 12.4266L1.23927 6.92664L1.76073 6.07336Z"
						fill="#5F625D"
					/>
				</svg>
				<span>-10</span>
			</button>
			<button on:click={sub1} class:disabled={$pts === MIN_ATTR_PTS}>
				<svg width="26" height="30" viewBox="0 0 26 30">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M24.5 29.4118L25.5 30V28.8398V1.16018V0L24.5 0.588235L0.986155 14.4199L0 15L0.986155 15.5801L24.5 29.4118ZM1.97231 15L24.5 28.2516V1.74842L1.97231 15ZM3.5 15L23.5 3.5V26.5L3.5 15Z"
					/>
				</svg>
				<span>-1</span>
			</button>
			<h2 class="attribute-value" class:increased={$pts > 5}>
				{$pts} <span>(+{$pts - MIN_ATTR_PTS})</span>
			</h2>
			<button on:click={add1} class:disabled={$availableAtrPts === 0}>
				<svg width="26" height="30" viewBox="0 0 26 30">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1 29.4118L0 30V28.8398V1.16018V0L1 0.588235L24.5138 14.4199L25.5 15L24.5138 15.5801L1 29.4118ZM23.5277 15L1 28.2516V1.74842L23.5277 15ZM22 15L2 3.5V26.5L22 15Z"
					/>
				</svg>
				<span>+1</span>
			</button>
			<button
				on:click={add10}
				on:mouseenter={() => audio_btnHover}
				class:disabled={$availableAtrPts === 0}
			>
				<svg width="20" height="13" viewBox="0 0 20 13">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.5 6.5L0.5 1V12L9.5 6.5ZM19 6.5L10 1V12L19 6.5Z"
					/>
					<path
						d="M0.5 1L0.760725 0.573359L0 0.108472V1H0.5ZM9.5 6.5L9.76073 6.92664L10.4589 6.5L9.76073 6.07336L9.5 6.5ZM0.5 12H0V12.8915L0.760725 12.4266L0.5 12ZM10 1L10.2607 0.573359L9.5 0.108472V1H10ZM19 6.5L19.2607 6.92664L19.9589 6.5L19.2607 6.07336L19 6.5ZM10 12H9.5V12.8915L10.2607 12.4266L10 12ZM0.239275 1.42664L9.23927 6.92664L9.76073 6.07336L0.760725 0.573359L0.239275 1.42664ZM1 12V1H0V12H1ZM9.23927 6.07336L0.239275 11.5734L0.760725 12.4266L9.76073 6.92664L9.23927 6.07336ZM9.73927 1.42664L18.7393 6.92664L19.2607 6.07336L10.2607 0.573359L9.73927 1.42664ZM10.5 12V1H9.5V12H10.5ZM18.7393 6.07336L9.73927 11.5734L10.2607 12.4266L19.2607 6.92664L18.7393 6.07336Z"
					/>
				</svg>
				<span>+10</span>
			</button>
		</div>
		<div class="right">
			<h4 class="attribute-name">{info.name}</h4>
			<div class="bar-container">
				<div class="bar">
					<div class="bar-fill" style={`width: ${barWidth}%`} />
				</div>
				<div class="dots">
					<div class="dot" />
					<div class="dot" class:active={dot1Active} />
					<div class="dot" class:active={dot2Active} />
					<div class="dot" class:active={dot3Active} />
					<div class="dot" class:active={dot4Active} />
					<div class="dot" class:active={dot5Active} />
					<div class="dot" class:active={dot6Active} />
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.container.inactive {
		opacity: 0.6;
		transition: opacity var(--transition);
	}
	.container.inactive:hover {
		opacity: 1;
	}
	.left {
		display: flex;
	}
	.right {
		flex: 1;
	}

	.attribute-value {
		position: relative;
		font-size: 4.5rem;
		line-height: 1.5;
		margin: 0;
		padding: 0 0 1.5rem;
		width: 3ch;
		text-align: center;
		text-shadow: 0 3px 8px var(--black);
	}
	.attribute-value span {
		display: none;
		position: absolute;
		font-size: 1rem;
		font-family: var(--text-default);
		font-style: normal;
		font-weight: 700;
		padding-bottom: 0.5rem;
		top: 50%;
		left: 0;
		width: 100%;
		transform: translateY(2rem);
	}
	.attribute-value.increased {
		color: var(--green);
	}
	.attribute-value.increased span {
		display: block;
	}

	button {
		position: relative;
		padding: 0 0.5rem;
		cursor: pointer;
	}
	button svg {
		display: block;
		filter: drop-shadow(0px 3px 10px var(--black));
		fill: hsla(46, 11%, 45%, 1);
		transition: background var(--transition);
	}
	button:hover svg {
		fill: var(--offwhite);
	}
	button span {
		display: block;
		position: absolute;
		left: 0;
		top: 20%;
		width: 100%;
		text-align: center;
		font-weight: 700;
		opacity: 0;
		transition: opacity var(--transition), transform var(--transition);
	}

	button:hover span {
		transform: translateY(-0.25rem);
		opacity: 1;
	}

	.attribute-name {
		margin: 0;
		font-size: 1.5rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		text-shadow: 0 3px 4px var(--black);
	}

	.bar-container {
		position: relative;
		height: 18px;
	}
	.bar {
		position: absolute;
		height: 0.5rem;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		background: hsla(105, 100%, 1%, 1);
		overflow: hidden;
		border: 1px solid hsla(120, 3%, 21%, 1);
	}
	.bar-fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0%;
		background: linear-gradient(to right, #988331 0%, #e5b95e 100%);
		border: 1px solid var(--black);
		transition: width var(--transition);
	}

	.dots {
		position: absolute;
		display: flex;
		justify-content: space-between;

		width: 100%;
	}
	.dot {
		height: 18px;
		width: 18px;
		background: hsla(105, 100%, 1%, 1);
		border: 1px solid hsla(120, 3%, 21%, 1);
		border-radius: 50%;
	}
	.dot:first-of-type {
		visibility: hidden;
	}
	.dot.active {
		background: linear-gradient(to right, #988331 0%, #e5b95e 100%);
		box-shadow: 0 0 0 1px hsla(120, 3%, 21%, 1);
	}
	.dot:hover {
		border-color: var(--white);
		box-shadow: inset 0 0 3px var(--white);
	}
</style>
