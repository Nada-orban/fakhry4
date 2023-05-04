import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles'
import AdjustIcon from '@mui/icons-material/Adjust';
import { AiFillDatabase } from 'react-icons/ai'
import { HiCode } from 'react-icons/hi'
import { GrPersonalComputer } from 'react-icons/gr'
import { FaShareAlt } from 'react-icons/fa'
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import ComputerIcon from '@mui/icons-material/Computer';

function Skill() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="skill" backgroundColor="background.secondary" color="white" py="50px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>SKILLS</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>Below are some of my skills, and I'm always looking to learn more.</Typography>
                <Grid container spacing={2} sx={{ my: "50px", }}>
                    <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <CodeIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Programming Languages</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}>Python,C/C++
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <ShareIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Deep Learning Frameworks</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}>Tensorflow, Keras, Pytorch
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <StorageIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Databases</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}> SQL database,MongoDB
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: "30px" }}>
                        <ComputerIcon sx={{ padding: "20px", textAlign: "center", border: "2px solid white", borderRadius: "50%", backgroundColor: "white", color: "secondary.main", width: "120px", height: "120px", overflow: "hidden", mx: "auto" }} />
                        <Typography variant='h4' sx={{ textAlign: "center", my: 2, fontWeight: "bold" }}>Others</Typography>
                        <Typography variant='h6' sx={{ textAlign: "center" }}> Linux,Git,OOP Fundamentals,Matlab
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>

    )
}

export default Skill