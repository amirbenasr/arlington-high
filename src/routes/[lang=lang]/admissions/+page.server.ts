import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { render } from 'svelte-email';

import Contact from '$lib/emails/Contact.svelte';
import { formSchema } from '$lib/components/FormSchema';
import Email from '$lib/components/Email.svelte';

const transporter = nodemailer.createTransport({
	host: 'mail.arlington-high.com',
	port: 465,
	secure: true,
	auth: {
		user: 'contact@arlington-high.com',
		pass: 'Contact.Arlington'
	}
});

export const load = async () => {
	// Server API:
	const form = await superValidate(formSchema);

	if (form.valid)
		return {
			form,
			success: true
		};
	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			console.log("this ain't valid");

			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		if (form.valid) {
			console.log('Sending email');

			const data = form.data;

			try {
				const emailHtml = render({
					template: Contact,
					props: {
						form: data
					}
				});
				const options = {
					from: 'contact@educaus.net',
					to: 'contact@arlington-high.com',
					subject: 'Student Application',
					html: emailHtml
				};
				const res = await transporter.sendMail(options);
			} catch (error) {
				console.log(error);
			}
		}

		// Yep, return { form } here too
		return { form, success: true };
	}
};
