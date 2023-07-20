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
	<div
		class="logo"
		on:click={() => {
			goto(base + '/' + $locale);
		}}
	>
		<img src={Arlingtonlogo} alt="" srcset="" class="logo_img" />
	</div>
	<!-- <a on:click={() => toggleMenu()}>
		<i class="menu_button fa fa-bars fa-xl" />
	</a> -->
	<div class="links">
		<ul class="nav">
			<li><a href="{base}/{$locale}/">Home</a></li>
			<li><a href="{base}/{$locale}/about">About us</a></li>
			<!-- <li><a href="{base}/{$locale}/admissions">Admissions</a></li> -->
			<li><a href="{base}/{$locale}/contact">Contact</a></li>
		</ul>
	</div>
	<Button link="#" title="Apply Now" style="outlined" primary={true} />
</nav>

<style>
	ul.visible {
		display: flex !important ;
		align-items: center;
		justify-content: space-around;
	}
	@media (width < 780px) {
		.menu_button {
			display: inline-block !important;
		}
		.links {
			display: none !important;
		}
	}

	a {
		text-decoration: none;
		color: var(--primary-color);
		display: inline-block;
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

	.logo {
		cursor: pointer;
		text-align: center;
		width: 134px;
		/* scale: 5; */
	}

	ul.nav {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
	li {
		list-style: none;
		font-weight: 600;
	}

	nav {
		background: white;
		position: relative;
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>
