import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Job from './Job';
import Footer from './Footer';

const Hero = () => {
    return (
        <>
        <NavBar/>
        <div className='container' style={{display:'flex',flexDirection:'column'}}>
            <div className='hero' style={{width:'100%'}}>
                <img src='https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/featured-jobs.jpg' style={{objectFit:'cover',alignItems:'center',width:'100%',height:'auto'}}/>
            </div>

            <section className='call'>
                <div className='left'>
                    <img src='https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif'/>
                </div>
                <div className='right'>
                    <h1 style={{fontSize:'30px',paddingLeft:'4rem',width:'100%',paddingTop:'10px'}}>Opportunity for Jobseekers</h1>
                    <p style={{paddingTop:'2rem',paddingLeft:'2rem',fontSize:'20px'}}>Graduate students often face challenges at the beginning of their careers due to the gap between industry expectations and theoretical knowledge. To bridge this gap, Abhyaz provides technical and non-technical opportunities for recent graduates, regardless of their field of study.
                         Our program offers hands-on experience that helps students upgrade their skills and become industry-ready.</p>
                </div>
            </section>
        </div>
        <Job/>
        <Footer/>
        </>
    );
}

export default Hero;
