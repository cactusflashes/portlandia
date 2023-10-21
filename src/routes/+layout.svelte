<!--page transitions, thanks Josh Collinsworth!-->
<script>
	import { fly, fade, slide, scale } from 'svelte/transition';
    import Navbar from './navbar.svelte'; 
    import Footer from './footer.svelte'; 
	export let data;
</script>

{#key data.pathname}

<Navbar />
	<div in:fly={{y:-10, duration: 300, delay: 400 }} out:fly={{y:10, duration: 300 }}>
		<slot />
	</div>
<Footer /> 

{/key}