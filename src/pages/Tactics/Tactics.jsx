import "./Tactics.scss"

import IntroPuzzle from "../../assets/images/intropuzzle.PNG"
import IntroPuzzleSolution from "../../assets/images/intropuzzle-solved.PNG"
import Snippet from "../../assets/images/onclick.PNG"
import { Box, Typography, useTheme } from "@mui/material"
import Spoiler from "../../components/Spoiler/Spoiler"
function Tactics() {
    const theme = useTheme()
    theme.typography.h4.margin = `${theme.spacing(2)} 0`
    return (
        <Box component="article" className="tactics" sx={{  
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",}}>
            <Typography component="h1" variant="h1">Tactics DB</Typography>
            <Typography variant="body1" >Tactics DB was my capstone project while studying at Brainstation. It was an attempt to put everything I had learned into a single project, combining a huge backend, mutliple third-party libraries, and deploying everything to the Cloud.</Typography>
            <Typography variant="h4">A casual way to engage with chess.</Typography>
            <Typography variant="body1">I like playing chess, but I also like fiddling with my phone while not really paying attention to what I'm doing. Sometimes you need to turn your brain off a little. Try to do that on Chess.com or Lichess and you destroy your rating and lose every game. I wanted an app that could give me a way to engage with chess on a more casual level. </Typography>
            <Typography variant="h4">The App.</Typography>
            <Typography variant="body1">Tactics DB is a Web App built with React that serves Chess puzzles. A chess puzzle is a position with a fixed sequence of moves that forces an advantage. Have a look at the following puzzle:</Typography>
            <img className="tactics__image" src={IntroPuzzle} alt="Basic Chess Puzzle"></img>
            <Typography variant="body1">Can you find the correct move? Click below to reveal the correct move, or try the puzzle on Tactics DB <a href="https://tactics.zacharyringwood.com/introduction/easy/1" target="_blank" rel="noreferrer">here.</a></Typography>
            <Spoiler src ={IntroPuzzleSolution} alt="A basic chess puzzle." />
            <Typography variant="body1">Easy enough, right? But the puzzles can get much harder than that, with over 3 MILLION puzzles to play, all loaded from a NoSQL database.</Typography>
            <Typography variant="h4">The Backend.</Typography>
            <Typography variant="body1"> The puzzles are stored in a NoSQL database in Firebase Realtime Database and hosted with Google Firebase. I populated it myself, using data I got from Lichess.com <a href="https://database.lichess.org/#puzzles" target="_blank" rel="noreferrer">here.</a> These puzzles are in CSV format, and can be loaded into the NoSQL database painlessly.</Typography>
            <Typography variant="body1"> Originally I was using BigQuery instead of Firebase. BigQuery is a data analytics tool used mainly for making SQL queries on enormous data sets, measured in the terabyte range. Because it's designed for such massive datasets, the free tier is very generous, offering 10 gigabytes of storage before it starts charging. However, BigQuery wound up being too slow and also lead to odd bugs due to how it actually makes the queries. Overall it wound up being a good opportunity to learn multiple database styles. </Typography>
            <Typography variant="h4">The Frontend.</Typography>
            <Typography variant="body1">The UI is exactly what I feel a user interface should be. Cut-down, barebones, and restrained. This is probably a poor approach to showing off my skills with CSS, but I suppose that's what this website is for.</Typography>
            <Typography variant="body1">I didn't build the chessboard. That's a third-party library called <a href="https://github.com/Clariity/react-chessboard" target="_blank" rel="noreferrer">React Chessboard</a> React Chessboard has some slightly odd qualities I had to work around. For one thing, it interprets every change as a new move and animates the move accordingly. This winds up being a very ugly transition between puzzles. To remove this, the entire board is actually unloaded between puzzles, and an empty board is loaded instead. This leads to a cleaner appearance.</Typography>
            <Typography variant="body1">Have a look at the following code snippet:</Typography>
            <img className="tactics__image" src={Snippet} alt="Example function from Tactics DB" />
            <Typography variant="body1">This is code I wrote after reading <a href="https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank" rel="noreferrer">Clean Code: A Handbook of Agile Software Craftsmanship</a> by Robert Martin, aka Uncle Bob. It emphasizes clean, small functions without side effects. I'm very proud of how well the PuzzleBoard component is written, and I encourage you to check it out <a href="https://github.com/zringwood/tactics-db-gcp/blob/master/src/components/PuzzleBoard/PuzzleBoard.jsx">here, on my GitHub.</a></Typography>

        </Box>
    )
}
export default Tactics