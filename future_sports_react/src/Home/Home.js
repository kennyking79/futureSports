import React from "react";
import { Typography, Grid, Paper, Box } from '@mui/material';
import CyberSlider from "../CyberSlider";
import ErrorBoundary from "../ErrorBoundary";
import "../styles.scss";


function Home() {
    return (
        <ErrorBoundary>
            <Grid container spacing={2} style={{ padding: '20px', backgroundColor: 'black', color: 'white' }}>
                <Grid item xs={12}>
                    <CyberSlider />
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                        <Typography variant="h4" gutterBottom>
                            Welcome to Future Sports
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Explore the world of futuristic sports...
                        </Typography>
                    </Paper>
               </Grid>
                <Grid item container xs={12} spacing={2} justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', height: '100%' }}>
                            <Typography variant="h6">
                                The fastest CPU sports in the world with the greatest and most hightech players.  The most advanced cybernetic players the world has to offer !
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={`${process.env.PUBLIC_URL}/Images/field.png`} alt="Field" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }}/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                        <Typography variant="h4" gutterBottom>
                            Be Part of the crowd
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            The coolest Merch !
                        </Typography>
                    </Paper>
               </Grid>
                <Grid item container xs={12} spacing={2} justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <Typography variant="h6">
                                Become part of the crowd by connecting in with your brain cortex cyber connection, you can be there with all your friends and cheer for your favourite teams right from the comfort of  your own home.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={`${process.env.PUBLIC_URL}/Images/crowd1.png`} alt="Crowd" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }}/>
                    </Grid>
                </Grid>
            </Grid>
        </ErrorBoundary>
    );
}

export default Home;
