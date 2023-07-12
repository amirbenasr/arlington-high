<script >
	import { onMount } from "svelte";
	import Button from "./Button.svelte";
    import { gsap } from "gsap";

  
    let banner ;
    function dismiss() {
        banner.remove();
    }
    onMount( async ()=> {
        gsap.fromTo('.banner',{
            opacity:'0'

        },{
            opacity:'1',
            duration:2
            
        },)
    })
</script>
<div class="banner" bind:this={banner}>
    <a class="dismiss" href="http://" on:click={dismiss}>
        <i class="fa-solid fa-xmark"></i>
    </a>
    <div class="banner__email">
        <a href="mailto:application@arlington-high.com">
            <span>  application@arlington-high.com</span>
        </a>

    </div>
    <div class="banner__details">
        <span>Pre-Enrollement Phase 1</span>
        <Button title="Apply now" link="#" style="outlined" primary={false}/>
    </div>
</div>


<style>
    .dismiss {
        position: absolute;
        right: 1.5rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
    span {
        color: white;
    }
    	.banner {
        position: relative;
		width: 100%;
		background: var(--secondary-color);
		display: flex;
		justify-content: space-around;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
		padding-block: 0.5rem;

	}
    .banner__details {

        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
	.banner__email {
		color: white;
		font-weight: 700;

	}
    a.button {
		text-decoration: none;
		color: white;
		font-weight: bold;
		border: 2px solid white;
		padding-inline: 1.5rem;
		padding-block: 0.5rem;
		width: fit-content;
	}
</style>