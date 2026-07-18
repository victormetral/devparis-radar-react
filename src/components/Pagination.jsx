const Pagination = ({
  nombrePages,
  pageActuelle,
  setPageActuelle,
}) => {
  const allerALaPage = (numeroPage) => {
    setPageActuelle(numeroPage)

    document
      .querySelector(".results-header")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  return (
    <nav
      className="pagination"
      aria-label="Pagination des résultats"
    >
      <button
        type="button"
        className="pagination__button"
        disabled={pageActuelle === 1}
        onClick={() =>
          allerALaPage(pageActuelle - 1)
        }
      >
        Précédent
      </button>

      {Array.from(
        { length: nombrePages },
        (_, index) => {
          const numeroPage = index + 1

          return (
            <button
              key={numeroPage}
              type="button"
              onClick={() =>
                allerALaPage(numeroPage)
              }
              className={
                pageActuelle === numeroPage
                  ? "pagination__button is-active"
                  : "pagination__button"
              }
              aria-current={
                pageActuelle === numeroPage
                  ? "page"
                  : undefined
              }
            >
              {numeroPage}
            </button>
          )
        }
      )}

      <button
        type="button"
        className="pagination__button"
        disabled={
          pageActuelle === nombrePages
        }
        onClick={() =>
          allerALaPage(pageActuelle + 1)
        }
      >
        Suivant
      </button>
    </nav>
  )
}

export default Pagination