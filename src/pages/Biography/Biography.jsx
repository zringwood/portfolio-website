import "./Biography.scss"
import Headshot from "../../assets/headshot.png"
import TacticsDB_icon from "../../assets/tacticsDB-icon.svg"
import { useNavigate } from "react-router"
import SkillCard from "../../components/SkillCard/SkillCard"
import AnimationSection from "../../components/AnimationSection/AnimationSection"
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
                <AnimationSection className="projectCard" animations={"projectCard--fadeup"} onClick={() => navigate("/tactics")}>
                    <h3 className="projectCard__title">Tactics DB</h3>
                    <div className="projectCard__content">
                        <img className="projectCard__icon" src={TacticsDB_icon} alt=""></img>
                        <p className="projectCard__description">A huge database of pick-up-and-play chess puzzles for your commute!</p>
                    </div>
                </AnimationSection>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <br></br>
                <div className="skills__list">
                <AnimationSection animations={"skillcard--slideleft"}>
                <SkillCard title="Webdev" skillArray={
                    [
                        {title:"React", writeup:"React is my best framework and the one I learned at Brainstation. All of my portfolio projects were created using React, including this website."},
                        {title:"Javascript", writeup:`I'm proud of my capacity to code with Javascript. I try to emphasize readability as much as possible. Have a look at the way I've written TacticsDB and you can see my commitment to readability.`},
                        {title:"MySQL", writeup:"MySQL is the database manager I'm most familiar with. I don't have a portfolio project to demonstrate my knowledge of MySQL yet, but I have one coming soon."},
                        {title:"NoSQL", writeup:"I've used NoSQL through Firebase to set up the database for tactics-db. It has more that 3 million entries and I populated it all myself. You can see the API used to access the database on my GitHub."},
                        {title:"HTML", writeup:""},
                        {title:"CSS", writeup:""},
                        {title:"SASS", writeup:"SASS is my preferred framework for styling webpages. I have some limited experience with other frameworks, but I find SASS to be the most flexible."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideright skillcard--short"}>
                <SkillCard title="Cloud" skillArray={
                    [
                        {title:"Google Cloud Platform", writeup:"The website you're on right now is hosted on Google Cloud Platform via one of their buckets. The projects are all hosted through Cloud Run. I chose Google Cloud Platform because I bought this domain through Google, so it's slightly faster to authenticate."},
                        {title:"Docker", writeup:`I primarily use Docker to containerize applications on Cloud Run. This allows for fasting loading times and deployment, especially when it comes to cold starts. `},
                        {title:"YAML", writeup:"I use YAML with GCP to containerize applications through code hosted on Github."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideleft  skillcard--medium"}>
                 <SkillCard title="Misc-Tech" skillArray={
                    [
                        {title:"Tableau", writeup:"I got quite comfortable with Tableau while writing a now-dropped project for a specialized chess engine. I used it primarily to sanitize data."},
                        {title:"Python", writeup:`Python is probably my second best programming language. I still use it sometimes for prototyping or cleaning data because it's faster than Javascript and the libraries are a bit better suited to quick and dirty code. My Wordle app is written in Python, and I have another Python project in the works.`},
                        {title:"Git", writeup:"I am familiar with using Git through GitHub for version control. I also use it with a GCP pipeline to deploy new revisions directly to the cloud through Google Cloud Build."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideright  skillcard--long"}>
                <SkillCard title="Buisness" skillArray={
                    [
                        {title:"Public Speaking",
                        writeup:"While in high school I was the head of the debate team for two years and taught public speaking regularly. I am very confident in front of a crowd and can write and perform a speech in a single day with no fear. This is likely my strongest non-tech skill."    
                        },{
                            title:"Microsoft Word",
                            writeup:""
                        },{
                            title:"Microsoft Excel",
                            writeup:""
                        }
                    ]
                } />
                </AnimationSection>
                </div>
                
            </section>
            <section className="education">
                <h2>Education</h2>
                <h3>Brainstation</h3>
                <h4>Diploma in Software Development</h4>
                <h3>Toronto Metropolitan</h3>
                <h4>Bachelors Degree in Philosophy</h4>
            </section>
            <footer className="contact">
                <p>Email: zringwood@gmail.com</p>
                <p>Phone: +1 647 648 4748</p>
                <div className="contact__flex">
                <p> <a href = "https://linkedin.com/in/zachary-ringwood">LinkedIn</a></p>
                <p> <a href = "http://github.com/zringwood">GitHub</a></p>
                </div>
            </footer>
        </>)
}

export default Biography;