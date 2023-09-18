import { Box, Typography } from "@mui/material"
import { useState } from "react"
import './Spoiler.scss'
export default function Spoiler({src, alt}){
    const [isBlurred, setIsBlurred] = useState(true)
    return (
        <Box className="spoiler" onClick={() => setIsBlurred(false)}>
                <img className={`spoiler__image ${isBlurred && "spoiler__image--filter"}`} src={src} alt={alt}></img>
                {isBlurred && <Typography className="spoiler__label">Click Here</Typography>}
        </Box>
    )
}