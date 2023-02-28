import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { GetAllProductsResponse } from './responses';

export const getAllProducts = async (fetchFn: typeof fetch): Promise<GetAllProductsResponse> => {
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/products`);
	return await resp.json();
};
