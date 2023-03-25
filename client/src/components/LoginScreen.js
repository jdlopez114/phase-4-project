import { useState } from "react";
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";

function LoginScreen({ setCurrentUser }) {

  const [ showSignUp, setShowSignUp ] = useState( true );

  return (
    <> 
      <h2 className="navbar">TEST DRIVE LOGIN </h2>
      <div className="login-form">
      
        { showSignUp ? (
          <> 
          <br/> 
          {/* <h2> LOGIN </h2> */}
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
            Back to Login
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default LoginScreen;