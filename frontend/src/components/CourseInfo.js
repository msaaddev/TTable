import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import data from '../data/data.json';
import '../styles/courseinfo.css';

const CourseInfo = () => {
    const [courseInfo, setCourseInfo] = useState([
        {
            prof_name: 'Robert Abella',
            course_name: 'AOA',
            course_ID: 101,
            section: 'A',
            session: 18,
            credit_hrs: 3,
        },
        {
            prof_name: 'Robert Abella',
            course_name: 'AOA',
            course_ID: 101,
            section: 'A',
            session: 18,
            credit_hrs: 3,
        },
    ]);
    return (
        <div className='ci_container'>
            <Nav appName={data.app_name} userName='John Doe' />
            <div className='ci_subcontainer'>
                <div className='ci_subcontainer_rooms'>
                    <div className='ci_enclosing_container'>
                        <div className='ci_input_room_info'>
                            <h2>Course Information</h2>
                            <div className='ci_room_input'>
                                <div className='ci_input_fields'>
                                    <div className='ci_align'>
                                        <label htmlFor='Name'>Prof. Name</label>
                                        <input type='text' id='ci_professor_name' />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Course_Name'>Course</label>
                                        <input type='text' id='ci_course_name' />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Course_ID'>Course ID</label>
                                        <input type='number' id='ci_course_id' />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='Section'>Section</label>
                                        <input type='text' id='ci_section' />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='session'>Session</label>
                                        <input type='number' id='ci_session' />
                                    </div>
                                    <div className='ci_align'>
                                        <label htmlFor='hrs_credit_hrs'>Credits Hr</label>
                                        <input type='number' id='ci_hrs_per_week' />
                                    </div>
                                </div>
                            </div>
                            <div className='ci_btns'>
                                <button id='ci_add_room_info'>Add</button>
                                <button id='ci_next_info'>Next →</button>
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