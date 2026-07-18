import {
  useCallback,
  useEffect,
  useState,
} from "react"

import { chargerLieux } from "../services/lieuxApi.js"

export const useLieux = () => {
  const [donnees, setDonnees] =
    useState([])

  const [chargement, setChargement] =
    useState(true)

  const [erreur, setErreur] =
    useState("")

  const [
    numeroChargement,
    setNumeroChargement,
  ] = useState(0)

  const recharger = useCallback(() => {
    setNumeroChargement(
      (ancienNumero) => ancienNumero + 1
    )
  }, [])

  useEffect(() => {
    const controller =
      new AbortController()

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
          erreurRecue.name ===
          "AbortError"
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
        if (!controller.signal.aborted) {
          setChargement(false)
        }
      }
    }

    chargerDonnees()

    return () => {
      controller.abort()
    }
  }, [numeroChargement])

  return {
    donnees,
    chargement,
    erreur,
    recharger,
  }
}