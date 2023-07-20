<script>
	import Button from '$lib/components/Button.svelte';
	import Pagelayout from '$lib/components/Pagelayout.svelte';
	import LL from '$i18n/i18n-svelte';
</script>

<Pagelayout title="Admissions">
	<h2>Application Process</h2>
	<p>
		Welcome to the Admissions section of Arlington High school! We're thrilled that you're
		considering joining our pioneering community. Our application process is designed to be
		straightforward and inclusive, ensuring that all prospective students have an equal opportunity
		to showcase their abilities and aspirations.<br /> Follow the steps below to successfully complete
		your application:
	</p>
	<h2>Review Admission Requirements</h2>
	<p>
		Familiarize yourself with the admission requirements specific to your grade level (e.g.,
		freshman, transfer). Check if there are any additional documents or prerequisites needed for
		consideration.
	</p>
	<h2>Attend an Information Session</h2>
	<p>
		Join us for an information session where you can learn more about Arlington High school, our
		educational philosophy, unique programs, and the dynamic learning environment we offer. These
		sessions provide valuable insights and help you make an informed decision.
	</p>
	<h2>Submit an Online Application</h2>
	<p>
		Access our secure online application form and provide the required information, including
		personal details, academic history, extracurricular involvement, and any supporting documents
		(e.g., transcripts, recommendation letters, essays). Make sure to double-check your application
		for accuracy before submitting.
	</p>

	<div class="bb">
		<Button title="Apply Now" link="#" style="outlined" />
	</div>
</Pagelayout>
