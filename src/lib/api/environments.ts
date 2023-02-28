import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { GetAllEnvironmentsResponse, GetEnvironmentResponse } from './responses';
import type { UploadEnvironmentRequestData } from './requests';

export const getAllEnvironments = async (
	fetchFn: typeof fetch
): Promise<GetAllEnvironmentsResponse> => {
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/assets/environments`);
	return await resp.json();
};

export const uploadEnvironment = async (
	fetchFn: typeof fetch,
	uploadEnvironmentData: UploadEnvironmentRequestData
): Promise<void> => {
	const payload = new FormData();
	for (const [key, value] of Object.entries(uploadEnvironmentData)) {
		payload.append(key, value);
	}

	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/assets/environments`, {
		method: 'POST',
		body: payload
	});

	if (!resp.ok) {
		throw new Error(await resp.text());
	}
};

export const getEnvironment = async (
	fetchFn: typeof fetch,
	envId: number
): Promise<GetEnvironmentResponse> => {
	const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/assets/environments/${envId}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});

	return await resp.json();
};
