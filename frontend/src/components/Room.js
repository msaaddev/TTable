import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import data from '../data/data.json';
import isEmpty from '../utils/isEmpty';
import '../styles/login.css';
import '../styles/room.css';

const Room = ({ openPopupboxForSettings }) => {
    const [roomInfo, setRoomInfo] = useState([{}]);
    const [room, setRoom] = useState(0);
    const [section, setSection] = useState('');
    const [session, setSession] = useState(0);

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
     * @param {value} - session value
     */
    const changeSession = (value) => {
        setSession(value);
    };

    /**
     *
     * creates a temp array, stores data in it and then set the state to temp array
     */
    const roomData = () => {
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
                                    <div className='rm_align_room'>
                                        <label htmlFor='Room'>Room</label>
                                        <input
                                            type='number'
                                            name='Room'
                                            onChange={(e) => changeRoom(e.target.value)}
                                            id='rm_room_number'
                                        />
                                    </div>
                                    <div className='rm_align_section'>
                                        <label htmlFor='Section'>Section</label>
                                        <input
                                            type='text'
                                            name='section'
                                            onChange={(e) => changeSection(e.target.value)}
                                            id='rm_section'
                                        />
                                    </div>
                                    <div className='rm_align_session'>
                                        <label htmlFor='session'>Session</label>
                                        <input
                                            type='number'
                                            name='session'
                                            onChange={(e) => changeSession(e.target.value)}
                                            id='rm_session'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='rm_btns'>
                                <button id='rm_add_room_info' onClick={roomData}>
                                    Add
                                </button>
                                <Link to='/courseinfo'>
                                    <button id='rm_next_info'>Next →</button>
                                </Link>
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
        </div>
    );
};

export default Room;
