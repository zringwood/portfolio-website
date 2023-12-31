import { Box, IconButton, Typography, useTheme } from "@mui/material"
import "./Skill.scss"
import { useState } from "react"

function Skill({title, writeup}){
    const [displayWriteup, setDisplayWriteup] = useState(false)
    const theme = useTheme()
    return (
        <Box className="skill" onClick={() => setDisplayWriteup(!displayWriteup)}>
        <Typography className="skill__title">{title}</Typography>
        {writeup.length > 0 && <IconButton className={`skill__chevron ${displayWriteup && "skill__chevron--clicked"}`}  alt=""/> }
        {displayWriteup && <Typography className="skill__dropdown" sx={{margin:`${theme.spacing(3)} 0`}}>{writeup}</Typography>}
        </Box>
    )
}

export default Skill