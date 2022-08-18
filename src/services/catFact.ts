import {api} from "./api"

export const getFact = async (params: any) => 
    api.get("/fact", {params})
