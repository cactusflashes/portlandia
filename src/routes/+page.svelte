<title>Joseph S. | Home </title>

<style>
@import url(styles/home.css);
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
</style>

<script>
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { AnimatedHeadline } from 'svelte-animated-headline';
    import resume from '/src/lib/Joseph S - Resume.pdf';
    import upto1 from '$lib/upto1.jpg'; 

    let visible = false; //keep true for testing. publish with false to delay page load and animate in.
  
    function animateIn(){
        setTimeout(function(){
            visible = true;
        }, 100);
    }
    
    animateIn();

    function viewWork() {
        visible = false;
        setTimeout(function(){
            window.location.href="/work"
        }, 600);
        
    }

    function google() {
        visible = false;
        setTimeout(function(){
            window.location.href="/google"
        }, 600);
    }
    
    function doodleBot(){
        visible = false; 
        setTimeout(function(){
        window.location.href="/doodlebot";
        }, 600); 
    }

    function aboutNav(){
        visible = false; 
        setTimeout(function(){
            window.location.href ="/about"; 
        }, 500); 
    }

    function openRes(){
        window.open(resume); 
    }

    function ai(){
        visible = false; 
        setTimeout(function(){
            window.location.href ="/ai"; 
        }, 500);     
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<body>

    {#if visible}

    <div class="container" transition:fly={{y: -30, duration: 500, easing: cubicInOut}}>
        <!--nav and links-->
        <div class="nav-wrapper">

            <h3 class="logo-title">Joseph S. | 2023</h3>

            <ul>
                <li on:click={viewWork}>Work</li>

                <li on:click={aboutNav}>About</li>
                <li on:click={openRes}>CV</li>
            </ul>

        </div>

        <div class="body-wrap-1"></div>
        <div class="body-wrap-2"></div>

        <!--mid body content-->
        <div class="header-container">

            <h1>Hello 👋, I'm Joseph.</h1>

            <!--animated headline-->
            <h2 class="ani-text-2">
                I'm a&nbsp
                <AnimatedHeadline
                texts={[
                "Web Designer", 
                "Web Developer", 
                "Front-End Engineer", 
                "UI/UX Designer",
                "Motion Designer", 
                "Visual Designer", 
                "Marketing Analyst", 
                ]} 
                wait={400}> <!--wait 400ms? seems way slower than ms though. 400 units seems okay for now. maybe a little fast.-->
                </AnimatedHeadline>
                &nbspworking remotely from&nbsp<h2 style="font-weight: 600; color: #e8ae47;">sunny</h2>&nbspArizona.
            </h2>

            <h2 class="failover-text">
                I'm a Front-End Engineer working remotely from sunny Arizona. 
            </h2>

        </div>

        <div class="body-wrap-1"></div>
    
        <div class="selected-work">
            <h2>Selected Work</h2>
        </div>

        <div class="project-container">
            <div class="wordpress" on:click={ai}>
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">nau its</p>
                <h6>AI @ NAU</h6>
                </div>
            </div>
        </div>

        <div class="body-wrap-2"></div>

        <div class="project-container">
            <div class="doodle-bot" on:click={doodleBot}>
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">Powered by ai</p>
                <h6>DoodleBot</h6>
                </div>
            </div>
        </div>

        <div class="body-wrap-2"></div>

        <div class="project-container">
            <div class="google-storage" on:click={google}>
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">communication design</p>
                <h6>Google Storage</h6>
                </div>
            </div>
        </div>

        <div class="body-wrap-2"></div>
        <!--view all work button-->
        <button class="view-all" on:click={viewWork}>view more of my work →</button>
        
        <div class="body-wrap-2"></div>
        <!--what I've been up to header-->
        <h1 class="up-to">What I've been up to</h1>

        <div class="body-wrap-3"></div>
        <div class="body-wrap-3"></div>

        <!--work listings and timeline-->
    <div class="bottom-row">
        <div class="work-column">
            <div class="work-text-container">
                <div class="blurb-container">
                    <h4>Communications Analyst</h4>
                    <h5 style="color: grey">Northern Arizona University <br> May '22 - Present</h5>                   
                    <div class="body-wrap-3"></div>
                    <h4>Freelance Web Developer</h4>
                    <h5 style="color: grey">Design & Development <br> Sep '17 - Present</h5>                   
                    <div class="body-wrap-3"></div>
                    <h4>Visual Communications Assistant</h4>
                    <h5 style="color: grey">NAU Information Technology Services <br> May '21 - May '22</h5>            
                    <div class="body-wrap-3"></div>
                    <h4>Visual Designer</h4>
                    <h5 style="color: grey">SVE Cheerleading <br> November '18 - April '21</h5>
                </div>
            </div>
        </div>
        <img src={upto1} alt="pictur" class="up-to-photo"/>
    </div>

    <div class="body-wrap-1"></div>


<div class="body-wrap-3"></div>

    <!--footer-->
    <div class="footer-page">
        <div class="footer-li-container">
            <h3 class="footer-text-no-margin">Built with love and lots of help from</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">SvelteKit↗</a></strong>&nbspfor code</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://github.com">Github↗</a></strong>&nbspfor versions</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://netlify.com">Netlify↗</a></strong>&nbspfor launch</h3>
            &nbsp
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="/portfolio">Some thoughts on portfolios</a></h3>
        </div>

        <div class="footer-li-container-2">
            <h3 class="footer-text-no-margin">Find me elsewhere</h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://read.cv/cacti">read.cv↗</a></strong></h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://github.com/cactusflashes">Github↗</a></strong></h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://connect.mozilla.org/t5/user/viewprofilepage/user-id/41047">Mozilla↗</a></strong></h3>
            <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="mailto:airefrescodesign@gmail.com">Email↗</a></strong></h3>
        </div>
    </div>

    </div>

    {/if}

</body> 
