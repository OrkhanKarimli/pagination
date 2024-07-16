import React from "react";
import {fetchItems} from "../../services/api";
import Pagination from "./Pagination";
import { fireEvent, render, screen} from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
jest.mock("../../services/api", () => ({
    fetchItems: jest.fn(async (page, itemPerPage) => {
        const allItems = [
            { id: 1, title: 'Product1', price: 10, images: 'img1.jpg' },
            { id: 2, title: 'Product2', price: 10, images: 'img2.jpg' },
            { id: 3, title: 'Product3', price: 10, images: 'img3.jpg' },
            { id: 4, title: 'Product4', price: 10, images: 'img4.jpg' },
            { id: 5, title: 'Product5', price: 10, images: 'img5.jpg' },
        ];
        return allItems.slice((page - 1) * itemPerPage, page * itemPerPage);
    })
}));
describe("group button tests", () => {
    test("test buttons click", async () => {
        
        render(<Pagination itemPerPage={2} totalPage={3} />);

        expect(await screen.findByText('Product1')).toBeInTheDocument();
        expect(screen.getByText('Product2')).toBeInTheDocument();
        expect(screen.queryByText('Product3')).not.toBeInTheDocument();

      
        fireEvent.click(screen.getByText('Next'));
        expect(await screen.findByText('Product3')).toBeInTheDocument();
        expect(screen.getByText('Product4')).toBeInTheDocument();
        expect(screen.queryByText('Product1')).not.toBeInTheDocument();

        
        fireEvent.click(screen.getByText('Previous'));
        expect(await screen.findByText('Product1')).toBeInTheDocument();
        expect(screen.getByText('Product2')).toBeInTheDocument();
        expect(screen.queryByText('Product5')).not.toBeInTheDocument();
    });
});