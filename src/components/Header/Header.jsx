import Logo from './Logo.jsx'

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
                        <p className="header-name">Aihau-te-hau</p>
                        <p className="header-title">Développeur web</p>
                    </div>
                </a>
            </div>

            <nav aria-label="Navigation principale">
                <ul>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header