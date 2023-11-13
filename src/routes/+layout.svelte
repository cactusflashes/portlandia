<style>
    @import url(styles/style.css);
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap');
</style>

<!--page transitions, thanks Josh Collinsworth!-->
<script>
	import { fly, fade, slide, scale } from 'svelte/transition';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
    import Navbar from './navbar.svelte'; 
    import Footer from './footer.svelte'; 
	export let data;

	//this fixes the snap to the top on page transition. 
	afterNavigate(() => {
    	disableScrollHandling();
    	setTimeout(() => {
        scrollTo({ top: 0, behavior: 'instant' });
    	}, 300);
	});

</script>

{#key data.pathname}
<Navbar />
	<div in:fly={{y:10, duration: 300, delay: 400 }} out:fly={{y:-10, duration: 300 }}>
		<slot />
<Footer /> 
	</div>
{/key}