import { useState } from 'react'
import './Header.scss'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="header" id="header">

            <div className="header-brand">
                <a
                    href="#home"
                    aria-label="Accueil - Portfolio de Aihau-te-hau"
                    className="header-brand-link"
                    onClick={closeMenu}
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

            <button
                className={`header-menu-button ${menuOpen ? 'is-open' : ''}`}
                type="button"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav
                id="main-navigation"
                className={`header-navigation ${menuOpen ? 'is-open' : ''}`}
                aria-label="Navigation principale"
            >
                <ul className="header-nav">
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            À PROPOS
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            PROJETS
                        </a>
                    </li>

                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            COMPÉTENCES
                        </a>
                    </li>

                    <li className="header-contact-link">
                        <a href="#contact" onClick={closeMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
