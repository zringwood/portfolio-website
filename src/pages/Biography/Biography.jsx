import "./Biography.scss"
import Headshot from "../../assets/headshot.png"
import TacticsDB_icon from "../../assets/tacticsDB-icon.svg"
import { useNavigate } from "react-router"
function Biography() {
    const navigate = useNavigate()
    return (<>
            <section className="profile">
                <div className="profile__content">
                <img className="profile__headshot" src={Headshot} alt="My Headshot"></img>
                <p className="profile__text">I am an ambitious software engineer with a passion for mathematics and elegant
                    problem-solving. With a strong background in the humanities complimenting my dedication to software development I’m sure I can be a valuable addition to any team.
                </p>
                </div>
                <div className="profile__links">
                    <a href="https://linkedin.com/in/zachary-ringwood">Linkedin</a>
                    <a href="https://github.com/zringwood">Github</a>
                </div>
            </section>
            <section className="projects">
                <h2 className="projects__title">Projects</h2>
                <div className="projectCard" onClick={() => navigate("/tactics")}>
                    <h3 className="projectCard__title">Tactics DB</h3>
                    <div className="projectCard__content">
                        <img className="projectCard__icon" src={TacticsDB_icon} alt=""></img>
                        <p className="projectCard__description">A huge database of pick-up-and-play chess puzzles for your commute!</p>
                    </div>
                </div>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <div className="skills">
                <article className="skillcard">
                <h3 className="skillcard__title">Webdev</h3>
                <ul className="skillcard__list">
                    <li className="skillcard__skill">React</li>
                    <li className="skillcard__skill">Javascript</li>
                    <li className="skillcard__skill">MySQL</li>
                    <li className="skillcard__skill">NoSQL</li>
                    <li className="skillcard__skill">HTML</li>
                    <li className="skillcard__skill">CSS</li>
                    <li className="skillcard__skill">SASS</li>
                </ul>
                </article>
                <article className="skillcard">
                <h3>Cloud</h3>
                <ul>
                    <li>Google Cloud Platform</li> <li>Docker</li> <li>YAML</li>
                </ul>
                </article>
                <article className="skillcard">
                    
                <h3>Data</h3>
                <ul>
                    <li>Tableau</li>
                    <li>R</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Git</li>

                </ul>
                </article>
                </div>
                <h3>Business</h3>
                <ul>
                    <li>Microsoft Excel</li>
                    <li>Public Speaking</li>
                    <li>Microsoft Word</li>
                </ul>

                <h3>Philosophy</h3>
                <ul>
                    <li>Hegelian Dialectics</li>
                    <li>Platonic Forms</li>
                    <li>French Phenomenology in the early 20th Century</li>
                </ul>
                
            </section>
            <section className="education">
                <h2>Education</h2>
                <h3>Brainstation</h3>
                <h4>Diploma in Software Development</h4>
                <h3>Toronto Metropolitan</h3>
                <h4>Bachelors Degree in Philosophy</h4>
                <h3>RSGC</h3>
            </section>
        </>)
}

export default Biography;