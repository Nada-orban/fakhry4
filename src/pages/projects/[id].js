import React from 'react'
import Link from 'next/link'
import { projectsdata } from '../../../data'
import Nav from '../../../Components/Nav'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar, Divider, } from '@mui/material'
import styles from '../../styles/Home.module.css'
import { ColorModeContext } from '../../../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Footer from '../../../Components/Footer'

export const getStaticProps = async ({ params }) => {
    const projectsfilter = projectsdata.filter(p => p.id.toString() === params.id);

    return {
        props: {
            project: projectsfilter[0],
        },
    }
}
export const getStaticPaths = async () => {
    const paths = projectsdata.map(project => ({
        params: { id: project.id.toString() }
    }))
    return { paths, fallback: false };
}

function Details({ project }) {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Nav />
            <Box>
                <Container>

                    <p>{project.id}</p>

                    <p>{project.body}</p>


                </Container>

            </Box>
            <Divider />
            <Footer />
        </>
    )

}

export default Details

// export async function getServerSideProps(context) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await res.json();

//     return {
//         props: {
//             post: data
//         }
//     }

// }