<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	let post = null;
	let postId = data.id; // Get the postId from the route parameter

	onMount(async () => {
		try {
			const response = await fetch(
				`https://www.wordpress.arlington-high.com/wp-json/wp/v2/posts/${postId}`
			);
			post = await response.json();
		} catch (error) {
			console.error('Error fetching post:', error);
		}
	});
</script>

<main>
	{#if post}
		<h1>{@html post.title.rendered}</h1>
		<div>{@html post.content.rendered}</div>
	{:else}
		<p>Loading...</p>
	{/if}
</main>

<style lang="scss">
	@import '@wordpress/block-library/build-style/common.css';
	@import '@wordpress/block-library/build-style/style.css';
	@import '@wordpress/block-library/build-style/theme.css';

	:global(.wp-block-columns) {
		gap: 1rem;
	}
	@media (width < 600px) {
		:global(.wp-block-media-text__content) {
			padding: 0 !important;
			padding-block: 8px !important;
		}
	}
	:global(strong) {
		color: var(--primary-color);
	}
	main {
		width: 80%;
		margin: 0 auto;
	}
	:global(h1, h2, h3, li) {
		color: var(--primary-color);
	}

	:global(h1) {
		margin-bottom: 1rem;
	}
</style>
