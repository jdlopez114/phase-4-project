import React, { useState } from 'react';

function LoginForm({ setCurrentUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username, 
            password
        }
        fetch("http://127.0.0.1:9393/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then( res => {
            if (res.ok) {
                res.json().then(setCurrentUser);
            } else {
                res.json().then(err => console.log("error:", err));
            }
          });
      }


    return (
    <div className='review-form-section' >
        <form noValidate autoComplete="off" className='review-form' onSubmit={handleSubmit} >
            <input
                className='review-form-input'
                placeholder='Username'
                autoComplete="off"
                value={ username }
                onChange={(e) => setUsername(e.target.value)}
                name='user_name'
               
            />
            <input
                className='review-form-input'
                placeholder='Password'
                value={ password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                
            />
            <div >
                <button className='login-button'>Login</button>
            </div>
            <div>
            {/* {`${errors}`} */}
            </div>
        </form>
    </div>
  )
}

export default LoginForm