import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2026 Aihau-te-hau - Tous droits réservés</p>

            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ✦ Retour en haut ✦
            </button>
        </footer>
    )
}

export default Footer