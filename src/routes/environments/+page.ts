import type { PageLoad } from './$types';
import { getAllEnvironments } from '../../lib/api/environments';

export const load: PageLoad = async ({ fetch }) => {
	const environments = await getAllEnvironments(fetch);

	return {
		environments
	};
};
