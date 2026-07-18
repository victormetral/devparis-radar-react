import {
  describe,
  expect,
  it,
} from "vitest"

import { filtrerLieux } from "../filtrerLieux.js"

const lieux = [
  {
    nom: "Paris Fablab",
    adresse: "10 rue Tech",
    commune: "Paris 10e",
    etat: "Existant",
    typologie: "Fablab",
    typeInnovation: "Numérique",
    description:
      "Un atelier de fabrication numérique.",
  },
  {
    nom: "Cowork République",
    adresse: "20 avenue République",
    commune: "Paris 11e",
    etat: "En projet",
    typologie: "Coworking",
    typeInnovation: "Espace partagé",
    description:
      "Un espace de travail partagé.",
  },
]

describe("filtrerLieux", () => {
  it("filtre avec le texte de recherche", () => {
    const resultat = filtrerLieux({
      lieux,
      recherche: "fablab",
      communeSelectionnee: "Toutes",
      etatSelectionne: "Tous",
      categorieSelectionnee: "Tous",
    })

    expect(resultat).toEqual([
      lieux[0],
    ])
  })

  it("filtre avec la commune et l’état", () => {
    const resultat = filtrerLieux({
      lieux,
      recherche: "",
      communeSelectionnee: "Paris 11e",
      etatSelectionne: "En projet",
      categorieSelectionnee: "Tous",
    })

    expect(resultat).toEqual([
      lieux[1],
    ])
  })

  it("filtre avec la catégorie", () => {
    const resultat = filtrerLieux({
      lieux,
      recherche: "",
      communeSelectionnee: "Toutes",
      etatSelectionne: "Tous",
      categorieSelectionnee: "Fablab",
    })

    expect(resultat).toEqual([
      lieux[0],
    ])
  })
})