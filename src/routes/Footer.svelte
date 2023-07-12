<script>
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
				<a href="tel:+21654041337">+216 54041337</a>
			</div>
		</div>
		<div class="hs__map">
			<div class="academics">
				<div class="academics__title">Academics</div>
				<div class="academics__subtitle">
					<a href="#1">Programs</a><a href="#2">Courses</a><a href="#3">Professors</a>
				</div>
			</div>
			<div class="academics">
				<div class="academics__title">Staff</div>
				<div class="academics__subtitle">
					<a href="#1">Professors</a><a href="#2">Team</a><a href="#3">History</a>
				</div>
			</div>
			<div class="academics">
				<div class="academics__title">Socials</div>
				<div class="academics__subtitle">
					<a href="#1">Facebook</a><a href="#2">Instagram</a><a href="#3">Twitter</a>
				</div>
			</div>
			<!-- <div class="academics">
				<div class="academics__title">Staff</div>
				<div class="academics__subtitle">
					<a href="#1">Professors</a><a href="#2">Team</a><a href="#3">History</a>
				</div>
			</div> -->
		</div>
	</div>
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

	.hs__address {
		border-top: 0.5px solid white;
		padding-block:0.5rem ;
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
	.socials {
		display: flex;
		gap: 3rem;
	}
	.full {
		width: 100%;
		background: var(--primary-color);
	}
	.footer {
		display: flex;
		width: 80%;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: 0 auto;
		background: var(--primary-color);
	}
	.academics {
		padding: 1rem;
		color: white;
	}
	.academics__title {
		font-weight: 600;
		font-size: 1.3rem;
		border-bottom: 1px solid white;
	}

	
	.hs__contact {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	a {
		color: var(--special-color);
		text-decoration: none;
	}
	span.address {
		color: var(--special-color);
		opacity: 0.8;
		display: inline-flex;
		vertical-align: middle;
		align-items: center;

	}
	

	.hs__details {
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
	.hs__logo  {
		margin-bottom: 0.5rem;
		max-width: 10rem;
	
	}

	.hs__map {
		flex: 1;
		display: flex;
		justify-content: space-around;
		margin-top: 1.5rem;
	}
	.academics__subtitle {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}
</style>
