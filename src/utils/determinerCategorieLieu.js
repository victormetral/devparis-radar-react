import { categories } from "../data/categories.js"

const creerTexteLieu = (lieu) => {
  return [
    lieu.nom,
    lieu.typologie,
    lieu.typeInnovation,
    lieu.description,
  ]
    .join(" ")
    .toLowerCase()
}

export const determinerCategorieLieu = (lieu) => {
  const texteLieu = creerTexteLieu(lieu)

  const categorieTrouvee = categories
    .filter((categorie) => categorie.label !== "Tous")
    .find((categorie) =>
      categorie.motsCles.some((motCle) =>
        texteLieu.includes(motCle)
      )
    )

  return categorieTrouvee?.label || "Autre"
}