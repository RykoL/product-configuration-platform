export type GetAllProductsResponse = Array<{
    id: number
    name: string
}>

export type GetAllEnvironmentsResponse = Array<GetEnvironmentResponse>

export type GetEnvironmentResponse = {
    id: number,
    name: string
}

export type CreateNewSceneResponse = {
    id: number,
    name: string,
}

export type GetSceneResponse = {
    id: number,
    name: string,
    environment: {
        id: number
        name: string
    }
}

export type GetAllScenesResponse = Array<GetSceneResponse>