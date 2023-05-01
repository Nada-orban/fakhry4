import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles'
import AdjustIcon from '@mui/icons-material/Adjust';

function Skill() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="skill" backgroundColor="background.secondary" color="white" py="50px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>SKILLS</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>Below are some of my skills, and I'm always looking to learn more.</Typography>
                <Grid container spacing={2} sx={{ my: "50px", }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <AdjustIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "100px", height: "100px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2 }}>Computer Vision, OpenCV/OpenGL</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center" }}>I have significant research experience in the field of computer vision, including Computer Vision Tools for Locating Nitrogren-Vacancy Centers. I've also created dozens of programs using libraries such as OpenCV and OpenGL – these include my object tracker, collage generator, game engine, ray casting simulation, and many more.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default Skill