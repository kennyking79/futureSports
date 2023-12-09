import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';

function Navigation() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'black' }}>Home</Button>
        <Button color="inherit" component={RouterLink} to="/players" sx={{ color: 'black' }}>Players</Button>
        <Button color="inherit" component={RouterLink} to="/shop" sx={{ color: 'black' }}>Shop</Button>
        <Button color="inherit" component={RouterLink} to="/admin" sx={{ color: 'black' }}>Admin</Button>
        {/* Add additional links as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;