<script lang="ts">
	export let id: string
</script>

<p id="{id}" contenteditable="true"><slot /></p>

<style>
	p {
		display: block;
	}
</style>
