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

function Landing() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box className={styles.Landing} >
            <Box className={styles.overlay}>
                <Nav />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", }} className={styles.landingInfoBox}>
                    <Box border="6px solid white" borderRadius="50%" width="250px" height="250px" overflow="hidden" margin="auto" >
                        <Image
                            src={profile}
                            alt="Picture of the author"
                            width={250}
                            height={250}

                        />
                    </Box>
                    <Typography variant='h2' sx={{ color: "white", mt: "30px" }}>FAKHRY</Typography>
                    <Typography variant='h6' sx={{ color: "white" }}>Software Engineer @ Google - Grad Student - AI/ML Researcher</Typography>
                    <Box gap="15px" my="20px" justifyContent="center" sx={{ display: { xs: "flex", sm: "none" } }}>
                        {/* <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a> */}
                        <a href=''>
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><GitHubIcon /></Avatar>
                        </a>
                        <a href=''>
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><LinkedInIcon /></Avatar></a>
                        <a href=''>
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  >< WhatsAppIcon /></Avatar>
                        </a>

                        <a href=''>
                            <Avatar className={styles.iconContact} sx={{ backgroundColor: "black" }}  ><EmailIcon /></Avatar>
                        </a>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Landing