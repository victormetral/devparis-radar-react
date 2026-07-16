import { useEffect, useState } from "react"
import Card from "./Card.jsx"
import Hero from "./Hero.jsx"
import Filters from "./Filters.jsx"
import CategoryFilters from "./CategoryFilters.jsx"
import { categories } from "./categories.js"

function App() {
  const [donnees, setDonnees] = useState([])
  const [recherche, setRecherche] = useState("")
  const [communeSelectionnee, setCommuneSelectionnee] = useState("Toutes")
  const [etatSelectionne, setEtatSelectionne] = useState("Tous")
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("Tous")

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
        ...resultat.results
      ]
      total = resultat.total_count
      offset += limit
    
      }
      
      setDonnees(tousLesResultats)

    } catch (erreur) {
      console.error("Erreur de chargement :", erreur.message)
    }
  }

  useEffect(() => {
    chargerDonnees()
  }, [])

  const communes = [...new Set(donnees.map((item) => item.commune))].filter(Boolean).sort()
  const etats = [...new Set(donnees.map((item) => item.etat))].filter(Boolean).sort()
  const categorieActive = categories.find((categorie) => categorie.label === categorieSelectionnee)

  const donneesFiltrees = donnees.filter((item) => {
  
    const texteRecherche = recherche.toLowerCase()

  const correspondRecherche =
    item.nom?.toLowerCase().includes(texteRecherche) ||
    item.commune?.toLowerCase().includes(texteRecherche) ||
    item.typologie?.toLowerCase().includes(texteRecherche) ||
    item.type_innovation?.toLowerCase().includes(texteRecherche) ||
    item.texte_descriptif?.toLowerCase().includes(texteRecherche)
  
  const correspondCommune = 
    communeSelectionnee ==="Toutes" ||
    item.commune === communeSelectionnee

  const correspondEtat =
    etatSelectionne === "Tous" ||
    item.etat === etatSelectionne

    const texteLieu = [
        item.nom,
        item.adresse,
        item.commune,
        item.etat,
        item.typologie,
        item.type_innovation,
        item.texte_descriptif,
        item.site_internet,

    ]
        .filter(Boolean).join(" ").toLowerCase()

  const correspondCategorie =
    categorieSelectionnee === "Tous" ||
    categorieActive?.motsCles.some((motsCle) => texteLieu.includes(motsCle))

  return correspondRecherche && correspondCommune && correspondEtat && correspondCategorie

})

  return (
  <>
    <Hero />

    <main className="app-layout">
      <section className="app-content">
        <Filters
          recherche={recherche}
          setRecherche={setRecherche}
          communeSelectionnee={communeSelectionnee}
          setCommuneSelectionnee={setCommuneSelectionnee}
          communes={communes}
          etatSelectionne={etatSelectionne}
          setEtatSelectionne={setEtatSelectionne}
          etats={etats}
          setCategorieSelectionnee={setCategorieSelectionnee}
        />

        <CategoryFilters
          categorieSelectionnee={categorieSelectionnee}
          setCategorieSelectionnee={setCategorieSelectionnee}
        />

        <p>{donneesFiltrees.length} résultats</p>

        {donneesFiltrees.length === 0 ? (
          <p className="empty-message">
            Aucun lieu ne correspond à votre recherche.
          </p>
        ) : (
          <section id="places-container">
            {donneesFiltrees.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </section>
        )}
      </section>
    </main>
  </>
)
}

export default App