<style>
    @import url(../styles/page.css);
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>


<script>
import doodOne from '/src/lib/dood-1.png';
import doodTwo from '/src/lib/dood-2.png';
import doodThree from '/src/lib/dood-3.jpg';
import doodFour from '/src/lib/dood-4.jpg';

function backBtn() {
    window.history.go(-1); return false; 
}
</script>


<body>
    <div class="container">

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="exit" alt="exit page" on:click={backBtn}>x</div>

        <h1>DoodleBot</h1>

        <div class="dynamic-row">

            <h2>Powered by AI</h2>
            <h2>Personal Project</h2>
            <h2>2023</h2>

        </div>

        <img src={doodOne} alt="placeholder" class="template-img"/>

        <p class="body-text">
            Doodlebot is a Discord bot I put together using the <a href="https://discord.js.org/">Discord.js</a> library and <a href="https://platform.openai.com/docs/guides/gpt">OpenAI's 
            Chat GPT-3.5 Turbo Model.</a>
            The original version of DoodleBot used the Math.random() method to generate a silly and outlandish sentence based off
            an array of verbs, nouns, adjectives, and other goofy parameters. As funny as the first iteration of Doodlebot was, it was
            understandable predictable, and got stale pretty quick.
        </p>

        <p class="body-text">
            Funnily enough, to tackle the inconsistencies in predictability, I started to look more at
            grammar and sentence structure itself within the English language to see where I can leverage
            the best use of my 'MadLibs' methodology. Initially, I didn't want to pay for the OpenAI API, 
            but once I realized how cheap and accessable it would be for my project, I funded the project with $5, 
            and after hundreds of calls, I've only burnt through a few cents. 
        </p>

        <img src={doodTwo} alt="placeholder" class="template-img"/>

        <p class="body-text">
            Using the API is extremely easy; once the OpenAI packages have been installed and imported, we can specify which
            model we'd like to query, and then create a query. Here I've condensed my actual query for a proof of concept, but
            you can imagine this process is not dissimilar to asking GPT a question in any other context. 
        </p>

        <div class="two-pic-row">
            <img src={doodThree} alt="reactions from friends" class="template-img"/>
            <img src={doodFour} alt="reactions from friends" class="template-img"/>
        </div>

        <p class="body-text">
            I've been running the bot for a few months now in my Discord server, 'Creative Space', and have been giddy to see
            how my friend's interpret the prompts, and what they come up with in their own ways and styles. Due to the dynamic nature of
            OpenAI's API, I'm looking to experiment more in the future, and maybe compare GPT-4 to 3.5 in this particular alley of text queries. 
        </p>

    </div>
</body>