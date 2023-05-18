import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const JobData = () => {
    return (
        <>
            <div style={{position:'relative'}}>
                <div className='image'>
                    <img src='https://www.abhyaz.com/logo.png'/>
                
                </div>
                <div className='jobdata'>
                    <h1 className='datahead'>Event management - Intern</h1>
                    <p>Remote Job | Posted on 05/10/2023</p>
                    <button type='button' className='btn1'>Apply Now</button>
                    <Link to='/'><button type='button' className='btn1'>Back to Home</button></Link>
                </div>
                
            </div>
            <div className='jobdat'>
                <div className='desc'>
                    <h1 className='heading'>Job Description</h1>
                    <p className='headp'>MTC is looking  for an excellent and talented Agile project engineer intern to initiate an outstanding 
                    part in our organizational growth. If you are good at collecting customer feedback, manpower 
                    planning and monitoring & controlling also want to be a professional in it, then you are at a right 
                    place.</p>
                     <h1 className='heading' style={{paddingTop:'2rem'}}>General Responsibilities :</h1>
                     <div className='resp'>
                        <ul>
                            <li>Planning and designing events with attention to financial and time limitation</li>
                            <li>Organizing events according to requirements, target, audience, and objective</li>
                            <li>Discussion with the vendors to reaching the view of agreement</li>
                            <li>Conduct short term and long term planning and managements for events and sales</li>
                            <li>Implementing brainstorming ideas of event plans and concept</li>
                            <li>Handling budgeting and invoicing</li>
                            <li>Updating the plans and ideas with senior management</li>
                            <li>A detailed research opportunities for new clients and events</li>
                            <li>Liaising and parleying with vendors </li>
                            <li>Negotiating with sponsorship deals </li>
                        </ul>
                     </div>
                </div>
                <div className='info'>
                    <h1 className='heading1'>Job Information</h1>
                    <div className='val'>
                        <p className='head'>Salary</p>
                        <p className='ans'><b>Based on the outcomes</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Evaluation Process start on</p>
                        <p className='ans'><b>05/16/2023</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Industry</p>
                        <p className='ans'><b>Business Management</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Work Experience</p>
                        <p className='ans'><b>0-1 year</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Application Closing Date</p>
                        <p className='ans'><b>05/16/2023</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Date of Joining</p>
                        <p className='ans'><b>05/22/2023</b></p>
                    </div>
                    <div className='val'>
                        <p className='head'>Shift Timings</p>
                        <p className='ans'><b>1:00 PM - 6:00 PM</b></p>
                    </div>
                </div>

            </div>
            <div className='button'>
                <button className='btn1'>Apply Now</button>
            </div>
            <Footer/>
        </>
    );
}

export default JobData;
