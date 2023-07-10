<script>
	import logo from '$lib/images/arlington-logo.svg';
</script>

<div class="footer">
	<div class="hs__details">
		<div class="hs__logo">
			<span>
				<img src={logo} alt="" />
				<span class="logo-font">Arlington High School</span>
			</span>
		</div>
		<div class="hs__address">
			<span class="address">
				1033 Lac Tunis <br />
				Avenue de la bourse <br />
				Lorem, ipsum dolor.
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
			<div class="academics__title">Staff</div>
			<div class="academics__subtitle">
				<a href="#1">Professors</a><a href="#2">Team</a><a href="#3">History</a>
			</div>
		</div>
		<div class="academics">
			<div class="academics__title">Staff</div>
			<div class="academics__subtitle">
				<a href="#1">Professors</a><a href="#2">Team</a><a href="#3">History</a>
			</div>
		</div>
	</div>
</div>
<div class="footer__social">
	<span class="copyright">
		Copyright all rights reserved to <span class="agency">Relink Agency 2023.</span>
	</span>
	<div class="socials">
		<a href="#facebook">
			<i class="fa-brands fa-facebook fa-lg" />
		</a>
        <a href="#instagram" >
            <i class="fa-brands fa-instagram fa-lg"></i>
        </a>
        <a href="#twitter">
			<i class="fa-brands fa-twitter fa-lg" />
		</a>
	</div>
</div>

<style>
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
		justify-content: space-around;
	}
    .socials {
        display: flex;
        gap: 3rem;
    }
	.footer {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		margin-top: 2rem;

		padding: 2rem;
		background: var(--darker-color);
	}
	.academics {
		padding: 1rem;
		color: white;
	}
	.academics__title {
		font-weight: bold;
		font-size: 1.3rem;
		border-bottom: 1px solid white;
	}

	.logo-font {
		font-size: 1.2rem;
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
		gap: 1rem;
		align-items: center;
	}
	img {
		width: 64px;
		height: 64px;
	}

	.hs__details {
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: start;
		gap: 1rem;
		padding: 1rem;
		border-bottom: 1px solid white;
	}
	.hs__logo span {
		gap: 1rem;
		display: inline-flex;
		align-items: center;
		vertical-align: middle;
	}

	.hs__map {
		flex: 1;
		display: flex;
		justify-content: space-around;
	}
	.academics__subtitle {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}
</style>
