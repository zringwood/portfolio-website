import "./SkillCard.scss"
import Skill from "../Skill/Skill"
function SkillCard({title, skillArray}){
    return (
        <article class="skillcard">
            <h3>{title}</h3>
            <ul class="skillcard__list">
                {skillArray.map((e) => {
                    return (<li className="skillcard__skill">
                        <Skill title={e.title} writeup={e.writeup}/>
                    </li>)
                })}
            </ul>
        </article>
    )
}
export default SkillCard