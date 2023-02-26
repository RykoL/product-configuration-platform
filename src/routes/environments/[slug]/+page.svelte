<script lang="ts">
    import type { PageData } from './$types'
    import EnvironmentInfo from '$lib/components/EnvironmentInfo.svelte'
    export let data: PageData
    console.log(data)
</script>

<h1>{data.environment.name}</h1>
<EnvironmentInfo environment={data.environment} />
