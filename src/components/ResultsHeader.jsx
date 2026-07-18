const ResultsHeader = ({
  nombreResultats,
  pageActuelle,
  nombrePages,
  lieuxParPage,
}) => {
  return (
    <header className="results-header">
      <div>
        <p className="results-header__eyebrow">
          Résultats filtrés
        </p>

        <h2>{nombreResultats} lieux trouvés</h2>
      </div>

      <p className="results-header__meta">
        Page {pageActuelle} sur {nombrePages} · {lieuxParPage} lieux par page
      </p>
    </header>
  )
}

export default ResultsHeader