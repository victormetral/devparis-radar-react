const Pagination = ({
  nombrePages,
  pageActuelle,
  setPageActuelle,
}) => {
  return (
    <nav className="pagination" aria-label="Pagination">
      {Array.from({ length: nombrePages }, (_, index) => (
        <button
          key={index + 1}
          type="button"
          onClick={() => setPageActuelle(index + 1)}
          className={
            pageActuelle === index + 1
              ? "pagination__button is-active"
              : "pagination__button"
          }
        >
          {index + 1}
        </button>
      ))}
    </nav>
  )
}

export default Pagination