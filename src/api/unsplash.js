import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sYCdvQQBbi0VC6msjl3rQre8dzVHlx628IXgHYAOcDw'
    }
});