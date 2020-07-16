import React from 'react';

const DataCell = ({ info_1, info_2, info_3, info_4, info_5, info_6 }) => {
    return (
        <tr>
            <td>{info_1}</td>
            <td>{info_2}</td>
            <td>{info_3}</td>
            {info_4 !== '' && info_5 !== '' && info_6 !== '' && (
                <>
                    <td>{info_4}</td>
                    <td>{info_5}</td>
                    <td>{info_6}</td>
                </>
            )}
        </tr>
    );
};

export default DataCell;