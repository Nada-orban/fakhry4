import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projectsdata } from '../data'
import Link from 'next/link'


function project({ id, title, body, pdf, code, poster }) {
    return (
        <Link href={`/projects/[id]`} as={`/projects/${id}`} key={id} passHref>
            <Grid item xs={12} md={4}>
                <Box className={styles.projectBox}>
                    <Typography variant='h5' sx={{ color: "secondary.main" }}>{title}</Typography>
                    <Typography variant='h6'>{body}</Typography>
                </Box>
            </Grid>
        </Link>
    )
}

export default project