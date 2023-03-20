import { useState } from "react";
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";

function LoginScreen({ setCurrentUser }) {

  const [showSignUp, setShowSignUp] = useState(true);

  return (
      <div className="login-form">
        <h2 className="tagline">TEST DRIVE</h2>
        { showSignUp ? (
          <> 
          Log into your account!
            <LoginForm setCurrentUser={ setCurrentUser } />
            <button onClick={() => setShowSignUp(false)}>
            Sign Up
            </button>
          </>
        ) : ( 
          <> 
            Don't have an account? Sign up now!
            <SignUpForm setCurrentUser={ setCurrentUser } /> 
            <button onClick={() => setShowSignUp(true)}>
            Log In
            </button>
          </>
        )}
      </div>
    );
}

export default LoginScreen;