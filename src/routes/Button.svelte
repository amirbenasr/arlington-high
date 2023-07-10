<script lang="typescript">
	export let link;
	export let title;
	export let style;
    export let primary = true;
</script>

{#if style == 'normal'}
	<a class:button={true} class:primary={primary} class:secondary={!primary}  href={link}>{title}</a>
{/if}
{#if style == 'outlined'}
	<a class:outlined={true} class:primary={primary} class:secondary={!primary} href={link}>{title}</a>
{/if}
{#if style == 'borderless'}
	<a class:borderless={true} href={link}>{title}</a>
{/if}

<style>
  
	a {
		text-decoration: none;
		padding: 0.5rem;
	}
	a.button {
		color: white;
		background: var(--secondary-color);
		border: 2px solid white;
        width: fit-content;
	}
    a.borderless {
        border: transparent;
        color: white;
        font-weight: 700;
    }

	a.outlined {
		border: 2px solid white;
		color: white;
		font-weight: 800;
		background: transparent;
		width: fit-content;
	}
    a.primary {
		background: var(--primary-color) !important;
    }
    a.secondary {
        background: var(--secondary-color) !important;
    }
</style>
