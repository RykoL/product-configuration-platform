<script lang="ts">
    import type {PageData} from './$types'

    export let data: PageData
</script>

<h1>Environments</h1>
<a href="/environments/upload">Upload a new scene</a>
{#each data.environments as environment}
    <ul>
        <li>
            <a href={`/environments/${environment.id}`}>{environment.name}</a>
        </li>
    </ul>
{/each}