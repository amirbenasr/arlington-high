<script lang="typescript">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let link;
	export let title;
	export let style;
	export let primary = true;

	let btn;
	onMount(async () => {
		let animation = gsap.to('.line', {
			width: '100px',
			duration: 1,
			paused: true
		});
		if (btn) {
			btn.addEventListener('mouseenter', () => animation.play());
			btn.addEventListener('mouseleave', () => animation.reverse());
		}
	});
</script>

{#if style == 'normal'}
	<a class:button={true} class:primary class:secondary={!primary} href={link}>{title}</a>
{/if}
{#if style == 'outlined'}
	<a class:outlined={true} class:primary class:secondary={!primary} href={link}>{title}</a>
{/if}
{#if style == 'cta'}
	<a class:outlined={true} class:cta={style === 'cta' ? true : false} href={link}>{title}</a>
{/if}
{#if style == 'borderless'}
	<a bind:this={btn} class:borderless={true} href={link}
		>{title}
		<div class="line" />
	</a>
{/if}

<style>
	@media (width < 750px) {
		a {
			margin: 0.2rem !important;
		}
	}
	a {
		text-decoration: none;
		display: block;
		padding: 0.3rem;
		box-sizing: border-box;
	}
	a.button {
		color: white;
		background: var(--secondary-color);
		border: 2px solid white;
		width: fit-content;
		box-sizing: border-box;
	}
	a.borderless {
		border: transparent;
		color: white;
		font-weight: 700;
		position: relative;
	}
	.line {
		width: 1px;
		height: 1px;
		background: white;
		position: absolute;
		top: 30px;
		left: 10px;
	}

	a.outlined {
		border: 2px solid white;
		color: white;
		font-weight: 800;
		background: transparent;
		width: fit-content;
	}

	a.primary {
		background: var(--primary-color) !important;
		box-sizing: border-box;
	}
	a.secondary {
		background: var(--secondary-color) !important;
	}
	a.cta {
		background: white;
		color: var(--secondary-color);
	}
</style>
