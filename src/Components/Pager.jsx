export default function Pager({ page, numPage, onChangePage }) {
  return (
    <nav className="col-12 positioning">
      <ul className="pagination ">
        <li className={`page-item  ${page <= 1 ? "disabled" : ""}`}>
          <button
            className="page-link pager"
            onClick={() => onChangePage(page - 1)}
          >
            Previous
          </button>
        </li>
        {new Array(numPage).fill("").map((num, index) => (
          <li
            className={`page-item ${page === index + 1 ? "active" : ""} `}
            aria-current="page"
            key={index + 1}
          >
            <button
              className="page-link pager"
              onClick={() => onChangePage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${page >= numPage ? "disabled" : ""}`}>
          <button
            className="page-link pager"
            onClick={() => onChangePage(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
