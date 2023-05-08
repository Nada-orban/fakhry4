import React from 'react'
import { Box, Typography, Divider, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import Image from 'next/image'
import profile from '../public/assets/blurred.png'
import background from '../public/assets/background.jpg'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Nav from './Nav'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from 'react-scroll'


function Landing() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="landing" className={styles.Landing} >
            <Box className={styles.overlay}>
                <Nav />

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", }} className={styles.landingInfoBox}>
                    <Box border="6px solid white" borderRadius="50%" width="250px" height="250px" overflow="hidden" margin="auto" padding={"0px 0px"} >
                        <Image
                            src={profile}
                            alt="Picture of the author"
                            width={290}
                        // height={250}

                        />
                    </Box>
                    <Typography variant='h2' sx={{ color: "white", mt: "30px", fontWeight: "bold" }}>Ahmed Fakhry</Typography>
                    <Typography variant='h6' sx={{ color: "white", fontStyle: "italic" }}>Machine Learning Developer at OpenAI</Typography>

                    <Box gap="15px" my="20px" justifyContent="center" sx={{ display: { xs: "flex", md: "none" } }}>
                        {/* <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a> */}
                        <a href='https://github.com/AhmedFakhry47' target="_blank">
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><GitHubIcon /></Avatar>
                        </a>
                        <a href='https://www.linkedin.com/in/ahmed-fakhry-5b178017a' target="_blank">
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><LinkedInIcon /></Avatar></a>
                        {/* <a href='(+20) 10-9813-0059' target="_blank">
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  >< WhatsAppIcon /></Avatar>
                        </a> */}

                        <a href='mailto:ahmedfakhry805@gmail.com' target="_blank">
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><EmailIcon /></Avatar>
                        </a>

                    </Box>

                </Box>
                <Box justifyContent="center" mb="10px" sx={{ display: { xs: "none", md: "flex" } }}>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        <KeyboardDoubleArrowDownIcon sx={{
                            width: "50px", height: "50px", color: "secondary.main",
                            cursor: "pointer", margin: " auto",
                        }} className={styles.arrow} />
                    </Link>

                </Box>

            </Box>
        </Box>
    )
}

export default Landing