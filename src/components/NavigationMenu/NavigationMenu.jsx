import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.scss"

function NavigationMenu() {
    const [anchorEl, setAnchorEl] = useState(false)
    const handleClose = () => {
        setAnchorEl(null);
      };
      const open = !!anchorEl;
    return <div className="sidebar">
        <IconButton className="sidebar__activate" id="hamburger-button" onClick={(e) => setAnchorEl(e.target)} >
            <MenuIcon />
        </IconButton>
        
        <Menu
        id="navmenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'hamburger-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to='/'>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/tactics'>Tactics DB</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/portfolio'>Portfolio</Link></MenuItem>
      </Menu>
        </div>
    
}

export default NavigationMenu;