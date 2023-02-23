import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
<<<<<<< HEAD
import { CgProfile } from 'react-icons/cg';
=======
<<<<<<< HEAD
import { CgProfile } from 'react-icons/cg';
=======
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
import logo from '../../Images/fixoria.png';
import './HomeNavbar.css';



const HomeNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([])
    const handleLogOut = () => {
        if (loggedInUser.email) {

            setLoggedInUser(loggedInUser.email = '');
            console.log(loggedInUser.email);
        }
    }
    useEffect(() => {
        fetch("http://localhost:5055/admin")
            .then(res => res.json())
            .then(data => {
                const myData = data.filter(d => d.email === loggedInUser.email)
                setAdmin(myData)
            })
    }, [loggedInUser.email])

    return (
<<<<<<< HEAD
        <div className='NavContainer'>
            <nav className="navbar navbar-expand-lg navbar-light text-center">
                <div className="container">
=======
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white text-center">
                <div className="container ">
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
                    <Link to='/' className='navbar-brand '><img src={logo} style={{ height: '50px' }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/reviews'>Reviews</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    admin.length ? <Link className="nav-link" to='/admin'>Admin</Link> :
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                }
                            </li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
                            <li class="dropdown LogInOut nav-item">
                                <li class="" data-toggle="dropdown">
                                    <CgProfile />
                                </li>
                                <ul class="dropdown-menu">
                                    <li className="nav-item" onClick={
                                        handleLogOut
                                    }>
                                        <Link className="nav-link" to='/login'>
                                            {loggedInUser.email ?
                                                <li>{"Log Out"}</li>
                                                : <li>{"Log In"}</li>}
                                        </Link>
                                    </li>
                                    { loggedInUser.email &&<li className='nav-item'><Link className="nav-link" to='/add-review'>Add Reviews</Link></li>}
                                </ul>
<<<<<<< HEAD
=======
=======
                            <li className="nav-item LogInOut">
                                <Link className="nav-link" to='/login'>
                                    {loggedInUser.email ? 
                                    <li className='nav-item'>{"Log Out"}</li> 
                                    : <li className='nav-item'>{"Log In"}</li>}
                                </Link>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
                            </li>
                            



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;