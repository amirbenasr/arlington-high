<script>
	import svgLogo from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
	// import Arlingtonlogo from '$lib/images/arlington-logo.svg';
	import Arlingtonlogo from '$lib/images/logo_ar.png';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let animate;
	let menuOpen = false;
	onMount(async () => {
		let mm = gsap.matchMedia();

		let menuButtons = document.querySelectorAll('a');
		menuButtons.forEach((button) => {
			// button.addEventListener('click', function (e) {
			// 	toggleMenu();
			// });
		});

		mm.add(
			{
				isMobile: '(width < 750px)',
				isDesktop: '(width > 750px)'
			},
			(ctx) => {
				let { isMobile, isDesktop } = ctx.conditions;
				animate = gsap.fromTo('ul.nav_mobile',{
					opacity:0,
					display:'none',
					translateY:"-100%",
					duration:0.1
				}, {
					display:'flex',
					justifyContent:'space-between',
					opacity:1,
					translateY:"0",
					duration:0.1,
					paused:true,

				});
			}
		);
	});
	function toggleMenu() {
		console.log('calling this');
		menuOpen = !menuOpen;
		if(menuOpen)
		{	
			animate.play();
		}
		else {
			animate.reverse();
		}
	}
</script>

<div class="wrapper">
	<nav>
		<img src={Arlingtonlogo} alt="" srcset="" class="logo" />
		<a on:click={() => toggleMenu()}>
			<i class="menu_button fa fa-bars fa-xl" />
		</a>
		<div class="links">
			<ul class="nav">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About us</a></li>
				<li><a href="/application">Application</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</nav>
	<ul class="nav_mobile" >
		<li><a href="/">Home</a></li>
		<li><a href="/about">About us</a></li>
		<li><a href="/application">Application</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</div>

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

	
	.menu_button {
		display: none;
	}
	ul.nav_mobile {
		list-style: none;
		display: none  ;
		font-size: 16px !important;
		padding: 0;
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
		max-width: 100%;
		max-height: 100%;
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
		font-size: 1.2rem;
	}

	nav {
		background: white;
		position: relative;
		width: 100%;
		height: 75px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	img {
		width: 10rem;
		max-width: 100%;
		max-height: 100%;
	}
</style>
