<script lang="ts">
  import Nav from "$lib/Nav/Nav.svelte";
  import { Bachata, CurrentDance, type Dance } from "$lib/model/dance";
  import { onMount } from "svelte";

const dances: Dance[] = [{
    name: "Bachata",
    description: "Romantic, sweet",
}, 
{
    name: "Salsa",
    description: "fast and sexy"
},
{
    name: "Merengue",
    description: "SUAVAMENTEEEEE"
},
{
    name: "Cumbia",
    description: "AYYYYYY"
}
]

let currentDance: string = "";
onMount(() => {
    if (!localStorage.getItem(CurrentDance)) {
        localStorage.setItem(CurrentDance, Bachata);
    }

    currentDance = localStorage.getItem(CurrentDance)!;


}) 

const chooseDance = (e) => {
    const target = e.target.closest("button") ? e.target.closest("button") : e.target.querySelector("button");

    console.log(target);
    
    currentDance = target.innerText;
    
    localStorage.setItem(CurrentDance, currentDance);

    console.log(currentDance)
}

</script>

<section>

<div class="container">
    <h1>Bienvenidos!</h1>
    <p class="subtitle">Welcome!</p>
    <p class="choose">Choose Your Dance!</p>

    <div class="dance-container" on:click={chooseDance}>

        {#each dances as dance}
        <button class={`${currentDance === dance.name ? "current" : ""}`}>
            {dance.name}
        </button>
        {/each}
    </div>
    
</div>
</section>
    <Nav></Nav>


<style>

.current::after {
    content: "";
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--c-background);
    width: 50px;
    height: 50px;
    z-index: 9999;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.choose {
    margin-bottom: var(--space-s);
}

.dance-container {
    display: flex;
    flex-direction: column;
}

.dance-container button {
    position: relative;
    padding: var(--space-l) var(--space-m);
    font-size: var(--text-m);
    cursor: pointer;
    background-image: var(--bi);
    border: none;
    box-shadow: 0 0 0 2px var(--c-text-0);
    color: var(--c-text-0);
}

.container {
    padding: var(--space-l);
}

h1 {
    font-size: var(--text-xl);
    background-image:  var(--bi);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
}

.subtitle {
    margin-bottom: var(--space-xl);
    text-align: center;
}


    
</style>