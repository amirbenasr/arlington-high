/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		return {
			success: true
		};
	}
};
