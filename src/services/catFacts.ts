import {api} from "./api"

export const getFacts = async (params: any) => 
    api.get("/facts", {params})
