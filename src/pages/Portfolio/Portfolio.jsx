import { Typography, useTheme, Box } from "@mui/material";
import { useState } from "react";
import GoogleSite from '../../assets/images/googlesite.PNG'
import CustomHook from '../../assets/images/customhook.PNG'

import "./Portfolio.scss"
export default function Portfolio(){
    const theme = useTheme()
    const [isSpinning, setIsSpinning] = useState(false)
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
        <Typography component="h2" variant="h2">zacharyringwood.com</Typography>
        <Typography component="h4" variant="h4">The Third Iteration.</Typography>
        <Typography variant="body1">The first time I made a portfolio website was way back in 2021. It was built from a template using Google Sites, and didn't have a single expression of javascript, html or css written by myself. Have a look at that layout below:</Typography>
        <img className="portfolio__img" src = {GoogleSite} alt="My old portfolio"></img>
        <Typography variant="body1">Funnily enough, that's still the basic layout of this site. Only difference is the quality of code showcased, the fact that I've built it myself, and I think my photo is a little more handsome with the beard.</Typography>
        <Typography variant="h4" component="h4">Fully hosted on Google Cloud Platform.</Typography>
        <Typography variant="body1">This site is running on <b>Cloud Run</b> in a container packaged through <b>Docker.</b> That containerization is no small feat; this app used to require 2GiB of computing space before I actually built it into a production environment properly. I began using Google Cloud Platform because I bought my domain through Google Sites, and they told me it would be easier to containerize the app if I used Google's cloud suite. It's true, GCP doesn't ask you to prove you own the domain if you bought through Google, which saved around 10 minutes while I provisioned the DNS certificate. Now they're in the process of selling Google Sites, so I'm in the process of porting this website to AWS.</Typography>
        <Typography variant="h4" component="h4">A front-end built from Material UI. </Typography>
        <Typography variant="body1">I am not a graphic designer. I do not claim to be a graphic designer. I cannot use Figma, I cannot draw, I can barely tell the difference between pink and fuschia. That's why everything is built in Material UI. MUI's custom themes allow you to drag and drop prebuilt themes into your app, giving a great layout with minimal effort. </Typography>
        <Typography variant="body1">Still had to build most of the components myself though. Mostly out of pride.</Typography>
        <div className={`${isSpinning && 'spin'}`} onClick={() => {setIsSpinning(true);setTimeout(()=>setIsSpinning(false), 1000)}}><Typography variant="h4" component="h4" >Animations</Typography></div>
        <Typography variant="body1">Implementing animations was actually quite a challenge. The issue was timing the animations. It was no good having the animation run on load, that way you'd never see most of them. It was also no good having the animation start on a click <b>(tap the title above for an example)</b> because most of them start without user imput. So I had to create a <b>custom hook</b> to get the job done.</Typography>
        <img className="portfolio__img" src = {CustomHook} alt="Use On Screen Code"></img>
        <Typography variant="body1">This is the UseOnScreen custom hook. It's a basic bit of logic that fires whenever a component scrolls into veiw. It was hard to write and I'm reasonably proud of it, I've been reusing this code all over this website and even in some freelance gigs.</Typography>
        <Typography variant="body1">Be sure to have a look at my github account for more information!</Typography>


</Box>
    )
}