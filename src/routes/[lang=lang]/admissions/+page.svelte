<script>
	import Button from '$lib/components/Button.svelte';
	import Pagelayout from '$lib/components/Pagelayout.svelte';
	import LL from '$i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { locale } from '$i18n/i18n-svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { enhance } from '$app/forms';

	export let data;

	// Client API:
	const { form, errors, constraints } = superForm(data.form);
</script>

<Pagelayout title="Admissions">
	<div class="page">
		<div class="form">
			<form method="POST" use:enhance>
				<h3>Parent information</h3>
				<div class="group">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" name="name" bind:value={$form.name} />
						{#if $errors.name}<span class="invalid">{$errors.name[0]}</span>{/if}
					</div>
					<div class="form-group">
						<label for="email">E-mail</label>
						<input
							type="email"
							name="email"
							placeholder="someone@gmail.com"
							bind:value={$form.email}
						/>
						{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
					</div>
					<div class="form-group">
						<label for="phone">Phone number</label>
						<input type="number" name="mobile" bind:value={$form.mobile} />
						{#if $errors.mobile}<span class="invalid">{$errors.mobile}</span>{/if}
					</div>
					<div class="form-group">
						<label for="zipcode">Zip Code</label>
						<input type="number" name="zipcode" bind:value={$form.zipcode} />
					</div>
				</div>
				<h3>Student information</h3>
				<div class="group">
					<div class="form-group">
						<label for="sname">Name</label>
						<input type="text" name="sname" bind:value={$form.sname} />
						{#if $errors.sname}<span class="invalid">{$errors.sname}</span>{/if}
					</div>
					<div class="form-group">
						<label for="sdob">Date of birth</label>
						<input type="date" name="sdob" bind:value={$form.sdob} />
						{#if $errors.sdob}<span class="invalid">{$errors.sdob}</span>{/if}
					</div>
					<div class="form-group">
						<label for="edlevel">Level of Education </label>
						<select name="edlevel" id="edlevel" bind:value={$form.edlevel}>
							<option value="" disabled selected>Select your option</option>
							<option value="1ère année secondaire">1ère année secondaire</option>
							<option value="2ème année secondaire">2ème année secondaire</option>
							<option value="3ème année secondaire">3ème année secondaire</option>
							<option value="Baccalauréat">Baccalauréat</option>
						</select>
						{#if $errors.edlevel}<span class="invalid">{$errors.edlevel}</span>{/if}
					</div>
				</div>
				<h3>Appointment Information</h3>
				<div class="group">
					<div class="form-group">
						<label for="name">Date of Appointment</label>
						<input type="datetime-local" name="sname" bind:value={$form.sname} />
					</div>
				</div>
				<div class="group">
					<div class="form-group">
						<label for="questions">Questions?</label>
						<textarea name="questions" id="questions" bind:value={$form.questions} />
					</div>
				</div>
				<div><button>Submit</button></div>
			</form>
		</div>
		<div class="side">
			<h3>School Location</h3>

			<div class="map">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.5469162275443!2d10.270580913060638!3d36.84844720010851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4aad8fca749d%3A0xdfe4af39cf1c14b9!2sR7XC%2B969%2C%20Tunis!5e0!3m2!1sen!2stn!4v1689348891536!5m2!1sen!2stn"
					width="auto"
					height="auto"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
				<div class="details">
					<h4>Admissions Office</h4>
					<label for="email">E-mail:</label>
					<a href="mailto:contact@arlington-high.com">contact@arlington-high.com</a>
					<br />
					<label for="phone">Phone number:</label>
					<a href="tel:+21698110698">+216.98.110.698</a>
				</div>
			</div>
		</div>
	</div>

	<!-- <h2>Review Admission Requirements</h2>
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
	</p> -->
	<!-- <h2>Submit an Online Form Application</h2>
	<p>
		Access our secure online application form and provide the required information, including
		personal details, academic history, extracurricular involvement, and any supporting documents
		(e.g., transcripts, recommendation letters, essays). Make sure to double-check your application
		for accuracy before submitting.
	</p> -->

	<!-- <iframe
		src="https://docs.google.com/forms/d/e/1FAIpQLSeeWHfYrtYfXACLthLNo_h3DL93WvPlbyGqqtmvbLlbJR-a8w/viewform?embedded=true"
		width="100%"
		height="956"
		frameborder="0"
		marginheight="0"
		marginwidth="0">Loading…</iframe
	> -->

	<!-- <div class="bb">
		<Button link="{base}/{$locale}/contact" title="Apply Now" style="outlined" />
	</div> -->
</Pagelayout>

<style>
	@media screen and (width > 780px) {
		.group {
			flex-direction: unset !important;
			gap: 1rem;
			flex-wrap: wrap;
		}
		.page {
			flex-direction: row !important;
			align-items: start !important;
			gap: 1rem;
			justify-content: start;
		}
	}
	h3 {
		background-color: hsla(240, 10%, 75%, 0.4);
		padding: 0.3rem;
		color: var(--primary-color);
		margin-block: 0.5rem;
	}
	.invalid {
		color: var(--secondary-color);
	}

	label,
	input {
		display: block;
		margin-bottom: 0.2rem;
		margin-top: 0.2rem;
	}

	input,
	select {
		width: 100%;
	}
	.group {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.page {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form {
		width: 90%;
		flex: 1 1 80%;
		margin: 0 auto !important;
		/* background-color: red; */
	}
	.side {
		flex: 1 1 20%;
		width: 90%;

		/* background-color: green; */
	}
	h2 {
		color: var(--primary-color);
	}
</style>
