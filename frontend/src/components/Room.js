import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import InputData from './common/InputData';
import isEmpty from '../utils/isEmpty';
import data from '../data/data.json';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/room.css';
import '../styles/reacttoastify.css';

const Room = ({
    openPopupboxForSettings,
    roomArr,
    setRoomArr,
    sessionArr,
    setSessionArr,
    sectionArr,
    setSectionArr,
}) => {
    const [roomInfo, setRoomInfo] = useState([{}]);
    const [room, setRoom] = useState('1');
    const [section, setSection] = useState('A');
    const [session] = useState(18);
    const [roomNo] = useState([1, 2, 3]);
    const [sections] = useState(['A', 'B', 'C']);
    const [sessions] = useState([18]);

    /**
     *
     * fetching data from the database at the start of application
     */
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const gettingData = async () => {
                try {
                    const res = await axios.get('/room', {
                        params: {
                            email: localStorage.getItem('email'),
                        },
                    });
                    if (res.data !== false) {
                        setRoomInfo(res.data[0].roomInfo);
                        setRoomArr(res.data[0].roomArr);
                        setSectionArr(res.data[0].sectionArr);
                        setSessionArr([18]);
                        toast('Your previous data has been added.');
                    } else console.log('Nothing found!');
                } catch (error) {}
            };
            gettingData();
        }
    }, []);

    /**
     *
     * @param {value} - room value
     */
    const changeRoom = (value) => {
        setRoom(value);
    };

    /**
     *
     * @param {value} - section value
     */
    const changeSection = (value) => {
        setSection(value);
    };

    /**
     *
     * creates a temp array, stores data in it and then set the state to temp array
     */
    const roomData = () => {
        let check = true;

        // checking the given information for any error

        for (let i = 0; i < roomInfo.length; i++) {
            if (
                (roomInfo[i].section === section && roomInfo[i].room !== room) ||
                (roomInfo[i].section !== section && roomInfo[i].room === room) ||
                (roomInfo[i].section === section && roomInfo[i].room === room)
            ) {
                check = false;
                break;
            }
        }

        // saving the information or presenting it in case of an error

        if (check) {
            let tempSection = [...sectionArr, section];
            setSectionArr(tempSection);
            if (sessionArr[0] !== session) {
                let tempSession = [...sessionArr, session];
                setSessionArr(tempSession);
            }
            let tempRoom = [...roomArr, room];
            setRoomArr(tempRoom);

            const obj = {
                room,
                section,
                session,
            };
            const tempArr = [...roomInfo];
            if (isEmpty(roomInfo[0])) {
                tempArr[0] = obj;
            } else tempArr.push(obj);
            setRoomInfo(tempArr);
        } else {
            toast('Can not use same room or section again!');
        }
    };

    /**
     *
     * checks if button should be disabled or not
     */
    const isDisabled = () => {
        if (isEmpty(roomInfo[0])) return 'disabled';
        return false;
    };

    /**
     *
     * clearing already existed data
     */
    const clearData = () => {
        setRoomInfo([{}]);
        setRoomArr([]);
        setSectionArr([]);
        setSessionArr([18]);
    };

    /**
     *
     * sending data to backend to store in the database
     */
    const sendRoomData = async () => {
        const userAccount = localStorage.getItem('email');
        const data = {
            userAccount,
            roomInfo,
            roomArr,
            sectionArr,
            sessionArr,
        };

        try {
            await axios.post('/room', data);
        } catch (error) {
            console.log(error);
        }
    };
    if (localStorage.getItem('token'))
        return (
            <div className='rm_container'>
                <Nav
                    appName={data.app_name}
                    userName={localStorage.getItem('username')}
                    openPopupboxForSettings={openPopupboxForSettings}
                />
                <div className='rm_subcontainer'>
                    <div className='rm_subcontainer_rooms'>
                        <div className='rm_enclosing_container'>
                            <div className='rm_input_room_info'>
                                <h2>Rooms Number</h2>
                                <div className='rm_room_input'>
                                    <div className='rm_input_fields'>
                                        <InputData
                                            context='Room'
                                            onChange={changeRoom}
                                            dropdownInfo={roomNo}
                                            type='number'
                                        />
                                        <InputData
                                            context='Section'
                                            onChange={changeSection}
                                            dropdownInfo={sections}
                                            type='text'
                                        />
                                        <InputData
                                            context='Session'
                                            onChange=''
                                            dropdownInfo={sessions}
                                            type='number'
                                        />
                                    </div>
                                </div>
                                <div className='rm_btns'>
                                    <button id='rm_add_room_info' onClick={roomData}>
                                        Add
                                    </button>
                                    <button id='rm_clear_data' onClick={clearData}>
                                        Clear
                                    </button>
                                    {(isDisabled() && (
                                        <button id='rm_next_info' className='disabled'>
                                            Next →
                                        </button>
                                    )) || (
                                        <Link to='/courseinfo'>
                                            <button
                                                id='rm_next_info_enabled'
                                                onClick={sendRoomData}
                                            >
                                                Next →
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className='r_display_data'>
                                <DisplayTableData
                                    heading_1='Room'
                                    heading_2='Section'
                                    heading_3='Session'
                                    heading_4=''
                                    heading_5=''
                                    heading_6=''
                                    info={roomInfo}
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

export default Room;
