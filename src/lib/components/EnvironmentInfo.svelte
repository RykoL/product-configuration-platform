<script lang="ts">
    interface Environment {
        id: number,
        name: string
    }

    export let environment: Environment
</script>


<article>
    <h3>Environment</h3>
    <p>Id: {environment.id}</p>
    <p>Name :{environment.name}</p>
</article>