import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import data from '../data/data.json';
import '../styles/courseinfo.css';

const CourseInfo = ({ openPopupboxForSettings }) => {
    const [courseInfo, setCourseInfo] = useState([{}]);
    const [teacher, setTeacher] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseID, setCourseID] = useState(0);
    const [section, setSection] = useState('');
    const [session, setSession] = useState(0);
    const [creditHrs, setCreditHrs] = useState(0);

    /**
     *
     * @param {value} - teacher name
     */
    const handleName = (value) => {
        setTeacher(value);
    };

    /**
     *
     * @param {value} - course name
     */
    const handleCourseName = (value) => {
        setCourseName(value);
    };

    /**
     *
     * @param {value} - course id
     */
    const handleCourseID = (value) => {
        setCourseID(value);
    };

    /**
     *
     * @param {value} - section
     */
    const handleSection = (value) => {
        setSection(value);
    };

    /**
     *
     * @param {value} - session
     */
    const handleSession = (value) => {
        setSession(value);
    };

    /**
     *
     * @param {value} - credit hours
     */
    const handleCreditHrs = (value) => {
        setCreditHrs(value);
    };
    return (
        <div className='ci_container'>
            <Nav
                appName={data.app_name}
                userName='John Doe'
                openPopupboxForSettings={openPopupboxForSettings}
            />
            <div className='ci_subcontainer'>
                <div className='ci_subcontainer_rooms'>
                    <div className='ci_enclosing_container'>
                        <div className='ci_input_room_info'>
                            <h2>Course Information</h2>
                            <div className='ci_room_input'>
                                <div className='ci_input_fields'>
                                    <div className='ci_align'>
                                        <label htmlFor='Name'>Prof. Name</label>
                                        <input
                                            type='text'
                                            name='name'
                                            onChange={(e) => handleName(e.target.value)}
                                            id='ci_professor_name'
                                        />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Course_Name'>Course</label>
                                        <input
                                            type='text'
                                            name='course_name'
                                            onChange={(e) => handleCourseName(e.target.value)}
                                            id='ci_course_name'
                                        />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Course_ID'>Course ID</label>
                                        <input
                                            type='number'
                                            name='course_ID'
                                            onChange={(e) => handleCourseID(e.target.value)}
                                            id='ci_course_id'
                                        />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Section'>Section</label>
                                        <input
                                            type='text'
                                            name='section'
                                            onChange={(e) => handleSection(e.target.value)}
                                            id='ci_section'
                                        />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='session'>Session</label>
                                        <input
                                            type='number'
                                            name='session'
                                            onChange={(e) => handleSession(e.target.value)}
                                            id='ci_session'
                                        />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='hrs_credit_hrs'>Credits Hr</label>
                                        <input
                                            type='number'
                                            onChange={(e) => handleCreditHrs(e.target.value)}
                                            name='credit_hours'
                                            id='ci_hrs_per_week'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='ci_btns'>
                                <button id='ci_add_room_info'>Add</button>
                                <Link to='/schedule'>
                                    <button id='ci_next_info'>Generate →</button>
                                </Link>
                            </div>
                        </div>
                        <div className='ci_display_data'>
                            <DisplayTableData
                                heading_1='Prof. Name'
                                heading_2='Course'
                                heading_3='Course ID'
                                heading_4='Section'
                                heading_5='Session'
                                heading_6='Credit Hrs'
                                info={courseInfo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;