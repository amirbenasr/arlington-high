<script>
	import Card from '$lib/components/Card.svelte';

	import student from '$lib/images/student.jpg';
	import students from '$lib/images/hero.jpeg';
	import academics from '$lib/images/academics.jpg';
	import sports from '$lib/images/sports.jpg';
	import professors from '$lib/images/professors.png';
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Booking from '$lib/components/Booking.svelte';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import slogan from '$lib/images/slogan.svg';
	const cards = [
		{
			icon: 'fa-school',
			title: 'High School Life',
			subtitle: 'Embracing Growth.',
			content: `
			At Arlington High School, we are committed to providing a rich and diverse educational
			experience that fosters personal growth, builds meaningful relationships, and prepares
			students for their future endeavors.`,
			image: academics
		},
		{
			icon: 'fa-football',
			title: 'Sports',
			subtitle: 'Igniting Passion.',
			content: `Our sports program enhances the high school experience and cultivates invaluable life
						lessons. Join us at Arlington High School, where we empower students to unlock their
						potential both academically and athletically.`,
			image: sports
		},
		{
			icon: 'fa-book-open',
			title: 'Academics',
			subtitle: 'Fostering Knowledge.',
			content: `Our dedicated and passionate faculty members are committed to fostering critical
						thinking, creativity, and a love for learning in every student.`,
			image: professors
		}
	];

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

<div class="">
	<div class="hero">
		<div class="right-banner">
			<div class="content">
				<span class="content__subtitle">Arlington High School | Tunisia</span>
				<span class="content__title">Elevate Your High School Experience</span>
				<img src={slogan} alt="" srcset="" />
				<span class="content__description"
					>We believe that there is nothing more important than skillful education. Doing the right
					thing. at the right time</span
				>

				<Button title="Apply Now" link="{base}/{$locale}/contact" style="outlined" />
			</div>
		</div>

		<div class="">
			<img class="student_girl" src={students} alt="" srcset="" />
		</div>
	</div>
	<div class="wrapper_tr">
		<div class="services">
			<Card {...cards[0]} variant={true} />
			<Card {...cards[1]} />
			<Card {...cards[2]} variant={true} />
		</div>
		<div class="admission">
			<div class="img student">
				<img src={student} alt="" srcset="" />
			</div>
			<div class="info">
				<div class="info__content">
					<div class="info__title">Apply for Admission</div>
					<div class="info__subtitle">2023 Pre-enrollment are now open</div>
					<div class="info__description">
						<p>
							Are you ready to embark on an extraordinary educational journey? Take the first step
							by clicking the "Apply Now" button below to submit your application to Arlington High
							School. Join our vibrant community and embrace the countless opportunities that await
							you.
						</p>
					</div>
					<Button title="Apply now" link="{base}/{$locale}/contact" style="cta" />
				</div>
			</div>
		</div>
	</div>
	<Footer />
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
	.darker {
		background: var(--primary-color) !important;
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
		width: 100%;
		/* margin: 0 auto; */
	}

	.admission {
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap-reverse;
		/* margin-top: 1rem; */
	}
	.img {
		flex: 1;
		max-height: 100%;
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

	.services > :global(:nth-child(2)) {
		transform: translateY(-20px);
	}
	.services {
		width: 80%;
		margin: 0 auto;
		border-radius: 2px;
		padding-block: 2rem;
		display: flex;
		gap: 1rem;
		/* transform: translateY(-110px); */
		position: relative;
		z-index: 55;
		flex-wrap: wrap-reverse;
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
		flex: 1 0 300px;
		max-height: auto;
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

	@media (width < 1500px) {
		img.student_girl {
			object-position: center !important ;
		}
	}
	@media (width < 1200px) {
		.img.student {
			display: none !important;
		}
		/* .img {
			display: none !important;
		} */
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
			object-position: center center;
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
			height: min-content !important;
			padding: 1rem;
			width: auto !important;
			bottom: 0px !important;
			/* top: 25% !important; */
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
		.services {
			transform: unset;
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
		font-weight: 500;
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
		display: flex !important;
		height: calc(100vh - 94px) !important;
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
		z-index: 55;
		width: 50%;
		height: 100%;
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
