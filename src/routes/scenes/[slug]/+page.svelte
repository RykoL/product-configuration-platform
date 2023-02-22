<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData
</script>

<h1>{data.scene.name}</h1>

<span>id: {data.scene.id}</span>

<section>
    <article>
        <h3>Products</h3>
        {#each data.products as product}
            <p>{product.name}</p>
        {:else }
            <p>This scene has no products yet</p>
        {/each}
    </article>

    <article>
        <h3>Environment</h3>
        <p>Id: {data.scene.environment.id}</p>
        <p>Name :{data.scene.environment.name}</p>
    </article>
</section>
<a href={`${data.scene.id}/visualize`}>Visualize Scene</a>