import "./pagination.scss";

export const Paginition = ({ PAGES, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= PAGES; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="page arrow"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prv) => prv - 1)}
      >
        Back
      </button>
      {generatedPages.map((page) => (
        <div key={page}>
          <div
            onClick={() => setCurrentPage(page)}
            className={currentPage == page ? "page active" : "page"}
          >
            {page}
          </div>
        </div>
      ))}
      <button
        className="page arrow"
        disabled={currentPage === PAGES}
        onClick={() => setCurrentPage((prv) => prv + 1)}
      >
        Next
      </button>
    </div>
  );
};
