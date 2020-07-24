import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import InputData from './common/InputData';
import data from '../data/data.json';
import 'react-toastify/dist/ReactToastify.css';
import isEmpty from '../utils/isEmpty';
import '../styles/courseinfo.css';
import '../styles/reacttoastify.css';

const CourseInfo = ({
    openPopupboxForSettings,
    sessionArr,
    sectionArr,
    courseNameArr,
    setcourseNameArr,
    courseIDArr,
    setCourseIDArr,
    creditHrsArr,
    setCreditHrsArr,
}) => {
    const [courseInfo, setCourseInfo] = useState([{}]);
    const [teacher, setTeacher] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseID, setCourseID] = useState(0);
    const [section, setSection] = useState(sectionArr[0]);
    const [session, setSession] = useState(sessionArr[0]);
    const [creditHrs, setCreditHrs] = useState('1');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const gettingData = async () => {
                const res = await axios.get('/courseinfo', {
                    params: {
                        email: localStorage.getItem('email'),
                    },
                });
                setCourseInfo(res.data[0].courseInfo);
                setcourseNameArr(res.data[0].courseNameArr);
                setCourseIDArr(res.data[0].courseIDArr);
                setCreditHrsArr(res.data[0].creditHrsArr);
                toast('Your previous data has been added.');
            };
            gettingData();
        }
    }, []);

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

    /**
     *
     * setting states for course name, id and credit hours
     */
    const setStateForCourseInfo = () => {
        let tempCourseName = [...courseNameArr, courseName];
        let tempCourseID = [...courseIDArr, courseID];
        let tempCreditHrs = [...creditHrsArr, creditHrs];

        let flagForID = true,
            flagForName = true,
            flagForCreditHrs = true;

        for (let i = 0; i < courseIDArr.length; i++) {
            if (courseIDArr[i] === courseID) {
                flagForID = false;
                flagForName = false;
                flagForCreditHrs = false;
                break;
            }
        }
        if (flagForID) setCourseIDArr(tempCourseID);
        if (flagForName) setcourseNameArr(tempCourseName);
        if (flagForCreditHrs) setCreditHrsArr(tempCreditHrs);
    };

    /**
     *
     *  updates the course information in the table
     */
    const updateCourseInfo = () => {
        let firstCheck = true;
        let secondCheck = true;

        // checking the given information for any error

        for (let i = 0; i < courseInfo.length; i++) {
            if (
                courseInfo[i].courseID === courseID &&
                courseInfo[i].teacher === teacher &&
                courseInfo[i].section === section &&
                courseInfo[i].session === session
            )
                firstCheck = false;
            if (
                (courseInfo[i].courseID === courseID && courseInfo[i].courseName !== courseName) ||
                (courseInfo[i].courseID !== courseID && courseInfo[i].courseName === courseName)
            )
                secondCheck = false;
        }

        // saving the information or presenting error

        if (firstCheck && secondCheck) {
            setStateForCourseInfo();
            const obj = {
                teacher,
                courseName,
                courseID,
                section,
                session,
                creditHrs,
            };

            const temp = [...courseInfo];
            if (isEmpty(courseInfo[0])) temp[0] = obj;
            else temp.push(obj);
            setCourseInfo(temp);
        } else {
            if (!secondCheck)
                toast('Can not use Course ID of one course for another course and viceversa');
            else if (!firstCheck) toast('Can not use same information again!');
        }
    };

    /**
     *
     * checks if button should be disabled or not
     */
    const isDisabled = () => {
        if (isEmpty(courseInfo[0])) return 'disabled';
        return false;
    };

    /**
     *
     * clears pre existing data
     */
    const clearData = () => {
        setCourseInfo([{}]);
        setcourseNameArr([]);
        setCourseIDArr([]);
        setCreditHrsArr([]);
    };

    /**
     *
     * sending courses data to the backend
     */
    const sendCourseData = async () => {
        const userAccount = localStorage.getItem('email');

        const data = {
            userAccount,
            courseInfo,
            courseNameArr,
            courseIDArr,
            creditHrsArr,
        };
        try {
            await axios.post('/courseinfo', data);
        } catch (error) {
            console.log(error);
        }
    };
    if (localStorage.getItem('token'))
        return (
            <div className='ci_container'>
                <Nav
                    appName={data.app_name}
                    userName={localStorage.getItem('username')}
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
                                        <InputData
                                            context='Section'
                                            dropdownInfo={sectionArr}
                                            onChange={handleSection}
                                            type='text'
                                        />
                                        <InputData
                                            context='Session'
                                            dropdownInfo={sessionArr}
                                            onChange={handleSession}
                                            type='number'
                                        />
                                        <div className='ci_align'>
                                            <label htmlFor='hrs_credit_hrs'>Credits Hr</label>
                                            <select
                                                htmlFor='Credit Hrs'
                                                onChange={(e) => handleCreditHrs(e.target.value)}
                                                type='number'
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='ci_btns'>
                                    <button id='ci_add_room_info' onClick={updateCourseInfo}>
                                        Add
                                    </button>
                                    <button id='ci_clear_data' onClick={clearData}>
                                        Clear
                                    </button>
                                    {(isDisabled() && (
                                        <button id='ci_next_info' className='disabled'>
                                            Generate →
                                        </button>
                                    )) || (
                                        <Link to='/schedule'>
                                            <button
                                                id='ci_next_info_enabled'
                                                onClick={sendCourseData}
                                            >
                                                Generate →
                                            </button>
                                        </Link>
                                    )}
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
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    type='info'
                />
            </div>
        );
    else return <Redirect to='/login' />;
};

export default CourseInfo;
