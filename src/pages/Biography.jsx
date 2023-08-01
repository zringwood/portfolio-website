import "./Biography.scss"
import Headshot from "../assets/headshot.jpg"
function Biography(){
    return ( 
    <body className="body">
        <article className="body__section body__section--profile">
            <img className="headshot" src={Headshot} alt = "My Headshot"></img>
            <p className="body__profileContent">Loren Ipsum Dolor Sit Amet</p>
            <a href="https://linkedin.com/in/zachary-ringwood">Linkedin</a>
            <a href="https://github.com/zringwood">Github</a>
        </article>
        <article className="body__section body__section--foreground body__section--projects">
            <div className="projectCard">
                <h3 className="projectCard__title">Tactics DB</h3>
                <img className="projectCard__icon" src="" alt=""></img>
                <p className="projectCard__description">A huge database of pick-up-and-play chess puzzles for your commute!</p>
            </div>
        </article>
        <article className="body__section">Skills</article>
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