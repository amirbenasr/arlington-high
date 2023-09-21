import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const formSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	mobile: z.string().min(8),
	zipcode: z.string().optional(),
	sname: z.string().min(3),
	sdob: z.string(),
	edlevel: z.enum([
		'1ère année secondaire',
		'2ème année secondaire',
		'3ème année secondaire',
		'Baccalauréat'
	]),
	appointment: z.string(),
	questions: z.string()
});

export const load = async () => {
	// Server API:
	const form = await superValidate(formSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		console.log(form.data);

		// Yep, return { form } here too
		return { form };
	}
};
