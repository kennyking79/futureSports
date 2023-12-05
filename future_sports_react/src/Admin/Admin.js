import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import WeatherDisplay from "../weather";
import { Container, TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';

function Admin() {
  return (
    <ErrorBoundary>
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Admin Login
              </Typography>
              <Box component="form" id="adminLoginForm" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <WeatherDisplay />
      </Container>
    </ErrorBoundary>
  );
}

export default Admin;
