import React from "react";
import LoginForm from './LoginForm';

function LoginScreen({ setCurrentUser }) {

    return (
        <div className="login-form">
          <h2 className="tagline">LOGIN SCREEN</h2>
              <LoginForm setCurrentUser={setCurrentUser} />
        </div>
      );
}

export default LoginScreen;