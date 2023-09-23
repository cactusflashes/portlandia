<title>Joseph S. | Home </title>
<style>
@import url(styles/home.css);
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
</style>

<script>
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { AnimatedHeadline } from 'svelte-animated-headline';
    import Switch from './switch.svelte';

    import pfp from '$lib/pfp.png';
    import darkpfp from '$lib/pfp-dark.png';
    import nasaFour from '$lib/nasa-4.jpg';
    import nasaThree from '$lib/nasa-3.jpg';
    import aThree from '$lib/a-3.png';
    import felixVideo from '$lib/felix-3.mp4';
    import googie from '$lib/googie.png';
    import wallet from '$lib/walletclip.jpg';


    //conditional animations and images, etc.
    let visible = false; //keep true for testing. publish with false to delay page load and animate in.
    let pfpLight = true;
    let pfpDark = false;

    //hacky dark mode vars 
    let counter = 0;
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
        }, 650);
    }
    
    animateIn();

    //if anyone sees this, I understand how ugly this dark mode func is. I dug a hole and just kept-a-diggin. Mind ya beezwax.
    function darkMode(){

        counter ++; 

        if (counter === 1) {
            //body, containers, etc to dark
            container.classList.add('container-dark');
            workColumn.classList.add('work-column-dark');
            navWrapper.classList.add('nav-wrapper-dark');
            footer.classList.add('footer-page-dark');

            //project containers to dark
            projectOne.classList.add('project-1-dark');
            projectTwo.classList.add('project-2-dark');
            projectThree.classList.add('project-3-dark');
            projectFour.classList.add('project-4-dark');
            projectFive.classList.add('project-5-dark');
            viewAll.classList.add('view-all-dark');

            //change dynamic profile photo
            pfpLight = false;
            pfpDark = true;

        } else if (counter === 2) {
            //body, containers, etc to dark
            container.classList.remove('container-dark');
            workColumn.classList.remove('work-column-dark')
            navWrapper.classList.remove('nav-wrapper-dark');
            footer.classList.remove('footer-page-dark');

            //project containers to dark
            projectOne.classList.remove('project-1-dark');
            projectTwo.classList.remove('project-2-dark');
            projectThree.classList.remove('project-3-dark');
            projectFour.classList.remove('project-4-dark');
            projectFive.classList.remove('project-5-dark');
            viewAll.classList.remove('view-all-dark');

            //reset dynamic profile photo
            pfpDark = false;
            pfpLight = true;

            counter = 0;
        }
    }

    function viewWork() {
        visible = false;
        setTimeout(function(){
            window.location.href="/work"
        }, 600);
        
    }

    function doodleBot(){
        window.location.href="/doodlebot";
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

            <!--dark mode toggle, svelte switch-->
            <div class="switch-wrapper">
                <h4 style="margin-bottom: .5vw;">☀️</h4><Switch on:change={darkMode}></Switch><h4 style="margin-bottom: .5vw;">🌙</h4>
            </div>

        </div>

        <!--mid body content-->
        <div class="header-container">

            <h1> Hi, I'm Joseph.</h1>

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
                "Svelte Fan",
                "Motion Designer", 
                "Visual Designer", 
                "Marketing Analyst", 
                "Communications Specialist"
                ]} 
                wait={400}> <!--wait 400ms? seems way slower than ms though. 400 units seems okay for now. maybe a little fast.-->
                </AnimatedHeadline>
                &nbspworking remotely from&nbsp<h2 style="font-weight: 800; color: #e8ae47;">sunny</h2>&nbspAZ.
            </h2>

            <h2 class="failover-text">
                I'm a Front-End Engineer based out of sunny AZ. 
            </h2>

        </div>
    
        <!--dynamic profile photo-->
        <div class="pfp-image">
            {#if pfpLight}
            <img alt="profile" src={pfp}/>
            {/if}
            {#if pfpDark}
            <img alt="profile" src={darkpfp}/>
            {/if}
        </div>

        <!--recent projects-->
        <!--top row-->
        <div class="projects-container">

            <!--one-->
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="project-1" bind:this={projectOne}>
                <h7 style="margin-left: 15vw; margin-top: 2vw;">freelance</h7>
                <h6 style="margin-left: 14vw;">Ascento</h6>

                <!-- svelte-ignore a11y-media-has-caption -->
                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <img src={aThree} class="a-3"/>
                    </div>

            </div>


            <!--two-->
            <div class="project-2" bind:this={projectTwo}>
                <h7 style="margin-left: 19vw; margin-top: 2vw;">nasa</h7>
                <h6 style="margin-left: 10vw;">Artemis RATS</h6>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={nasaFour} class="nasa-4"/>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={nasaThree} class="nasa-3" /> 
                </div>

            </div>


            <!--three-->
            <div class="project-3" bind:this={projectThree}>
                <h7 style="margin-left: 13vw; margin-top: 2vw;">exploratory</h7>
                <h6 style="margin-left: 7vw;">Felix Temporem</h6>

                    <!-- svelte-ignore a11y-media-has-caption -->
                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <video src={felixVideo} autoplay loop type="video/mp4" class="felix-video"/>
                    </div> 

            </div>



        </div>


        <!--bottom row-->
            <!--four-->
        <div class="projects-container-2">

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="project-4" bind:this={projectFour} on:click={doodleBot}>
                <h7 style="margin-left: 13.2vw; margin-top: 2vw;">Powered by ai</h7>
                <h6 style="margin-left: 13vw;">DoodleBot</h6>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img src={wallet} class="wallet" />
                    </div>

            </div>
            <!--long five-->
            <div class="project-5" bind:this={projectFive}>
                <h7 style="margin-left: 28vw; margin-top: 2vw;">northern arizona university</h7>
                <h6 style="margin-left: 27vw;">Google Storage Quota</h6>

                    <div class="content"> <!--holds the content for the CSS hover transitions-->
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img src={googie} class="googie"/>
                    </div>
            </div>
        </div>
        <!--view all work button-->

        <button class="view-all" bind:this={viewAll} on:click={viewWork}>view more of my work →</button>

        <!--what I've been up to header-->
        <h1 style="margin-bottom: 5vw; margin-top: 5vw; font-size: 3vw;" class="up-to">What I've been up to</h1>

        <!--work listings and timeline-->
        <div class="work-column" bind:this={workColumn}>
            <div class="work-text-container">

                <div class="blurb-container">

                    <h4>Communications Analyst</h4>
                    <h5>Northern Arizona University</h5>
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
                    <h5>Web Design & Development</h5>
                    <h5>
                        Web design and front-end development, branding and
                        marketing material creation, physical merchandise
                        design, as well as design consultation and research.
                        Copywriting and editing for marketing and brand tone
                        optimizaiton.
                    </h5>
                    &nbsp

                    <h4>Visual Communications Assistant</h4>
                    <h5>NAU Information Technology Services</h5>
                    <h5>
                        Graphic design and motion design for social media,
                        web, and email marketing. On-site photo and
                        videography. Creation of brand identity guides,
                        email marketing using Mailchimp, Hootsuite, and
                        CRM software such as Salesforce and ServiceNow.
                    </h5>
                    &nbsp

                    <h4>Visual Designer</h4>
                    <h5>SVE Cheerleading</h5>
                    <h5>
                        Graphic design for social media, web, and print
                        merchandise. Creation of branding materials both
                        digitally as well as print media across multiple
                        locations. On location photography and videography.
                    </h5>

                </div>

            </div>
        </div>

        <!--footer-->
        <div class="footer-page" bind:this={footer}>
            <div class="footer-li-container">
            <h4>Built with 💛 using</h4>
            <h2><strong>SvelteKit</strong>&nbspfor Code</h2>
            <h2><strong>Github</strong>&nbspfor Versions</h2>
            <h2><strong>Netlify</strong>&nbspfor Launch</h2>
        </div>
        </div>

    </div>

    {/if}

</body> 
