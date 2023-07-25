<script>
	import Footer from './Footer.svelte';

	export let title;
	export let image;
	export let top = false;
</script>

<div class="layout">
	<header>
		<div class="banner">
			<img class="util" class:top src={image} alt="" srcset="" />
		</div>

		<div class="content">
			<!-- <h3>{title}</h3> -->
			<h1>{title}</h1>
		</div>
	</header>

	<div class="container">
		<slot />
	</div>
	<Footer />
</div>

<style>
	@media (width < 780px) {
		.container {
			width: auto !important;
		}
	}
	.container {
		margin: 0 auto;
		width: 80%;
		/* background: red; */
	}

	header {
		position: relative;
		display: flex;
		align-items: flex-end;
		min-height: 380px;
		padding: 2rem;
	}

	h1 {
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: -0.2px;
	}
	h3 {
		color: white;
		line-height: 1.2;
	}
	.banner {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		height: 100%;
	}
	.banner::before {
		content: '';
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* W3C */
	}
	.content {
		z-index: 3;
	}
	img {
		width: 0px;
		height: 0px;
		min-height: 100%;
		min-width: 100%;
		object-fit: cover;
		display: block;
		position: absolute;
	}
	.top {
		object-position: 0 -200px;
	}
</style>
