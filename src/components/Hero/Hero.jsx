import './Card.jsx'
import './Hero.sss'

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-availability">
                    ✦ DISPONIBLE POUR OPPORTUNITÉS ✦
                </p>

                <p className="hero-intro">
                    CRÉER DES INTERFACES
                </p>

                <h1>
                    Fluides
                    <span aria-hidden="true">&</span>
                    Interactives
                </h1>

                <p className="hero-description">
                    Développeur full-stack junior spécialisé dans la conception
                    d'expériences web modernes avec React, TypeScript et Tailwind CSS.
                    France, Suisse.
                </p>

                <div className="hero-actions">
                    <a href="#projects">
                        Voir mes projets
                    </a>

                    <a href="#contact">
                        Me contacter
                    </a>
                </div>
            </div>

            <div className="hero-card-wrapper">
                {/* <Card /> */}
            </div>
        </section>
  )
}

export default Hero