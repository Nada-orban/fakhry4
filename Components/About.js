import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profile from '../public/assets/blurred.png'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-scroll'
import { AiOutlineFilePdf } from 'react-icons/ai'



// (target="_blank") to make new tab when click to link
function About() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="5vh" className={styles.aboutbackground} sx={{ width: "100vw", backgroundColor: "background.primary" }} >
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} sx={{ mb: 3, display: { xs: "none", md: "flex" }, flexDirection: "column", justifyContent: "center" }} >
                        {/* <Lottie animationData={jsonfile} /> */}
                        <div data-aos="zoom-in"
                            data-aos-mirror="true"
                        >
                            <Box width="300px" height="300px" border="3px solid white" borderRadius="50%" overflow="hidden" mt="50px" margin="auto" >
                                <Image
                                    src={profile}
                                    alt="Picture of the author"
                                    width={360}
                                // height={300}


                                />
                            </Box >

                            <Box display="flex" gap="15px" mt="30px" justifyContent="center">
                                {/* <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a> */}
                                <a href='https://github.com/AhmedFakhry47' target="_blank">
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }} ><GitHubIcon /></Avatar>
                                </a>
                                <a href='https://www.linkedin.com/in/ahmed-fakhry-5b178017a' target="_blank">
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  ><LinkedInIcon /></Avatar></a>
                                {/* <a href='(+20) 10-9813-0059' target="_blank">
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  >< WhatsAppIcon /></Avatar>
                                </a> */}

                                <a href='mailto:ahmedfakhry805@gmail.com' target="_blank">
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  ><EmailIcon /></Avatar>
                                </a>

                            </Box>
                        </div>




                    </Grid>
                    <Grid item md={8} xs={12} sx={{ padding: "0px 0px", mt: 4, color: "text.primary" }} >
                        <Typography variant='h4' sx={{ fontWeight: "bolder" }}>Ahmed Fakhry</Typography>
                        {/* <Typography variant='h5' sx={{ my: 2, fontWeight: "bold", }} data-aos="fade-left" data-aos-delay="500">
                            Machine Learning Developer at OpenAI
                        </Typography> */}
                        <Typography variant='h6' sx={{ my: 3, color: "text.secondary" }} data-aos="fade-left" data-aos-once="true" >
                            I'm a Senior Data Scientist with 3+ years of experience in developing machine learning models and AI research. I am also masters student of computing systems at Liverpool John Moores University. I love working with data and finding insights that can drive business decisions. Check out my work and skills below, and feel free to contact me!


                        </Typography>
                        {/* <Typography variant='h6' sx={{ color: "text.secondary" }}>I'm currently a graduate student working towards my Master of Engineering (M.Eng.) degree in Computer Science/Artificial Intelligence.</Typography> */}
                        <List >
                            <Typography variant='h4' sx={{ my: 1, fontWeight: "bold" }} >Education</Typography>
                            <ListItem display="flex" justifyContent="center" alignItems='center'>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="M.SC in computing and information systems" primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 6 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Liverpool John Moores University
                                        </Typography>
                                        <br />

                                        {'Feb 2023 ‐ Now'}
                                    </React.Fragment>}  ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="B.SC in electronics and communication engineering " primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 2 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Alexandria University, Faculty of Engineering
                                        </Typography>
                                        <br />
                                        {'Sep 2015 ‐ Aug 2020'}
                                    </React.Fragment>} ></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" flexDirection="column" textAlign="center" my="20px "  >
                    <Typography variant='h4' sx={{ mb: "20px", mt: "50px", fontWeight: "bold" }}>
                        Learn more about my:
                    </Typography>
                    <Grid container spacing={3} display="flex" justifyContent="center" alignItems="center">
                        <Grid item >
                            <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                                <Link to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>Skills</Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>Projects</Typography>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                                <Link to="papers" spy={true} smooth={true} offset={-50} duration={500}>
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>Papers</Typography>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500}>
                                <Paper elevation={3} sx={{ width: "200px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>Work Experience</Typography>
                                </Paper>
                            </Link>

                        </Grid>
                        <Grid item>
                            <a href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" target="_blank">
                                <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", display: "flex", textAlign: "center", justifyContent: "center", cursor: "pointer", alignItems: "center", gap: "5px", backgroundColor: "neutral.lightblack", color: "white" }} className={styles.paperLink2}>
                                    <AiOutlineFilePdf />
                                    <Typography variant='h5' sx={{ textAlign: "center" }}>Resume</Typography>
                                </Paper>
                            </a>

                        </Grid>
                    </Grid>



                </Box>

            </Container >
        </Box >
    )
}

export default About