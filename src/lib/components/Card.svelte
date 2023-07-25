<script>
	import Button from './Button.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	export let icon;
	export let title;
	export let subtitle;
	export let content;
	export let image;
	export let variant = false;
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
			gsap.fromTo(card, { x: '-100px' }, { x: 0, scrollTrigger: card, scrub: 2 });
		});
	});
</script>

<div class="services__card" class:variant>
	<div class="services__header">
		<div class="services__logo">
			<i class="fa-solid {icon} fa-2xl" />
		</div>
		<div class="services__text">
			<span class="title">{title}</span>
			<span class="subtitle">{subtitle}</span>
		</div>
	</div>
	<div class="img">
		<img class="service" src={image} alt="" srcset="" />
	</div>
	<div class="services__description">
		<span>
			{content}
		</span>
		<!-- <slot class="btn">
			<Button title="Learn More" link="#" style="borderless" />
		</slot> -->
	</div>
</div>

<style>
	.btn {
		position: absolute !important;
	}
	.student_girl {
		transform: scaleX(-1);
	}
	.services__description {
		display: flex;
		height: 10rem;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}
	.services__description span {
		font-weight: 300;
	}
	.variant {
		background: var(--primary-color) !important;
	}

	.img {
		display: inline-block;
		width: 100%;
		height: 20rem;
	}
	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: fill;
	}
	a {
		color: white;
	}

	.wrapper_tr {
		width: 100%;
		/* margin: 0 auto; */
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
		flex-wrap: wrap-reverse;
		/* margin-top: 1rem; */
	}

	.info {
		flex: 1;
		position: relative;
		background: var(--secondary-color);
	}
	.info__content {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: var(--gap);
		top: 0;
		color: white;
		padding: 2rem;
	}
	.info__title {
		font-weight: bold;
		font-size: 2.5rem;
	}
	.info__subtitle {
		color: white !important;
		font-weight: 400;
		width: fit-content;
		margin-top: var(--gap);
	}
	.info__description {
		margin-top: var(--gap);
		font-weight: 300;
	}
	.info__description p {
		font-size: var(--font-size) !important;
	}

	:global(.wrapper) {
		width: 90%;
		margin: 0 auto;
	}
	.services {
		width: 90%;
		height: 90vh;
		margin: 0 auto;
		border-radius: 2px;
		/* padding: 2rem; */
		display: flex;
		gap: 1rem;
		flex-wrap: wrap-reverse;
		align-items: center;
	}

	.services__header {
		padding: 0.5rem;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.services__text {
		display: flex;
		flex-direction: column;
	}

	.services__card {
		flex: 1 0 300px;
		max-height: auto;
		color: white;
		background: var(--secondary-color);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		border-radius: 5px;
		border: 1px solid #ccc;
		box-shadow: rgba(1, 1, 1, 0.05) 5px 5px;
	}
	span.title {
		color: white;
		font-weight: bold;
	}
	span.subtitle {
		font-weight: 300;
		font-size: smaller;
		color: white;
	}

	@media (width < 1500px) {
		img.student_girl {
			object-position: center !important ;
		}
	}
	@media (width < 1200px) {
		.img.student {
			display: none !important;
		}
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
		img.student_girl {
			object-position: 70% !important ;
		}
		.info__content {
			gap: 0.4rem !important;
			padding: 1rem !important;
		}
		.info__title {
			font-weight: bold;
			font-size: 2rem;
		}
		.info__subtitle {
			color: var(--primary-color);
			font-weight: 400;
			width: fit-content;
			margin-top: 0.2rem;
		}
		/* .info__description {
			margin-top: 0.8rem;
			font-weight: 300;
			font-size: 0.8rem;
		} */
		.img.student {
			display: none !important;
			flex: unset;
		}
		.wrapper {
			margin-left: unset !important;
			width: 100vw !important;
		}
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
			width: 100%;
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
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-inline: 1rem;
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
		object-fit: cover;
	}
	img.student_girl {
		object-position: top left;
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
