import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5001/api/v1/product'
})