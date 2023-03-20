import React from 'react';

function Header({ currentUser }) { 

  const { username } = currentUser

  return (
    <header>
        <h1><strong>Welcome { username }</strong></h1>
    </header>
  )
}

export default Header;