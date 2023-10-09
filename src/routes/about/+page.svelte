<title>Joseph S. | About </title>

<style>
@import url(../styles/about.css);
</style>

<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';
    import me from '/src/lib/sf.jpg'; 
    import resume from '/src/lib/Resume - Joseph Salmon.pdf'; 

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
    <h1>About Me</h1>

    <div class="body-wrap-2"></div>

<div class="about-row">

<img src={me} alt="me by the golden gate bridge" class="me-photo" />

        <div class="me-desc">
            <h6>I'm passionate about all things digital media, web, and learning.</h6>
            <p>I got my start in media during high school, where I was elected club president for 
                my school's Film & TV Production program. Since then, I've been chasing my passion
                for digital media across dozens of mediums. I've been privileged to work in 
                visual & motion design, 3D design, videography & photography, as well as in
                marketing and communication roles. 
                
            </p>

            <p>These days, I've settled into my passion for designing interactive experiences
                through the web, apps, and software. I'm constantly inspired by learning new
                ways to create and build, and I love contributing to projects and ideas. If you're 
                looking for an extra hand in your next project; send me a message! I'd love to
                contribute through freelance oppourtunities, or impactful pro-bono and volunteer projects.
            </p>
        </div>  
    </div>
    
    <div class="body-wrap-1"></div>

    <h6>Contact</h6>
    <h3 style="color: grey">airefrescodesign@gmail.com</h3>

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