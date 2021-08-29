<script>
    let name = "your first Warp project!"
    let image = "svelte_cap.png"
</script>

<div class="main">
    <img alt="" src={image}/>
    <h1>Welcome to {name}!</h1>
</div>

<style>
    .main {
        text-align: center;
        margin: 50px auto;
    }

    img {
        max-width: 100%;
    }
</style>