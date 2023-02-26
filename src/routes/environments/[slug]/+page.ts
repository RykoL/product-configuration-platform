import type {PageLoad} from './$types'
import {getEnvironment} from "$lib/api/environments";

export const load: PageLoad = (async ({fetch, params}) => {

    const environment = await getEnvironment(fetch, parseInt(params.slug))

    return {
        environment,
    };
});