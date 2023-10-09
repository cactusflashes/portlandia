<title>Joseph S. | Home </title>

<style>
@import url(styles/home.css);
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
</style>

<script>
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { AnimatedHeadline } from 'svelte-animated-headline';
    import resume from '/src/lib/Resume - Joseph Salmon.pdf';

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

    function artemisRats(){
        visible = false; 
        setTimeout(function(){
            window.location.href ="/artemis"; 
        }, 500); 
    }

    function openRes(){
        window.open(resume); 
    }



</script>


<body>

                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

    {#if visible}

    <div class="container" transition:fly={{y: -30, duration: 500, easing: cubicInOut}}>
        <!--nav and links-->
        <div class="nav-wrapper">

            <h3 class="logo-title">Joseph S. | 2023</h3>

            <ul>
                <li on:click={viewWork}>work</li>

                <li on:click={aboutNav}>about</li>
                <li on:click={openRes}>cv</li>
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
                "Motion Designer", 
                "Visual Designer", 
                "Marketing Analyst", 
                ]} 
                wait={400}> <!--wait 400ms? seems way slower than ms though. 400 units seems okay for now. maybe a little fast.-->
                </AnimatedHeadline>
                &nbspworking remotely from&nbsp<h2 style="font-weight: 600; color: #e8ae47;">sunny</h2>&nbsp Arizona.
            </h2>

            <h2 class="failover-text">
                I'm a Front-End Engineer working remotely from sunny Arizona. 
            </h2>

        </div>





        <div class="body-wrap-1"></div>
    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->


        <div class="projects-container-2">


            <div class="doodle-bot" on:click={doodleBot}>

                <div class="p-txt-con">
                <p class="h7">Powered by ai</p>
                <h6>DoodleBot</h6>
                </div>

            </div>
            
            <div class="google-storage" on:click={google}>

                <div class="p-txt-con-long">
                <p class="h7">nau information technology</p>
                <h6>Google Storage Quota</h6>
                </div>

            </div>

        </div>


        <div class="body-wrap-2"></div>


        <div class="projects-container">

            <div class="nasa" on:click={artemisRats}>

                <div class="p-txt-con-long">
                <p class="h7">nasa</p>
                <h6>Artemis RATS</h6>
                </div>

            </div>

            <div class="wordpress" >

                <div class="p-txt-con">
                <p class="h7">nau its</p>
                <h6>WordPress</h6>
                </div>

            </div>



        </div>


        <div class="body-wrap-1"></div>


        <!--view all work button-->

        <button class="view-all" on:click={viewWork}>view more of my work →</button>


        <div class="body-wrap-1"></div>


        <!--what I've been up to header-->
        <h1 class="up-to">What I've been up to</h1>


        <div class="body-wrap-2"></div>



        <!--work listings and timeline-->
        <div class="work-column" >
            <div class="work-text-container">

                <div class="blurb-container">
                    <h4>Communications Analyst</h4>
                    <h5 style="color: grey">Northern Arizona University | 22 - Present</h5>

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
                    <h5 style="color: grey">Design & Development | 18 - Present</h5>
                    <h5>
                        Web design and front-end development, branding and
                        marketing material creation, physical merchandise
                        design, as well as design consultation and research.
                        Copywriting and editing for marketing and brand tone
                        optimizaiton.
                    </h5>
                    &nbsp

                    <h4>Visual Communications Assistant</h4>
                    <h5 style="color: grey">NAU Information Technology Services | 21 - 22</h5>
                    <h5>
                        Graphic design and motion design for social media,
                        web, and email marketing. On-site photo and
                        videography. Creation of brand identity guides,
                        email marketing using Mailchimp, Hootsuite, and
                        CRM software such as Salesforce and ServiceNow.
                    </h5>
                    &nbsp

                    <h4>Visual Designer</h4>
                    <h5 style="color: grey">SVE Cheerleading | 17 - 20</h5>
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
        <div class="footer-page">

            
            <div class="footer-li-container">
                <h3 class="footer-text-no-margin">Built with 💛 using</h3>
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
                <h3 class="footer-text-no-margin" style="color: grey"><strong><a href="mailto:airefrescodesign@gmail.com">Email↗</a></strong></h3>
                &nbsp
            </div>


        </div>

    </div>

    {/if}

</body> 
