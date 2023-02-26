import type { Actions } from "./$types"
import {uploadEnvironment} from "../../../lib/api/environments";

export const actions: Actions = {
    default: async ({fetch, request}) => {
        const formData = await request.formData()
        const uploadEnvironmentData = {
            name: formData.get('name') as string,
            environment: formData.get('file') as File
        }
        await uploadEnvironment(fetch, uploadEnvironmentData)
    }
}