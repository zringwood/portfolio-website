import "./Biography.scss"
import Headshot from "../../assets/headshot.jpg"
import TacticsDB_icon from "../../assets/tacticsDB-icon.svg"
import { useNavigate } from "react-router"
function Biography() {
    const navigate = useNavigate()
    return (
        <body className="body">
            <article className="body__section body__section--profile">
                <img className="headshot" src={Headshot} alt="My Headshot"></img>
                <p className="body__profileContent">I am an ambitious software engineer with a passion for mathematics and elegant
                    problem-solving. With a strong background in the humanities complimenting my dedication to software development I’m sure I can be a valuable addition to any team.
                </p>
                <a href="https://linkedin.com/in/zachary-ringwood">Linkedin</a>
                <a href="https://github.com/zringwood">Github</a>
            </article>
            <article className="body__section body__section--foreground body__section--projects">
                <h2>Projects</h2>
                <div className="projectCard" onClick={() => navigate("/tactics")}>
                    <h3 className="projectCard__title">Tactics DB</h3>
                    <div className="projectCard__content">
                        <img className="projectCard__icon" src={TacticsDB_icon} alt=""></img>
                        <p className="projectCard__description">A huge database of pick-up-and-play chess puzzles for your commute!</p>
                    </div>
                </div>
            </article>
            <article className="body__section">
                <h2>Skills</h2>
                <h3>Webdev</h3>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                </ul>
                <h3>Data</h3>
                <ul>
                    <li>Tableau</li>
                    <li>R</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Git</li>

                </ul>
                <h3>Cloud</h3>
                <ul>
                    <li>Google Cloud Platform</li> <li>Docker</li> <li>YAML</li>
                </ul>
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
            </article>
            <article className="body__section body__section--foreground">
                <h2>Education</h2>
                <h3>Brainstation</h3>
                <h4>Diploma in Software Development</h4>
                <h3>Toronto Metropolitan</h3>
                <h4>Bachelors Degree in Philosophy</h4>
                <h3>RSGC</h3>
            </article>
            <article className="body__section">
                <h2>Interests</h2>
                <h3>Chess</h3>
                <h3>Judo / BJJ</h3>
            </article>
        </body>)
}

export default Biography;