import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profile from '../public/assets/sigma male.jpeg'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link'

function About() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="15vh" className={styles.aboutbackground} sx={{ width: "100vw" }} >
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} sx={{ mb: 3, display: "flex", flexDirection: "column", justifyContent: "center" }} >
                        {/* <Lottie animationData={jsonfile} /> */}
                        <div data-aos="zoom-in"
                            data-aos-mirror="true"
                        >
                            <Box width="300px" height="300px" border="3px solid white" borderRadius="50%" overflow="hidden" mt="50px" margin="auto" >
                                <Image
                                    src={profile}
                                    alt="Picture of the author"
                                    width={300}
                                    height={300}


                                />
                            </Box >

                            <Box display="flex" gap="15px" mt="20px" justifyContent="center">
                                {/* <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a> */}
                                <a href=''>
                                    <Avatar className={styles.iconContact}  ><GitHubIcon /></Avatar>
                                </a>
                                <a href=''>
                                    <Avatar className={styles.iconContact}  ><LinkedInIcon /></Avatar></a>
                                <a href=''>
                                    <Avatar className={styles.iconContact}  >< WhatsAppIcon /></Avatar>
                                </a>

                                <a href=''>
                                    <Avatar className={styles.iconContact}  ><EmailIcon /></Avatar>
                                </a>

                            </Box>
                        </div>



                    </Grid>
                    <Grid item md={8} xs={12} sx={{ padding: "0px 0px", mt: 4, color: "text.primary" }} >
                        <Typography variant='h4' sx={{ fontWeight: "bolder" }}>Ahmed Fakhry</Typography>
                        <Typography variant='h5' sx={{ my: 2, fontWeight: "bold", }} data-aos="fade-left" data-aos-delay="500">
                            MIT '18, M.Eng. Student, Software Engineer, and AI/ML Researcher
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, color: "text.secondary" }} data-aos="fade-left" data-aos-once="true" >
                            I'm a graduate of MIT's Class of 2018 and my passion is Computer Science.
                            My interests include software design and development, artificial intelligence, machine learning, computer vision, and natural language processing.
                        </Typography>
                        <Typography variant='h6' sx={{ color: "text.secondary" }}>I'm currently a graduate student working towards my Master of Engineering (M.Eng.) degree in Computer Science/Artificial Intelligence.</Typography>
                        <List >
                            <Typography variant='h5' sx={{ my: 2, fontWeight: "bold" }} >Massachusetts Institute of Technology (MIT)</Typography>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary" }} />
                                </ListItemIcon>
                                <ListItemText primary="Master of Engineering in Computer Science/Artificial Intelligence" primaryTypographyProps={{ fontSize: '18px', color: "text.secondary" }}  ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary" }} />
                                </ListItemIcon>
                                <ListItemText primary="Master of Engineering in Computer Science/Artificial Intelligence" primaryTypographyProps={{ fontSize: '18px', color: "text.secondary" }}  ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary" }} />
                                </ListItemIcon>
                                <ListItemText primary="Master of Engineering in Computer Science/Artificial Intelligence" primaryTypographyProps={{ fontSize: '18px', color: "text.secondary" }}  ></ListItemText>
                            </ListItem>
                        </List>


                    </Grid>



                </Grid>
            </Container>
        </Box>
    )
}

export default About