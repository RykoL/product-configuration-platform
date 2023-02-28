import type { PageLoad } from './$types';
import { getAllScenes } from '$lib/api/scenes';

export const load: PageLoad = async ({ fetch }) => {
	const scenes = await getAllScenes(fetch);

	return {
		scenes
	};
};
