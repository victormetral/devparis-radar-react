const motsClesTech = [
  "tech",
  "numérique",
  "digital",
  "startup",
  "start-up",
  "fablab",
  "incubateur",
  "coworking",
  "maker",
  "prototype",
  "prototypage",
  "data",
  "robotique",
  "logiciel",
  "open source",
  "innovation technologique",
  "tiers-lieu",
]

const motsClesHorsSujet = [
  "agriculture",
  "agricole",
  "jardin",
  "jardinage",
  "potager",
  "théâtre",
  "crèche",
  "résidence",
  "hôtel",
  "hôtellerie",
  "logement",
  "supermarché",
  "alimentaire",
]

const creerTexteLieu = (lieu) => {
  return [
    lieu.nom,
    lieu.adresse,
    lieu.commune,
    lieu.etat,
    lieu.typologie,
    lieu.typeInnovation,
    lieu.description,
    lieu.siteInternet,
  ]
    .join(" ")
    .toLowerCase()
}

const contientMotCle = (texte, motsCles) => {
  return motsCles.some((motCle) =>
    texte.includes(motCle)
  )
}

export const filtrerLieuxTech = (lieux) => {
  return lieux.filter((lieu) => {
    const texteLieu = creerTexteLieu(lieu)

    const estTech = contientMotCle(
      texteLieu,
      motsClesTech
    )

    const estHorsSujet = contientMotCle(
      texteLieu,
      motsClesHorsSujet
    )

    return estTech && !estHorsSujet
  })
}