import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./Contact.scss";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <div className="header-line"></div>

                    <span className="section-label label">
                    CONTACT
                    </span>
                    <div className="header-line"></div>
                </div>

                <h2>Travaillons ensemble</h2>

                <p>Vous avez un projet en tête ou une opportunité de poste junior à pourvoir ? N'hésitez pas à m'envoyer un message. Je serai ravi d'échanger avec vous !</p>

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
            </div>
        </section>
    );
}

export default Contact;