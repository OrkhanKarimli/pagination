import React from "react";
import { fetchItems } from "../../services/api";
import Pagination from "./Pagination";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("group button tests", () => {
  jest.mock("../../services/api", () => ({
    fetchItems: jest.fn(async () => [
      { id: 1, title: "Product1", price: 10, images: "img1.jpg" },
      { id: 2, title: "Product2", price: 10, images: "img2.jpg" },
      { id: 3, title: "Product3", price: 10, images: "img3.jpg" },
      { id: 4, title: "Product4", price: 10, images: "img4.jpg" },
      { id: 5, title: "Product5", price: 10, images: "img5.jpg" },
    ]),
  }));
  test("test buttons click", async () => {
    render(<Pagination itemPerPage={2} totalPage={3} />);

    expect(
      await screen.findByRole("listitem", { name: "Product1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listitem", { name: "Product2" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("listitem", { name: "Product3" })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(
      await screen.findByRole("listitem", { name: "Product3" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listitem", { name: "Product4" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("listitem", { name: "Product1" })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    expect(
      await screen.findByRole("listitem", { name: "Product1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listitem", { name: "Product2" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("listitem", { name: "Product5" })
    ).not.toBeInTheDocument();
    console.log(fetchItems.mock.calls);
  });
});
