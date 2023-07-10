<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bg from '$lib/images/bg-school.jpg';
	import student from '$lib/images/student.jpg';
	import students from '$lib/images/students.jpg';
	import ApplyBanner from './ApplyBanner.svelte';
	import Footer from './Footer.svelte';
	import Button from './Button.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		// register plugin
		gsap.registerPlugin(ScrollTrigger);

		// create time line
		const tl = gsap.timeline();

		// timeline effect
		tl.fromTo(
			'.content__subtitle',
			{
				opacity: 0
			},
			{
				opacity: 1
			}
		)
			.fromTo(
				'.content__title',
				{
					opacity: 0
				},
				{
					opacity: 1,
					stagger: 0.1
				}
			)
			.fromTo(
				'.content__description',
				{
					opacity: 0
				},
				{
					opacity: 1,
					stagger: 0.2
				}
			)
			.fromTo(
				'.content a',
				{
					opacity: 0,
					x: '-100%'
				},
				{
					opacity: 1,
					stagger: 0.3,
					x: '0'
				}
			);

		// select all cards
		let cards = gsap.utils.toArray('.services__card');

		cards.forEach((card) => {
			gsap.fromTo(card, { x: '-100px' }, { x: 0, scrollTrigger: card,scrub:2 });
		});
	});
</script>

<!-- <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head> -->

<div class="wrapper">
	<ApplyBanner />
	<div class="hero">
		<div class="right-banner">
			<div class="content">
				<span class="content__subtitle">Arlington High School | Tunisia</span>
				<span class="content__title">OPENING UP A WORLD OF EDUCATION</span>
				<span class="content__description"
					>We believe that there is nothing more important than skillful education. Doing the right
					thing. at the right time</span
				>
				<Button id="btn" title="Know More" link="#" style="outlined" />
			</div>
		</div>
		<img src={students} alt="" srcset="" />
	</div>
	<div class="wrapper_tr">
		<div class="services">
			<div class="services__card">
				<div class="services__header">
					<div class="services__logo">
						<i class="fa-solid fa-school fa-2xl" />
					</div>
					<div class="services__text">
						<span class="title">High School Life</span>
						<span class="subtitle">Lorem ipsum dolor sit amet.</span>
					</div>
				</div>
				<div class="img">
					<img
						class="service"
						src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt=""
						srcset=""
					/>
				</div>
				<div class="services__description">
					<span
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci aut corrupti
						accusamus eligendi vel pariatur tenetur optio consectetur tempora, ea, non aspernatur
						voluptatum praesentium eos ratione repellat dolores accusantium blanditiis fugit?
						Quaerat sed soluta aut nostrum nulla inventore, cupiditate voluptas quasi necessitatibus
						quae temporibus ex vel minima magni? Nobis.</span
					>
					<Button title="Learn More" link="#" style="borderless" />
				</div>
			</div>

			<div class="services__card darker">
				<div class="services__header">
					<div class="services__logo">
						<i class="fa-solid fa-football fa-2xl" />
					</div>
					<div class="services__text">
						<span class="title">Sports</span>
						<span class="subtitle">Lorem ipsum dolor sit amet.</span>
					</div>
				</div>
				<div class="img">
					<img
						class="service"
						src="https://images.unsplash.com/photo-1603351819757-84fc2cfb9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
						alt=""
						srcset=""
					/>
				</div>
				<div class="services__description">
					<span
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci aut corrupti
						accusamus eligendi vel pariatur tenetur optio consectetur tempora, ea, non aspernatur
						voluptatum praesentium eos ratione repellat dolores accusantium blanditiis fugit?
						Quaerat sed soluta aut nostrum nulla inventore, cupiditate voluptas quasi necessitatibus
						quae temporibus ex vel minima magni? Nobis.</span
					>
					<Button title="Learn More" link="#" style="borderless" />
				</div>
			</div>

			<div class="services__card extra-darker">
				<div class="services__header">
					<div class="services__logo">
						<i class="fa-solid fa-book-open fa-2xl" />
					</div>
					<div class="services__text">
						<span class="title">Academics</span>
						<span class="subtitle">Lorem ipsum dolor sit amet.</span>
					</div>
				</div>
				<div class="img">
					<img
						class="service"
						src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt=""
						srcset=""
					/>
				</div>
				<div class="services__description">
					<span
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci aut corrupti
						accusamus eligendi vel pariatur tenetur optio consectetur tempora, ea, non aspernatur
						voluptatum praesentium eos ratione repellat dolores accusantium blanditiis fugit?
						Quaerat sed soluta aut nostrum nulla inventore, cupiditate voluptas quasi necessitatibus
						quae temporibus ex vel minima magni? Nobis.</span
					>
					<Button title="Learn More" link="#" style="borderless" />
				</div>
			</div>
		</div>
		<div class="admission">
			<div class="img">
				<img src={student} alt="" srcset="" />
			</div>
			<div class="info">
				<img src={bg} alt="" srcset="" />
				<div class="info__content">
					<div class="info__title">Apply for Admission</div>
					<div class="info__subtitle">2023 Pre-enrollement are now open</div>
					<div class="info__description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ex minus sequi laborum
						ipsum non animi labore culpa distinctio earum magni nihil illo voluptatibus minima,
						harum optio, delectus natus molestiae! Fugiat, magni aliquam molestiae labore
						exercitationem dicta soluta commodi cum iusto, nulla, voluptas maxime aspernatur quis
						doloremque itaque porro error.
					</div>
					<!-- <a class="apply" href="">Apply now</a> -->
					<Button title="Apply now" link="#" style="normal" primary={true} />
				</div>
			</div>
		</div>
	</div>

	<Footer />
