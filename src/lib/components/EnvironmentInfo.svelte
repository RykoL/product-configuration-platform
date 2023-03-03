<script lang="ts">
	interface Environment {
		id: number;
		name: string;
		radius: number
		height: number
	}

	export let environment: Environment;
</script>

<article>
	<h3>Environment</h3>
	<p>Id: {environment.id}</p>
	<p>Name :{environment.name}</p>
	<p>Radius :{environment.radius}</p>
	<p>height :{environment.height}</p>
</article>
