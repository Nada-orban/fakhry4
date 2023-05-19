import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'



{/* <Link href={`/projects/[id]`} as={`/projects/${id}`} key={id} passHref></Link> */ }

function Projects({ id, title, body, pdf, code, poster, image }) {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (

        <Grid item xs={12} md={6}>
            <Link href="#" as={`/projects/${id}`} key={id} passHref>
                <Box className={styles.projectBox}>
                    <img src={image} alt='' className={styles.boximage} />
                    {/* <Box className={styles.boxtext}>
                        <Typography variant='subtitle1'>VIEW PROJECT</Typography>
                    </Box> */}
                    <Box className={styles.boxbody}> <Typography sx={{ color: "secondary.main" }} className={styles.projecttext}>{title}</Typography>
                        <Typography className={styles.projectbody}>{body}</Typography></Box>


                </Box>
            </Link>
        </Grid >

        // <Box id='projects' py="50px" my="50px">
        //     <Container>
        //         <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Personal Projects</Typography>
        //         <Typography variant='h6' sx={{ textAlign: "center" }}>Here you can see some of the projects I've done on my own time.</Typography>

        //         <Grid container sx={{ my: "50px" }} spacing={3}>
        //             <Grid item xs={12} md={4}>
        //                 <Box className={styles.projectBox}>
        //                     <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
        //                     <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
        //                 </Box>
        //             </Grid>
        //             <Grid item xs={12} md={4}>
        //                 <Box className={styles.projectBox}>
        //                     <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
        //                     <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
        //                 </Box>
        //             </Grid>
        //             <Grid item xs={12} md={4}>
        //                 <Box className={styles.projectBox}>
        //                     <Typography variant='h5' sx={{ color: "secondary.main" }}>Project Title</Typography>
        //                     <Typography variant='h6'>A collection of various neural network models in TensorFlow.</Typography>
        //                 </Box>
        //             </Grid>
        //         </Grid>
        //         <Box display='flex' justifyContent="center" flexDirection="column" textAlign="center" marginTop="10px">
        //             <Typography variant='h4'>To see more of my projects...</Typography>
        //             <button className={styles.normalButton}><a href=''>Visit My GitHub<GitHubIcon /></a></button>
        //         </Box>
        //     </Container>
        // </Box>
    )
}

export default Projects