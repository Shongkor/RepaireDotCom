import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/fixoria.png'
import Admin from '../../Pages/Admin/Admin';
import './HomeNavbar.css'



const HomeNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch("https://mysterious-woodland-64195.herokuapp.com/admin")
            .then(res => res.json())
            .then(data => {
                const myData = data.filter(d => d.email === loggedInUser.email)
                // console.log('mydata:', myData)
                setAdmin(myData)
            })
    }, [loggedInUser.email])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container ">
                    <Link to='/' className='navbar-brand '><img src={logo} style={{ height: '50px' }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/news'>News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    admin.length ? <Link className="nav-link" to='/admin'>Admin</Link> :
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>{loggedInUser.email ? <button className='btn btn-dark'>{loggedInUser.name}</button> : <button className='btn btn-dark'>{'Log In'}</button>}</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;