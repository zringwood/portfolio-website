import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, List, ListItem, Switch, Typography } from '@mui/material';
import {   useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {ArrowBack, DarkMode, Home, LightMode, Mouse, Power } from '@mui/icons-material';
import {useTheme} from "@mui/material"
import Chess from '../../assets/ChessIcon';

const listItem = {
  display:"flex", 
  flexDirection:"row",
}

function NavigationMenu({setMode}) {
  const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const theme = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(theme.palette.mode === "dark")
    
    const location = useLocation().pathname
    
    const handleClose = () => {
        setIsOpen(false);
      };
    return <Box sx={{
      position:'fixed',
      zIndex:"20",
      top:'5%',
      borderRadius:"50%",
      width:'100%',
      display:"flex",
      flexDirection:"row",
      
      }}>
        {location !== "/" && 
        <IconButton  onClick={() => navigate("/")}>
          <ArrowBack  />
        </IconButton>}
        <IconButton sx={{marginLeft:"auto"}} className="sidebar__activate" id="hamburger-button" onClick={() => setIsOpen(!isOpen)} >
            <MenuIcon />
        </IconButton>
        
        <Drawer
        id="navmenu"
        anchor={'right'}
        open={isOpen}
        onClose={handleClose}
        sx={{width:'25%'}}
      >
        <List>
        <ListItem sx={listItem} onClick={() => {handleClose(); navigate('/')}}><Home /><Typography>Home</Typography></ListItem>
        <ListItem sx={listItem} onClick={() => {handleClose(); navigate('/tactics');window.scrollTo(0,0)}}><Chess /><Typography>Tactics</Typography></ListItem>
        <ListItem sx={listItem} onClick={() => {handleClose(); navigate('/portfolio')}}><Mouse /><Typography>Portfolio</Typography></ListItem>
        <ListItem sx={listItem} onClick={() => {handleClose(); navigate('/energy')}}><Power /><Typography>Energy</Typography></ListItem>
        <ListItem ><Switch checked={isDarkMode} onChange={() => {
          setMode(!isDarkMode ? "dark":"light") 
          localStorage.setItem("mode", !isDarkMode ? "dark":"light")
          setIsDarkMode(!isDarkMode) }}
          />
        {isDarkMode ? <DarkMode/>:<LightMode />}</ListItem>
        </List>
      </Drawer>
      </Box>
    
}

export default NavigationMenu;