<script>
	import Pagelayout from '$lib/components/Pagelayout.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import languages from '$lib/images/languages.jpg';
	import technology from '$lib/images/technology.jpg';
	import female from '$lib/images/female.jpg';
	onMount(() => {});
</script>

<Pagelayout
	title="About Us"
	image="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
>
	<article>
		<h2>Vision & Mission</h2>

		<p>
			At Arlington High School, we take great pride in being the first educational institution in
			Tunisia to embrace a fully certified American curriculum. Our vision revolves around nurturing
			young minds and preparing them to meet the highest academic standards, ensuring they are
			well-equipped to thrive in both the ever-evolving global landscape and the dynamic job market.
		</p>
		<p>
			At the core lies an unwavering commitment to excellence in education. Our mission is to
			cultivate a stimulating learning environment that fosters intellectual curiosity, critical
			thinking, and creativity. We believe that every student possesses unique talents and
			potential, which is why we strive to provide personalized attention and support to bring out
			the best in each individual.
		</p>
		<p>
			Arlington High School's American curriculum offers a diverse range of subjects and
			opportunities, enabling our students to broaden their horizons and explore their passions.
			With a strong emphasis on interdisciplinary learning, our students gain a well-rounded
			education that goes beyond the confines of textbooks. We understand that global awareness is
			essential for success in today's interconnected world. Hence, our curriculum integrates global
			perspectives, encouraging students to embrace cultural diversity and become responsible global
			citizens.
		</p>
	</article>

	<article />

	<article />
	<article>
		<h2>Goals</h2>

		<div class="collage">
			<div class="collage_item">
				<img
					src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
					alt=""
					srcset=""
				/>
				<div class="collage__content">
					<h2>Academic Excellence</h2>
				</div>
			</div>
			<div class="collage_item">
				<img src={languages} alt="" srcset="" />
				<div class="collage__content">
					<h2>Language Proficiency</h2>
				</div>
			</div>
			<div class="collage_item">
				<img src={technology} alt="" srcset="" />
				<div class="collage__content">
					<h2>Technology Integration</h2>
				</div>
			</div>
			<div class="collage_item">
				<img src={female} alt="" srcset="" />
				<div class="collage__content">
					<h2>College and Career Readiness</h2>
				</div>
			</div>
		</div>
		<!-- <ul>
			<li>
				<div class="leading description">
					<h3>Academic Excellence</h3>
					<p>
						<span class="uppercase">W</span>e aim to deliver a rigorous and comprehensive American curriculum,
						supported by highly qualified educators, to ensure that our students are academically
						prepared to excel in the US educational system and beyond.
					</p>
				</div>
				<div class="trailing">
					<img
						src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt=""
						srcset=""
					/>
				</div>
			</li>
			<li>
				<div class="trailing">
					<img src={languages} alt="" srcset="" />
				</div>
				<div class="leading description">
					<h3>Language Proficiency</h3>
					<p>
						<span class="uppercase">W</span>e recognize the importance of language skills in a globalized world. Our
						goal is to offer language programs that enable students to achieve fluency in English,
						empowering them to communicate effectively and confidently in an English-speaking
						academic environment.
					</p>
				</div>
			</li>
			<li>
				<div class="leading description">
					<h3>Technology Integration</h3>
					<p>
						<span class="uppercase">R</span>ecognizing the importance of technology in modern education, we aim to
						integrate technology into the learning process. By providing access to advanced tools
						and resources, we equip our students with the digital literacy essential for success in
						the 21st-century job market.
					</p>
				</div>
				<div class="trailing">
					<img src={technology} alt="" srcset="" />
				</div>
			</li>
			<li>
				<div class="leading">
					<img src={female} alt="" srcset="" />
				</div>
				<div class="trailing description">
					<h3>College and Career Readiness</h3>
					<p>
						<span class="uppercase">O</span>ur focus is on preparing students for <span class="special">success</span> beyond high school. We offer
						guidance and support in the college application process, including assistance with
						standardized tests and college admissions. Additionally, we provide career counseling
						and internships to help students explore potential career paths.
					</p>
				</div>
			</li>
		</ul> -->
	</article>
</Pagelayout>

<style>
	/* @media (width < 980px) {
		.collage > * {
			flex: 0 0 auto !important;
			width: 50% !important;
		}
	} */
	.collage {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.collage > * {
		flex: 0 0 auto;
		width: 45%;
	}
	.collage_item {
		position: relative;
		height: 350px;
		mix-blend-mode: luminosity;
	}
	img {
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		height: 0px;
		width: 0px;
		min-height: 100%;
		min-width: 100%;
		object-fit: cover;
		z-index: -1;
	}
	.collage__content {
		padding: 16px;
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 5;
		& h2 {
			font-size: 2rem;
			color: white;
		}
	}
	.collage__content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -5;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9), transparent);
	}

	span {
		display: inline-block;
		color: #7f228f !important;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1.7rem !important;
		/* margin-left: 1.3rem; */
		border-bottom: #7f228f 1px solid;
	}

	.description {
		width: 100%;
		/* &::after {
			content: '';
			border-bottom: 2px solid #7f228f;
			position: absolute;
			width: 5%;
		} */
	}
	article {
		margin-block: 2rem;
	}
	p {
		margin-bottom: 1rem !important;
	}
	li {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	ul > li {
		padding: 1rem;
		&:nth-child(odd) {
			border-top: var(--border-size) solid #7f228f;
			border-right: var(--border-size) solid #7f228f;
			/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
		}
		&:nth-child(even) {
			border-top: var(--border-size) solid #7f228f;
			border-left: var(--border-size) solid #7f228f;
			/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
		}
	}
	.leading {
		flex: 1;
	}
	.trailing {
		flex: 1;
	}
	h1 {
		color: var(--primary-color);
	}
	h2 {
		font-size: 2rem;
		color: var(--primary-color);
		/* text-align: center; */
	}
	h3 {
		font-size: 1.7rem;
		color: var(--primary-color);
		display: inline-block;
		margin-bottom: 0.7rem;
	}
	p {
		line-height: 1.7rem;
	}
</style>
