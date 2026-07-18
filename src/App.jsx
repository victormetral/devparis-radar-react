import { useState } from "react"

import CategoryFilters from "./components/CategoryFilters.jsx"
import Filters from "./components/Filters.jsx"
import Hero from "./components/Hero.jsx"
import Map from "./components/Map.jsx"
import ResultsSection from "./components/ResultsSection.jsx"

import { useFiltresLieux } from "./hooks/useFiltresLieux.js"
import { useLieux } from "./hooks/useLieux.js"

function App() {
  const {
    donnees,
    chargement,
    erreur,
    recharger,
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
    compteCategories,
  } = useFiltresLieux({
    donnees,
    lieuxParPage,
  })

  const lieuSelectionneVisible =
    donneesFiltrees.find(
      (lieu) =>
        lieu.id === lieuSelectionne?.id
    ) || null

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
            compteCategories={
              compteCategories
            }
          />

          <ResultsSection
            chargement={chargement}
            erreur={erreur}
            recharger={recharger}
            donneesFiltrees={
              donneesFiltrees
            }
            donneesPaginees={
              donneesPaginees
            }
            pageActuelle={pageActuelle}
            nombrePages={nombrePages}
            lieuxParPage={lieuxParPage}
            setPageActuelle={
              setPageActuelle
            }
            lieuSelectionne={
              lieuSelectionneVisible
            }
            setLieuSelectionne={
              setLieuSelectionne
            }
          />
        </section>

        <Map
          lieux={donneesFiltrees}
          lieuSelectionne={
            lieuSelectionneVisible
          }
        />
      </main>
    </>
  )
}

export default App