<script>
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
import logo from '$lib/images/logo_variant.png';
</script>

<div class="full">
	<div class="footer">
		<div class="hs__details">
			<div class="hs__logo">
				<img src={logo} alt="" />
			</div>
			<div class="hs__address">
				<span class="address">
					1033 Lac Tunis <br />
					Avenue de la bourse
				</span>
			</div>
			<div class="hs__contact">
				<a href="mailto:">contact@arlington-high.com</a>
				<a href="tel:+21654041337">+216 </a>
			</div>
		</div>
		<!-- <div class="hs__map"> -->
		<div class="section">
			<div class="section__title">Site map</div>
			<div class="section__subtitle">
				<a href="{base}/{$locale}/about">About us</a><a href="{base}/{$locale}/admissions">Admissions</a><a href="{base}/{$locale}/contact"
					>Contact</a
				>
			</div>
		</div>
		<div class="section">
			<div class="section__title">Staff</div>
			<div class="section__subtitle">
				<a href="/">Professors</a><a href="/">Team</a><a href="/">History</a>
			</div>
		</div>
		<div class="section">
			<div class="section__title">Socials</div>
			<div class="section__subtitle">
				<a href="https://www.facebook.com/arlington.highschool.tn">Facebook</a>
				<!-- <a href="/">Instagram</a> -->
				<!-- <a href="/">Twitter</a> -->
			</div>
		</div>

		<!-- <div class="section">
				<div class="section__title">Staff</div>
				<div class="section__subtitle">
					<a href="/">Professors</a><a href="/">Team</a><a href="/">History</a>
				</div>
			</div> -->
	</div>
	<!-- </div> -->
</div>
<div class="footer__social">
	<span class="copyright">
		Copyright all rights reserved to <span class="agency">Arlington</span> 2023.
	</span>
	<!-- <div class="socials">
		<a href="#facebook">
			<i class="fa-brands fa-facebook fa-lg" />
		</a>
		<a href="#instagram">
			<i class="fa-brands fa-instagram fa-lg" />
		</a>
		<a href="#twitter">
			<i class="fa-brands fa-twitter fa-lg" />
		</a>
	</div> -->
</div>

<style>
	span.copyright {
		text-align: center;
	}
	.hs__address {
		padding-block: 0.5rem;
	}
	span {
		color: white;
		font-weight: 400;
	}
	span.agency {
		font-weight: 700;
	}
	.footer__social {
		padding: 0.5rem;
		background: var(--primary-color);
		display: flex;
		justify-content: space-evenly;
	}

	.full {
		width: 100%;
		background: var(--primary-color);
	}
	/* .footer {
		display: flex;
		width: 80%;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: 0 auto;
		background: var(--primary-color);
	} */
	.footer {
		width: 80%;
		display: grid;
		grid-template-columns: 2fr repeat(3, 1fr);
		margin: 0 auto;
		background: var(--primary-color);
	}
	.section {
		padding: 1rem;
		color: white;
	}
	.section__title {
		position: relative;
		height: auto;
		font-weight: 600;
		font-size: 1.2rem;
		margin-bottom: 1rem;
		/* border-bottom: 2px solid white; */
	}
	.section__title::after {
		content: '';
		display: block;
		width: 20px;
		border: 1.5px solid white;
		color: blue;
	}

	.hs__contact {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	a {
		color: var(--special-color);
		flex: 1 1 25px;
		text-decoration: none;
		display: block;
	}
	span.address {
		color: var(--special-color);
		opacity: 0.8;
		display: inline-flex;
		vertical-align: middle;
		align-items: center;
	}

	.hs__details {
		flex: 1;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: start;
		/* gap: 1rem; */
		padding: 1rem;
	}
	img {
		max-width: 100%;
		max-height: 100%;
	}
	.hs__logo {
		max-width: 10rem;
		height: 44px;
	}

	.hs__map {
		flex: 1;
		display: flex;
		justify-content: space-around;
	}
	.section__subtitle {
		font-size: 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		/* paddi */
	}
	.section__subtitle a::after {
		content: '';
		display: block;
		width: 0px;
		border: 0px solid white;
	}
	.section__subtitle a:hover::after {
		border: 1px solid white;

		content: '';
		display: block;
		width: 35px;
		transition: 0.6s ease-in-out all;
	}
	@media (width < 840px) {
		.footer {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
