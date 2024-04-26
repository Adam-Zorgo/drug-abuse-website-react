import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FaHome, FaChartBar, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); 
  
  const menuOptions = [
    {
      text: "Home",
      icon: <FaHome />,
    },
    {
      text: "Risk Assessment",
      icon: <FaChartBar />,
    },
    {
      text: "Get Help",
      icon: <FaPhone />,
    },
  ];

  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleMouseEnter = (index) => setHoveredLink(index);
  const handleMouseLeave = () => setHoveredLink(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Risk Assessment", href: "/riskassessment" },
    { name: "Get Help", href: "/gethelp" },
  ];

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#444',
      }}
    >
      <div
        className="nav-logo-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Logo style={{ width: '90px', height: '90px' }} />
      </div>

      <div
        className="navbar-links-container"
        style={{
          display: 'flex',
          gap: '150px', 
          alignItems: 'center',
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              color: hoveredLink === index ? '#000000' : 'white', 
              textDecoration: 'none',
              transition: 'color 0.3s ease, transform 0.3s ease', 
              transform: hoveredLink === index ? 'scale(1.05)' : 'scale(1.0)', 
              position: 'relative', 
            }}
          >
            {link.name}
            {hoveredLink === index && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px', 
                  width: '100%', 
                  backgroundColor: '#000000', 
                  transition: 'width 0.3s ease', 
                }}
              />
            )}
          </a>
        ))}
      </div>

      <div
        className="navbar-menu-container"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <HiOutlineBars3
          onClick={toggleMenu}
          style={{
            color: 'white',
            cursor: 'pointer', // Add interactivity
          }}
        />
      </div>

      <Drawer anchor="right" open={openMenu} onClose={toggleMenu}>
        <Box
          sx={{
            width: 250
          }}
        >
          {menuOptions.map((item) => (
            <ListItem key={item.text}>
                <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
        ))}
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
