import React from "react";
import "../styles.scss";
import ErrorBoundary from "../ErrorBoundary";
import WeatherDisplay from "../weather";
function Admin() {
  return (
    <ErrorBoundary>
    <div className="login-container">
       
      <form id="adminLoginForm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      <WeatherDisplay/>
    </div>
    </ErrorBoundary>

  );
}

export default Admin;


