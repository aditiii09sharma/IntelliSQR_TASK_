// import LoginPage from "./pages/LoginPage";

// function App() {
//   return <LoginPage />;
// }

// export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="login-box">
        <h2 className="heading">Welcome back!</h2>
        <form className="login-form">
          <input type="text" placeholder="UID" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;




