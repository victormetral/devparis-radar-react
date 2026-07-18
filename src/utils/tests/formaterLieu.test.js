import {
  describe,
  expect,
  it,
} from "vitest"

import { formaterLieu } from "../formaterLieu.js"

describe("formaterLieu", () => {
  it("transforme une donnée brute complète", () => {
    const lieuBrut = {
      nom: "Tech Paris",
      adresse: "10 rue de Paris",
      commune: "Paris 10e",
      etat: "Existant",
      typologie: "Coworking",
      type_innovation: "Numérique",
      texte_descriptif:
        "Un espace consacré aux projets numériques.",
      site_internet: "https://exemple.fr",
      contact_mail: "contact@exemple.fr",
      contact_telephonique: "0102030405",
      xy: {
        lat: 48.87,
        lon: 2.35,
      },
    }

    const resultat =
      formaterLieu(lieuBrut)

    expect(resultat).toEqual({
      id: "Tech Paris-10 rue de Paris",
      nom: "Tech Paris",
      adresse: "10 rue de Paris",
      commune: "Paris 10e",
      etat: "Existant",
      typologie: "Coworking",
      typeInnovation: "Numérique",
      description:
        "Un espace consacré aux projets numériques.",
      siteInternet: "https://exemple.fr",
      email: "contact@exemple.fr",
      telephone: "0102030405",
      coordonnees: {
        latitude: 48.87,
        longitude: 2.35,
      },
    })
  })

  it("utilise les valeurs par défaut", () => {
    const resultat = formaterLieu({})

    expect(resultat.nom).toBe(
      "Nom inconnu"
    )

    expect(resultat.adresse).toBe(
      "Adresse inconnue"
    )

    expect(resultat.description).toBe(
      "Description non disponible"
    )

    expect(resultat.coordonnees).toBeNull()
  })
})