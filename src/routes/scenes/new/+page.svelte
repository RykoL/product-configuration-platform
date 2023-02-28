<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Create a new scene</h1>

<form method="post">
	<label>
		Select a name:
		<input type="text" required minlength="3" name="name" />
	</label>
	<label>
		Add some products
		<select name="products">
			{#each data.products as product}
				<option>{product.name}</option>
			{/each}
		</select>
	</label>
	<label>
		Choose environment
		<select name="environment" required>
			{#each data.environments as environment}
				<option value={environment.id}>{environment.name}</option>
			{/each}
		</select>
	</label>
	<button>Create</button>
</form>
