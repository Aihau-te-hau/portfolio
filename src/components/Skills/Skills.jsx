import SectionDivider from '../SectionDivider/SectionDivider'
import "./Skills.scss"

function Skills() {
    return (
        <section className="skills" id="skills">
        <div className="skills-header">
            <div className="skills-line"></div>

            <span className="skills-label label">
            COMPÉTENCES
            </span>

            <div className="skills-line"></div>
        </div>

        <h2>Mon arsenal technologique</h2>

            <div className="skills-grid">
                <div className="skills-card">
                    <div className="skills-card-separator">
                        <SectionDivider />
                    </div>

                    <h3>Full-stack</h3>

                    <ul title="Full-stack">
                        <li>✦ HTML5/CSS3</li>
                        <li>✦ JavaScript ES6+</li>
                        <li>✦ React</li>
                        <li>✦ Node.js</li>
                        <li>✦ MongoDB</li>
                        <li>✦ MySQL</li>
                        <li>✦ API REST</li>
                    </ul>
                </div>
                <div className="skills-card">
                    <div className="skills-card-separator">
                        <SectionDivider />
                    </div>

                    <h3>Outils & Design</h3>
                    
                    <ul title="Outils & Design">
                        <li>✦ Figma</li>
                        <li>✦ Git</li>
                        <li>✦ GitHub</li>
                        <li>✦ UI/UX Design</li>
                        <li>✦ Responsive Design</li>
                        <li>✦ Accessibilité</li>
                        <li>✦ SEO</li>
                    </ul>
                </div>
                <div className="skills-card">
                    <div className="skills-card-separator">
                        <SectionDivider />
                    </div>

                    <h3>Gestion de projet & GRC</h3>

                    <ul title="Gestion de projet & GRC">
                        <li>✦ Agile</li>
                        <li>✦ Scrum</li>
                        <li>✦ Kanban</li>
                        <li>✦ RGPD</li>
                        <li>✦ OWASP</li>
                        <li>✦ Rigueur</li>
                        <li>✦Communication</li>
                    </ul>
                </div>
            </div>

            <SectionDivider />

        </section>
    );
}

export default Skills