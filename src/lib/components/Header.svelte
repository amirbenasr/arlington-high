<script>
	import Arlingtonlogo from '$lib/images/logo_ar.png';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import ApplyBanner from './ApplyBanner.svelte';
	import { goto } from '$app/navigation';
	import LangSwitcher from './LangSwitcher.svelte';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	/**
	 * @type {{ play: () => void; reverse: () => void; }}
	 */
	let animate;
	let menuOpen = false;
	/**
	 * @param {any[]} menuButtons
	 */
	function clearMenu(menuButtons) {}
	onMount(async () => {
		let mm = gsap.matchMedia();

		let menuButtons = document.querySelectorAll('a');
		menuButtons.forEach((button) => {});
	});
	function toggleMenu() {
		console.log('calling this');
		menuOpen = !menuOpen;
		if (menuOpen) {
			animate.play();
		} else {
			animate.reverse();
		}
	}
</script>

<ApplyBanner />
<nav>
	<img src={Arlingtonlogo} alt="" srcset="" class="logo_img" />
	<!-- <div class="links"> -->
	<div class="nav">
		<ul>
			<li><a href="{base}/{$locale}/">Home</a></li>
			<li><a href="{base}/{$locale}/about">About us</a></li>
			<!-- <li><a href="{base}/{$locale}/admissions">Admissions</a></li> -->
			<li><a href="{base}/{$locale}/contact">Contact</a></li>
		</ul>
	</div>
	<!-- </div> -->

	<!-- <div class="menu_button">
		<a on:click={() => toggleMenu()}>
			<i class="menu_button fa fa-bars fa-xl" />
		</a>
	</div> -->

	<!-- <Button link="#" title="Apply Now" style="outlined" primary={true} /> -->
</nav>

<style>
	@media (width < 780px) {
		nav {
			height: auto !important;
		}
	}

	a {
		text-decoration: none;
		color: var(--primary-color);
		display: inline;
		transition: all 1s ease-in;
	}
	a::after {
		display: block;
		content: '';
		border-bottom: solid 3px var(--primary-color);
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}
	a:hover::after {
		transform: scaleX(1);
	}

	li {
		list-style: none;
		font-weight: 600;
	}

	.nav {
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		text-align: center;
		height: auto;
		align-items: center;
	}
	ul {
		display: flex;
		gap: 1rem;
	}
	.logo_img {
		display: inline-block;
		width: 8.8rem;
	}
	nav {
		background: white;
		position: relative;
		overflow: hidden;
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: auto;
		padding: 1rem;
	}
</style>
