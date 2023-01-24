import axios from "axios";

const apiAxios = axios.create({
    baseURL: process.env.REACT_APP_VOILE_URL ?? 'http://localhost:8080/api',
});

export default apiAxios;