import React, { useState } from 'react'
import Logo from "../assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material"
import {Home} from '@mui/icons-material/HomeIcon'
import {Info} from '@mui/icons-material/InfoIcon'
import {PhoneRounded} from "@mui/icons-material/PhoneRoundedIcon"

const Navbar = () => {
    const[openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"Risk Assessment",
            icon:<InfoIcon/>
        },
        {
            text:"Get Help",
            icon: <PhoneRoundedIcon/>
        }
    ]

    return <nav>
        <div classname="nav-logo-container">
            <image src = {Logo} alt="" />
        </div>
        <div classname="navbar-links-container">
           <a href="">Home</a>
           <a href="">Risk Assessment</a>
           <a href="">Get Help</a>
        </div>
        <div classname="navbar-menu-container">
            <HiOutlineBars3 onClick={()=>setOpenMenu(true)}/>
        </div>
    </nav>
}

export default Navbar