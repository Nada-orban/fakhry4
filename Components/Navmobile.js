import React, { useState } from 'react'
import { Box, Typography, Divider, Avatar, Container } from '@mui/material'
import Styles from '../src/styles/Nav.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Link } from 'react-scroll'
import { AiOutlineFilePdf } from 'react-icons/ai'
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Navmobile() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Box backgroundColor="black" position="fixed">
            <Container>
                <Box display='flex' flexGrow={1} className={Styles.appbarmobile} justifyContent="space-between">
                    <Typography
                        variant="h4"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 1.5, fontSize: "25px" }}
                    >
                        <Link to="landing" spy={true} smooth={true} offset={-50} duration={500}>Ahmed Fakhry</Link>

                    </Typography>
                    <Box onClick={() => setOpen(!open)} sx={{ display: { md: 'none', sm: 'block' }, mt: 3, }}>
                        <Box className={open ? Styles.activeHamburger : Styles.hamburber}></Box>
                    </Box>

                </Box>
                <Box className={open ? Styles.menuBoxactive : Styles.menuBox} variant="permanent" BackdropProps={{ invisible: false }} color="white">
                    {open && (
                        <List>
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
                                <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" target="_blank">
                                    <ListItemText primary="RESUME" />
                                </a>
                            </ListItem>


                        </List>

                    )}

                </Box>
            </Container>
        </Box >
    )
}

export default Navmobile