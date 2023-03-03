<script lang="ts">
    import Visualizer from '$lib/components/Visualizer.svelte';
    import {changeEnvironmentRadius, changeEnvironmentHeight} from 'product-configurator-renderer'

    let showVisualizer = false;
    let previewReady = false
    let dataUrl: string = ""
    let previewContainer: HTMLElement;

    const toggleVisualizer = () => {
        showVisualizer = !showVisualizer;
    };

    const calculateHeightFromWidth = (width: number) => {
        return width / 16 * 9
    }

    const onFileSelected = (e) => {
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

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        gap: .75rem;
    }

    label {
        display: grid;
        grid-template-columns: .5fr 1fr;
    }

    #upload-label {
        display: grid;
        grid-template-columns: .5fr .5fr .5fr;
        column-gap: .1rem;
    }

    #container {
        display: flex;
        flex-direction: row;
    }

    #preview-container {
        width: 100%;
        padding: 0rem 1rem;
    }


</style>

<h1>Upload a new environment</h1>

<section id="container">
    <form method="post" enctype="multipart/form-data">
        <label>
            Name
            <input type="text" name="name" required minlength="5" placeholder="New Environment"/>
        </label>
        <label id="upload-label">
            File
            <input type="file" name="file" accept=".hdr,.exr" required on:change={onFileSelected}/>
            <button on:click={toggleVisualizer} disabled={!previewReady}>Toggle Preview</button>
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

    <section id="preview-container" bind:this={previewContainer}>
        {#if showVisualizer}
            <Visualizer
                    dataUrl={dataUrl}
                    width={previewContainer.offsetWidth}
                    height={calculateHeightFromWidth(previewContainer.offsetWidth)}
            />
        {/if}
    </section>
</section>

