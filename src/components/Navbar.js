/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import Logo from "../Assets/Logo.jpg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import QuizIcon from '@mui/icons-material/Quiz';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "FAQ",
      icon: <QuizIcon />,
    },
    {
      text: "Log in/Register",
      icon: <AppRegistrationIcon />,
    },
  ];
  return (
    <nav className='navigation-bar'>
      <div className="nav-logo-container">
        <DropdownMenu className="dropdown-menu"/>
        <a href='/'>
          <img src={Logo} alt="" className="logo"/>  
        </a>    
      </div>
      <div className="navbar-links-container">
        <a href="/">Домой</a>
        <a href="">О проекте</a>
        <a href="">FAQ</a>
        <button className="primary-button">Регистрация</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar