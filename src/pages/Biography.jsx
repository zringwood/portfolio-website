import "./Biography.scss"
import Headshot from "../assets/headshot.jpg"
import TacticsDB_icon from "../assets/tacticsDB-icon.svg"
function Biography() {
    return (
        <body className="body">
            <article className="body__section body__section--profile">
                <img className="headshot" src={Headshot} alt="My Headshot"></img>
                <p className="body__profileContent">Loren Ipsum Dolor Sit Amet</p>
                <a href="https://linkedin.com/in/zachary-ringwood">Linkedin</a>
                <a href="https://github.com/zringwood">Github</a>
            </article>
            <article className="body__section body__section--foreground body__section--projects">
                <h2>Projects</h2>
                <div className="projectCard">
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
                <ul>
                    <h3>Data</h3>
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
                <h3>Hand-to-Hand Combat</h3>
                <ul>
                    <li>Judo (Tokui-Waza: Uchi-Mata)</li>
                    <li>Brazilian Jiu Jitsu</li>
                    <li>Boxing</li>
                    <li>Sword</li>
                </ul>
            </article>
            <article className="body__section body__section--foreground">
                <h2>Education</h2>
                <h3>Brainstation</h3>
                <h3>Toronto Metropolitan</h3>
                <h3>RSGC (Chris D'Arcy)</h3>
            </article>
            <article className="body__section">
                <h2>Interests</h2>
                <h3>Chess</h3>
                <h3>Judo / BJJ</h3>
            </article>
        </body>)
}

export default Biography;