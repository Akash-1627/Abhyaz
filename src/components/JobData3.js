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
                    <h1 className='datahead'>Learning & Development Executive - Intern</h1>
                    <p>Remote Job | Posted on 05/10/2023</p>
                    <button type='button' className='btn1'>Apply Now</button>
                    <Link to='/'><button type='button' className='btn1'>Back to Home</button></Link>
                </div>
                
            </div>
            <div className='jobdat'>
                <div className='desc'>
                    <h1 className='heading'>Job Description</h1>
                    <p className='headp'>MTC is looking for an excellent and talented L&D intern to initiate an outstanding part in our organizational growth. If you are passionate of your work and desperately want to create a high-quality magnificent strategic ideas, research and development and want to be a professional in it, then you are at right place.</p>
                     <h1 className='heading' style={{paddingTop:'2rem'}}>General Responsibilities :</h1>
                     <div className='resp'>
                        <ul>
                            <li>Implementing various methods for e-learning and online training in our platform</li>
                            <li>ResponsCreating new course template, workshop templates in our platform.</li>
                            <li>Analyse and evaluate the organizational as well as individual development needs </li>
                            <li>Work closely with the managers, mentors and HR for better development</li>
                            <li>Building & maintaining relationship with third party  </li>
                            <li>Use the company’s database to gain potential leads</li>
                            <li>Identify opportunities for new business</li>
                            <li>Maintain the guest information onto the company’s database system</li>
                            <li>Deal with telephone queries </li>
                            <li>Working strategically for carrying out new ideas from co-workers with respect to training purpose</li>
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
                        <p className='ans'><b>Consulting</b></p>
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
