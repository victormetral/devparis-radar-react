import { determinerCategorieLieu } from "./determinerCategorieLieu.js"

export const filtrerLieux = ({
  lieux,
  recherche,
  communeSelectionnee,
  etatSelectionne,
  categorieSelectionnee,
}) => {
  const texteRecherche = recherche
    .trim()
    .toLowerCase()

  return lieux.filter((lieu) => {
    const correspondRecherche =
      lieu.nom
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.adresse
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.commune
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.etat
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.typologie
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.typeInnovation
        .toLowerCase()
        .includes(texteRecherche) ||
      lieu.description
        .toLowerCase()
        .includes(texteRecherche)

    const correspondCommune =
      communeSelectionnee === "Toutes" ||
      lieu.commune === communeSelectionnee

    const correspondEtat =
      etatSelectionne === "Tous" ||
      lieu.etat === etatSelectionne

    const categorieDuLieu =
      determinerCategorieLieu(lieu)

    const correspondCategorie =
      categorieSelectionnee === "Tous" ||
      categorieDuLieu === categorieSelectionnee

    return (
      correspondRecherche &&
      correspondCommune &&
      correspondEtat &&
      correspondCategorie
    )
  })
}