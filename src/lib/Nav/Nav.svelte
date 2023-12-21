<script lang="ts">
  import Button from "$lib/Button/Button.svelte";
    import House from "$lib/assets/icons/House.svelte"
  import { Home, Moves, Routine } from "$lib/model/nav";

interface NavButton {
    name: string,
}

const buttons: NavButton[] = [
    {
        name: Routine,
    },
    {
        name: Home,
    },
    {
        name: Moves,
    },
]

const navigateSection = (e) => {
    const target = e.target.closest("button") ? e.target.closest("button") : e.target;
    const text = target.innerText;

    window.location.href = text.toLowerCase() === "home" ? "/" : text.toLowerCase();
}
</script>

<nav on:click={navigateSection}>
{#each buttons as button}
<Button name={button.name} /> 
{/each}

</nav>

<style>
    nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
    }
</style>