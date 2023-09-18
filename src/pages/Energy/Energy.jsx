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
        <Typography component="h2" variant="h2">Coming Soon!</Typography>
        </Box>
    )
}