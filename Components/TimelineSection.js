import React from 'react'
import {
    Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar
} from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import alexunversity from '../public/assets/download.jpeg'
import { NoEncryption } from '@mui/icons-material';


function TimelineSection() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="timeline" py="60px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Timeline</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>A short summary of my work experience..</Typography>
                <Timeline position="alternate" sx={{ my: 5, display: { xs: "none", sm: "block" } }}>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                <FcGoogle style={{ width: "140px", height: "140px", }} />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='h6'>2019 - Present</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Google,
                            </Typography>
                            <Typography variant='h4'>Mountain View, CA</Typography>
                            <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                <FcGoogle style={{ width: "140px", height: "140px" }} />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "200px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='h6'>2019 - Present</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Google,
                            </Typography>
                            <Typography variant='h4'>Mountain View, CA</Typography>
                            <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                <FcGoogle style={{ width: "140px", height: "140px" }} />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='h6'>2019 - Present</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Google,
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Mountain View, CA</Typography>
                            <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "15px" }}>
                                <Image
                                    src={alexunversity}
                                    alt="Picture of the author"
                                    width={130}
                                    height={130}
                                />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='h6'>2015 - 2020</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Faculty of Engineering,
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Alexandria</Typography>
                            <Typography variant='h6'>I graduated from Faculty of Engineering .</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>


                {/* //mobile view */}
                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                    <Timeline sx={{
                        my: 5,
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }} >
                        <TimelineItem>
                            <TimelineSeparator >
                                <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                    <FcGoogle style={{ width: "60px", height: "60px", }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ height: "100px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant='h6'>2019 - Present</Typography>
                                <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    Google,
                                </Typography>
                                <Typography variant='h5'>Mountain View, CA</Typography>
                                <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                    <FcGoogle style={{ width: "60px", height: "60px" }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ height: "200px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant='h6'>2019 - Present</Typography>
                                <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    Google,
                                </Typography>
                                <Typography variant='h5'>Mountain View, CA</Typography>
                                <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", border: "2px solid #bdbdbd", padding: "5px" }}>
                                    <FcGoogle style={{ width: "60px", height: "60px" }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ height: "100px" }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant='h6'>2019 - Present</Typography>
                                <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    Google,
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Mountain View, CA</Typography>
                                <Typography variant='h6'>I currently work as a Software Engineer at Google headquarters in Mountain View, California.</Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>

                                <TimelineDot color="primary" variant="outlined" sx={{ width: "70px", height: "70px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "5px" }}>
                                    <Image
                                        src={alexunversity}
                                        alt="Picture of the author"
                                        width={60}
                                        height={60}
                                    />
                                </TimelineDot>

                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant='h6'>2015 - 2020</Typography>
                                <Typography variant="h5" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                    Faculty of Engineering,
                                </Typography>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Alexandria</Typography>
                                <Typography variant='h6'>I graduated from Faculty of Engineering .</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Container >
        </Box >

    )
}

export default TimelineSection