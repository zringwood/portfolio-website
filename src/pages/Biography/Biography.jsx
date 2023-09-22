import Headshot from "../../assets/headshot.png"
import "./Biography.scss"
import SkillCard from "../../components/SkillCard/SkillCard"
import AnimationSection from "../../components/AnimationSection/AnimationSection"
import { Box, Typography, useTheme } from "@mui/material"
import Chess from "../../assets/ChessIcon"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { Mouse, Power } from "@mui/icons-material"


function Biography() {
  const theme = useTheme()
  const section = {
    padding:theme.spacing(3),
    backgroundColor:"background.default"
  }
  
    return (<>
            <Box component="section"  
            sx={{...section}} >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    columnGap:theme.spacing(3),
                    marginBottom:theme.spacing(1),
                    rowGap: theme.spacing(3),
                    [ theme.breakpoints.up("sm")]:{
                        // flexDirection:"row"
                        justifyContent: "center",
                    }}}>
                <Box component="img" src={Headshot} alt="My Headshot" sx={{  
                    width:"100%",
                    objectFit:"scale-down",
                   [ theme.breakpoints.up("sm")]:{
                       width:"50%",
                       height:"50%",
                       margin:"auto"
                   }
        }}></Box>
                <Typography variant="body1">
                    I am a professional full-stack engineer who specializes in developing the minimum viable product for startups, game designers, Web3 entrepreneurs, and many more. 
                    So far I have helped to secure over $50,000 in funding and I want you to be my next success story. Let's work together to get a interactive prototype into the hands of investors and prospective employees today. 
                </Typography>
                </Box>
                <Box sx={{ display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"}} >
                    <a href="https://linkedin.com/in/zachary-ringwood">Linkedin</a>
                    <a href="https://github.com/zringwood">Github</a>
                </Box>
            </Box>
            <Box component="section"  
            sx={{...section, backgroundColor:"background.lighter", display:"flex", flexDirection:"column", rowGap:theme.spacing(2)}}>
                <Typography component="h2" variant="h2" >Projects</Typography>
                <AnimationSection animations={"projectCard--fadeup"}>
                <ProjectCard title="Energy Infrastructure" description={"I set up the entire IT infrastructure for a midsize energy company. Click here to find out how I did it."} icon={<Power sx={{height:"100px"}}/>} target={"/energy"}/>
                </AnimationSection>
                <AnimationSection animations={"projectCard--fadeup"} >
                    <ProjectCard title="Tactics DB" description={"A huge database of pick-up-and-play chess puzzles for your commute!"} icon={<Chess sx={{height:"100px"}}/>} target={"/tactics"}/>
                </AnimationSection>
                <AnimationSection animations={"projectCard--fadeup"}>
                <ProjectCard title="Portfolio" description={"Click here for a writeup on how this website was designed using Amazon's microservices model of cloud computing."} icon={<Mouse sx={{height:"100px"}}/>} target={"/portfolio"}/>
                </AnimationSection>
            </Box>
            <Box component="section" sx={{...section}}>
                <Typography component="h2" variant="h2">Skills</Typography>
                
                <Box sx={{
                       display:"flex",
                       flexDirection: "row",
                       flexWrap: "wrap",
                       rowGap: theme.spacing(1),
                       columnGap: theme.spacing(1),
                       justifyContent: "center",
                       
                    }}>
                <AnimationSection animations={"skillcard--slideleft"}>
                <SkillCard title="Webdev" skillArray={
                    [
                        {title:"React", writeup:"React is my best framework and the one I learned at Brainstation. All of my portfolio projects were created using React, including this website."},
                        {title:"Javascript", writeup:`I'm proud of my capacity to code with Javascript. I try to emphasize readability as much as possible. Have a look at the way I've written TacticsDB and you can see my commitment to readability.`},
                        {title:"MySQL", writeup:"MySQL is the database manager I'm most familiar with. I don't have a portfolio project to demonstrate my knowledge of MySQL yet, but I have one coming soon."},
                        {title:"NoSQL", writeup:"I've used NoSQL through Firebase to set up the database for tactics-db. It has more that 3 million entries and I populated it all myself. You can see the API used to access the database on my GitHub."},
                        {title:"HTML", writeup:""},
                        {title:"CSS", writeup:""},
                        {title:"SASS", writeup:"SASS is my preferred framework for styling webpages. I have some limited experience with other frameworks, but I find SASS to be the most flexible."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideright skillcard--short"}>
                <SkillCard title="Cloud" skillArray={
                    [
                        {title:"Google Cloud Platform", writeup:"The website you're on right now is hosted on Google Cloud Platform via one of their buckets. The projects are all hosted through Cloud Run. I chose Google Cloud Platform because I bought this domain through Google, so it's slightly faster to authenticate."},
                        {title:"Docker", writeup:`I primarily use Docker to containerize applications on Cloud Run. This allows for fasting loading times and deployment, especially when it comes to cold starts. `},
                        {title:"YAML", writeup:"I use YAML with GCP to containerize applications through code hosted on Github."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideleft  skillcard--medium"}>
                 <SkillCard title="Misc-Tech" skillArray={
                    [
                        {title:"Tableau", writeup:"I got quite comfortable with Tableau while writing a now-dropped project for a specialized chess engine. I used it primarily to sanitize data."},
                        {title:"Python", writeup:`Python is probably my second best programming language. I still use it sometimes for prototyping or cleaning data because it's faster than Javascript and the libraries are a bit better suited to quick and dirty code. My Wordle app is written in Python, and I have another Python project in the works.`},
                        {title:"Git", writeup:"I am familiar with using Git through GitHub for version control. I also use it with a GCP pipeline to deploy new revisions directly to the cloud through Google Cloud Build."},
                    ]
                }/>
                </AnimationSection>
                <AnimationSection animations={"skillcard--slideright  skillcard--long"}>
                <SkillCard title="Buisness" skillArray={
                    [
                        {title:"Public Speaking",
                        writeup:"While in high school I was the head of the debate team for two years and taught public speaking regularly. I am very confident in front of a crowd and can write and perform a speech in a single day with no fear. This is likely my strongest non-tech skill."    
                        },{
                            title:"Microsoft Word",
                            writeup:""
                        },{
                            title:"Microsoft Excel",
                            writeup:""
                        }
                    ]
                } />
                </AnimationSection>
                </Box>
                
            </Box>
           
            
        </>)
}

export default Biography;