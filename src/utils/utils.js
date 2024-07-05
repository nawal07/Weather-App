import axios from 'axios';

const customAxios = axios.create({
    baseURL:'https://api.openweathermap.org'
}) 

export default customAxios


