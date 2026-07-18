const ResultsHeader = ({
  nombreResultats,
  pageActuelle,
  nombrePages,
  lieuxParPage,
}) => {
  const texteResultats =
    nombreResultats > 1
      ? `${nombreResultats} lieux trouvés`
      : `${nombreResultats} lieu trouvé`

  return (
    <header
      className="results-header"
      aria-live="polite"
    >
      <p className="results-header__eyebrow">
        Résultats filtrés
      </p>

      <h2>{texteResultats}</h2>

      <p className="results-header__meta">
        Page {pageActuelle} sur {nombrePages}
        {" · "}
        {lieuxParPage} lieux par page
      </p>
    </header>
  )
}

export default ResultsHeader