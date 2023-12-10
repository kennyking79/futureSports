import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, CircularProgress, Grid, Paper } from '@mui/material';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

const WeatherDisplay = () => {
    const [city, setCity] = useState('Sydney');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherData = async (cityName) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.weatherbit.io/v2.0/current`, {
                params: {
                    city: cityName,
                    key: "5fdc660a6ef746f7be78d46a9f232d06",
                    include: "minutely"
                }
            });
            setWeatherData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeatherData(city);
    };

    const getWeatherIcon = (weatherCode) => {
        switch(weatherCode) {
            case 'Clear':
                return <WiDaySunny />;
            case 'Clouds':
                return <WiCloudy />;
            case 'Rain':
                return <WiRain />;
            case 'Snow':
                return <WiSnow />;
            default:
                return <WiDaySunny />;
        }
    };

    return (
        
        <Box sx={{ padding: 2, margin: 'auto', backgroundColor: 'black'}}>
            <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
                        <Typography variant="p" gutterBottom>
                            Admins please check the weather with this complimentary weather app before you book your games
                        </Typography>
                    </Paper>
            </Grid>
            <Typography variant="h4" gutterBottom>
                Weather Finder
            </Typography>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField 
                    label="City"
                    variant="outlined"
                    size="small"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                            backgroundColor: 'black',
                        }
                    }}
                />
                <Button variant="contained" color="primary" type="submit">
                    Search
                </Button>
            </form>

            {isLoading && <CircularProgress />}
            {error && <Typography color="error">Error: {error.message}</Typography>}
            {weatherData && (
                <Box>
                    <Typography variant="h6">Current Weather in {city}</Typography>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <div>{getWeatherIcon(weatherData.data[0].weather.code)}</div>
                        <div>
                            <Typography>Temperature: {weatherData.data[0].temp}°C</Typography>
                            <Typography>Humidity: {weatherData.data[0].rh}%</Typography>
                            {/* Add more weather details as needed */}
                        </div>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default WeatherDisplay;
