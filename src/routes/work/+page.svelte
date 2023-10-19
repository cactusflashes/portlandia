<title>Joseph S. | About </title>

<style>
@import url(../styles/work.css);
</style>

<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';
    import me from '/src/lib/sf.jpg'; 
    import resume from '/src/lib/Joseph S - Resume.pdf';

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


    function aboutNav(){
        visible = false; 
        setTimeout(function(){
            window.location.href ="/about"; 
        }, 500); 
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
            <li on:click={aboutNav}>about</li>
            <li on:click={openRes}>cv</li>
        </ul>

    </div>








    <div class="body-wrap-1"></div>
    <h1>Work</h1>
    <div class="body-wrap-2"></div>
    <h6>Design</h6>
    <div class="body-wrap-2"></div>


    <div class="project-wrapper">

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    The Circuit Board
                </div>
            </div>
            <div class="project">
                <div class="label">
                    3D Design
                </div>
            </div>

        </div>

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    Project Title
                </div>
            </div>
            <div class="project">
                <div class="label">
                    Project Title
                </div>
            </div>
        
        </div>

            <div class="project-long">
                <div class="label">
                    Misc. Design Portfolio
                </div>
            </div>

    </div>
    

    <div class="body-wrap-1"></div>
    <h6>Development</h6>
    <div class="body-wrap-2"></div>

    <div class="project-wrapper">

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    Ascento
                </div>
            </div>
            <div class="project">
                <div class="label">
                    where-is-joseph
                </div>
            </div>

        </div>

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    Felix Temporem
                </div>
            </div>
            <div class="project">
                <div class="label">
                    lumJump!
                </div>
            </div>
        
        </div>

    </div>





    <div class="body-wrap-1"></div>
    <h6>Digital</h6>
    <div class="body-wrap-2"></div>

    <div class="project-wrapper">

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    Photography
                </div>
            </div>
            <div class="project">
                <div class="label">
                    Motion Design
                </div>
            </div>

        </div>

        <div class="icon-container">

            <div class="project">
                <div class="label">
                    Video
                </div>
            </div>
            <div class="project">
                <div class="label">
                    3D
                </div>
            </div>
        
        </div>

    </div>
    


    

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