</div>

<style>
	.services__description {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}
	.services__description span {
		font-weight: 300;
	}
	.darker {
		background: var(--darker-sec-color) !important;
	}
	.extra-darker {
		background: var(--extradarker-sec-color) !important;
	}
	.img {
		display: inline-block;
		max-width: 100%;
	}
	img.service {
		max-width: 100%;
		max-height: auto;
	}
	a {
		color: white;
	}

	.wrapper_tr {
		margin: 0 auto;
	}
	a.apply {
		background: var(--primary-color);
	}
	.info img {
		filter: brightness(60%);
	}
	.admission {
		width: 80%;
		margin: 0 auto;
		display: flex;
		margin-top: 1rem;
	}
	.img {
		flex: 1;
	}
	.info {
		flex: 1;
		position: relative;
	}
	.info__content {
		display: flex;
		flex-direction: column;
		position: absolute;
		gap: 1rem;
		top: 0;
		color: white;
		padding: 2rem;
	}
	.info__title {
		font-weight: bold;
		font-size: 2.5rem;
	}
	.info__subtitle {
		color: var(--primary-color);
		font-weight: 400;
		width: fit-content;
		margin-top: 0.5rem;
	}
	.info__description {
		margin-top: 1.5rem;
		font-weight: 300;
	}

	.wrapper {
		margin-left: 160px;
		width: calc(100% - 160px);
	}
	.services {
		width: 80%;
		margin: 0 auto;
		border-radius: 2px;
		/* padding: 2rem; */
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.services__header {
		padding: 1rem;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.services__text {
		display: flex;
		flex-direction: column;
	}

	.services__card {
		flex: 1;
		color: white;
		background: var(--secondary-color);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
	span.title {
		color: white;
	}
	span.subtitle {
		font-weight: 300;
		font-size: smaller;
		color: white;
	}
	@media (width < 1000px) {
		span {
			font-size: 0.8em !important;
		}
		.content__title {
			font-weight: bold;
			font-size: 3.5em !important;
			line-height: 4.2rem;
		}
		.content__description {
			font-weight: 400;
			font-size: 0.8em !important;
		}
	}

	@media (width < 750px) {
		.right-banner {
			position: absolute !important;
			height: 50% !important;
			width: 80% !important;
			top: 25% !important;
			right: 12.5% !important;
		}
		.content {
			align-items: center !important;
			justify-content: center !important;
			gap: 0.5rem !important;
		}
		.content__title {
			font-weight: bold;
			font-size: 1.5em !important;
			line-height: 2.2rem !important;
		}
		.content__description {
			font-weight: 400;
			line-height: 1.4em !important;
			font-size: 0.8em !important;
		}
		.hero {
			height: calc(100vh - 75px) !important;
		}
	}
	a.apply {
		text-decoration: none;
		color: white;
		font-weight: bold;
		border: 2px solid white;
		padding-inline: 1.5rem;
		padding-block: 0.5rem;
		width: fit-content;
	}
	span {
		color: white;
		font-size: 1em;
	}
	.content {
		display: flex;
		flex-direction: column;
		max-width: auto;
		margin: 12rem;
		gap: 1.5rem;
	}
	.content__subtitle {
		font-weight: 200;
		letter-spacing: 0.3rem;
	}
	.content__title {
		font-weight: bold;
		font-size: 4.5em;
		line-height: 4.2rem;
	}
	.content__description {
		font-weight: 400;
		font-size: 1.2em;
	}
	.right-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero {
		height: 100vh;
		width: 100%;
		position: relative;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}

	.right-banner {
		background: var(--primary-color);
		opacity: 0.9;
		position: absolute;
		z-index: 55;
		width: 50%;
		height: 100%;
		right: 0;
		top: 0;
	}

	a.button {
		color: white;
		border: 2px solid white;
		width: fit-content;
		padding: 1rem;
		text-decoration: none;
		font-weight: 800;
	}
</style>
