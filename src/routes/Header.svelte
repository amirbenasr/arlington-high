<script>
	import svgLogo from '$lib/images/github.svg';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let mm = gsap.matchMedia();

	let animate;
	let menuOpen = false;
	onMount(() => {
		let menuButtons = document.querySelectorAll('.menu__list a');
		menuButtons.forEach((button) => {
			button.addEventListener('click', function (e) {
				toggleMenu();
			});
		});
		mm.add(
			{
				isMobile: '(width < 750px)',
				isDesktop: '(width > 750px)'
			},
			(ctx) => {
				let { isMobile, isDesktop } = ctx.conditions;
				animate = gsap.fromTo(
					'.menu',
					{
						translateX: '-100%',
						duration: '0.4',
						ease: 'easeIn'
					},
					{
						translateX: isDesktop ? '160px' : isMobile ? 0 : 0,
						duration: '0.4',
						ease: 'easeIn',
						paused: true
					}
				);
			}
		);
	});
	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			animate.play();
		} else {
			animate.reverse();
		}
	}
</script>

<nav>
	<img src={svgLogo} alt="" srcset="" class="fa-xl" />
	<a href="http://" on:click={() => toggleMenu()}>
		<i class="fa-solid fa-bars fa-xl" />
	</a>
	<i class="fa-solid fa-magnifying-glass fa-xl" />
</nav>
<div class="menu">
	<div class="menu__sidebar">
		<ul class="menu__list">
			<li>
				<a href="/">Home</a>
			</li>
			<li><a href="/about">About</a></li>
			<li><a href="contact">Contact</a></li>
		</ul>
	</div>
	<div class="menu__content">
		<h1>Hello world</h1>
		<p>Some content about the selected page</p>
	</div>
</div>

<style>
	@media (width < 750px) {
		nav {
			position: relative !important;
			height: 75px !important;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	li {
		list-style: none;
		font-weight: 700;
		font-size: 3rem;
	}
	.menu {
		height: 100vh;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: stretch;
		justify-content: center;
		z-index: 69;
	}

	.menu__sidebar {
		flex: 1;
		place-self: center;
	}

	.menu__content {
		flex: 1;
		place-self: center;
	}

	nav {
		background: white;
		position: fixed;
		width: 160px;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 999;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.logo {
		max-width: 1rem;
	}
	img {
		width: 3rem;
		max-width: 100%;
		max-height: 100%;
	}
</style>
