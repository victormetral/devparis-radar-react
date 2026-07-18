const creerElementsPagination = (
  pageActuelle,
  nombrePages
) => {
  const elements = []

  for (
    let numeroPage = 1;
    numeroPage <= nombrePages;
    numeroPage += 1
  ) {
    const estPremierePage =
      numeroPage === 1

    const estDernierePage =
      numeroPage === nombrePages

    const estProcheDeLaPageActuelle =
      Math.abs(numeroPage - pageActuelle) <= 1

    const doitEtreAffichee =
      estPremierePage ||
      estDernierePage ||
      estProcheDeLaPageActuelle

    if (doitEtreAffichee) {
      elements.push(numeroPage)
      continue
    }

    const dernierElement =
      elements[elements.length - 1]

    if (dernierElement !== "...") {
      elements.push("...")
    }
  }

  return elements
}

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

  const elementsPagination =
    creerElementsPagination(
      pageActuelle,
      nombrePages
    )

  return (
    <nav
      className="pagination"
      aria-label="Pagination des résultats"
    >
      <button
        type="button"
        className="pagination__button"
        disabled={pageActuelle === 1}
        aria-label="Aller à la page précédente"
        aria-controls="places-container"
        onClick={() =>
          allerALaPage(pageActuelle - 1)
        }
      >
        Précédent
      </button>

      {elementsPagination.map(
        (element, index) => {
          if (element === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="pagination__ellipsis"
                aria-hidden="true"
              >
                …
              </span>
            )
          }

          return (
            <button
              key={element}
              type="button"
              className={
                pageActuelle === element
                  ? "pagination__button is-active"
                  : "pagination__button"
              }
              aria-current={
                pageActuelle === element
                  ? "page"
                  : undefined
              }
              aria-label={`Aller à la page ${element}`}
              aria-controls="places-container"
              onClick={() =>
                allerALaPage(element)
              }
            >
              {element}
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
        aria-label="Aller à la page suivante"
        aria-controls="places-container"
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