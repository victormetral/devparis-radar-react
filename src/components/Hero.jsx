const Hero = () => {
  return (
    <header className="site-header">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__tagline">
            OpenData Paris · Tech · Innovation
          </p>

          <h1>DevParis Radar</h1>

          <p className="hero__description">
            Explore les lieux tech, fablabs, espaces d’innovation,
            coworking et projets numériques autour de Paris.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--primary">
            <span>API</span>
            <strong>OpenData Paris</strong>
          </div>

          <div className="hero__card hero__card--secondary">
            <span>Carte</span>
            <strong>Leaflet</strong>
          </div>

          <div className="hero__card hero__card--tertiary">
            <span>Projet</span>
            <strong>Portfolio React</strong>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Hero