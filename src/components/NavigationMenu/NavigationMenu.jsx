import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, List, ListItem, Switch, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {DarkMode, Home, LightMode, Mouse, Power } from '@mui/icons-material';
import Chess from '../../assets/ChessIcon';

const listItem = {
  display:"flex", 
  flexDirection:"row",
}

function NavigationMenu() {
  const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const theme = useTheme()
    const handleClose = () => {
        setIsOpen(false);
      };
      useEffect(() => {
        theme.palette.mode = isDarkMode ? 'dark' : 'light'
      }, [isDarkMode, theme])
    return <Box sx={{
      position:'fixed',
      zIndex:"20",
      right:'5%',
      top:'5%',
      borderRadius:"50%",
      }}>
        <IconButton sx={{backgroundColor:"primary.dark"}} className="sidebar__activate" id="hamburger-button" onClick={() => setIsOpen(!isOpen)} >
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
        <ListItem ><Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        {isDarkMode ? <DarkMode/>:<LightMode />}</ListItem>
        </List>
      </Drawer>
      </Box>
    
}

export default NavigationMenu;