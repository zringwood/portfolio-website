import { Box, Typography, useTheme } from "@mui/material"
import ClientList from '../../assets/images/mde-1.PNG'
import ClientDetail from '../../assets/images/mde-2.PNG'
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
        <Typography variant="body1">The client had been using an <span style={{color:theme.palette.secondary.main}}>Excel</span> spreadsheet to manage their data for years. This meant costly consulting fees and poor data integrity, not to mention difficulties analyzing and working with the data. I was hired to take this massive excel document and turn it into a modern database.</Typography>
        <Typography variant="body1">I chose MySQL as the database because it's flexible and open-source. Any backend developer worth their salt can use MySQL and it's so backwards-compatible that you can literally run it on a reel of tape. No matter what their future held they'd be able to use this software.</Typography>
        <img className="portfolio__img" src = {ClientList} alt="Client List"></img>
        <Typography variant="caption">Dummy data used to protect client anonymity</Typography>
        <Typography component="h2" variant="h4">Integrating Modern AI Analysis</Typography>
        <Typography variant="body1">The main advantage of the shift to SQL is SQL's compatibility with Tableau. Tableau is a data analysis software that allows you to perform analysis with AI algorithms without running a single line of code. We were able to connect this database with a private Tableau account and allow anyone at the company to perform modern cutting-edge data analysis on the data as it comes in, and we could allow workers to push readings directly to the database.</Typography>
        <img className="portfolio__img" src = {ClientDetail} alt="Client Details"></img>
        <Typography variant="body2">I knex that many employees wouldn't be thrilled about the switch, so backwards compatibility was important to me. I made sure to include code that allowed the database to be exported to a CSV format, which allowed easier integration with analysis tools and easy conversion back to an excel spreadsheet for those that weren't ready to make the transition. </Typography>
        </Box>
    )
}