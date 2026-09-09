import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">

        {/* En-tête */}
        <div className="about__header">
          <div className="about__line"></div>

          <span className="about__label">À PROPOS</span>

          <div className="about__line"></div>
        </div>

        <h2 className="about__title">
          Mon parcours & aspirations
        </h2>

        {/* Contenu */}
        <div className="about__content">

          {/* Texte */}
          <div className="about__text">

            <p>
              Passionné par la convergence du design et du code, j'ai suivi
              un parcours rigoureux de formation en développement web,
              consolidé par des projets personnels concrets. Je m'efforce
              d'écrire un code propre, modulaire et hautement performant.
            </p>

            <p>
              Mon but est de rejoindre une équipe innovante au sein de
              laquelle je pourrais perfectionner mon expertise sur React,
              enrichir des design systems robustes et concevoir des
              applications web accessibles à tous.
            </p>

            <blockquote>
              "L'élégance du code, comme celle du design, réside dans sa
              simplicité."
            </blockquote>

          </div>

          {/* Statistiques */}
          <div className="about__stats">

            <div className="about__stat">
              <span className="about__stat-number">2 ans</span>
              <span className="about__stat-text">
                Pratique & formation intensive
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat-number">20+</span>
              <span className="about__stat-text">
                Projets personnels et académiques
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat-number">100%</span>
              <span className="about__stat-text">
                Engagé dans la qualité du code
              </span>
            </div>

          </div>
        </div>

      </div>

      <SectionDivider />
    </section>
  );
}

export default About;