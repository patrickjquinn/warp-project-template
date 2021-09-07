<script lang="ts">
    let name: string = "your first Warp project!"
    let image: string = "svelte_cap.png"
</script>

<main>
    <img id="img22" alt="" src={image}/>
    <h1 id="h12343">Welcome to {name}!</h1>
</main>

<style>
    main {
        text-align: center;
        margin: 50px auto;
    }

    :global(#img22) {
        max-width: 100%;
        width: 50%;
        margin: auto;
    }

    :global(#h12343) {
        color: black;
    }
</style>