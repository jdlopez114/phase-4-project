import React, { useState } from "react";
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";

function LoginScreen() {

  const [ showSignUp, setShowSignUp ] = useState( true )

  return (
    <div> 
      <h2 className="login-nav">TEST DRIVE LOGIN </h2>
      <div className="login-form">
        { showSignUp ? (
          <> 
          <br/> 
          <h2> LOGIN </h2>
            <LoginForm />
            <button className="form-buttons" onClick={ () => setShowSignUp( false ) }>
            Sign Up!
            </button>
          </>
        ) : ( 
          <> 
          <br/> 
          <h2>Don't have an account? Sign up now!</h2>
            <SignUpForm /> 
            <button className="form-buttons" onClick={ () => setShowSignUp( true ) }>
            Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;