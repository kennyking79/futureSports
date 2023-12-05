import React, { useState } from 'react';
import axios from 'axios';

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
                    key: "5fdc660a6ef746f7be78d46a9f232d06", // Replace with your actual API key
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

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter a city"
                />
                <button type="submit">Search</button>
            </form>

            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {weatherData && (
                <div>
                    <h2>Current Weather in {city}</h2>
                    {/* Example data display, adjust based on actual response structure */}
                    <p>Temperature: {weatherData.data[0].temp}°C</p>
                    <p>Humidity: {weatherData.data[0].rh}%</p>
                    {/* Add more weather details as needed */}
                </div>
            )}
        </div>
    );
};

export default WeatherDisplay;
