<script lang="ts">
    import { Application } from 'product-configurator-renderer'
    import {onMount} from "svelte";

    let rendererContainer: HTMLElement

    onMount(() => {
        const application = new Application(rendererContainer)
        application.run()
    })
</script>


<main bind:this={rendererContainer}>

</main>