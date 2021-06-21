<script context="module">
	export const prerender = true;

	import { monsters } from '../monsters';
	import { gems } from '../gems';
	import { weapons } from '../weapons';

	export async function load() {
		return {
			props: {
				data: {
					monsters: Object.values(monsters),
					gems: Object.values(gems),
					weapons: Object.values(weapons)
				}
			}
		};
	}
</script>

<script>
	import LineBorder from '$lib/components/LineBorder/index.svelte';

	export let data;
</script>

<ul class="monster-list">
	{#each data.monsters as monster}
		<li>
			<h2 class="monster-name">{monster.title}</h2>
			<LineBorder>
				<div>
					<img
						width="361"
						height="416"
						src={`monsters/${monster.name}.jpg`}
						alt={monster.name}
						class="mask monster-img"
					/>
					<div class="monster-info">
						<p>Weak To:</p>
						<ul>
							{#each monster.weakness as weakness}
								<li>
									{#if data.gems.find((gem) => gem.element === weakness.damage_type)}
										<img
											src={`gems/${
												data.gems.find((gem) => gem.element === weakness.damage_type).name
											}.webp`}
											alt=""
										/>
									{:else if data.weapons.find((wep) => wep.damage_type === weakness.damage_type)}
										<img
											src={`weps/${
												data.weapons.find((wep) => wep.damage_type === weakness.damage_type).name
											}.webp`}
											alt=""
										/>
									{/if}
									<p>{weakness.damage_type}</p>
								</li>
							{/each}
						</ul>
						<br />
						<p>Resists:</p>
						<ul>
							{#each monster.resists as resist}
								<li>
									{#if data.gems.find((gem) => gem.element === resist.damage_type)}
										<img
											src={`gems/${
												data.gems.find((gem) => gem.element === resist.damage_type).name
											}.webp`}
											alt=""
										/>
									{/if}
									<p>{resist.damage_type}</p>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</LineBorder>
		</li>
	{/each}
</ul>

<style>
	.monster-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 3rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.monster-name {
		text-align: center;
		margin: 3rem 0 1rem;
	}
	.monster-info {
		padding: 2rem;
	}
	.monster-img {
	}

	.monster-info li {
		display: flex;
		align-items: center;
	}
	.monster-info li img {
		width: 1.75rem;
		margin-right: 0.75rem;
	}
</style>
