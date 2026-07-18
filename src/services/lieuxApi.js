import { formaterLieu } from "../utils/formaterLieu.js"
import { filtrerLieuxTech } from "../utils/filtrerLieuxTech.js"
import { filtrerLieuxExploitables } from "../utils/filtrerLieuxExploitables.js"

const API_URL =
  "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arc_innovation/records"

const LIMITE_PAR_REQUETE = 100

export const chargerLieux = async (signal) => {
  let offset = 0
  let total = Infinity
  let tousLesResultats = []

  while (offset < total) {
    const url =
      `${API_URL}?limit=${LIMITE_PAR_REQUETE}&offset=${offset}`

    const reponse = await fetch(url, {
      signal,
    })

    if (!reponse.ok) {
      throw new Error(
        `Erreur HTTP : ${reponse.status}`
      )
    }

    const resultat = await reponse.json()

    tousLesResultats = [
      ...tousLesResultats,
      ...resultat.results,
    ]

    total = resultat.total_count
    offset += LIMITE_PAR_REQUETE
  }

  const lieuxFormates =
    tousLesResultats.map((lieu) =>
      formaterLieu(lieu)
    )

  const lieuxTech =
    filtrerLieuxTech(lieuxFormates)

  return filtrerLieuxExploitables(
    lieuxTech
  )
}