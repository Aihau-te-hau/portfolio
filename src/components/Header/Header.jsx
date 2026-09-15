import './Header.scss'

function Header() {
    return (
        <header className="header" id="header">
            <div className="header-brand">
                <a
                href="#home"
                aria-label="Accueil - Portfolio de Aihau-te-hau"
                className="header-brand-link"
                >
                    <div className="header-logo-container">
                        <span className="header-logo-text">AH</span>
                    </div>

                    <div className="header-identity">
                        <p className="header-name">AIHAU-TE-HAU</p>
                        <p className="header-title">DÉVELOPPEUR WEB</p>
                    </div>
                </a>
            </div>

            <nav aria-label="Navigation principale">
                <ul className="header-nav">
                    <li>
                        <a href="#about">À PROPOS</a>
                    </li>
                    <li>
                        <a href="#projects">PROJETS</a>
                    </li>
                    <li>
                        <a href="#skills">COMPÉTENCES</a>
                    </li>
                    <li className="header-contact-link">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header