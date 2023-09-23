import { Box, Typography, useTheme } from "@mui/material"
export default function Energy(){
    const theme = useTheme()
    theme.typography.h4.margin = `${theme.spacing(2)} 0`
    theme.typography.h4.textAlign = 'center'
    return (
        <Box component="article" sx={{  
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"background.default"}}>
        <Typography component="h1" variant="h2">Energy</Typography>
        <Typography variant="body1">Much of the details of this project are still under NDA, so I can't discuss the client's name or any of the data involved. However, I can discuss what I built.</Typography>
        <Typography component="h2" variant="h4">MySQL from Scratch</Typography>
        <Typography variant="body1">The client </Typography>

        </Box>
    )
}