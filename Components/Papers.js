import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profile from '../public/assets/sigma male.jpeg'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';

function Papers() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="papers" py="90px" textAlign="center" backgroundColor="background.secondary" color="white">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Papers</Typography>
                <Box my="40px">
                    <Box my="20px">
                        <Link href="https://arxiv.org/abs/2011.13320" className={styles.linkText}>
                            <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Virufy: Global Applicability of Crowdsourced and Clinical Datasets for AI Detection of COVID‐19 from Cough Audio
                                Samples</Typography>
                        </Link>
                        <Typography variant='h6'>Nov 2020, Awaiting AE Recommendation from IEEE TAI.</Typography>
                        <Link href='https://arxiv.org/abs/2011.13320' className={styles.linkText}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant='h5' sx={{ color: "secondary.main", mx: 1 }}>Download</Typography>
                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                            </Box>
                        </Link>
                    </Box>
                    <Box my="20px">
                        <Link href="https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf" className={styles.linkText}>
                            <Typography variant='h5' sx={{ color: "secondary.main", fontWeight: "bolder" }}>Virufy: A Multi‐Branch Deep Learning Network for Automated Detection of COVID‐19 </Typography>
                        </Link>
                        <Typography variant='h6'>March 2021,Interspeech conference 2021</Typography>
                        <Link href='https://www.isca-speech.org/archive/pdfs/interspeech_2021/fakhry21_interspeech.pdf.' className={styles.linkText}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant='h5' sx={{ color: "secondary.main", mx: 1 }}>Download</Typography>
                                <DownloadIcon sx={{ color: "secondary.main", width: "26px", height: "26px" }} className={styles.iconLink} />
                            </Box>
                        </Link>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Papers