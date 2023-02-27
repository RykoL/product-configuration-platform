<script lang="ts">
    import type { PageData } from './$types'
    import { Application } from 'product-configurator-renderer'
    import {onMount} from "svelte";

    let rendererContainer: HTMLElement
    export let data: PageData

    onMount(() => {
        const application = new Application(rendererContainer)
        application.run()
        console.log(application)
        application.loadScene(data.scene)
    })
</script>


<main bind:this={rendererContainer}>

</main>