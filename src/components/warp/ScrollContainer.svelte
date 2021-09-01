<script lang="ts">
	export let id: string
</script>

<div id="{id}"><slot /></div>

<style>
	div {
		background-color: gray;
		width: 100%;
		height: 10rem;
		min-height: 3.125rem;
		overflow: scroll;
		resize: both;
	}
</style>
