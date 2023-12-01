import React from "react";
// import "../styles.scss"
import "./Navigation"
import Navigation from "./Navigation";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <header id="header">
        <Box sx={{display: 'flex', flexDirection: 'column',minHeight: '10vh', justifyContent: 'center', alignItems: 'center'}}>
            <Navigation/>
            <Typography variant="h1" gutterBottom>
                CYBERSPORTS
            </Typography>
            
        </Box>    
        </header>
    )
}

export default Header