export const formaterLieu = (lieu) => {
  const latitude = lieu.xy?.lat
  const longitude = lieu.xy?.lon

  return {
    id: `${lieu.nom || "lieu-inconnu"}-${lieu.adresse || "adresse-inconnue"}`,

    nom: lieu.nom || "Nom inconnu",
    adresse: lieu.adresse || "Adresse inconnue",
    commune: lieu.commune || "Commune inconnue",
    etat: lieu.etat || "État inconnu",
    typologie: lieu.typologie || "Typologie inconnue",

    typeInnovation:
      lieu.type_innovation || "Type d'innovation inconnu",

    description:
      lieu.texte_descriptif || "Description non disponible",

    siteInternet: lieu.site_internet || "",
    email: lieu.contact_mail || "",
    telephone: lieu.contact_telephonique || "",

    coordonnees:
      typeof latitude === "number" &&
      typeof longitude === "number"
        ? { latitude, longitude }
        : null,
  }
}