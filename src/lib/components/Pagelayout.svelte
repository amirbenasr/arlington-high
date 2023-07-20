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
:global(h2)
{
	font-size: 2rem;
	color: var(--primary-color);
}
@media (width < 780px)
{
	.container {
		width: auto !important;
	}
}
	.container {
		margin: 0 auto;
		width: 80%;
		/* background: red; */
	}
	h1 {
		text-align: center;
		color: white;
		background: var(--primary-color);
		padding: 4rem;
	}
</style>
