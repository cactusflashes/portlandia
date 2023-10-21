<style>
    @import url(../styles/style.css);
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap');

</style>


<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from "svelte/easing";

    let text = "Universities are racing to address AI because it is a rapidly advancing technology that is reshaping industries, from healthcare to finance. To stay relevant, institutions must provide cutting-edge education in AI to meet the demands of students and industry. Furthermore, AI has profound implications for research, and universities aim to be at the forefront of AI development to ensure they can contribute to and shape its ethical, societal, and economic dimensions.";
    let outputText = "";
    let currentIndex = 0;
    let typingSpeed = 10; // Adjust the typing speed (milliseconds per character)
    let isTyping = false;
  
    function type() {
      if (currentIndex <= text.length) {
        outputText = text.slice(0, currentIndex);
        currentIndex += 1;
        if (currentIndex <= text.length) {
          setTimeout(type, typingSpeed);
        } else {
          isTyping = false;
        }
      }
    }
  
    // Event handler to start typing when the button is clicked
    function startTyping() {
      if (!isTyping) {
        outputText = "";
        currentIndex = 0;
        browserVisible = true; 
        isTyping = true;
        setTimeout(function(){
          nextSec = true; 
        }, 6000); 
        type();
      }
    }


    let browserVisible = false;

    let nextSec = false; 

  </script>


<body>
    <div class="container">

        <h1>AI</h1>

        <div class="dynamic-row">

            <h2>AI & ML</h2>
            <h2>Web Design</h2>
            <h2>2023</h2>

        </div>


        <p class="body-text">
            With the explosion of popularity with generative AI in 2023, Universities scrambled to
            create policy, documentation, and resources for their institution. Our CIO requested that 
            I create our organizations resource hub for information surrounding artificial intelligence, 
            machine learning, and the intersection with higher education.
        </p>

        <div class="body-wrap-2"></div>


        <h2>What's the Deal With AI in Higher Ed?</h2>

        <div class="body-wrap-2"></div>

        <button on:click={startTyping}>Ask Open AI's Chat GPT 🧠 🤖</button>         

        <div class="body-wrap-2"></div>

        {#if browserVisible === true}

        <div class="browser" transition:fly={{y: -50, duration: 600, easing: cubicInOut}}>
            <div class="browser-control">
                <div class="button-1"></div>
                <div class="button-2"></div>
                <div class="button-3"></div>
            </div>
            <div class="gpt">
                <p>{outputText}</p>
            </div>
        </div>

        {/if}

        {#if nextSec === true}
        <p class="body-text" transition:fly={{y: -20, duration: 800, easing: cubicInOut}}>
           Luckily, our university stakeholders had worked hard to address concerns and 
           questions from students and faculty about the use of AI at NAU. 
        </p>
        {/if}

    </div>
</body>