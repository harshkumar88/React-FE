import React from 'react';
import './styles/pagination.scss';

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  pageSizeOptions,
  selectedPageSize,
  setSelectedPageSize,
  getPageRange,
  translate = (text) => text, // fallback if i18n not provided
}) => {
  const handlePageSizeChange = (e) => {
    setSelectedPageSize(Number(e.target.value));
  };

  if (!totalPages) return null;

  return (
    <div className="row d-flex flex-wrap align-items-center">
      <div className="d-flex align-content-center flex-wrap justify-content-start align-items-center space-x-2 col-sm-auto">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination-prv-btn"
        >
          <div className="d-flex align-content-center justify-content-center flex-wrap text-base text-semibold">
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto me-2"
            >
              <path
                d="M0.647804 4.33751C0.649309 4.15164 0.720708 3.97314 0.847804 3.83751L4.1478 0.547508C4.27806 0.410544 4.45879 0.333008 4.6478 0.333008C4.83682 0.333008 5.01755 0.410544 5.1478 0.547508C5.28477 0.677761 5.3623 0.858497 5.3623 1.04751C5.3623 1.23652 5.28477 1.41726 5.1478 1.54751L2.3478 4.33751L5.1378 7.13751C5.27477 7.26776 5.3523 7.4485 5.3523 7.63751C5.3523 7.82652 5.27477 8.00726 5.1378 8.13751C5.00755 8.27448 4.82681 8.35201 4.6378 8.35201C4.44879 8.35201 4.26806 8.27448 4.1378 8.13751L0.847804 4.83751C0.720708 4.70188 0.649309 4.52338 0.647804 4.33751Z"
                fill="#64707D"
              />
            </svg>
            <span>{translate('previous')}</span>
          </div>
        </button>

        {getPageRange().map((page, i) => (
          <button
            key={i}
            onClick={() => page !== '...' && onPageChange(+page)}
            disabled={page === '...'}
            className={`page-number ${currentPage === page ? 'active' : ''} ${
              page === '...' ? 'pointer-events-none' : ''
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination-next-btn"
        >
          <div className="d-flex align-content-center justify-content-center flex-wrap">
            <span>{translate('next')}</span>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto ms-2"
            >
              <path
                d="M1.35135 8.00718C1.166 8.00797 0.988605 7.93194 0.861351 7.79718C0.724386 7.66692 0.646851 7.48619 0.646851 7.29718C0.646851 7.10817 0.724386 6.92743 0.861351 6.79718L3.65135 4.00718L0.861351 1.20718C0.724386 1.07692 0.646851 0.896187 0.646851 0.707176C0.646851 0.518165 0.724386 0.337429 0.861351 0.207176C0.991604 0.0702117 1.17234 -0.00732422 1.36135 -0.00732422C1.55036 -0.00732422 1.7311 0.0702117 1.86135 0.207176L5.15135 3.50718C5.42059 3.78614 5.42059 4.22821 5.15135 4.50718L1.85135 7.79718C1.71967 7.93152 1.53946 8.0072 1.35135 8.00718Z"
                fill="#64707D"
              />
            </svg>
          </div>
        </button>
      </div>

      <div className="ms-auto col-sm-auto actions">
        <select
          className="primary-ng-select per-page"
          value={selectedPageSize}
          onChange={handlePageSizeChange}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {translate('showing')} <b>{size}</b> / {translate('page')}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
