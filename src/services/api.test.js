// api.test.js
const {axios} = require('axios');
import { fetchItems } from './api';

jest.mock('axios');

describe('fetchItems', () => {
    it('success', async () => {
        const mockData = [{ id: 1, name: 'Test Product' }];
        axios.get.mockResolvedValue({ data: mockData });

        const data = await fetchItems(1, 10);

        expect(data).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products', {
            params: {
                page: 1,
                limit: 10,
            },
        });
    });

    it('API fail', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        const data = await fetchItems(1, 10);

        expect(data).toEqual([]);
        expect(axios.get).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products', {
            params: {
                page: 1,
                limit: 10,
            },
        });
    });
});
