const axios = require('axios');
const API_URL = "https://api.escuelajs.co/api/v1";

export const fetchItems = async (page, itemPerPage) => {
    try {
        const response = await axios.get(`${API_URL}/products`, {
            params: {
                page: page,
                limit: itemPerPage,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching items', error);
        return [];
    }
};


