import {error, redirect} from '@sveltejs/kit';
import { getAllProducts } from "$lib/api/products";
import type { PageServerLoad, Actions } from './$types';
import {getAllEnvironments} from "../../../lib/api/environments";
import {addProductToScene, changeSceneEnvironment, createNewScene} from "../../../lib/api/scenes";

export const load: PageServerLoad = (async ({fetch}) => {
    const products = await getAllProducts(fetch);
    const environments = await getAllEnvironments(fetch)

    if (products) {
        return {
            products,
            environments
        };
    }

    throw error(404, 'Not found');
});

export const actions: Actions = {
    default: async ({fetch, request}) => {
        const formData = await request.formData()
        const { id } = await createNewScene(fetch, formData.get('name') as string)
        //await addProductToScene(fetch, id, formData.get('product') as string)
        await changeSceneEnvironment(fetch, id, formData.get('environment') as string)
        redirect(302, `/scenes/${id}`)
    }
}