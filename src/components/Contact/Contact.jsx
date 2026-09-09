import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <div className="header-line"></div>

                <span className="section-label">
                CONTACT
                </span>
                <div className="header-line"></div>
            </div>

            <h2>Contactez-moi</h2>

            <p>VVous avez un projet en tête ou une opportunité de poste junior à pourvoir ? N'hésitez pas à m'envoyer un message. Je serai ravi d'échanger avec vous !</p>

            <a href="mailto:your-email@example.com" className="contact-link">
                m'envoyer un message
            </a>

            <SectionDivider />

            <div className="social-links">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </section>
    );
}

export default Contact;