import { Card, Typography, useTheme } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Skill from '../Skill/Skill'
function SkillCard({title, skillArray}){
    const theme = useTheme()
    return (
        <Card sx={{
            width:"13.25rem",
            backgroundColor:"background.paper",
            [ theme.breakpoints.up("sm")]:{
                width:"15rem",
            }}}>
            <CardContent>
            <Typography variant="h4" component="h4">{title}</Typography>
            
                {skillArray.map((e,index) =>     
                <Skill key={index} title={e.title} writeup={e.writeup} />
                )}
            
            </CardContent>
        </Card>
    )
}
export default SkillCard