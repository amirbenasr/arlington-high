<script>
	import Arlingtonlogo from '$lib/images/arlington_last.png';
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
	let nav;
	let menuOpen = false;
	/**
	 * @param {any[]} menuButtons
	 */
	function clearMenu(menuButtons) {}
	let divElemet;
	onMount(async () => {
		divElemet = document.createElement('div');
		divElemet.addEventListener('click', function () {
			if (nav.classList.contains('open')) {
				nav.classList.toggle('open');
				this.style.cssText = 'position:absolute;top:0;width:100%;height:100%;z-index:-1;';
			}
		});
		divElemet.style.cssText = 'position:absolute;top:0;width:100%;height:100%;z-index:-1;';
		document.body.appendChild(divElemet);
		window.addEventListener('click', function (e) {
			// if (nav.classList.contains('open')) {
			// 	nav.classList.remove('open');
			// }
		});
		let mm = gsap.matchMedia();

		let menuButtons = document.querySelectorAll('.nav ul a');
		menuButtons.forEach((button) => {
			button.addEventListener('click', function () {
				toggleMenu();
				divElemet.style.cssText =
					'position:absolute;top:0;width:100%;height:100%;;opacity:0;z-index:-1;';
			});
		});
	});

	function toggleMenu() {
		divElemet.style.cssText = 'position:absolute;top:0;width:100%;height:100%;z-index:100;';
		nav.classList.toggle('open');
	}
</script>

<ApplyBanner />
<nav>
	<a href="{base}/{$locale}/">
		<img src={Arlingtonlogo} alt="" srcset="" class="logo_img" />
	</a>
	<!-- <div class="links"> -->

	<div class="menu_button">
		<a on:click={() => toggleMenu()}>
			<i class="menu_button fa fa-bars fa-xl" />
		</a>
	</div>

	<div class="nav" bind:this={nav}>
		<ul>
			<li><a href="{base}/{$locale}/">Home</a></li>
			<li><a href="{base}/{$locale}/about">About</a></li>
			<li><a href="{base}/{$locale}/admissions">Admissions</a></li>
			<li><a href="{base}/{$locale}/contact">Contact</a></li>
		</ul>
	</div>

	<!-- </div> -->

	<!-- <Button link="#" title="Apply Now" style="outlined" primary={true} /> -->
</nav>

<style>
	.nav ul {
		text-decoration: none;
		padding: 1rem;
	}
	:global(.open) {
		visibility: visible !important;
		z-index: 101;
	}
	@media (width < 780px) {
		.nav {
			visibility: hidden;
			position: absolute;
			top: 50px;
			right: 0px;
			display: flex !important;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: whitesmoke;
		}
		.nav ul {
			flex-direction: column;
		}
	}
	@media (width > 781px) {
		.menu_button {
			display: none;
		}
	}

	.nav ul a {
		text-decoration: none;
		color: var(--primary-color);
		display: inline;
		/* transition: all 1s ease-in; */
	}
	.nav ul a::after {
		display: block;
		content: '';
		border-bottom: solid 3px var(--primary-color);
		transform: scaleX(0);
		/* transition: transform 250ms ease-in-out; */
	}
	.nav ul a:hover::after {
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
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: auto;
		padding: 1rem;
	}
	.menu_button {
		position: relative !important;
	}
</style>
