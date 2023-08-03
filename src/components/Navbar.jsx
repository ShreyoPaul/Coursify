import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                COURSIFY
            </div>
            <div className='nav'>
                <div className='navitem'>Discover</div>
                <div className='navitem'>For Job-seekers</div>
                <div className='navitem'>For Company</div>
                <div className='navitem border'>Login</div>
                <div className='navitem fill'>SignUp</div>
            </div>
        </div>
    )
}

export default Navbar