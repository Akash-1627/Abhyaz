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
                    <h1 className='datahead'>Operations Executive Intern</h1>
                    <p>Remote Job | Posted on 05/10/2023</p>
                    <button type='button' className='btn1'>Apply Now</button>
                    <Link to='/'><button type='button' className='btn1'>Back to Home</button></Link>
                </div>
                
            </div>
            <div className='jobdat'>
                <div className='desc'>
                    <h1 className='heading'>Job Description</h1>
                    <p className='headp'>MTC is looking for Lead Generator / Converter intern to handle & putting ideas in an organizational growth. You will be working closely with team members to track and scheduled all projects requirements and deadlines.
                     If you are a learning student and want to be a professional in it, then you are right place ..</p>
                     <h1 className='heading' style={{paddingTop:'2rem'}}>General Responsibilities :</h1>
                     <div className='resp'>
                        <ul>
                            <li>Manage day-to-day assigned operations tasks for smooth delivery.</li>
                            <li>Supporting the team cross-functionally to complete assigned tasks and goals.</li>
                            <li>Convert any calls to new business leads</li>
                            <li>Inform any potential clients on the company’s products and services</li>
                            <li>Gather any school/corporate information</li>
                            <li>Use the company’s database to gain potential leads</li>
                            <li>Updating CRM database and coordinating on sending out campaigns and emails.</li>
                            <li>Work with the management team to develop and implement operational initiatives.</li>
                            <li>Updating and maintaining performance metrics.</li>
                            <li>Conducting engagements internally and externally to enhance/aid the marketing. </li>
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
                        <p className='ans'><b>Communications</b></p>
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
