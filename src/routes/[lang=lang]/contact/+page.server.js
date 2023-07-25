import { render } from 'svelte-email';
import Contact from '$lib/emails/Contact.svelte';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'mail.arlington-high.com',
	port: 465,
	secure: true,
	auth: {
		user: 'admin@arlington-high.com',
		pass: 'Admin.Arlington'
	}
});

/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		const emailHtml = render({
			template: Contact,
			props: {
				name: data.fullname,
				email: data.email,
				subject: data.subject,
				phone: data.phone
			}
		});
		const options = {
			from: 'admin@arlington-high.com',
			to: 'amirbennasr@gmail.com',
			subject: 'Contact Inquiry',
			html: emailHtml
		};

		const result = await transporter.sendMail(options);
		return {
			success: result.accepted
		};
	}
};
