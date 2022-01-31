import React from "react";
function NavBar() {
    return (
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <a>JOSH</a>
                <button className='nav-button'>About me</button>
                <button className='nav-button'>My Work</button>
                <button className='nav-button'>Resume</button>
                <button className='nav-button'>Interests</button>
            </div>
        </nav>
      </>
    )
}

export default NavBar;
