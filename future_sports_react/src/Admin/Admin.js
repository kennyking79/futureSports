import React from "react";
import "../styles.scss"
function Admin() {
  return (
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
    </div>
  );
}

export default Admin;


