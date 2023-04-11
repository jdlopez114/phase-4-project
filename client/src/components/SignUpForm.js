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
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                username: username,
                password: password,
                password_confirmation: confirmPassword
            }),
        }).then( r => {
            if ( r.ok ) {
                r.json().then( user => setCurrentUser( user ))
                .then(() => navigate(`/cars`))
            } else {
                setCurrentUser("")
                setPassword("")
                setConfirmPassword("")
                r.json().then((err) => setError(err.errors))
            }
        })
    }

    return (
        <div className='form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit }>
                <input
                    className='sign-up-form-input'
                    type='text'
                    name='user_name'
                    placeholder='Username'
                    autoComplete="off"
                    value={ username }
                    onChange={(e) => setUsername( e.target.value )}
                />
                <input
                    className='sign-up-form-input'
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={ password }
                    onChange={(e) => setPassword( e.target.value )}
                />
                <input
                    className='sign-up-form-input'
                    type="password"
                    name='confirm_password'
                    placeholder='Confirm Password'
                    value={ confirmPassword }
                    onChange={(e) => setConfirmPassword( e.target.value )}
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