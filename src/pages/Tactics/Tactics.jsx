import "./Tactics.scss"

import IntroPuzzle from "../../assets/images/intropuzzle.PNG"
import IntroPuzzleSolution from "../../assets/images/intropuzzle-solved.PNG"

import { useState } from "react"
function Tactics({projectURL}){
    const [isBlurred, setIsBlurred] = useState(true)
    return (
        <article className="tactics">
            <h1 className="tactics__title">Tactics DB</h1>
            <p className="tactics__introduction">Tactics DB was my capstone project while studying at Brainstation. It was an attempt to put everything I had learned into a single project, combining a huge backend, mutliple third-party libraries, and deploying everything to the Cloud.</p>
        <h3 className="tactics__title">A casual way to engage with chess.</h3>
        <p className="tactics__description">I like playing chess, but I also like fiddling with my phone while not really paying attention to what I'm doing. Sometimes you need to turn your brain off a little. Try to do that on Chess.com or Lichess and you destroy your rating and lose every game. I wanted an app that could give me a way to engage with chess on a more casual level. </p>
        <h3 className="tactics__title">The App.</h3>
        <p className="tactics__description">Tactics DB is a Web App built with React that serves Chess puzzles. A chess puzzle is a position with a fixed sequence of moves that forces an advantage. Have a look at the following puzzle:</p>
        <img className="tactics__image" src = {IntroPuzzle} alt="Basic Chess Puzzle"></img>
        <p className="tactics__description">Can you find the correct move? Click below to reveal the correct move, or try the puzzle on Tactics DB <a href = "https://tactics.zacharyringwood.com/introduction/easy/1">here.</a></p>
        <div className="spoiler" onClick={() => setIsBlurred(false)}>
        <img className={`spoiler__image ${isBlurred && "spoiler__image--filter"}`} src = {IntroPuzzleSolution} alt="Basic Chess Puzzle"></img>
        {isBlurred && <p className="spoiler__label">Click Here</p>}
        </div>
        <p>Easy enough, right? But the puzzles can get much harder than that, with over 3 MILLION puzzles to play, all loaded from a NoSQL database.</p>
        <h3 className="tactics__title">The Backend.</h3>
        <h3 className="tactics__title">The Frontend.</h3>


        </article>
    )
}
export default Tactics