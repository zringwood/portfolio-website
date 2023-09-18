import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Drawer, Typography } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";
import {Home, Mouse } from '@mui/icons-material';
import Chess from '../../assets/ChessIcon';

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => {
        setIsOpen(false);
      };
    return <Box sx={{
      position:'fixed',
      zIndex:"20",
      right:'5%',
      top:'5%',
      borderRadius:"50%",
      }}>
        <IconButton sx={{backgroundColor:"secondary.dark"}} className="sidebar__activate" id="hamburger-button" onClick={() => setIsOpen(!isOpen)} >
            <MenuIcon />
        </IconButton>
        
        <Drawer
        id="navmenu"
        anchor={'right'}
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to='/'><Home /> <Typography>Home</Typography></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/tactics'><Chess /><Typography>Tactics DB</Typography></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/portfolio'><Mouse /><Typography>Portfolio</Typography></Link></MenuItem>
      </Drawer>
      </Box>
    
}

export default NavigationMenu;