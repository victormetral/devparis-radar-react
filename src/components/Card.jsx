const Card = ({
  item,
  setLieuSelectionne,
  estSelectionne,
}) => {
  return (
    <article
      className={
        estSelectionne
          ? "place-card is-active"
          : "place-card"
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
          >
            Voir le site
          </a>
        )}

        {item.email && (
          <a
            className="place-card__link place-card__link--secondary"
            href={`mailto:${item.email}`}
          >
            Email
          </a>
        )}

        {item.telephone && (
          <a
            className="place-card__link place-card__link--secondary"
            href={`tel:${item.telephone}`}
          >
            Téléphone
          </a>
        )}

        {item.coordonnees && (
          <button
            type="button"
            className="place-card__link place-card__link--map"
            onClick={() =>
              setLieuSelectionne(item)
            }
          >
            Voir sur la carte
          </button>
        )}
      </div>
    </article>
  )
}

export default Card