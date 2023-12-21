<script lang="ts">
  import House from "$lib/assets/icons/House.svelte";
  import Book from "$lib/assets/icons/Book.svelte";
  import Repeat from "$lib/assets/icons/Repeat.svelte";
import { Home, Moves, Routine } from "$lib/model/nav";

export let name = "";

</script>

<button class="button-nav" >
    {#if name === Home}
       <House/> 
    {:else if name ===  Moves} 
        <Book/>
    {:else if name === Routine}
    <Repeat/> 
    {/if}
    {name}
</button>
<style>

.button-nav {
    width: 100%;
    padding: var(--space-s) var(--space-m);
    border: none;
    background-image: linear-gradient(to top right, var(--c-primary), var(--c-secondary));
    box-shadow: 0 0 0 1px var(--c-text-0);
    color: var(--c-text-0);
    font-size: var(--text-m);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-s);
    cursor: pointer;
    transition: all .2s;
}

.button-nav:hover {
    transform: translateY(-2px);
}

</style>