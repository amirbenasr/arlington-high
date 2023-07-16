<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { gsap } from 'gsap';
	import LangSwitcher from './LangSwitcher.svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let banner;
	function dismiss() {
		banner.remove();
	}
	onMount(async () => {
		gsap.fromTo(
			'.banner',
			{
				opacity: '0'
			},
			{
				opacity: '1',
				duration: 2
			}
		);
	});
</script>

<div class="banner" bind:this={banner}>
	<div class="banner__email">
		<a href="mailto:application@arlington-high.com">
			<span> <i class="fa-regular fa-envelope" /> application@arlington-high.com</span>
		</a>
		<hr />
		<a href="tel:+216 54041337">
			<span> <i class="fa-solid fa-phone" /> +216 54041337</span>
		</a>
	</div>

	<!-- <div class="banner__details">
		<span>Pre-Enrollement Phase 1</span>
		<Button title="Apply now" link="#" style="outlined" primary={false} />
	</div> -->
	<div class="socials">
		<span>Socials</span>
		<a href="https://www.facebook.com/arlington.highschool.tn">
			<i class="fa-brands fa-facebook" />
		</a>
		<a href="https://www.facebook.com/arlington.highschool.tn">
			<i class="fa-brands fa-instagram" />
		</a>
		<a href="https://www.facebook.com/arlington.highschool.tn">
			<i class="fa-brands fa-twitter" />
		</a>
	</div>
	<LangSwitcher />

	<!-- <div class="x">
		<a class="dismiss" href="http://" on:click={dismiss}>
			<i class="fa-solid fa-xmark" />
		</a>
	</div> -->
</div>

<style>
	.socials {
		color: white;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	i {
		margin-right: 0.2rem;
	}
	.dismiss {
		display: inline;
		/* right: 1.5rem; */
	}
	a {
		color: white;
		text-decoration: none;
	}
	span {
		color: white;
	}
	.banner {
		position: relative;
		width: 100%;
		background: var(--secondary-color);
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		padding-block: 0.2rem;
	}
	.banner__details {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	.banner__email {
		color: white;
		font-weight: 700;
		display: flex;
		gap: 1rem;
	}
	a.button {
		text-decoration: none;
		color: white;
		font-weight: bold;
		border: 2px solid white;
		padding-inline: 1.5rem;
		padding-block: 0.5rem;
		width: fit-content;
	}
</style>
