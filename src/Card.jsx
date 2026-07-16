const Card = ({ item }) => {
  return (
    <article className="place-card">
      <div className="place-card__content">
        <span className="place-card__status">{item.etat}</span>

        <h2>{item.nom}</h2>

        <p className="place-card__location">
          {item.commune} · {item.code_postal}
        </p>

        <p className="place-card__address">{item.adresse}</p>

        <p className="place-card__typology">{item.typologie}</p>

        {item.type_innovation && (
          <p className="place-card__innovation">
            {item.type_innovation}
          </p>
        )}

        {item.texte_descriptif && (
          <p className="place-card__description">
            {item.texte_descriptif}
          </p>
        )}
      </div>

      <div className="place-card__actions">
        {item.site_internet && (
          <a
            className="place-card__link"
            href={item.site_internet}
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
      </div>
    </article>
  )
}

export default Card