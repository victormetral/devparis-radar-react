import { useEffect, useState } from "react"

import { chargerLieux } from "../services/lieuxApi.js"

export const useLieux = () => {
  const [donnees, setDonnees] = useState([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    const chargerDonnees = async () => {
      try {
        setChargement(true)
        setErreur("")

        const lieux = await chargerLieux(
          controller.signal
        )

        setDonnees(lieux)
      } catch (erreurRecue) {
        if (
          erreurRecue.name === "AbortError"
        ) {
          return
        }

        setErreur(
          "Impossible de charger les lieux pour le moment."
        )

        console.error(
          "Erreur de chargement :",
          erreurRecue.message
        )
      } finally {
        setChargement(false)
      }
    }

    chargerDonnees()

    return () => {
      controller.abort()
    }
  }, [])

  return {
    donnees,
    chargement,
    erreur,
  }
}