import { z } from 'zod';

export const formSchema = z.object({
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
export type FormSchema = z.infer<typeof formSchema>;
