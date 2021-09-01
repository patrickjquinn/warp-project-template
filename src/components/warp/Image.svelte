<script lang="ts">
	export let id: string
	export let src: string
</script>

<img src="{src}" alt="img" id="{id}" />

<style>
	img {
		background-color: lightgray;
		width: 100%;
		height: 10rem;
		resize: both;
		aspect-ratio: auto 1 / 1;
	}
</style>
