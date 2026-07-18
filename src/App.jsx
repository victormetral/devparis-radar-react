import { useState } from "react"

import Card from "./components/Card.jsx"
import CategoryFilters from "./components/CategoryFilters.jsx"
import Filters from "./components/Filters.jsx"
import Hero from "./components/Hero.jsx"
import Map from "./components/Map.jsx"
import Pagination from "./components/Pagination.jsx"
import ResultsHeader from "./components/ResultsHeader.jsx"

import { useFiltresLieux } from "./hooks/useFiltresLieux.js"
import { useLieux } from "./hooks/useLieux.js"

function App() {
  const {
    donnees,
    chargement,
    erreur,
  } = useLieux()

  const [
    lieuSelectionne,
    setLieuSelectionne,
  ] = useState(null)

  const lieuxParPage = 12

  const {
    recherche,
    setRecherche,

    communeSelectionnee,
    setCommuneSelectionnee,
    communes,

    etatSelectionne,
    setEtatSelectionne,
    etats,

    categorieSelectionnee,
    setCategorieSelectionnee,

    pageActuelle,
    setPageActuelle,

    donneesFiltrees,
    donneesPaginees,
    nombrePages,
  } = useFiltresLieux({
    donnees,
    lieuxParPage,
  })

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
            etatSelectionne={
              etatSelectionne
            }
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

          {chargement ? (
            <p className="empty-message">
              Chargement des lieux...
            </p>
          ) : erreur ? (
            <p className="empty-message">
              {erreur}
            </p>
          ) : (
            <>
              <ResultsHeader
                nombreResultats={
                  donneesFiltrees.length
                }
                pageActuelle={
                  pageActuelle
                }
                nombrePages={
                  nombrePages
                }
                lieuxParPage={
                  lieuxParPage
                }
              />

              {donneesFiltrees.length === 0 ? (
                <p className="empty-message">
                  Aucun lieu ne correspond à votre recherche.
                </p>
              ) : (
                <>
                  <section id="places-container">
                    {donneesPaginees.map(
                      (lieu) => (
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
                      )
                    )}
                  </section>

                  <Pagination
                    nombrePages={
                      nombrePages
                    }
                    pageActuelle={
                      pageActuelle
                    }
                    setPageActuelle={
                      setPageActuelle
                    }
                  />
                </>
              )}
            </>
          )}
        </section>

        <Map
          lieux={donneesFiltrees}
          lieuSelectionne={
            lieuSelectionne
          }
        />
      </main>
    </>
  )
}

export default App