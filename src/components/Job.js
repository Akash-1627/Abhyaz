import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Job = () => {
    return (
        <>
            <div className='container'>
                <h1 className='jobopen'>Job Openings</h1>

                <div className='row'>

                    <div className="card">
                        <div className="card-header">
                            
                            Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Lead Generator/ Converter Intern</h5>
                            <p className="card-text">Remote Job: yes</p>
                            <Link to="/jobdata1" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Event management - Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata2" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Learning & Development Executive - Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata3" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Operations Executive Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata4" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Electrical Engineer- Intern</h5>
                            <p className="card-text">Electrical Engineer- InternCity:Plot No: G26A SIDCO Industrial Estate,Kakkalur,Thiruvallur</p>
                            <Link to="/jobdata5" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content Writer Intern- MTAB</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata6" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">HR Executive-Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata7" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content Marketing- Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata8" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                        
                        Job Type: Graduate Internship
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing Intern</h5>
                            <p className="card-text">Remote Job: Yes</p>
                            <Link to="/jobdata9" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Job;
