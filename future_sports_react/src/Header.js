import React from "react";
import "./Navigation"
import Navigation from "./Navigation";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <header id="header">
            <Box sx={{ bgcolor: 'black', color: 'white', display: 'flex', flexDirection: 'column', minHeight: '10vh', justifyContent: 'center', alignItems: 'center'}}>
                <Navigation/>
                <Typography sx={{ color: 'white' }} variant="h1" gutterBottom>
                    CYBERSPORTS
                </Typography>
            </Box>    
        </header>
    )
}

export default Header