import React from 'react';
import '../App.css';

const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{boxShadow:'1px 7px 12px -4px rgba(0,0,0,0.75)'}}>
                <div className="container-fluid" style={{width: '80%'}}>
                <a className="navbar-brand" href="#" style={{}}>
                    <img src="https://www.abhyaz.com/Abhyaz.logo.jpg" alt="Abhyaz" width="130" height="50"/>
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{width:'100%',paddingLeft:'16%'}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'16px'}}>
                        <li className="nav-item" style={{paddingRight: '30px'}}>
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item" style={{paddingRight: '30px'}}>
                        <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item dropdown" style={{paddingRight: '30px'}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">train 4.0</a></li>
                                <li><a className="dropdown-item" href="#">intern 4.0</a></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item dropdown" style={{paddingRight: '30px'}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Career
                            </a>
                            <ul className="dropdown-menu">
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Bootcamps for All</a></li>
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Internships for Students</a></li>
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Internships for Job Seekers</a></li>
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Returnships for Professionals</a></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item dropdown" style={{paddingRight: '30px'}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Partners
                            </a>
                            <ul className="dropdown-menu">
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Educational Institutions</a></li>
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Resellers</a></li>
                                <li style={{padding:'3px 6px'}}><a className="dropdown-item" href="#">Speakers</a></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item" style={{paddingRight: '30px'}}>
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item" style={{paddingRight: '30px'}}>
                        <a className="nav-link" href="#">Blog</a>
                        </li>
                        
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>
            <style>
                
            </style>
        </>
    );
}

export default NavBar;
