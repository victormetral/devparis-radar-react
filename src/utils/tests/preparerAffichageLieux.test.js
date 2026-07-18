import {
  describe,
  expect,
  it,
} from "vitest"

import {
  extraireValeursUniques,
  paginerLieux,
} from "../preparerAffichageLieux.js"

describe("extraireValeursUniques", () => {
  it("retourne les valeurs uniques triées", () => {
    const lieux = [
      { commune: "Paris 15e" },
      { commune: "Paris 13e" },
      { commune: "Paris 15e" },
      { commune: "Paris 14e" },
    ]

    const resultat =
      extraireValeursUniques(
        lieux,
        "commune"
      )

    expect(resultat).toEqual([
      "Paris 13e",
      "Paris 14e",
      "Paris 15e",
    ])
  })

  it("retire les valeurs vides", () => {
    const lieux = [
      { commune: "Paris 12e" },
      { commune: "" },
      { commune: null },
      { commune: undefined },
    ]

    const resultat =
      extraireValeursUniques(
        lieux,
        "commune"
      )

    expect(resultat).toEqual([
      "Paris 12e",
    ])
  })
})

describe("paginerLieux", () => {
  it("retourne les lieux de la page demandée", () => {
    const lieux = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ]

    const resultat = paginerLieux({
      lieux,
      pageActuelle: 2,
      lieuxParPage: 2,
    })

    expect(
      resultat.lieuxPagines
    ).toEqual([
      { id: 3 },
      { id: 4 },
    ])

    expect(
      resultat.nombrePages
    ).toBe(3)
  })

  it("retourne au minimum une page", () => {
    const resultat = paginerLieux({
      lieux: [],
      pageActuelle: 1,
      lieuxParPage: 12,
    })

    expect(
      resultat.lieuxPagines
    ).toEqual([])

    expect(
      resultat.nombrePages
    ).toBe(1)
  })
})