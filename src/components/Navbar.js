import React, { useState } from "react";
import Logo from "../Assets/Logo.svg"; // আপনার লোগো path ঠিক রাখবেন
import { BsPerson } from "react-icons/bs"; // Changed import to BsPerson
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
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PersonIcon from "@mui/icons-material/Person"; // Changed import to PersonIcon
import CloseIcon from "@mui/icons-material/Close";

import "../App.css"; // smooth scroll css এখানে থাকবে

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "About", icon: <InfoIcon />, href: "#about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, href: "#testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
    { text: "Profile", icon: <PersonIcon />, href: "#profile" }, // Changed text and icon
  ];

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo-container">
          <a href="#home">
            <img src={Logo} alt="Logo" className="nav-logo" />
          </a>
        </div>
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#contact">Contact</a>
          <a href="#">
            <BsPerson className="navbar-user-icon"style={{ fontSize: '1.5em' }} /> {/* Changed component and className */}
          </a>
          <button className="primary-button">Book A Table</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={toggleDrawer} />
        </div>
      </nav>

      <Drawer open={openMenu} onClose={toggleDrawer} anchor="right">
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <CloseIcon onClick={toggleDrawer} style={{ cursor: 'pointer' }} />
          </Box>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.href} onClick={toggleDrawer}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;