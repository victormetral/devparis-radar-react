import { categories } from "./categories.js"

export const filtrerLieux = ({
  lieux,
  recherche,
  communeSelectionnee,
  etatSelectionne,
  categorieSelectionnee,
}) => {
  const categorieActive = categories.find(
    (categorie) => categorie.label === categorieSelectionnee
  )

  const texteRecherche = recherche.toLowerCase()

  return lieux.filter((lieu) => {
    const correspondRecherche =
      lieu.nom?.toLowerCase().includes(texteRecherche) ||
      lieu.commune?.toLowerCase().includes(texteRecherche) ||
      lieu.typologie?.toLowerCase().includes(texteRecherche) ||
      lieu.type_innovation?.toLowerCase().includes(texteRecherche) ||
      lieu.texte_descriptif?.toLowerCase().includes(texteRecherche)

    const correspondCommune =
      communeSelectionnee === "Toutes" ||
      lieu.commune === communeSelectionnee

    const correspondEtat =
      etatSelectionne === "Tous" ||
      lieu.etat === etatSelectionne

    const texteLieu = [
      lieu.nom,
      lieu.adresse,
      lieu.commune,
      lieu.etat,
      lieu.typologie,
      lieu.type_innovation,
      lieu.texte_descriptif,
      lieu.site_internet,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()

    const correspondCategorie =
      categorieSelectionnee === "Tous" ||
      categorieActive?.motsCles.some((motCle) =>
        texteLieu.includes(motCle)
      )

    return (
      correspondRecherche &&
      correspondCommune &&
      correspondEtat &&
      correspondCategorie
    )
  })
}