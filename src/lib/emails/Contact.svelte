<script lang="ts">
	import type { FormSchema } from '$lib/components/FormSchema';
	import { Button, Hr, Html, Text, Column, Heading } from 'svelte-email';

	export let form: FormSchema;
</script>

<Html lang="en">
	<Heading>Parent Informations</Heading>
	<Text>
		Name : {form.name} ,
	</Text>
	<Hr />

	<Text>
		Email : {form.email}
	</Text>
	<Hr />

	<Text>
		Phone : {form.mobile}
	</Text>
	<Hr />
	<Heading>Student Informations</Heading>
	<Text>
		FullName : {form.sname}
	</Text>
	<Hr />
	<Text>
		Birth Date : {form.sdob}
	</Text>
	<Hr />
	<Text>
		Education Level : {form.edlevel}
	</Text>
	<Hr />
	<Hr />
	<Button href="https://arlington-high.com/">Visit Arlington-High</Button>
</Html>
