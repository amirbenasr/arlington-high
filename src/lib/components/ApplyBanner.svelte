<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { gsap } from 'gsap';
	import LangSwitcher from './LangSwitcher.svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

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

<div class="col">
	<div class="banner" bind:this={banner}>
		<div id="google_translate_element" />

		<div class="banner__email">
			<a href="mailto:application@arlington-high.com">
				<span> <i class="fa-regular fa-envelope" /> application@arlington-high.com</span>
			</a>
			<hr />
			<!-- +216 93 169 192: +216 98 110 698 / +216 98 110 699 -->

			<span>
				<i class="fa-solid fa-phone" /> <a href="tel:+21698110698">98110698</a> <span>|</span>
				<a href="tel:+21698110698">98110699</a></span
			>
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
			<a href="https://www.instagram.com/arlington_highschool">
				<i class="fa-brands fa-instagram" />
			</a>
			<!-- <a href="https://www.facebook.com/arlington.highschool.tn">
			<i class="fa-brands fa-twitter" />
		</a> -->
		</div>
		<LangSwitcher />
	</div>
</div>

<style>
	.col {
		display: flex;
		flex-direction: column;
	}
	@media (width < 750px) {
		.banner {
			text-align: center;
			gap: 0.2rem !important;
		}
	}
	.socials {
		color: white;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	i {
		margin-right: 0.2rem;
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

	.banner__email {
		padding: 0.5rem;
		color: white;
		font-weight: 700;
		display: flex;
		gap: 1rem;
	}
</style>
