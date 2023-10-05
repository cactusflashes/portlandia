<style>
    @import url(../styles/page.css);
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
<script>

    import artOne from '/src/lib/art-1.jpg'; 
    import artTwo from '/src/lib/art-2.jpg';
    import artThree from '/src/lib/art-3.jpg'; 
    import artFour from '/src/lib/art-4.jpg'; 
    import artFive from '/src/lib/art-5.jpg'; 
    import artSix from '/src/lib/art-6.jpg'; 
    import artSev from '/src/lib/art-7.jpg';


    function backBtn() {
    window.history.go(-1); return false; 
}
    </script>
    
    
    <body>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="container">
    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="exit" alt="exit page" on:click={backBtn}>x</div>
    
            <h1>Artemis RATS</h1>
    
            <div class="dynamic-row">
    
                <h2>Digital Media</h2>
                <h2>NAU</h2>
                <h2>2022</h2>
    
            </div>
    
            <img src={artOne} alt="placeholder" class="template-img"/> 


    
            <p class="body-text">
                In October of 2022, I was dispatched about 35 miles northeast of Flagstaff, AZ to
                document NASA's Desert RATS team alongside Japan's Aerospace Exploration Agency as they 
                conducted a multi-day operation testing pressurized rovers that would be used in potential 
                future Artemis missions. Our organizaion had established a dedicated microwave link from NAU's 
                Flagstaff Mountain Campus to Mt. Elden—a 9,000 foot landmark north of Flagstaff, which then pinged
                our link to the desert. 
            </p>

            <div class="two-pic-row">
                <img src={artTwo} alt="placeholder" class="template-img"/>
                <img src={artThree} alt="placeholder" class="template-img"/>
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
                <img src={artFour} alt="placeholder" class="template-img"/>
                <img src={artSev} alt="placeholder" class="template-img"/>
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
                <img src={artSix} alt="placeholder" class="template-img"/>
                <img src={artFive} alt="placeholder" class="template-img"/>
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
    </body>