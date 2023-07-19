<script>
	import { onMount } from 'svelte';
	import Pagelayout from '$lib/components/Pagelayout.svelte';
	import { enhance, applyAction } from '$app/forms';
	import { get } from 'svelte/store';

	export let data;

	let sendingEmail = false;

	let proceed = true;
	export let form;
	let formGuide = {
		fullname: {
			msg: ''
		},
		phone: {
			msg: ''
		},
		email: {
			msg: ''
		},
		subject: {
			msg: ''
		}
	};

	function checkFormData(formData) {
		let sets = formData;
		let proceed = true;
		for (let [key, value] of sets) {
			if (value == '') {
				proceed = false;
				formGuide[key].msg = key + ' should not be empty';
				let element = document.querySelector('#' + key);
				element.focus();
				return proceed;
			} else {
				formGuide[key].msg = '';
			}
		}
		return proceed;
	}
</script>

<Pagelayout title="Contact">
	<h2>Contact Us</h2>
	<p>
		We're here to assist you with any inquiries or concerns you may have. Please feel free to reach
		out to our team using the contact information provided below:
	</p>

	<div class="contact container" class:error={!proceed}>
		<div class="form">
			<form
				action="?/contact"
				method="POST"
				use:enhance={({ formElement, formData, action, cancel, submitter }) => {
					proceed = checkFormData(formData);

					return async ({ result, update }) => {
						if (proceed) {
							sendingEmail = true;
							update();
						}
					};
				}}
			>
				<label for="fname">Full Name</label>

				<input type="text" id="fullname" name="fullname" placeholder="Your name.." />
				{#if formGuide.fullname.msg}
					<small>{formGuide.fullname.msg}</small>
				{/if}
				<label for="phone">Phone Number</label>
				<input type="number" id="phone" name="phone" placeholder="Your phone number.." />
				{#if formGuide.phone.msg}
					<small>{formGuide.phone.msg}</small>
				{/if}
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Your Email .." />
				{#if formGuide.email.msg}
					<small>{formGuide.email.msg}</small>
				{/if}
				<!-- <label for="country">Country</label>
				<select id="country" name="country">
					<option value="australia">Australia</option>
					<option value="canada">Canada</option>
					<option value="usa">USA</option>
				</select> -->

				<label for="subject">Subject</label>
				<textarea
					id="subject"
					name="subject"
					placeholder="Write something.."
					style="height:200px"
				/>
				{#if formGuide.subject.msg}
					<small>{formGuide.subject.msg}</small>
				{/if}
				{#if !sendingEmail}
					<input formaction="?/contact" type="submit" value="Submit" />
				{:else}
					<!-- <button class="buttonload"> -->
					<button class="buttonload">
						<i class="fa-solid fa-circle-notch fa-spin" /> Sending..
					</button>

					<!-- </button> -->
				{/if}
			</form>
		</div>
		<div class="map">
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.5469162275443!2d10.270580913060638!3d36.84844720010851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4aad8fca749d%3A0xdfe4af39cf1c14b9!2sR7XC%2B969%2C%20Tunis!5e0!3m2!1sen!2stn!4v1689348891536!5m2!1sen!2stn"
				width="auto"
				height="300"
				style="border:0;"
				allowfullscreen="true"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<div class="details">
				<label for="email">E-mail:</label>
				<a href="mailto:contact@arlington-high.com">contact@arlington-high.com</a>
				<br />
				<label for="phone">Phone number:</label>
				<a href="tel:+216">+2165555555</a>
			</div>
		</div>
	</div>
</Pagelayout>

<style>
	.buttonload {
		background-color: #04aa6d;
		color: white;
		padding: 12px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	:global(.success) {
		background: green !important;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.error {
		border: 3px solid var(--secondary-color) !important;
	}
	.details {
		padding: 1rem;
	}
	.contact {
		border: 3px solid var(--darker-color);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.map {
		flex: 1;
		flex-direction: column;
	}
	.form {
		flex: 1;
	}
	.form > * > * {
		display: block;
	}
	/* Style inputs with type="text", select elements and textareas */
	input[type='text'],
	input[type='number'],
	input[type='email'],
	select,
	textarea {
		width: 100%; /* Full width */
		padding: 12px; /* Some padding */
		border: 1px solid #ccc; /* Gray border */
		border-radius: 4px; /* Rounded borders */
		box-sizing: border-box; /* Make sure that padding and width stays in place */
		margin-top: 6px; /* Add a top margin */
		margin-bottom: 16px; /* Bottom margin */
		resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
	}
	small {
		margin-bottom: 16px;
		transform: translateY(-8px);
		color: var(--error-color);
	}
	/* Style the submit button with a specific background color etc */
	input[type='submit'] {
		background-color: var(--primary-color);
		color: white;
		padding: 12px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	/* When moving the mouse over the submit button, add a darker green color */
	input[type='submit']:hover {
		background-color: var(--lighter-color);
	}

	/* Add a background color and some padding around the form */
	.container {
		border-radius: 5px;
		background-color: #f2f2f2;
		padding: 20px;
	}
</style>
