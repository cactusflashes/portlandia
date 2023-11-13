<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap');
.nav-wrapper {
    background-color: rgba(255, 255, 255, .5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);    
    height: 60px;
    width: 100vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 45vw;
    position: fixed; 
    z-index: 100;
    margin: 0;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1vw;
    padding: 0;
}

li {
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Urbanist', sans-serif;
    font-weight: 500;
    font-size: .9rem;
    padding: 10px 10px;
    border-radius: 10px;
    transition: background-color 0.5s, color 0.3s;
}

li:hover {
    display: flex;
    background-color: #4287f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Urbanist', sans-serif;
    cursor: pointer;
    transition: background-color 0.5s, color 0.3s;
}

li:hover a {
    color: white; 
    transition: color 0.2s; 
}

.logo-title {
        display: flex; 
}

@media all and (max-width: 700px) {
    .nav-wrapper {
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, .5);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }

    .logo-title {
        display: none; 
    }

    ul {
        gap: 8vw;  
        justify-content: center;
        padding: 0;
        margin: 0; 
    }

    li {
        font-weight: 600;
    }
}

</style>

<script>
    import resume from '/src/lib/Joseph S - Resume.pdf';
</script>


<div class="nav-wrapper">
    <h3 class="logo-title">Joseph S. | 2023</h3>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href={resume}>CV</a></li>
    </ul>
</div>
