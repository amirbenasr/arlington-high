<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Hero from '$lib/images/hero.webp';
	let posts = [];

	onMount(async () => {});
</script>

<section>
	<div class="grid-slides-container">
		<div class="bg-img" />
		<div class="grid-slides-inner">
			<div class="col">
				<h2 class="title">We Talk #Social</h2>
				<div class="slides">
					<a class="left" href="https://www.instagram.com/arlington_highschool">
						<div>
							<img src={Hero} alt="" srcset="" />
							<div class="text">
								<h2>Follow @Arlington on Instagram</h2>
								<p>
									Stay up to date with the latest happenings by following @Arlington on your
									favorite social channel!
								</p>
							</div>
						</div>
					</a>
					<a class="right" href="https://www.facebook.com/arlington.highschool.tn">
						<div>
							<img
								src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/369993856_147066065118227_8791490469066433562_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=xAzpBk8hoZkAX_VAihW&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCwzT6HV9pcQgCFUMpBsEAkHu4QsVTTFevFNJW8lx8sgQ&oe=65237A48"
								alt=""
								srcset=""
							/>
							<div class="text">
								<h2>Like us on Facebook</h2>
								<p>Arlington High School</p>
							</div>
						</div></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.col {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		margin: 0 auto;
		width: 80%;
		height: 100%;
	}
	a {
		text-decoration: none;
		flex: 1;
	}
	h2.title {
		color: #fff;
		font-size: 60px;
		letter-spacing: 0.025em;
		border-bottom: 1px solid #fff;
		padding: 0 0 25px;
		margin-bottom: 1rem;
	}
	a.left {
		flex: 1 1 70%;
	}
	a.right {
		flex: 1 1 30%;
	}
	img {
		max-width: 100%;
		max-height: 100%;
		transition: all 300ms;
		&:hover {
			filter: grayscale(0%);
		}
	}

	@media (width > 780px) {
		img {
			filter: grayscale(100%);
		}
	}

	.text {
		background: white;
		display: flex;
		flex: 1 !important;
		flex-direction: column;
		padding: 1rem;

		& h2 {
			color: var(--primary-color);
		}
	}
	.slides {
		align-self: center;
		display: flex;
		align-items: stretch;
		z-index: 1;
	}

	section {
		position: relative;
		width: 100%;
	}
	.grid-slides-container {
		background-color: var(--primary-color);
		position: relative;
		padding: 50px 0;
	}
	.grid-slides-inner {
		display: flex;
		flex-direction: column;
	}
	.bg-img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-image: url('../images/hero.webp');
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.1;
		z-index: 1;
	}
</style>
