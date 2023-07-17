<script>

	import { base } from "$app/paths";
	import { locale } from "$i18n/i18n-svelte";

</script>
<div class="sitewide-sticky desktop animated" style="opacity: 1; visibility: inherit;">
    

    <ul class="sticky-links">
                <li style="opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
                 <a href="{base}/{$locale}/contact">	
                    <i class="fa-regular fa-envelope fa-2xl"></i>
                     <span>Contact</span>
            </a>
        </li>
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
        </ul>

</div>

<style>
    .sitewide-sticky {
    position: fixed;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 91px;
    opacity: 1;
    z-index: 999999;
    transition: right .3s ease
}

.sitewide-sticky .sticky-links {
    list-style: none
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
    border-bottom: 1px solid hsla(0,0%,100%,.31);
    opacity: 1
}

.sitewide-sticky .sticky-links li a span {
    display: block;
    padding: 10px 0 0;
    font-size: 14px;
    letter-spacing: normal;
    text-transform: capitalize;
    font-family: AvenirLT,sans-serif
}

.sitewide-sticky .sticky-links li a:hover {
    text-decoration: none;
    opacity: .8
}


.sitewide-sticky .sticky-icon {
    width: 20px;
    margin: 0 auto
}

</style>