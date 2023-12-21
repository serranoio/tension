<script lang="ts">
  import type { DanceMove, Move } from "$lib/model/dance";


export let danceMove: Move;


let src = danceMove.name.replaceAll(" ", "-").toLowerCase()
</script>

<figure>
    <p>{danceMove.name}</p>
    <img src={"dances/" + src + ".gif"}/>
</figure>

<style>

    img {
        width: 100%;
    }

</style>