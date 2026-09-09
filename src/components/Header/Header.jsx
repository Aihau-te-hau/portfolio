import Logo from './Logo.jsx'
import './Header.scss'

function Header() {
    return (
        <header>
            <div className="header-brand">
                <a
                href="#home"
                aria-label="Accueil - Portfolio de Aihau-te-hau"
                >
                    <Logo />

                    <div className="header-identity">
                        <p className="header-name">AIHAU-TE-HAU</p>
                        <p className="header-title">DÉVELOPPEUR WEB</p>
                    </div>
                </a>
            </div>

            <nav aria-label="Navigation principale">
                <ul>
                    <li>
                        <a href="#about">À PROPOS</a>
                    </li>
                    <li>
                        <a href="#projects">PROJETS</a>
                    </li>
                    <li>
                        <a href="#skills">COMPÉTENCES</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header