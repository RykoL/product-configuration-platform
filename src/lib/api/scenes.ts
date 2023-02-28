import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { CreateNewSceneResponse, GetAllProductsResponse, GetSceneResponse } from './responses';

type FetchFn = typeof fetch;

export const createNewScene = async (
	fetchFn: FetchFn,
	name: string
): Promise<CreateNewSceneResponse> => {
	const body = {
		name
	};
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/scenes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	return await resp.json();
};

export const addProductToScene = async (
	fetchFn: FetchFn,
	sceneId: number,
	productId: string
): Promise<void> => {
	const body = {
		product: productId
	};
	await fetchFn(`${PUBLIC_BACKEND_URL}/v1/scenes/${sceneId}/products`, {
		method: 'POST',
		body: JSON.stringify(body)
	});
};

export const changeSceneEnvironment = async (
	fetchFn: FetchFn,
	sceneId: number,
	environmentId: string
): Promise<void> => {
	const body = {
		environmentId: environmentId
	};
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/scenes/${sceneId}/environment`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	if (!resp.ok) {
		console.error(resp);
		throw new Error();
	}
};

export const getScene = async (fetchFn: FetchFn, sceneId: number): Promise<GetSceneResponse> => {
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/scenes/${sceneId}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});

	return await resp.json();
};

export const getAllScenes = async (fetchFn: FetchFn): Promise<GetAllProductsResponse> => {
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/scenes`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});

	return await resp.json();
};
