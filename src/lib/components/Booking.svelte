<script>
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	let menu;
	function toggleMenu() {
		menu.classList.toggle('hidden');
	}
</script>

<div class="sitewide-sticky" >
	<div class="menu">
		<div class="button">
            <a href="#" on:click={toggleMenu} >
                <i class="fa-solid fa-chevron-left fa-xl" style="color: white;" />
            </a>
        </div>
		<ul class="sticky-links hidden" bind:this={menu} >
			<li style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
				<a href="{base}/{$locale}/contact">
					<i class="fa-regular fa-envelope fa-2xl" />
					<span>Contact</span>
				</a>
			</li>
		</ul>

		<!-- <li style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
         <a href="">
            <i class="fa-regular fa-calendar-check fa-2xl"></i>
                            <span>Book a Video Call</span>
    </a>
</li>
        <li style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
        <a href="">
            <i class="fa-regular fa-pen-to-square fa-2xl"></i>       
                     <span>Apply Now</span>
    </a>
</li> -->
	</div>
</div>

<style>
  
  
	.menu {
		display: flex;
        align-items: center;
        background: var(--secondary-color);
        padding: 0.3rem;
        /* border: 1px solid red; */
	}
    

	.sitewide-sticky a i {
		/* transform: translateY(100%); */
	}
	.hidden {
		display: none;
        transition: all ease-in 1s;
		/* transform: translateX(100%) !important; */
	}
	.sitewide-sticky {
		display: inline-block;
		position: fixed;
		right: 0;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		width: auto;
		opacity: 1;
		z-index: 999999;
		transition: right 0.3s ease;
	}

	.sitewide-sticky .sticky-links {
		list-style: none;
        padding: 0;
	}

	.sitewide-sticky .sticky-links li a {
		display: block;
		text-align: center;
		text-transform: lowercase;
		color: #fff;
		position: relative;
		padding: 10px 7px;
		font-size: 10px;
		background-color: var(--secondary-color);
		width: 80px;
		float: right;
		border-bottom: 1px solid hsla(0, 0%, 100%, 0.31);
		opacity: 1;
	}

	.sitewide-sticky .sticky-links li a span {
		display: block;
		padding: 10px 0 0;
		font-size: 14px;
		letter-spacing: normal;
		text-transform: capitalize;
		font-family: AvenirLT, sans-serif;
	}

	.sitewide-sticky .sticky-links li a:hover {
		text-decoration: none;
		opacity: 0.8;
	}

	
</style>
