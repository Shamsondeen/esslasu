import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "../../assets/logo.jpg"

import './NavBar.css'


class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to='/'  href="#"><img src={Logo} className="navbar-brand"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Student Data
                                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/alumni' className="dropdown-item" href="#">ALUMNI</Link>
                                    <Link to='/undergraduate' className="dropdown-item" href="#">UNDERGRADUATE</Link>
                                    
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>



            </React.Fragment>
        );
    }
}

export default withRouter(NavBar)


