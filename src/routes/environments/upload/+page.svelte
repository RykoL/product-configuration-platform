<script lang="ts">
	import Visualizer from '$lib/components/Visualizer.svelte';
	let showVisualizer = false;

	const toggleVisualizer = () => {
		showVisualizer = !showVisualizer;
	};
</script>

<h1>Upload a new environment</h1>

<form method="post" enctype="multipart/form-data">
	<label>
		Name
		<input type="text" name="name" required minlength="5" placeholder="New Environment" />
	</label>
	<label>
		File
		<input type="file" name="file" accept=".hdr,.exr" required />
	</label>
	<label>
		Initial Scale
		<input type="number" value="1" name="scale" />
	</label>
	<button>Upload</button>
</form>
<button on:click={toggleVisualizer}>Preview</button>

{#if showVisualizer}
	<Visualizer />
{/if}
