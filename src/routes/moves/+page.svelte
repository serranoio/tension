<script lang="ts">
  import DanceMove from "$lib/DanceMove/DanceMove.svelte";
import Nav from "$lib/Nav/Nav.svelte";
import { CurrentDance, dancesMoves, type Move } from "$lib/model/dance";
  import { Moves } from "$lib/model/nav";
  import { onMount } from "svelte";



let currentDance: string = "";
let danceMoves: Move[] = [];


let danceMovesInAlpha: any = [];
onMount(() => {
    currentDance = localStorage.getItem(CurrentDance)!;
    danceMoves = dancesMoves.filter(p => p.name === currentDance)[0].moves;
    danceMoves = danceMoves.toSorted((a, b) => {return a.name.charCodeAt(0) - b.name.charCodeAt(0)});

    let alphabeticalOrder = Array.from(new Set(danceMoves.map((danceMove: Move) => danceMove.name[0])))
    danceMovesInAlpha = alphabeticalOrder.map((character) => {
        return {
            character: character,
            moves: danceMoves.filter((danceMoves: Move) => {return danceMoves.name[0] === character})
        }
    })
})

</script>
<div class="container">

    <h1>Bailando {currentDance}</h1>
   {#each danceMovesInAlpha as danceGroup}
   <div class="group">
    <p class="character">{danceGroup.character}</p><hr/>
    {#each danceGroup.moves as danceMove}
    <DanceMove danceMove={danceMove}></DanceMove>
    {/each}
</div>

{/each} 


</div>
    
    <Nav></Nav>

<style>

    h1 {
        text-align: center;
    }

    .container {
        padding: var(--space-s) var(--space-s);
    }

    .character {
        color: var(--c-text-80);
    
    }

    hr {
        border: none;
        height: 2px;
        filter: grayscale(.50);
        opacity: .50;
        background-image: var(--bi);
    }

    .group {
        margin-bottom: var(--space-m);
    }
</style>

