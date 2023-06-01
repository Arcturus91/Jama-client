import axios from 'axios';

const URL = import.meta.env.VITE_API || "http://localhost:5005";
const API = `${URL}/api`;
                                                                        //"http://localhost:5005/api/auth/login"
const baseURL = API;
export const api = axios.create({
    baseURL,
    withCredentials:true,//cookies
timeout:10000,
})

export const uploadURL = `${baseURL}/user/my-profile/singleUpload`