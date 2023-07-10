<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bg from '$lib/images/bg-school.jpg';
</script>

<!-- <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head> -->

<div class="wrapper">
	<div class="hero">
		<div class="right-banner">
			<div class="content">
				<span class="content__subtitle">Arlington High School</span>
				<span class="content__title">OPENING UP A WORLD OF EDUCATION</span>
				<span class="content__description"
					>We believe that there is nothing more important than skillful education. Doing the right
					thing. at the right time</span
				>
				<a href="#">Know More</a>
			</div>
		</div>
		<img src={bg} alt="" srcset="" />
	</div>
	<div class="services">
		<div class="services__card">
			<div class="services__logo">
				<i class="fa-solid fa-school fa-2xl" />
			</div>
			<div class="services__header">
				<span class="title">High School Life</span>
				<span class="subtitle">Overall in here</span>
			</div>
		</div>
		<div class="services__card">
			<div class="services__logo" />
			<div class="services__header">
				<span class="title">Sports</span>
				<span class="subtitle">Overall in here</span>
			</div>
		</div>
		<div class="services__card">
			<div class="services__logo" />
			<div class="services__header">
				<span class="title">Social</span>
				<span class="subtitle">Overall in here</span>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		margin-left: 160px;
	}
	.services {
		margin-top: 2rem;
		background: grey !important;
	}

	.services__header {
		display: flex;
		flex-direction: column;
	}

	.services__card {
		/* color: black */
		height: 15rem;
		background: white;
		display: flex;
		flex: 1;
	}
	span.title {
		color: black;
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
	a {
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
		background: blue;
		opacity: 0.7;
		position: absolute;
		z-index: 55;
		width: 50%;
		height: 100%;
		right: 0;
		top: 0;
	}
	.services {
		/* transform: translateY(-50px); */
		display: flex;
		width: 100%;
		height: 20vh;
		z-index: 9999;
	}
</style>
