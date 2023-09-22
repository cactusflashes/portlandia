<style>
    /* Nav Elements */

.nav-wrapper {
    background-color: white;
    height: 5vw;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: row;
}


@media only screen and (max-width: 600px) {
    .nav-wrapper {
        display: none;
    }
    
  }

.nav-wrapper-dark {
    background-color: #383838;
    height: 5vw;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: row;
    transition: background-color 0.5s, color 0.3s;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1vw;
    justify-content: right;
    position: relative;
    left: 55vw;
}

li {
    display: flex;
    font-family: Space Grotesk;
    font-weight: 400;
    font-size: 1.4vw;
    padding: .1vw .5vw;
    border-radius: .5vw;
    transition: background-color 0.5s, color 0.3s;
}

li:hover {
    display: flex;
    background-color: #e8ae47;
    padding: .1vw .5vw;
    font-family: Space Grotesk;
    font-weight: 400;
    font-size: 1.4vw;
    border-radius: .5vw;
    cursor: pointer;
    color: black;
    transition: background-color 0.5s, color 0.3s;
}

.switch-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1vw;
    align-content: center;
    justify-content: center;
    margin-left: 8vw;
}
</style>

<script>

    export const navbar = 'readonly';

</script>