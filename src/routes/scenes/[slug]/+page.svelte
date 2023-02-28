<script lang="ts">
	import type { PageData } from './$types';
	import EnvironmentInfo from '$lib/components/EnvironmentInfo.svelte';
	export let data: PageData;
</script>

<h1>{data.scene.name}</h1>

<span>id: {data.scene.id}</span>

<section>
	<article>
		<h3>Products</h3>
		{#each data.products as product}
			<p>{product.name}</p>
		{:else}
			<p>This scene has no products yet</p>
		{/each}
	</article>
	<EnvironmentInfo environment={data.scene.environment} />
</section>
<a href={`${data.scene.id}/visualize`}>Visualize Scene</a>
