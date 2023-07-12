<script>
	import svgLogo from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
	// import Arlingtonlogo from '$lib/images/arlington-logo.svg';
	import Arlingtonlogo from '$lib/images/logo_ar.png';
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
						translateY: '-100%',
						duration: '0.4',
						ease: 'easeIn'
					},
					{
						translateY: '0%',
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
<div class="wrapper">

	<nav>
		<img src={Arlingtonlogo} alt="" srcset="" class="logo" />
		<div class="links">
			<ul class="nav">
				<li><a href="Home">Home</a></li>
				<li><a href="About Us">About us</a></li>
				<li><a href="Contact">Application</a></li>
				<li><a href="Contact">Contact</a></li>
			</ul>
		</div>
	</nav>
</div>


<style>
	
	ul {
		list-style: none;
		display: flex !important;
		font-size: 16px !important;
	}
	
	li::after
	{
		content: '|';
		padding-left: 1rem;
		
	}




	
	
	a {
		
		/* padding: 0.5rem; */
		text-decoration: none;
		color: var(--primary-color);
		border: 0px solid var(--primary-color);
		/* border-radius: 10%; */
	}
	a:focus {
		border-bottom: 1px solid var(--primary-color);

	}
	a:hover {
		border-bottom: 1px solid var(--primary-color);
		transition: all 1s;
	}
	
	.logo {
		max-width: 100%;
		max-height: 100%;
		/* scale: 5; */
	}

	ul {
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
