<script>
	import { browser } from '$app/environment';
	import LL, { locale, setLocale } from '$i18n/i18n-svelte';
	import Booking from '$lib/components/Booking.svelte';
	import Header from '$lib/components/Header.svelte';
	import './styles.css';

	locale.subscribe((e) => {
		if (browser) {
			if (e == 'ar') {
				document.body.classList.add('rtl');
			} else {
				document.body.classList.remove('rtl');
			}
		}
	});
</script>

<div class="app">
<Booking/>

	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
	}
	main {
		/* border: 1px solid red; */
		/* width: 100vw !important; */
	}
</style>
