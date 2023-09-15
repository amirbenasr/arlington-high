<script>
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import LL, { locale, setLocale } from '$i18n/i18n-svelte';
	import Booking from '$lib/components/Booking.svelte';
	import Header from '$lib/components/Header.svelte';
	import './styles.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
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
	<Booking />

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
	/* @keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	} */
</style>
