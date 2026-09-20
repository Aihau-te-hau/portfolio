import Card from "./Card.jsx";
import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import './Hero.scss'

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-content-parts">
                    <p className="hero-label label">
                        ✦ DISPONIBLE POUR OPPORTUNITÉS ✦
                    </p>

                    <p className="hero-intro">
                        CRÉER DES INTERFACES
                    </p>

                    <h1>
                        Fluides
                        <span aria-hidden="true" className="hero-accent">&</span>
                        Interactives
                    </h1>

                    <p className="hero-description">
                        Développeur full-stack spécialisé dans la conception
                        d'expériences web modernes avec React, TypeScript et Tailwind CSS.
                        France, Suisse.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="hero-button-projects">
                            VOIR MES PROJETS
                        </a>

                        <a href="#contact" className="hero-button-contact">
                            ME CONTACTER
                        </a>
                    </div>
                </div>

                <div className="hero-card-wrapper">
                    <Card />
                </div>

            </div>

            <SectionDivider />
        </section>
  )
}

export default Hero