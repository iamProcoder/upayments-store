import axios from "axios";

const apiUrl: string = process.env.REACT_APP_API_URL;
const axiosAuth = axios.create({
    baseURL: apiUrl,
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

axiosAuth.interceptors.request.use((config: any) => { 
    const lsToken: string = localStorage.getItem("token")!;
    const accessToken = lsToken ?? "";
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
 }, error => {
     return Promise.reject(error)
 });

export default axiosAuth;