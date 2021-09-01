<script lang="ts">
	export let id: string
</script>

<div id="{id}"><slot /></div>

<style>
	div {
		background-color: lightgray;
		min-width: 3.125rem;
		height: 3.75rem;
		min-height: 5rem;
		overflow: hidden;
		resize: both;
	}
</style>
