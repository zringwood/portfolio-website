import { Box, Typography, Card, CardContent, useTheme } from "@mui/material"
import { useNavigate } from "react-router"


export default function ProjectCard({ title, description, target, icon }) {
    const navigate = useNavigate()
    const theme = useTheme()
    return (
        <Card sx={{backgroundColor:"background.paper"}} onClick={() => navigate({target})}>
            <CardContent>
                <Box sx={{display:'flex',alignItems:"center", columnGap:theme.spacing(2)}}>
                    {icon}
                <Box >
                <Typography component="h4" variant="h4" >{title}</Typography>
                <Typography variant="body1">{description}</Typography>
                </Box>
                </Box>
            </CardContent>
        </Card>
    )
}