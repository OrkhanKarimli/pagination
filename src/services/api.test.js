'use strict';
const axios=require("axios");
import { waitFor } from '@testing-library/react';
import { fetchItems } from './api';

jest.mock('axios');

describe('fetchItems', () => {
    it('fetches successfully data from an API', async () => {
        const mockData = [{ id: 1, name: 'Test Product' }];
        axios.get.mockResolvedValue({ data: mockData });

        await waitFor(async () => {
            const data = await fetchItems(1, 10);
            expect(data).toEqual(mockData);
            expect(axios.get).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products', {
                params: {
                    page: 1,
                    limit: 10,
                },
            });
        });
    });

    it('returns an empty array when the API call fails', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await waitFor(async () => {
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
});
