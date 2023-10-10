<style>
    @import url(../styles/page.css);
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
<script>

    import google from '/src/lib/google-banner.svg'; 
    import seoA from '/src/lib/seo-1.png'; 
    import seoB from '/src/lib/seoB.png'; 
    import seoC from '/src/lib/seoC.png';
    import seoD from '/src/lib/seoD.png';
    import seoE from '/src/lib/seoE.png';
    import seoF from '/src/lib/seoF.jpg';
    import seoG from '/src/lib/seoG.jpg';

    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';

    let visible = true; 


    function backBtn() {
        visible = false; 
        setTimeout(function(){
            window.history.go(-1); return false; 
        }, 500); 
    }


    function animate(){
        setTimeout(function(){
            visible = true; 
        }, 500); 
    }

    animate();

    </script>
    
    
    <body>
        {#if visible === true}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="container" transition:fly={{y: -50, duration: 500, easing: cubicInOut}}>
    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="exit" alt="exit page" on:click={backBtn}>x</div>
    
            <h1>Google Storage Quota</h1>
    
            <div class="dynamic-row">
    
                <h2>Communication Design</h2>
                <h2>SEO</h2>
                <h2>2022</h2>
    
            </div>
    
            <img src={google} alt="the google logo" class="template-img"/> 

            <h3 class="subhead">A study in adaptability</h3>


            <p class="body-text">
                In 2022, Google discontinued unlimited cloud storage for higher education institutions.
                Until then, members of a university were able to store unlimited files in the G-Suite 
                Applications, including Google Drive and Gmail. With Google announcing the end of life for 
                this feature, universities scrambled to impliment limits on individual storage and an overall
                reduction of pooled university storage. 
            </p>

            <h3 class="subhead">How we chose to respond</h3>

            <p class="body-text">
                Our stakeholders opted to enact a 25GB limit on all NAU Google accounts, with options to expand storage
                to 50 or 100GB upon request with an academic or business justification. However, our pooled storage was
                still a few hundred terabytes over quota, and we had a deadline of the new year approaching fast. 
            </p>

            <p class="body-text">
                I was tasked with creating the digital campaign to guide change management through the web, email, 
                social media, and CRM software. Our bottom line was to inform our community of what 
                would be happening, as well as getting users to reduce their storage allocations, or shift
                to alternative providers.
            </p>


            <div class="body-wrap-1"></div>

            <div class="browser">
                
                <div class="browser-control">
                    <div class="button-1"></div>
                    <div class="button-2"></div>
                    <div class="button-3"></div>

                </div>

                <img src={seoC} alt="placeholder" class="window-p"/> 
            
            </div>

            <p class="body-text">
                I created and coordinated our communication efforts to 38,000 students, faculty, and staff members.
                We had a lot of information to disseminate, and we wanted to do our best to avoid commuication 
                fatigue, so we leveraged our use of WordPress and SEO, alongside Social Media to keep awareness
                up during the months that followed. 
            </p>

            <p class="body-text">
                Higher education poses a unique challenge for communication, as
                user types and our audience are so diverse—especially since we needed to target students, faculty members, 
                and staff members, ages 18 to 80. 
            </p>

            <div class="two-pic-row">
                <img src={seoF} alt="a social media post" class="template-img-small">
                <img src={seoG} alt="a social media post" class="template-img-small">
            </div>

            <p class="body-text">
                My team was comprised of myself, alongside my student employee, Rainee. Under my direction, Rainee
                created our campaign's visuals and handled the rollout through social media. Through our enterprise 
                partnership with Microsoft, we were able to offer our community members a free terabyte of OneDrive storage.
            </p>


            <h3 class="subhead">SEO</h3>


            <p class="body-text">
                When designing the scope and logistics of the communication plan, The thread I wanted to ensure ran 
                though all of the outputted information would be our project webpage, leveraged through SEO—specifically
                through our WordPress Enterprise environment. I knew that many of our audience members would tune out 
                to the news until it began to affect them personally, so making the information continously accessible
                was important to the longevity of the project and overall user experience. If a user missed our communications, 
                or was apathetic to the messaging, we needed to ensure that they could search why they only had 25GB in storage—even 
                weeks or months after our messaging was being pushed. 
            </p>

            <div class="body-wrap-1"></div>


            <div class="browser">
                
                <div class="browser-control">
                    <div class="button-1"></div>
                    <div class="button-2"></div>
                    <div class="button-3"></div>

                </div>

                <img src={seoA} alt="a google search and snippet showing our project details" class="window-p"/> 
            
            </div>

            <div class="body-wrap-1"></div>


            <div class="browser">
                
                <div class="browser-control">
                    <div class="button-1"></div>
                    <div class="button-2"></div>
                    <div class="button-3"></div>

                </div>

                <img src={seoD} alt="a google search and snippet showing our project details" class="window-p"/> 
            
            </div>


            <p class="body-text">
                Leveraging SEO, especially for continued reference was a valuable asset, as the deadline for implimentation was
                pushed back a month due to financing logistics for our contract with Google. We were able to quickly update our 
                web documentation to reflect these changes, and had them populate in search engines within a couple days. 
            </p>

            <div class="body-wrap-1"></div>


            <div class="browser">
                
                <div class="browser-control">
                    <div class="button-1"></div>
                    <div class="button-2"></div>
                    <div class="button-3"></div>

                </div>

                <img src={seoE} alt="placeholder" class="window-p"/> 
            
            </div>


            <p class="body-text">
                We had multiple objectives for what information we wanted to drive home to our users, as new
                policies brought in a new range of use cases and exception requests. Because of this, it was
                important that we researched as many possible user scenarios and implimented them into our 
                strategies. 
            </p>

            <h3 class="subhead">Web</h3>

            <p class="body-text">
                I created our project page through WordPress, where we would be funneling users
                to from all of our digital outlets. It was important to our stakeholders that we had a large 
                FAQ section for use cases, as well as easy routing to our CRM platform ServiceNow, where we 
                could handle user requests for higher quota caps. 
            </p>

            <div class="body-wrap-2"></div>


            <div class="browser">
                
                <div class="browser-control">
                    <div class="button-1"></div>
                    <div class="button-2"></div>
                    <div class="button-3"></div>

                </div>

                <img src={seoB} alt="placeholder" class="window-p"/> 
            
            </div>

            <div class="body-wrap-2"></div>


            <h3 class="subhead">KPI's and Metrics</h3>


    
        </div>
        {/if}
    </body>