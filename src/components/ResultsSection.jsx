import Card from "./Card.jsx"
import Pagination from "./Pagination.jsx"
import ResultsHeader from "./ResultsHeader.jsx"

const ResultsSection = ({
  chargement,
  erreur,
  recharger,
  donneesFiltrees,
  donneesPaginees,
  pageActuelle,
  nombrePages,
  lieuxParPage,
  setPageActuelle,
  lieuSelectionne,
  setLieuSelectionne,
}) => {
  if (chargement) {
    return (
      <p
        className="empty-message"
        role="status"
        aria-live="polite"
      >
        Chargement des lieux...
      </p>
    )
  }

  if (erreur) {
    return (
      <div
        className="empty-message"
        role="alert"
      >
        <p>{erreur}</p>

        <button
          type="button"
          onClick={recharger}
        >
          Réessayer
        </button>
      </div>
    )
  }

  return (
    <>
      <ResultsHeader
        nombreResultats={
          donneesFiltrees.length
        }
        pageActuelle={pageActuelle}
        nombrePages={nombrePages}
        lieuxParPage={lieuxParPage}
      />

      {donneesFiltrees.length === 0 ? (
        <p
          className="empty-message"
          role="status"
          aria-live="polite"
        >
          Aucun lieu ne correspond à votre recherche.
        </p>
      ) : (
        <>
          <section
            id="places-container"
            aria-label="Liste des lieux"
          >
            {donneesPaginees.map((lieu) => (
              <Card
                key={lieu.id}
                item={lieu}
                setLieuSelectionne={
                  setLieuSelectionne
                }
                estSelectionne={
                  lieu.id ===
                  lieuSelectionne?.id
                }
              />
            ))}
          </section>

          <Pagination
            nombrePages={nombrePages}
            pageActuelle={pageActuelle}
            setPageActuelle={
              setPageActuelle
            }
          />
        </>
      )}
    </>
  )
}

export default ResultsSection