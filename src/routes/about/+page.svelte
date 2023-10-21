<title>About - Joseph</title>

<style>
@import url(../styles/style.css);
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap');
</style>

<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from 'svelte/easing';
    import me from '/src/lib/sf.jpg'; 
    import resume from '/src/lib/Joseph S - Resume.pdf';
    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte'; 



</script>

    <div class="container">

    <div class="body-wrap-1"></div>
    <h1>A little about me</h1>

    <div class="body-wrap-2"></div>

<div class="about-row">

<img src={me} alt="me by the golden gate bridge" class="me-photo" />

        <div class="me-desc">
            <h6>I'm passionate about all things digital, web, & learning.</h6>
            <p>I grew to love digital media in high school, where I was elected club president for 
                my school's Film & TV Production program. Since then, I've been exploring my passion
                for creating across dozens of mediums. I've been privileged to work in 
                visual & motion design, 3D design, videography & photography, as well as in
                marketing and communication roles. 
                
            </p>

            <p>These days, I've settled into my passion for designing interactive experiences
                through the web, apps, and software. I enjoy learning new
                ways to build and create, and I love contributing to projects and ideas. If you're 
                looking for an extra hand, send me a message! I'd love to
                contribute through freelance oppourtunities, and for impactful pro-bono or volunteer projects and organizations.
            </p>
        </div>  
    </div>
    
    <div class="body-wrap-1"></div>

    <h6>Contact</h6>
    <h3 style="color: grey; font-size: 1.2rem">airefrescodesign@gmail.com</h3>

    <div class="body-wrap-1"></div>

</div>
