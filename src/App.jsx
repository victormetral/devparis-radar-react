import { useEffect, useState } from "react"
import Card from "./Card.jsx"
import Hero from "./Hero.jsx"
import Filters from "./Filters.jsx"
import CategoryFilters from "./CategoryFilters.jsx"
import Pagination from "./Pagination.jsx"
import ResultsHeader from "./ResultsHeader.jsx"
import { filtrerLieux } from "./filtrerLieux.js"
import Map from "./Map.jsx"

function App() {
  const [donnees, setDonnees] = useState([])
  const [recherche, setRecherche] = useState("")
  const [communeSelectionnee, setCommuneSelectionnee] = useState("Toutes")
  const [etatSelectionne, setEtatSelectionne] = useState("Tous")
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("Tous")
  const [pageActuelle, setPageActuelle] = useState(1)
  const [lieuSelectionne, setLieuSelectionne] = useState(null)

  const lieuxParPage = 12

  const chargerDonnees = async () => {
    try {
      const limit = 100
      let offset = 0
      let total = Infinity
      let tousLesResultats = []

      while (offset < total) {
        const reponse = await fetch(
          `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arc_innovation/records?limit=${limit}&offset=${offset}`
        )

        const resultat = await reponse.json()

        tousLesResultats = [
          ...tousLesResultats,
          ...resultat.results,
        ]

        total = resultat.total_count
        offset += limit
      }

      setDonnees(tousLesResultats)
    } catch (erreur) {
      console.error(
        "Erreur de chargement :",
        erreur.message
      )
    }
  }

  useEffect(() => {
    chargerDonnees()
  }, [])

  useEffect(() => {
    setPageActuelle(1)
  }, [
    recherche,
    communeSelectionnee,
    etatSelectionne,
    categorieSelectionnee,
  ])

  const communes = [
    ...new Set(donnees.map((lieu) => lieu.commune)),
  ]
    .filter(Boolean)
    .sort()

  const etats = [
    ...new Set(donnees.map((lieu) => lieu.etat)),
  ]
    .filter(Boolean)
    .sort()

  const donneesFiltrees = filtrerLieux({
    lieux: donnees,
    recherche,
    communeSelectionnee,
    etatSelectionne,
    categorieSelectionnee,
  })

  const debut = (pageActuelle - 1) * lieuxParPage
  const fin = debut + lieuxParPage

  const donneesPaginees = donneesFiltrees.slice(
    debut,
    fin
  )

  const nombrePages = Math.ceil(
    donneesFiltrees.length / lieuxParPage
  )

  return (
    <>
      <Hero />

      <main className="app-layout">
        <section className="app-content">
          <Filters
            recherche={recherche}
            setRecherche={setRecherche}
            communeSelectionnee={
              communeSelectionnee
            }
            setCommuneSelectionnee={
              setCommuneSelectionnee
            }
            communes={communes}
            etatSelectionne={etatSelectionne}
            setEtatSelectionne={
              setEtatSelectionne
            }
            etats={etats}
            setCategorieSelectionnee={
              setCategorieSelectionnee
            }
          />

          <CategoryFilters
            categorieSelectionnee={
              categorieSelectionnee
            }
            setCategorieSelectionnee={
              setCategorieSelectionnee
            }
          />

          <ResultsHeader
            nombreResultats={
              donneesFiltrees.length
            }
            pageActuelle={pageActuelle}
            nombrePages={nombrePages}
            lieuxParPage={lieuxParPage}
          />

         

          {donneesFiltrees.length === 0 ? (
            <p className="empty-message">
              Aucun lieu ne correspond à votre
              recherche.
            </p>
          ) : (
            <>
              <section id="places-container">
                {donneesPaginees.map(
                  (lieu, index) => (
                    <Card
                      item={lieu}
                      key={index}
                      setLieuSelectionne={setLieuSelectionne}
                      estSelectionne={lieu === lieuSelectionne}
                    />
                  )
                )}
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
        </section>

        <Map lieux={donneesFiltrees}
        lieuSelectionne={lieuSelectionne} />

      </main>
    </>
  )
}

export default App