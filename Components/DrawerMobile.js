import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Fade, ListItemIcon, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { styled, useTheme, alpha, Theme } from '@mui/material/styles';
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import CloseIcon from '@mui/icons-material/Close';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ColorModeContext } from '../public/theme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { LogoDev, Style } from '@mui/icons-material';
import Image from 'next/image';
import Styles from '../src/styles/Nav.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll'
import { AiOutlineFilePdf } from 'react-icons/ai'





export default function DrawerMobile() {
    const [state, setState] = React.useState({
        top: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box


            sx={{ width: 'auto', backgroundColor: "black", color: 'white', }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List >
                <ListItem>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        <ListItemText primary="ABOUT" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                        <ListItemText primary="SKILLS" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemText primary="PROJECTS" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="papers" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemText primary="PAPERS" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500} >
                        <ListItemText primary="TIMELINE" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <ListItemText primary="CONTACT" />
                    </Link>
                </ListItem>
                <ListItem>
                    < AiOutlineFilePdf style={{ color: "white", marginRight: "5px" }} />
                    <Link href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view">
                        <ListItemText primary="RESUME" />
                    </Link>
                </ListItem>


            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Box display='flex' flexGrow={1}  >
                        <Typography
                            variant="h5"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 1, fontSize: "25px" }}
                        >
                            Ahmed Fakhry
                        </Typography>
                        <IconButton

                            variant="contained"
                            onClick={toggleDrawer('top', true)}
                            sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "secondary.main", borderRadius: "10px", mt: 1, display: "flex" }}
                            className={Styles.menuButton}
                        >
                            {/* <Typography variant='h6' sx={{ color: "black" }}>MENU</Typography> */}

                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer

                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                {list('top')}
            </Drawer>

        </Box>
    );
}