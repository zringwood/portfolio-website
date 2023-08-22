import "./Skill.scss"
import { useState } from "react"

function Skill({title, writeup}){
    const [displayWriteup, setDisplayWriteup] = useState(false)
    return (
        <div className="skill">
        <h4 className="skill__title">{title}</h4>
        {writeup.length > 0 && <button className={`skill__chevron ${displayWriteup && "skill__chevron--clicked"}`}  alt="" onClick={() => setDisplayWriteup(!displayWriteup)}/>}
        {displayWriteup && <div className="skill__dropdown">{writeup}</div>}
        </div>
    )
}

export default Skill