import SectionDivider from '../SectionDivider/SectionDivider'
import "./Skills.css"

function Skills() {
    return (
        <section className="skills" id="skills">
        <div className="skills-header">
            <div className="header-line"></div>

            <span className="section-label">
            COMPÉTENCES
            </span>

            <div className="header-line"></div>
        </div>

        <h2>Mon arsenal technologique</h2>

            <div className="skills-grid">
                <div className="skill-card">
                    <ul title="Full-stack">
                        <li>HTML5/CSS3</li>
                        <li>JavaScript ES6+</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>API REST</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <ul title="Outils & Design">
                        <li>Figma</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                        <li>Accessibilité</li>
                        <li>SEO</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <ul title="Gestion de projet & GRC">
                        <li>Agile</li>
                        <li>Scrum</li>
                        <li>Kanban</li>
                        <li>RGPD</li>
                        <li>OWASP</li>
                        <li>Rigueur</li>
                        <li>Communication</li>
                    </ul>
                </div>
            </div>

            <SectionDivider />

        </section>
    );
}

export default Skills