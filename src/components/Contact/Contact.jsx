import SectionDivider from "../SectionDivider/SectionDivider.jsx";
import "./Contact.scss";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-decoration">
                    <div className="contact-decoration-left"></div>
                    <div className="contact-decoration-right"></div>
                </div>
                <div className="contact-header">
                    <div className="contact-line"></div>

                    <span className="section-label label">
                    CONTACT
                    </span>
                    <div className="contact-line"></div>
                </div>

                <h2>Travaillons ensemble</h2>

                <p>Vous avez un projet en tête ou une opportunité de poste junior à pourvoir ? N'hésitez pas à m'envoyer un message. Je serai ravi d'échanger avec vous !</p>

                <a href="mailto:your-email@example.com" className="contact-link">
                    aihau-te-hau@outlook.fr
                </a>

                <SectionDivider />

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-links-linkedin">
                        LinkedIn
                    </a>
                    <p>✦</p>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-links-github">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;