import { Box, Typography, useTheme } from "@mui/material"

export default function Footer(){
    const theme = useTheme()
    return (
        <Box component="footer" sx={{
            padding:theme.spacing(3), 
            backgroundColor:"background.lighter"}}>
                <Typography variant="body2">Email: zringwood@gmail.com</Typography>
                <Typography variant="body2">Phone: +1 647 648 4748</Typography>
                <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        [theme.breakpoints.up('sm')]:{
            width:"30%"
        }
    }}>
                <Typography variant="body2"> <a href = "https://linkedin.com/in/zachary-ringwood">LinkedIn</a></Typography>
                <Typography variant="body2"> <a href = "http://github.com/zringwood">GitHub</a></Typography>
                </Box>
            </Box>
    )
}