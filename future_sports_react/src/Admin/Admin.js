import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import WeatherDisplay from "../weather";
import { Container, TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';

function Admin() {
  return (
    <ErrorBoundary>
      <Container maxWidth="xs" sx={{ backgroundColor: 'black', color: 'white', height: '100vh', paddingTop: 2 }}>
        <Card sx={{ backgroundColor: 'black', color: 'white' }}>
          <CardContent sx={{ backgroundColor: 'black' }}> {/* Make sure CardContent also has a black background */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'black' // Ensure this is black as well
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
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{ 
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    }
                  }}
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
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{ 
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    }
                  }}
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
