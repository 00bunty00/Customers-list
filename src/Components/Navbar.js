import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid justify-content-center">
                <div className="navbar-brand">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        <span className='mx-3'>Customer List</span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar