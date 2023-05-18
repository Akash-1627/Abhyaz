import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <>
        <div className='navbar navbar-expand-lg'>
            <div className='foot'>
                <div className='logofoot'>
                    <img src='https://www.abhyaz.com/logo.png'/>
                </div>
                <div className="nav flex-column">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About Us</a>
                    <a className="nav-link" href="#">Contact Us</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
