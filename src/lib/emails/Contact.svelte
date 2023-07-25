<script>
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'World';
	export let email = 'ex@ex.com';
	export let subject = 'ex@ex.com';
	export let phone = '000000';
</script>

<Html lang="en">
	<Text>
		Name : {name} ,
	</Text>
	<Text>
		Email : {email}
	</Text>
	<Text>
		Subject: {subject}
	</Text>
	<Text>
		Phone: {phone}
	</Text>
	<Hr />
	<Button href="https://arlington-high.com/">Visit Arlington-High</Button>
</Html>
