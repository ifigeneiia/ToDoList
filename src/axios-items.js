import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://to-do-list-29e45.firebaseio.com/'
})

export default axiosInstance;