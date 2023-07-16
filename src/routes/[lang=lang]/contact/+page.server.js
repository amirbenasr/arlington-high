/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		return {
			success: true
		};
	}
};
