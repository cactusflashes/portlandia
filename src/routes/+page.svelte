<title>Joseph S. | Home </title>

<style>
@import url(styles/home.css);
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
</style>

<script>
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { AnimatedHeadline } from 'svelte-animated-headline';

    import pfp from '$lib/pfp.png';
    import darkpfp from '$lib/pfp-dark.png';
    import nasaFour from '$lib/nasa-4.jpg';
    import nasaThree from '$lib/nasa-3.jpg';
    import aThree from '$lib/a-3.png';
    import felixVideo from '$lib/felix-3.mp4';
    import googie from '$lib/googie.png';
    import wallet from '$lib/walletclip.jpg';
    import doodle from '$lib/db.svg';


    //conditional animations and images, etc.
    let visible = true; //keep true for testing. publish with false to delay page load and animate in.
    let pfpLight = true;
    let pfpDark = false;

    //hacky dark mode vars 
    let container;
    let workColumn; 
    let navWrapper;
    let footer;

    let projectOne;
    let projectTwo;
    let projectThree;
    let projectFour;
    let projectFive;
    let viewAll; 

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
    
    function doodleBot(){
        visible = false; 
        setTimeout(function(){
        window.location.href="/doodlebot";
        }, 600); 
    }

</script>


<body>

    {#if visible}

    <div class="container" transition:fly={{y: -30, duration: 500, easing: cubicInOut}} bind:this={container}>
        <!--nav and links-->
        <div class="nav-wrapper" bind:this={navWrapper}>

            <h3>Joseph S. | 2023</h3>

            <ul>
                <li>work</li>
                <li>about</li>
                <li>cv</li>
            </ul>

        </div>

        <div class="body-wrap-1"></div>
        <div class="body-wrap-2"></div>


        <!--mid body content-->
        <div class="header-container">

            <h1>Hello, I'm Joseph.</h1>

            <!--animated headline-->
            <h2 class="ani-text-2">
                I'm a&nbsp
                <AnimatedHeadline
                texts={[
                "Web Designer", 
                "Web Developer", 
                "Front-End Engineer", 
                "UI/UX Designer",
                "UX Engineer",
                "Motion Designer", 
                "Visual Designer", 
                "Marketing Analyst", 
                ]} 
                wait={400}> <!--wait 400ms? seems way slower than ms though. 400 units seems okay for now. maybe a little fast.-->
                </AnimatedHeadline>
                &nbspworking remotely from&nbsp<h2 style="font-weight: 600; color: #e8ae47;">sunny</h2>&nbspAZ.
            </h2>

            <h2 class="failover-text">
                I'm a Front-End Engineer based out of sunny AZ. 
            </h2>

        </div>





        <div class="body-wrap-1"></div>
    



        <div class="projects-container-2">

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="project-4" bind:this={projectFour} on:click={doodleBot}>
                <div class="p-txt-con">
                <p class="h7">Powered by ai</p>
                <h6>DoodleBot</h6>
            </div>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <!-- svelte-ignore a11y-missing-attribute -->
                    </div>

            </div>
            
            <div class="project-5" bind:this={projectFive}>
                <div class="p-txt-con">
                <p class="h7">nau information technology</p>
                <h6>Google Storage Quota</h6>
                </div>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <!--img src={googie} class="googie"/-->
                    </div>
            </div>
        </div>


        <div class="body-wrap-2"></div>


        <div class="projects-container">

            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="project-5" bind:this={projectTwo}>
                <div class="p-txt-con">
                <p class="h7">nasa</p>
                <h6>Artemis RATS</h6>
                </div>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                </div>

            </div>

            <div class="project-4" bind:this={projectThree}>
                <div class="p-txt-con">
                <p class="h7">exploratory</p>
                <h6>Felix Temporem</h6>
                </div>

                    <!-- svelte-ignore a11y-media-has-caption -->
                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                    </div> 

            </div>



        </div>


        <div class="body-wrap-1"></div>


        <!--view all work button-->

        <button class="view-all" bind:this={viewAll} on:click={viewWork}>view more of my work →</button>


        <div class="body-wrap-1"></div>


        <!--what I've been up to header-->
        <h1 style="font-size: 3.5rem;" class="up-to">What I've been up to</h1>


        <div class="body-wrap-2"></div>



        <!--work listings and timeline-->
        <div class="work-column" bind:this={workColumn}>
            <div class="work-text-container">

                <div class="blurb-container">

                    <h4>Communications Analyst</h4>
                    <h5 style="color: grey">Northern Arizona University</h5>
                    <h5>
                        I wear a plethora of hats in my work at NAU. From 
                        web design & front end development, to email communications and visual design 
                        (& much more!). I work on large scale technology implimenation and IT change 
                        managment projects to help ensure our community of students, faculty, and staff 
                        are well educated and confident in the technology they use to learn, teach, and
                        explore.
                    </h5>
                    &nbsp
                    <h4>Freelance Web Developer</h4>
                    <h5 style="color: grey">Web Design & Development</h5>
                    <h5>
                        Web design and front-end development, branding and
                        marketing material creation, physical merchandise
                        design, as well as design consultation and research.
                        Copywriting and editing for marketing and brand tone
                        optimizaiton.
                    </h5>
                    &nbsp

                    <h4>Visual Communications Assistant</h4>
                    <h5 style="color: grey">NAU Information Technology Services</h5>
                    <h5>
                        Graphic design and motion design for social media,
                        web, and email marketing. On-site photo and
                        videography. Creation of brand identity guides,
                        email marketing using Mailchimp, Hootsuite, and
                        CRM software such as Salesforce and ServiceNow.
                    </h5>
                    &nbsp

                    <h4>Visual Designer</h4>
                    <h5 style="color: grey">SVE Cheerleading</h5>
                    <h5>
                        Graphic design for social media, web, and print
                        merchandise. Creation of branding materials both
                        digitally as well as print media across multiple
                        locations. On location photography and videography.
                    </h5>

                </div>

            </div>
        </div>




<div class="body-wrap-1"></div>




        <!--footer-->
        <div class="footer-page" bind:this={footer}>

            
            <div class="footer-li-container">
                <h3 class="footer-text-no-margin">Built with 💛 using</h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">SvelteKit↗</a></strong>&nbspfor Code</h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Github↗</a></strong>&nbspfor Versions</h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Netlify↗</a></strong>&nbspfor Launch</h3>
                &nbsp
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Check out how I built this site!</a></h3>
            </div>


            <div class="footer-li-container-2">
                <h3 class="footer-text-no-margin">Find me elsewhere</h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">read.cv↗</a></strong></h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Github↗</a></strong></h3>
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="https://kit.svelte.dev/">Email↗</a></strong></h3>
                &nbsp
            </div>


        </div>

    </div>

    {/if}

</body> 
