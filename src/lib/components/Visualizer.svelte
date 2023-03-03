<script lang="ts">
	import { Application, Scene } from 'product-configurator-renderer';
	import { onMount } from 'svelte';

	interface Environment {
		id: number;
		name: string;
		asset: {
            id: string;
            name: string;
            location: string;
            type: string
		};
	}

    export let dataUrl: string
    export let width: number = 0
    export let height: number = 0
	let rendererContainer: HTMLElement;
	let env: Environment = {
        id: 1,
        name: "test_environment",
        asset: {
            id: "1",
            name: "test_asset",
            location: dataUrl,
            type: "Environment"
        }
    };

	onMount(() => {
		const application = new Application(rendererContainer, width, height);
		application.run();
		application.loadScene(new Scene(env));
	});
</script>

<main bind:this={rendererContainer} />
