import React, { useState, useEffect } from "react";
import { fetchItems } from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Pagination = ({ itemPerPage, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, itemPerPage]);

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentProducts = items && items.length > 0 ? items.slice(startIndex, endIndex) : [];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pagination container mt-3">
      <ul className="product-list row justify-content-around">
        {currentProducts.map(product => (
          <li key={product.id} role="listitem" className="card col-md-3 mb-5 me-2">
            <img className="card-img-top" loading="lazy" src={product.images} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}$</p>
            </div>
          </li>
        ))}
        <div>
          <button className="controlBtn" onClick={handleClickPrev} disabled={currentPage === 1}>
            Previous
          </button>
          <button className="controlBtn" onClick={handleClickNext} disabled={currentPage === totalPage}>
            Next
          </button>
          <p className="page-info">Page {currentPage} of {totalPage}</p>
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
