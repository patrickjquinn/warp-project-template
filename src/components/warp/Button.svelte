<script lang="ts">
	export let id: string
</script>

<button id="{id}" contenteditable="true"><slot /></button>

<style>
	button {
		display: block;
	}
</style>
