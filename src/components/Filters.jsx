const Filters = ({
  recherche,
  setRecherche,
  communeSelectionnee,
  setCommuneSelectionnee,
  communes,
  etatSelectionne,
  setEtatSelectionne,
  etats,
  setCategorieSelectionnee,
}) => {
  const reinitialiserFiltres = () => {
    setRecherche("")
    setCommuneSelectionnee("Toutes")
    setEtatSelectionne("Tous")
    setCategorieSelectionnee("Tous")
  }

  return (
    <section
      className="controls"
      aria-label="Filtres de recherche"
    >
      <div className="controls__field">
        <label htmlFor="search-input">
          Rechercher un lieu
        </label>

        <div className="search-field">
          <input
            id="search-input"
            type="text"
            placeholder="Nom, commune, typologie, innovation..."
            value={recherche}
            aria-controls="places-container"
            onChange={(event) =>
              setRecherche(event.target.value)
            }
          />

          <button
            id="clear-search"
            type="button"
            aria-label="Effacer la recherche"
            aria-controls="places-container"
            disabled={recherche === ""}
            onClick={() => setRecherche("")}
          >
            ×
          </button>
        </div>
      </div>

      <div className="controls__field">
        <label htmlFor="commune-select">
          Filtrer par commune
        </label>

        <select
          id="commune-select"
          value={communeSelectionnee}
          aria-controls="places-container"
          onChange={(event) =>
            setCommuneSelectionnee(
              event.target.value
            )
          }
        >
          <option value="Toutes">
            Toutes les communes
          </option>

          {communes.map((commune) => (
            <option
              key={commune}
              value={commune}
            >
              {commune}
            </option>
          ))}
        </select>
      </div>

      <div className="controls__field">
        <label htmlFor="etat-select">
          Filtrer par état
        </label>

        <select
          id="etat-select"
          value={etatSelectionne}
          aria-controls="places-container"
          onChange={(event) =>
            setEtatSelectionne(
              event.target.value
            )
          }
        >
          <option value="Tous">
            Tous les états
          </option>

          {etats.map((etat) => (
            <option
              key={etat}
              value={etat}
            >
              {etat}
            </option>
          ))}
        </select>
      </div>

      <div className="controls__field controls__field--button">
        <button
          id="reset-filters"
          type="button"
          aria-controls="places-container"
          onClick={reinitialiserFiltres}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </section>
  )
}

export default Filters