import { Box, Typography, Card, CardContent, useTheme } from "@mui/material"
import { useNavigate } from "react-router"


export default function ProjectCard({ title, description, target, icon }) {
    const navigate = useNavigate()
    const theme = useTheme()
    const spacing = visualViewport.width > 600 ? 4 : 2;
    return (
        <Card sx={{backgroundColor:"background.paper"}} onClick={() => {navigate(target);window.scrollTo(0,0)}}>
            <CardContent sx={{padding:theme.spacing(spacing)}}>
                <Box sx={{display:'flex',alignItems:"center", columnGap:theme.spacing(spacing)}}>
                    {icon}
                <Box >
                <Typography component="h4" variant="h4" sx={{textAlign:"left"}}>{title}</Typography>
                <Typography variant="body1" sx={{textAlign:"left"}}>{description}</Typography>
                </Box>
                </Box>
            </CardContent>
        </Card>
    )
}