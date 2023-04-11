import React, { useState, useContext } from "react";
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {

    const { setCurrentUser } = useContext(UserContext);
    const [ username, setUsername ] = useState( "" )
    const [ password, setPassword ] = useState( "" )
    const [ confirmPassword, setConfirmPassword ] = useState( "" )  
    const [ error, setError ] = useState([])
    const navigate = useNavigate();

    function handleSubmit( e ) {
        e.preventDefault()
        setError([])
        if(password !== confirmPassword){
            setError("PASSWORD MUST MATCH")
        } else {
            fetch("/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  'Accept': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            }).then( r => {
                if ( r.ok ) {
                    r.json().then( user => setCurrentUser( user ))
                    .then(() => navigate(`/cars`))
                } else {
                    r.json().then((err) => setError(err.errors.join()))
                }
            })
        }
    }

    return (
        <div className='form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit }>
                <input
                    className='sign-up-form-input'
                    placeholder='Username'
                    autoComplete="off"
                    value={ username }
                    onChange={(e) => setUsername( e.target.value )}
                    name='user_name'
                />
                <input
                    type="password"
                    className='sign-up-form-input'
                    placeholder='Password'
                    value={ password }
                    onChange={(e) => setPassword( e.target.value )}
                    name='password'
                />
                <input
                    type="password"
                    className='sign-up-form-input'
                    placeholder='Confirm Password'
                    value={ confirmPassword }
                    onChange={(e) => setConfirmPassword( e.target.value )}
                    name='confirm_password'
                />
                <div >
                    <button className="form-buttons">Create Account!</button>
                </div>
                <div>
                { error ? <div className="errors-container"><span className="error-message">{ error }</span></div> : null }                
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;