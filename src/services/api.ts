import axios from "axios"

const baseURL = 'https://catfact.ninja'

export const api = axios.create({baseURL})