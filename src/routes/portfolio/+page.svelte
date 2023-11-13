<title>Joseph S. | About </title>

<style>
@import url(../styles/style.css);
</style>

<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';
    import me from '/src/lib/sf.jpg'; 

    let visible = false; 

    function animateIn(){
        setTimeout(function(){
            visible = true;
        }, 100);
    }

    animateIn();

    function goHome(){
        visible = false; 
        setTimeout(function(){
            window.location.href="/"; 
        }, 500); 
    }

    function openRes(){
        window.open(resume); 
    }

</script>


{#if visible === true}

    <div class="container" transition:fly={{y: -30, duration: 500, easing: cubicInOut}}>

    <div class="nav-wrapper">

        <h3 class="logo-title">Joseph S. | 2023</h3>

        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
        <ul>
            <li on:click={goHome}>home</li>
            <li>work</li>
            <li on:click={openRes}>cv</li>
        </ul>

    </div>

    <div class="body-wrap-1"></div>
    <h1>Thoughts on Portfolios 📝</h1>
    <div class="body-wrap-2"></div>

    <p class="blurb">
        After working full-time in higher education for over a year, I knew that 
        I wanted to revamp my outdated, then-squarespace constructed portfolio. I started with a 
        few different ideas, tinkering with everything from vanilla JavaScript minimalism, to 
        React, and Vue.js. Around this time, I needed to make a lightweight SPA that could render
        larger media files on the server side, so the app wouldn't suffer from performance 
        degradations that I was expecting with this project. 
    </p>

    <p class="blurb">
        Enter Svelte. 
    </p>

    <p class="blurb">
        I had known about Svelte for a while, and had even tinkered with it a bit in the Svelte REPL. 
        In retrospect, I think that I was initally held back by my biases and previous knowledge from 
        fully diving into Svelte. 
    </p>


    <div class="body-wrap-1"></div>
    <div class="body-wrap-1"></div>
    <div class="body-wrap-1"></div>


    <div class="footer-page">
            
        <div class="footer-li-container">
            <h3 class="footer-text-no-margin">Built with 💛 using</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">SvelteKit↗</a></strong>&nbspfor code</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://github.com">Github↗</a></strong>&nbspfor versions</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://netlify.com">Netlify↗</a></strong>&nbspfor launch</h3>
            &nbsp
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Check out how I built this site!</a></h3>
        </div>


        <div class="footer-li-container-2">
            <h3 class="footer-text-no-margin">Find me elsewhere</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://read.cv/cacti">read.cv↗</a></strong></h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://github.com/cactusflashes">Github↗</a></strong></h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="mailto:airefrescodesign@gmail.com">Email↗</a></strong></h3>
            &nbsp
        </div>


    </div>

</div>

{/if}