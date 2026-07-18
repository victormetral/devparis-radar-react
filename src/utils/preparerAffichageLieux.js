export const extraireValeursUniques = (
  lieux,
  propriete
) => {
  return [
    ...new Set(
      lieux.map((lieu) => lieu[propriete])
    ),
  ]
    .filter(Boolean)
    .sort()
}

export const paginerLieux = ({
  lieux,
  pageActuelle,
  lieuxParPage,
}) => {
  const debut =
    (pageActuelle - 1) * lieuxParPage

  const fin =
    debut + lieuxParPage

  const lieuxPagines =
    lieux.slice(debut, fin)

  const nombrePages = Math.max(
    1,
    Math.ceil(
      lieux.length / lieuxParPage
    )
  )

  return {
    lieuxPagines,
    nombrePages,
  }
}