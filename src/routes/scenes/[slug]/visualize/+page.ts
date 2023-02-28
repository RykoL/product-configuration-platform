import type { PageLoad } from './$types';
import { getScene } from '$lib/api/scenes';

export const load: PageLoad = async ({ fetch, params }) => {
	const scene = await getScene(fetch, parseInt(params.slug));
	return {
		scene
	};
};
