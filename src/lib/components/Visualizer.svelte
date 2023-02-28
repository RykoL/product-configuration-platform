<script lang="ts">
	import { Application, Scene } from 'product-configurator-renderer';
	import { onMount } from 'svelte';

	interface Environment {
		id: string;
		name: string;
		asset: {
			id: string;
			name: string;
			path: string;
			type: string;
		};
	}

	let rendererContainer: HTMLElement;
	export let env: Environment;

	onMount(() => {
		const application = new Application(rendererContainer);
		application.run();
		application.loadScene(new Scene(env));
	});
</script>

<main bind:this={rendererContainer} />
