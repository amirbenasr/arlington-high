<script>
	import Footer from './Footer.svelte';

	export let title;
</script>

<div class="layout">
	<header>
		<h1>{title}</h1>
	</header>

	<div class="container">
		<slot />
	</div>
	<Footer />
</div>

<style>
	.container {
		margin: 0 auto;
		width: 900px;
		/* background: red; */
	}
	h1 {
		text-align: center;
		color: white;
		background: var(--primary-color);
		padding: 4rem;
	}
</style>
