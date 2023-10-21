<style>
.footer-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px; 
    background-color: white;
    gap: 50vw;
}

.footer-text-no-margin{
    margin: 2px; 
}

.footer-li-container {
    display: flex;
    flex-direction: column;
}

.footer-li-container-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

a {
    list-style: none;
    text-decoration: none;
    color: grey;
}

@media all and (max-width: 700px) {
.footer-page {
        height: 350px; 
        flex-direction: column;
        gap: 20px; 
    }

    .footer-li-container, .footer-li-container-2 {
        align-items: center;
    }
}

</style>

<div class="footer-page">
    <div class="footer-li-container">
        <h3 class="footer-text-no-margin">Built with love, and lots of help from</h3>
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
