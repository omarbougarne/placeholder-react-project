import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Example API

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching items: ' + error.message);
    }
};