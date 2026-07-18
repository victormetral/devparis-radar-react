const Card = ({
  item,
  setLieuSelectionne,
  estSelectionne,
}) => {
  const selectionnerLieu = () => {
    setLieuSelectionne(item)
  }

  return (
    <article
      className={
        estSelectionne
          ? "place-card is-active"
          : "place-card"
      }
      aria-current={
        estSelectionne ? "true" : undefined
      }
    >
      <div className="place-card__content">
        <div className="place-card__top">
          <span className="place-card__status">
            {item.etat}
          </span>

          <h2>{item.nom}</h2>
        </div>

        <div className="place-card__details">
          <p>
            <strong>Adresse :</strong>
            <span>{item.adresse}</span>
          </p>

          <p>
            <strong>Commune :</strong>
            <span>{item.commune}</span>
          </p>

          <p>
            <strong>Typologie :</strong>
            <span>{item.typologie}</span>
          </p>

          <p>
            <strong>Innovation :</strong>
            <span>{item.typeInnovation}</span>
          </p>
        </div>

        <p className="place-card__description">
          {item.description}
        </p>
      </div>

      <div className="place-card__actions">
        {item.siteInternet && (
          <a
            className="place-card__link"
            href={item.siteInternet}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le site de ${item.nom}`}
          >
            Voir le site
          </a>
        )}

        {item.email && (
          <a
            className="place-card__link place-card__link--secondary"
            href={`mailto:${item.email}`}
            aria-label={`Envoyer un email à ${item.nom}`}
          >
            Email
          </a>
        )}

        {item.telephone && (
          <a
            className="place-card__link place-card__link--secondary"
            href={`tel:${item.telephone}`}
            aria-label={`Téléphoner à ${item.nom}`}
          >
            Téléphone
          </a>
        )}

        {item.coordonnees && (
          <button
            type="button"
            className="place-card__link place-card__link--map"
            aria-pressed={estSelectionne}
            onClick={selectionnerLieu}
          >
            {estSelectionne
              ? "Lieu affiché sur la carte"
              : "Voir sur la carte"}
          </button>
        )}
      </div>
    </article>
  )
}

export default Card