import type {Actions} from './$types';
import {createEnvironment, uploadEnvironment} from '../../../lib/api/environments';
import type {CreateEnvironmentRequestData} from "../../../lib/api/requests";

export const actions: Actions = {
    default: async ({fetch, request}) => {
        const formData = await request.formData();
        const uploadEnvironmentData = {
            name: formData.get('name') as string,
            environment: formData.get('file') as File
        };

        const assetResponse = await uploadEnvironment(fetch, uploadEnvironmentData);

        const createEnvironmentRequest: CreateEnvironmentRequestData = {
            assetId: assetResponse.id,
            height: parseInt(formData.get('height') as string),
            name: formData.get('name') as string,
            radius: parseInt(formData.get('radius') as string)
        }

        await createEnvironment(fetch, createEnvironmentRequest)
    }
};
