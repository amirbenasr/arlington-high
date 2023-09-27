<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let posts = [];

	onMount(async () => {
		try {
			const response = await fetch('https://www.wordpress.arlington-high.com/wp-json/wp/v2/posts');
			posts = await response.json();

			await fetchFeaturedMedia();
			await fetchTags();
		} catch (error) {
			console.error('Error fetching posts:', error);
		}
	});
	async function fetchFeaturedMedia() {
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].featured_media) {
				try {
					const mediaResponse = await fetch(
						`https://www.wordpress.arlington-high.com/wp-json/wp/v2/media/${posts[i].featured_media}`
					);
					const mediaData = await mediaResponse.json();
					posts[i].featured_media_url = mediaData.source_url;
				} catch (error) {
					console.error(`Error fetching featured media for post ${posts[i].id}:`, error);
				}
			}
		}
	}

	async function fetchTags() {
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].tags.length > 0) {
				try {
					const tagsResponse = await fetch(
						`https://www.wordpress.arlington-high.com/wp-json/wp/v2/tags/${posts[i].tags[0]}`
					);
					const tagsData = await tagsResponse.json();
					posts[i].tagName = tagsData.name;
				} catch (error) {
					console.error(`Error fetching featured media for post ${posts[i].id}:`, error);
				}
			}
		}
	}
	function navigateToArticle(postId) {
		goto(`en/articles/${postId}`); // Navigate to the article route with the postId as a parameter
	}
</script>

<div class="root">
	<main class="container">
		<div
			class=""
			style="margin-top: 1rem; background-color:var(--primary-color); padding-inline:1rem"
		>
			<h1 style="color:white;text-align:center">Latest Events</h1>
		</div>
		<div class="articles">
			{#each posts as post (post.id)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div on:click={() => navigateToArticle(post.id)} class="">
					<article class="article">
						{#if post.tagName}
							<p class="featured-marker">{post.tagName}</p>
						{/if}
						{#if post.featured_media}
							<img src={post.featured_media_url} alt={post.title.rendered} class="featured-image" />
						{/if}
						<div class="" style=" color:var(--primary-color); padding:5px;">
							<h2 style="color:var(--primary-color)">
								{post.title.rendered}
							</h2>
						</div>
					</article>
				</div>
			{/each}
		</div>
	</main>
</div>

<style>
	@media (width > 780px) {
		.articles {
			display: grid;
			grid-template-columns: 1fr 1fr !important;
		}
		main {
			width: 80%;
		}
	}
	main {
		margin: 0 auto;
	}

	:global(h2) {
		color: white;
	}

	.articles {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	img {
		height: 300px !important;
		max-width: 100%;
		/* max-height: 100%; */
	}
	.root {
		background-color: #f8f8f8;
	}
	.article {
		cursor: pointer;
		position: relative;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 10px;
		height: 450px;
		background-color: white;
		transition: 500ms all;
		scale: 0.99;
		&:hover {
			scale: 1;
			box-shadow: 1px 5px 5px var(--primary-color);

			/* background-color: red; */
		}
	}

	.featured-image {
		max-width: 100%;
		height: auto;
	}

	.featured-marker {
		position: absolute;
		top: 19px;
		left: 19px;
		background-color: #ffcc00;
		color: #fff;
		padding: 5px 10px;
		font-weight: bold;
	}
</style>
