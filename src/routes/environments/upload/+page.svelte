<script lang="ts">
	import Visualizer from '$lib/components/Visualizer.svelte';
	import { changeEnvironmentRadius, changeEnvironmentHeight } from 'product-configurator-renderer'

	let showVisualizer = false;
	let previewReady = false
	let dataUrl: string = ""

	const toggleVisualizer = () => {
		showVisualizer = !showVisualizer;
	};

	const onFileSelected =(e)=>{
		const reader = new FileReader()
		reader.readAsDataURL(e.target.files[0])
		reader.addEventListener('load', () => {
			dataUrl = reader.result as string
			previewReady = true
		})
	}

	const onChangeEnvironmentScale = (e) => {
		const radius = e.target.valueAsNumber

		if (!isNaN(radius)) {
			changeEnvironmentRadius(radius)
		}
	}

	const onChangeEnvironmentHeight = (e) => {
		const height = e.target.valueAsNumber

		if (!isNaN(height)) {
			changeEnvironmentHeight(height)
		}
	}

</script>

<h1>Upload a new environment</h1>

<form method="post" enctype="multipart/form-data">
	<label>
		Name
		<input type="text" name="name" required minlength="5" placeholder="New Environment" />
	</label>
	<label>
		File
		<input type="file" name="file" accept=".hdr,.exr" required on:change={onFileSelected} />
	</label>
	<label>
		Initial Radius
		<input type="number" value="100" name="radius" on:input={onChangeEnvironmentScale}/>
	</label>
	<label>
		Initial Height
		<input type="number" value="100" name="height" on:input={onChangeEnvironmentHeight}/>
	</label>
	<button>Upload</button>
</form>
<button on:click={toggleVisualizer} disabled={!previewReady}>Preview</button>

{#if showVisualizer}
	<Visualizer dataUrl={dataUrl} />
{/if}
