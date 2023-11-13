<title>AI - Joseph</title>
<script>
    import { fly } from 'svelte/transition'; 
    import { cubicInOut } from "svelte/easing";
    import aiBanner from '/src/lib/work assets/ai-banner.png'; 

    let text = "Universities are racing to address AI because it is a rapidly advancing technology that is reshaping industries, from healthcare to finance. To stay relevant, institutions must provide cutting-edge education in AI to meet the demands of students and industry. Furthermore, AI has profound implications for research, and universities aim to be at the forefront of AI development to ensure they can contribute to and shape its ethical, societal, and economic dimensions.";
    let outputText = "";
    let currentIndex = 0;
    let typingSpeed = 10; //ms per char
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
  
    // start typing when button clicked
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

      <div class="body-wrap-1"></div>

        <h1>AI</h1>

        <div class="dynamic-row">
            <h2>AI & ML</h2>
            <h2>Web Design</h2>
            <h2>2023</h2>
        </div>
        <img src={aiBanner} alt="ai banner" class="body-img">

        <h5>Banner image by my incredible student employee,&nbsp
          <a href="https://rmartistry.wixsite.com/my-site"><strong>Rainee Favela. </strong>↗</a></h5>
        
        <div class="body-wrap-2"></div>
        <div class="line"></div>

        <p class="body-text">
            With the explosion in popularity of generative AI in 2023, Universities scrambled to
            create policy, documentation, and resources for their institution. Our CIO requested that 
            I create our organizations public resource hub for information surrounding artificial intelligence, 
            machine learning, and the intersection with higher education.
        </p>

        <div class="body-wrap-2"></div>

        <h4>So, What's the Deal With AI in Higher Education?</h4>

        <div class="body-wrap-3"></div>

        <button class="button-page" on:click={startTyping}>Ask Open AI's Chat GPT 🧠 🤖</button>         

        <div class="body-wrap-2"></div>

        {#if browserVisible === true}

        <div class="browser" transition:fly={{y: -50, duration: 600, easing: cubicInOut}}>
            <div class="browser-control">
                <div class="button-1"></div>
                <div class="button-2"></div>
                <div class="button-3"></div>
            </div>
            <div class="gpt" alt="Universities are racing to address AI because it is a rapidly advancing technology that is reshaping industries, from healthcare to finance. To stay relevant, institutions must provide cutting-edge education in AI to meet the demands of students and industry. Furthermore, AI has profound implications for research, and universities aim to be at the forefront of AI development to ensure they can contribute to and shape its ethical, societal, and economic dimensions.">
                <p>{outputText}</p>
            </div>
        </div>
        <div class="body-wrap-2"></div>

        {/if}

        {#if nextSec === true}
        <div class="next-section" transition:fly={{y: -20, duration: 800, easing: cubicInOut}}>

            <p class="body-text">
              Luckily, our university stakeholders had worked hard to address concerns and 
              questions from students and faculty about the use of AI at NAU. 
            </p>

            <p class="body-text">
              With the explosion in popularity of generative AI in 2023, Universities scrambled to
              create policy, documentation, and resources for their institution. Our CIO requested that 
              I create our organizations public resource hub for information surrounding artificial intelligence, 
              machine learning, and the intersection with higher education.
            </p>

            <p class="body-text">
            With the explosion in popularity of generative AI in 2023, Universities scrambled to
            create policy, documentation, and resources for their institution. Our CIO requested that 
            I create our organizations public resource hub for information surrounding artificial intelligence, 
            machine learning, and the intersection with higher education.
            </p>

        </div>

        {/if}

        <div class="body-wrap-1"></div>

    </div>
</body>