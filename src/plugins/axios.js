import axios from "axios";

const baseConfig ={
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        authorization: 'Bearer {token}'
    }
}
export const axiosInstance = axios.create(baseConfig);