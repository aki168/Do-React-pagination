import React from 'react'

const Pagination = ({ perPage, totalItems, changePage, goToPrevPage, goToNextPage, currentPage }) => {

  // 獲取頁數arr : [1,2,3,4,5...]
  // for迴圈製造元件按鈕
  let paginateArr = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    paginateArr.push(i)
  }

  console.log(paginateArr); //[1,2,3,4,5,6,7,8,9,10]


  return (
    <nav className="mt-3">

      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? `disabled` :`` }`}>
          <a onClick={(e) => goToPrevPage(e,currentPage)} href="!#" className="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </a>
        </li>
        {paginateArr.map(num =>
          <li key={num} className="page-item">
            {/* 點 <a>tag 換頁：換指定頁num那一頁 */}
            <a onClick={(e) => changePage(e,num)} href="!#" className="page-link">
              {num}
            </a>
          </li>
        )}
        <li className={`page-item ${currentPage === Math.ceil(totalItems / perPage) ? `disabled` :`` }`}>
          <a onClick={(e) => goToNextPage(e,currentPage)} href="!#" className="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </a>
        </li>
      </ul>

    </nav>
  )
}

export default Pagination