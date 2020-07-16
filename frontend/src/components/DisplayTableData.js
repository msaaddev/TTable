import React from 'react';
import DataCell from './DataCell';

const DisplayTableData = ({ roomInfo, heading_1, heading_2, heading_3 }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>{heading_1}</th>
                    <th>{heading_2}</th>
                    <th>{heading_3}</th>
                </tr>
            </thead>
            <tbody>
                {roomInfo.map((map) => (
                    <DataCell
                        key={map.room}
                        room={map.room}
                        section={map.section}
                        session={map.session}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default DisplayTableData;
