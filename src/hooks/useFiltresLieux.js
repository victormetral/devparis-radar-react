import { useEffect, useState } from "react"

import { determinerCategorieLieu } from "../utils/determinerCategorieLieu.js"
import { filtrerLieux } from "../utils/filtrerLieux.js"

import {
  extraireValeursUniques,
  paginerLieux,
} from "../utils/preparerAffichageLieux.js"

export const useFiltresLieux = ({
  donnees,
  lieuxParPage,
}) => {
  const [recherche, setRecherche] =
    useState("")

  const [
    communeSelectionnee,
    setCommuneSelectionnee,
  ] = useState("Toutes")

  const [
    etatSelectionne,
    setEtatSelectionne,
  ] = useState("Tous")

  const [
    categorieSelectionnee,
    setCategorieSelectionnee,
  ] = useState("Tous")

  const [
    pageActuelle,
    setPageActuelle,
  ] = useState(1)

  useEffect(() => {
    setPageActuelle(1)
  }, [
    recherche,
    communeSelectionnee,
    etatSelectionne,
    categorieSelectionnee,
  ])

  const communes =
    extraireValeursUniques(
      donnees,
      "commune"
    )

  const etats =
    extraireValeursUniques(
      donnees,
      "etat"
    )

  const donneesSansFiltreCategorie =
    filtrerLieux({
      lieux: donnees,
      recherche,
      communeSelectionnee,
      etatSelectionne,
      categorieSelectionnee: "Tous",
    })

  const compteCategories =
    donneesSansFiltreCategorie.reduce(
      (compteurs, lieu) => {
        const categorie =
          determinerCategorieLieu(lieu)

        compteurs[categorie] =
          (compteurs[categorie] || 0) + 1

        return compteurs
      },
      {
        Tous:
          donneesSansFiltreCategorie.length,
      }
    )

  const donneesFiltrees =
    filtrerLieux({
      lieux: donnees,
      recherche,
      communeSelectionnee,
      etatSelectionne,
      categorieSelectionnee,
    })

  const {
    lieuxPagines: donneesPaginees,
    nombrePages,
  } = paginerLieux({
    lieux: donneesFiltrees,
    pageActuelle,
    lieuxParPage,
  })

  return {
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
  }
}