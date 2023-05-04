import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Fade, Slide } from '@mui/material';
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
import zIndex from '@mui/material/styles/zIndex';


const drawerWidth = 240;




//scroll top
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};












// const useStyles = makeStyles((theme) => ({
//     appBarTransparent: {
//         backgroundColor: 'transparent',

//     },
//     appBarSolid: {
//         backgroundColor: '#212529',

//     }
// }));


function Nav(props) {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    // Transparent to Solid Header on Scroll
    // const classes = useStyles();
    // const [navBackground, setNavBackground] = useState('appBarTransparent')
    // const navRef = React.useRef()
    // navRef.current = navBackground;
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const show = window.scrollY > 310
    //         if (show) {
    //             setNavBackground('appBarSolid')
    //         } else {
    //             setNavBackground('appBarTransparent')
    //         }
    //     }
    //     document.addEventListener('scroll', handleScroll)
    //     return () => {
    //         document.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    //top drawer
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
                    <a href="#about">
                        <ListItemText primary="ABOUT" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#skills">
                        <ListItemText primary="SKILLS" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#projects">
                        <ListItemText primary="PROJECTS" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#papers">
                        <ListItemText primary="PAPERS" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#timeline">
                        <ListItemText primary="TIMELINE" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#contact">
                        <ListItemText primary="CONTACT" />
                    </a>
                </ListItem>
                <ListItem>
                    <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view">
                        <ListItemText primary="RESUME" />
                    </a>
                </ListItem>


            </List>
        </Box>
    );










    //className={classes[navRef.current]} 

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <AppBar variant="permanent" position="fixed" sx={{
                    background: 'black', color: "text:primary", borderStyle: "none", height: "60px"
                }} >
                    <Container>
                        <Toolbar>
                            <Box display='flex' flexGrow={1}>
                                <Typography
                                    variant="h4"
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 1.5, fontSize: "25px" }}
                                >
                                    Ahmed Fakhry
                                </Typography>
                                {/* <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton> */}
                                <Box sx={{ display: { xs: "none", sm: 'none', md: 'block', } }}>
                                    <List sx={{ display: "flex" }}>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="about" spy={true} smooth={true} offset={-50} duration={500}  >
                                                <ListItemText primary="ABOUT" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="SKILLS" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="PROJECTS" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="papers" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="PAPERS" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="TIMELINE" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="CONTACT" />
                                            </Link>
                                        </ListItem>
                                        <ListItem className={Styles.navLink}>
                                            <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view">
                                                <ListItemText primary="RESUME" />
                                            </a>
                                        </ListItem>

                                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                                        </IconButton>
                                    </List>
                                </Box>

                            </Box>


                        </Toolbar>
                    </Container>

                </AppBar>
                <Toolbar id="back-to-top-anchor" />

                {/* mobile view 1*/}

                <AppBar variant="permanent" position="fixed" sx={{ zIndex: 1200, display: { md: 'none', sm: 'block' }, backgroundColor: "black", }}>
                    <Container>
                        <Toolbar >
                            <Box display='flex' flexGrow={1} sx={{ zIndex: 1300 }} variant="permanent" >
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
                            <Drawer
                                sx={{ zIndex: 1100 }}
                                anchor={'top'}
                                open={state['top']}
                                onClose={toggleDrawer('top', false)}
                            >
                                {list('top')}
                            </Drawer>
                        </Toolbar>
                        {/* <Box className={Styles.menuBox}>
                            {open && (
                                <List >
                                    <ListItem>
                                        <a href="#about">
                                            <ListItemText primary="ABOUT" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#skills">
                                            <ListItemText primary="SKILLS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#projects">
                                            <ListItemText primary="PROJECTS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#papers">
                                            <ListItemText primary="PAPERS" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#timeline">
                                            <ListItemText primary="TIMELINE" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#contact">
                                            <ListItemText primary="CONTACT" />
                                        </a>
                                    </ListItem>
                                    <ListItem>
                                        <a href="#contact">
                                            <ListItemText primary="RESUME" />
                                        </a>
                                    </ListItem>


                                </List>

                            )}

                        </Box> */}
                    </Container>
                </AppBar>






            </Box >
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top" >
                    <KeyboardArrowUpIcon />
                </Fab>

            </ScrollTop>

        </>
    )
}



export default Nav

