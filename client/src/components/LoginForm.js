import React, { useState, useContext } from "react";
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const { setCurrentUser } = useContext(UserContext)
  const [ username, setUsername ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ error, setError ] = useState([])
  const navigate = useNavigate();

  function handleSubmit( e ) {
      e.preventDefault();
      setError([])
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          username: username,
          password: password
        })
      }).then( r => {
          if ( r.ok ) {
              r.json().then( user => setCurrentUser( user ))
              .then(() => navigate(`/cars/`))
          } else {
            r.json().then(( err ) => setError( err.error ))
          }
        })
    }

  return (
    <div className='review-form-section' >
        <form noValidate autoComplete="off" className='review-form' onSubmit={ (e) => handleSubmit(e) } >
            <input
                className='form-input'
                placeholder='Username'
                autoComplete="off"
                value={ username }
                onChange={( e ) => setUsername( e.target.value )}
                name='user_name'
            />
            <input
                type="password"
                className='form-input'
                placeholder='Password'
                value={ password }
                onChange={( e ) => setPassword( e.target.value )}
                name='password'
            />
            <div >
                <button className='form-buttons'>Login</button>
            </div>
            <div>
                { error ? <div className="errors-container"><span className="error-message">{ error }</span></div> : null }                
            </div>
        </form>
    </div>
  )
}

export default LoginForm;