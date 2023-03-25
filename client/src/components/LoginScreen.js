import { useState } from "react";
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";

function LoginScreen({ setCurrentUser }) {

  const [ showSignUp, setShowSignUp ] = useState( true );

  return (
      <div className="login-form">
        <h2 className="navbar">TEST DRIVE</h2>
        { showSignUp ? (
          <> 
          <br/> 
          <h2> Log into your account!</h2>
            <LoginForm setCurrentUser={ setCurrentUser } />
            <button className="form-buttons" onClick={ () => setShowSignUp( false ) }>
            Sign Up
            </button>
          </>
        ) : ( 
          <> 
            Don't have an account? Sign up now!
            <SignUpForm setCurrentUser={ setCurrentUser } /> 
            <button className="form-buttons" onClick={ () => setShowSignUp(true) }>
            Log In
            </button>
          </>
        )}
      </div>
    );
}

export default LoginScreen;