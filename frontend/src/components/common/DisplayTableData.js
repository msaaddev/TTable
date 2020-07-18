import React from 'react';
import DataCell from '../common/DataCell';
import '../../styles/displaytabledata.css';

const DisplayTableData = ({
    info,
    heading_1,
    heading_2,
    heading_3,
    heading_4,
    heading_5,
    heading_6,
}) => {
    return (
        <table className='dtd_container'>
            <thead>
                <tr className='dtd_table_head'>
                    <th>{heading_1}</th>
                    <th>{heading_2}</th>
                    <th>{heading_3}</th>
                    {heading_4 !== '' && heading_5 !== '' && heading_6 !== '' && (
                        <>
                            <th>{heading_4}</th>
                            <th>{heading_5}</th>
                            <th>{heading_6}</th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {info[0].room !== undefined &&
                    info.map((map) => (
                        <DataCell
                            key={(() => Math.floor(Math.random() * 1000))()}
                            info_1={map.room}
                            info_2={map.section}
                            info_3={map.session}
                            info_4=''
                            info_5=''
                            info_6=''
                        />
                    ))}
                {info[0].teacher !== undefined &&
                    info.map((map) => (
                        <DataCell
                            key={map.courseId}
                            info_1={map.teacher}
                            info_2={map.courseName}
                            info_3={map.courseID}
                            info_4={map.section}
                            info_5={map.session}
                            info_6={map.creditHrs}
                        />
                    ))}
            </tbody>
        </table>
    );
};

export default DisplayTableData;
