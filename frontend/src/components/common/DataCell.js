import React from 'react';

const DataCell = ({ room, section, session }) => {
    return (
        <tr>
            <td>{room}</td>
            <td>{section}</td>
            <td>{session}</td>
        </tr>
    );
};

export default DataCell;
