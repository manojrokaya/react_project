import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </button>
        </li>
        {pageNumbers.map(num => (
          <li key={num} className={`page-item ${currentPage === num ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(num)}>
              {num}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
