<title>Joseph - Home</title>
<script>
    import { AnimatedHeadline } from 'svelte-animated-headline';
    import upto1 from '$lib/upto1.jpg';

</script>

<body>
    <div class="container">
        <div class="body-wrap-1"></div>
        <div class="body-wrap-2"></div>
        <!--header-->
        <div class="header-container">
            <h1>Hello, I'm Joseph.</h1>
            <h2 class="animated-text">
                I'm a&nbsp<strong>
                <AnimatedHeadline
                texts={[
                "Front-End Engineer",
                "UI/UX Designer", 
                "iOS Engineer",
                "Visual Designer", 
                "Marketing Analyst", 
                "Web Designer", 
                "Web Developer", 
                "Motion Designer", 
                ]} 
                wait={400}> 
                </AnimatedHeadline></strong>
                &nbspworking remotely from <h2 style="color: #4287f5; font-weight: 600"> &nbsp;sunny&nbsp;</h2>Arizona.
            </h2>

            <!--700px and below display text-->
            <h2 class="failover-text">
                I'm a Front-End Engineer working remotely from sunny Arizona. 
            </h2>
        </div>

        <div class="body-wrap-1"></div>
    
        <div class="selected-work">
            <h2>Selected Work</h2>
        </div>

        <!--projects(3)-->
            <a class="wordpress" href="/ai">
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">nau its</p>
                <h6>AI @ NAU</h6>
                </div>
            </a>

        <div class="body-wrap-2"></div>

        <div class="project-container">
            <a class="doodle-bot" href="/doodlebot">
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">Powered by ai</p>
                <h6>DoodleBot</h6>
                </div>
            </a>
        </div>

        <div class="body-wrap-2"></div>

        <div class="project-container">
            <a class="google-storage" href="/google">
                <div class="color-filter"></div>
                <div class="p-txt-con">
                <p class="h7">communication design</p>
                <h6>Google Storage</h6>
                </div>
            </a>
        </div>
        <!--end projs-->

        <div class="body-wrap-1"></div>

        <!--what I've been up to-->
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
                        <h5 style="color: grey">SVE Cheer <br> Nov '18 - April '21</h5>
                    </div>
                </div>
            </div>
            <!--photo-->
            <img src={upto1} alt="the beach" class="up-to-photo"/>
        </div>

    <div class="body-wrap-1"></div>
    <div class="body-wrap-3"></div>

    </div>
</body>