<script lang="ts">
import DanceMove from "$lib/DanceMove/DanceMove.svelte";
import Nav from "$lib/Nav/Nav.svelte";
import { CurrentDance, dancesMoves, type Move } from "$lib/model/dance";
import { Moves } from "$lib/model/nav";
import { onMount } from "svelte";

let currentDance: string = "";
let danceMoves: Move[] = [];
let alphabeticalOrder: string[] = [];
let danceMovesInAlpha: {opened: boolean, character: string, moves: Move[]}[] = [];
onMount(() => {
    currentDance = localStorage.getItem(CurrentDance)!;
    danceMoves = dancesMoves.filter(p => p.name === currentDance)[0].moves;
    danceMoves = danceMoves.toSorted((a, b) => {return a.name.charCodeAt(0) - b.name.charCodeAt(0)});
    alphabeticalOrder = Array.from(new Set(danceMoves.map((danceMove: Move) => danceMove.name[0])))
    danceMovesInAlpha = alphabeticalOrder.map((character) => {
        return {
            opened: false,
            character: character,
            moves: danceMoves.filter((danceMoves: Move) => {return danceMoves.name[0] === character})
        }
    })
})


const openGroup = (e: any) => {
    const id = e.target.closest(".group").id;

    console.log(id)
    danceMovesInAlpha = danceMovesInAlpha.map((danceGroup) => {
       if (danceGroup.character === id) {
          danceGroup.opened = !danceGroup.opened;
       } 
       return danceGroup
    })

}

</script>
<div class="container">
    <h1>Bailando {currentDance}</h1>
    <div>

        <div class="index">
            {#each alphabeticalOrder as aOrder}
            <a href={`#${aOrder}`}>{aOrder}</a> 
            {/each}
        </div>
    </div>

 {#each danceMovesInAlpha as danceGroup}
   <div class={`group ${danceGroup.opened ? "opened" : ""}`} id={danceGroup.character}>
    <button class="open-group" on:click={openGroup}>
        <p class="character" id={`${danceGroup.character}`}>{danceGroup.character}</p><hr/>
    </button>
    <div class="dance-move-container">
        {#each danceGroup.moves as danceMove}
        <DanceMove danceMove={danceMove}></DanceMove>
        {/each}
    </div>
</div>
{/each}
</div>
    <Nav></Nav>
<style>
.group .dance-move-container {
    display: none;   
}

.opened .dance-move-container {
    display: block !important;
}

    .open-group {
        width: 100%;
        border: none;
        background-color: transparent;
        text-align: start;
        cursor: pointer;
    }

    .index {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        font-size: var(--text-l);
        gap: var(--space-xl);
        overflow-y: scroll;
        padding: 0 var(--space-l);
        margin-bottom: var(--space-xl);
    }

    h1 {
        text-align: center;
        background-image:  var(--bi);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: var(--space-xl);
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

