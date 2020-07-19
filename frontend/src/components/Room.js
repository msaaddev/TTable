import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
    sessionArr,
    setSessionArr,
    sectionArr,
    setSectionArr,
}) => {
    const [roomInfo, setRoomInfo] = useState([{}]);
    const [room, setRoom] = useState(1);
    const [section, setSection] = useState('A');
    const [session] = useState(18);
    const [roomNo] = useState([1, 2, 3, 4]);
    const [sections] = useState(['A', 'B', 'C', 'D']);
    const [sessions] = useState([18]);

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
        let checkRoom = true;
        let checkSection = true;
        let check = true;

        // checking the given information for any error

        for (let i = 0; i < roomInfo.length; i++) {
            if (roomInfo[i].room === room) {
                checkRoom = false;
                break;
            }
            if (roomInfo[i].section === section) {
                checkSection = false;
                break;
            }

            if (
                roomInfo[i].section === section &&
                roomInfo[i].room !== room &&
                roomInfo[i].section !== section &&
                roomInfo[i].room === room
            ) {
                check = false;
                break;
            }
        }

        // saving the information or presenting it in case of an error

        if (checkRoom && checkSection && check) {
            let tempSection = [...sectionArr, section];
            setSectionArr(tempSection);
            if (sessionArr[0] !== session) {
                let tempSession = [...sessionArr, session];
                setSessionArr(tempSession);
            }

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

    return (
        <div className='rm_container'>
            <Nav
                appName={data.app_name}
                userName='John Doe'
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
                                    />
                                    <InputData
                                        context='Section'
                                        onChange={changeSection}
                                        dropdownInfo={sections}
                                    />
                                    <InputData
                                        context='Session'
                                        onChange=''
                                        dropdownInfo={sessions}
                                    />
                                </div>
                            </div>
                            <div className='rm_btns'>
                                <button id='rm_add_room_info' onClick={roomData}>
                                    Add
                                </button>
                                {(isDisabled() && (
                                    <button id='rm_next_info' className='disabled'>
                                        Next →
                                    </button>
                                )) || (
                                    <Link to='/courseinfo'>
                                        <button id='rm_next_info_enabled'>Next →</button>
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
};

export default Room;
