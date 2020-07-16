import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import DisplayTableData from '../components/common/DisplayTableData';
import data from '../data/data.json';
import '../styles/login.css';
import '../styles/room.css';

const Room = () => {
    const [roomInfo, setRoomInfo] = useState([
        { room: 1, section: 'A', session: 18 },
        { room: 2, section: 'B', session: 18 },
    ]);
    return (
        <div className='rm_container'>
            <Nav appName={data.app_name} userName='John Doe' />
            <div className='rm_subcontainer'>
                <div className='rm_subcontainer_rooms'>
                    <div className='rm_enclosing_container'>
                        <div className='rm_input_room_info'>
                            <h2>Rooms Number</h2>
                            <div className='rm_room_input'>
                                <div className='rm_input_fields'>
                                    <div className='rm_align_room'>
                                        <label htmlFor='Room'>Room</label>
                                        <input type='number' id='rm_room_number' />
                                    </div>
                                    <div className='rm_align_section'>
                                        <label htmlFor='Section'>Section</label>
                                        <input type='text' id='rm_section' />
                                    </div>
                                    <div className='rm_align_session'>
                                        <label htmlFor='session'>Session</label>
                                        <input type='number' id='rm_session' />
                                    </div>
                                </div>
                            </div>
                            <div className='rm_btns'>
                                <button id='rm_add_room_info'>Add</button>
                                <button id='rm_next_info'>Next →</button>
                            </div>
                        </div>
                        <div className='r_display_data'>
                            <DisplayTableData
                                heading_1='Room'
                                heading_2='Section'
                                heading_3='Session'
                                roomInfo={roomInfo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;
