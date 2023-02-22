<script lang="ts">
    import type {PageData} from './$types'

    export let data: PageData
</script>

<h1>Scenes</h1>
{#each data.scenes as scene}
    <ul>
        <li>
            <a href={`/scenes/${scene.id}`}>{scene.name}</a>
        </li>
    </ul>
{/each}