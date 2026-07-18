import { useEffect, useState } from "react"

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
  }
}