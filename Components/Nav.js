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
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false)



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };



    //background changing function
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }
        window.addEventListener('scroll', changeBackground);


    }, [])











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


    //className={classes[navRef.current]}





    //background changing function
    const NavLinks = styled(Link)`
  color: white;
  &.active {
    color: #ffa000;
  }
`;







    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <AppBar variant="permanent" position="fixed" sx={{
                    color: "text.primary", borderStyle: "none", height: "60px", background: "transparent", zIndex: 50
                }} className={navbar ? Styles.Appbaractive : Styles.Appbar}>
                    <Container>
                        <Toolbar>
                            <Box display='flex' flexGrow={1} alignItems="center">

                                <Typography
                                    className={navbar ? Styles.namelogoactive : Styles.namelogo}
                                    variant="h4"
                                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, color: "secondary.main", fontWeight: "bold" }}
                                >
                                    <Link to="landing" spy={true} smooth={true} offset={-50} duration={500}>Ahmed Fakhry</Link>

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
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}  >
                                                <ListItemText primary="ABOUT" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="SKILLS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="PROJECTS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="papers" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="PAPERS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="timeline" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="TIMELINE" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="CONTACT" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            < AiOutlineFilePdf style={{ color: "white", marginRight: "5px" }} />
                                            <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" target="_blank">
                                                <ListItemText primary="RESUME" primaryTypographyProps={{ fontWeight: "bold" }} />
                                            </a>
                                        </ListItem>

                                        {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                                        </IconButton> */}
                                    </List>
                                </Box>

                            </Box>


                        </Toolbar>
                    </Container>

                </AppBar>
                <Toolbar id="back-to-top-anchor" />

                {/* mobile view 1*/}
                <Box>
                    <AppBar position="fixed" sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "black", }}>
                        <Container >
                            <Toolbar >
                                <Box display='flex' flexGrow={1}  >
                                    <Typography
                                        variant="h5"
                                        sx={{ flexGrow: 1, color: "secondary.main", mt: 1, fontSize: "25px", }}
                                    >
                                        Ahmed Fakhry
                                    </Typography>
                                    <Box onClick={() => setOpen(!open)} sx={{ display: { md: 'none', sm: 'block' }, mt: 3, }}>
                                        <Box className={open ? Styles.activeHamburger : Styles.hamburber}></Box>
                                    </Box>
                                    {/* <IconButton
                                        onClick={() => setOpen(!open)}
                                        sx={{ display: { md: 'none', sm: 'block' }, backgroundColor: "secondary.main", borderRadius: "10px", mt: 1, display: "flex" }}

                                    >
                                        {!open ? <MenuIcon sx={{ color: "black" }} /> : <CloseIcon />}
                                        <Typography variant='h6' sx={{ color: "black" }}>MENU</Typography>


                                    </IconButton> */}
                                </Box>
                            </Toolbar>


                            <Box className={open ? Styles.menuBoxactive : Styles.menuBox} variant="permanent" BackdropProps={{ invisible: false }}>
                                {open && (
                                    <List  >
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="ABOUT" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="SKILLS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                                                <ListItemText primary="PROJECTS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="papers" spy={true} smooth={true} offset={-50} duration={500}>
                                                <ListItemText primary="PAPERS" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="timeline" spy={true} smooth={true} offset={-50} duration={500} >
                                                <ListItemText primary="TIMELINE" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            <NavLinks to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                                                <ListItemText primary="CONTACT" />
                                            </NavLinks>
                                        </ListItem>
                                        <ListItem className={Styles.navLink2}>
                                            < AiOutlineFilePdf style={{ color: "white", marginRight: "5px" }} />
                                            <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" target="_blank">
                                                <ListItemText primary="RESUME" />
                                            </a>
                                        </ListItem>


                                    </List>

                                )}

                            </Box>
                        </Container>
                    </AppBar>

                </Box>






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

