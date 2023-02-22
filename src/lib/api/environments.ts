import { PUBLIC_BACKEND_URL } from '$env/static/public'
import type { GetAllEnvironmentsResponse } from "./responses";

export const getAllEnvironments = async (fetchFn: typeof fetch): Promise<GetAllEnvironmentsResponse> => {
    const resp = await fetchFn(`${PUBLIC_BACKEND_URL}/v1/environments`);
    return await resp.json()
}
