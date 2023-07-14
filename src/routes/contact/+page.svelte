<script>
	import Pagelayout from '../Pagelayout.svelte';
</script>

<Pagelayout title="Contact">
	<h2>Contact Us</h2>
	<p>
		We're here to assist you with any inquiries or concerns you may have. Please feel free to reach
		out to our team using the contact information provided below:
	</p>
	<!-- <h2>General Inquiries:</h2>
	<p>Phone: +216 ()</p>
	<p>Email: contact@arlington-high.com</p>
	<h2>Admissions Office:</h2>
	<p>Phone: +216 ()</p>
	<p>Email: admission@arlington-high.com</p> -->
	<div class="contact container">
		<div class="form">
			<form action="action_page.php">
				<label for="fname">Full Name</label>
				<input type="text" id="fname" name="firstname" placeholder="Your name.." />

				<label for="phone">Phone Number</label>
				<input type="text" id="phone" name="phone" placeholder="Your phone number.." />

				<label for="email">Email</label>
				<input type="text" id="email" name="email" placeholder="Your Email .." />

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

				<input type="submit" value="Submit" />
			</form>
		</div>
		<div class="map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.5469162275443!2d10.270580913060638!3d36.84844720010851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4aad8fca749d%3A0xdfe4af39cf1c14b9!2sR7XC%2B969%2C%20Tunis!5e0!3m2!1sen!2stn!4v1689348891536!5m2!1sen!2stn"
				width="400"
				height="300"
				style="border:0;"
				allowfullscreen=""
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
	/* Style inputs with type="text", select elements and textareas */
	input[type='text'],
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
