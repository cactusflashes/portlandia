<style>
    @import url(../styles/page.css);
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
<script>

    import google from '/src/lib/google-banner.svg'; 
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';

    let visible = false; 


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
                <h2>ITS</h2>
                <h2>2022</h2>
    
            </div>
    
            <img src={google} alt="placeholder" class="template-img"/> 


    
            <p class="body-text">
                In October of 2022, I was dispatched about 35 miles northeast of Flagstaff, AZ to
                document NASA's Desert RATS team alongside Japan's Aerospace Exploration Agency as they 
                conducted a multi-day operation testing pressurized rovers that would be used in potential 
                future Artemis missions. Our organizaion had established a dedicated microwave link from NAU's 
                Flagstaff Mountain Campus to Mt. Elden—a 9,000 foot landmark north of Flagstaff, which then pinged
                our link to the desert. 
            </p>

            <div class="two-pic-row">


            </div>
    
            <p class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>

            <div class="two-pic-row">


            </div>

            <p class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>

            <p class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>




            <div class="two-pic-row">


            </div>

            <p class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>

    
        </div>
        {/if}
    </body>