import React from 'react';

const View = ({ details }) => {
    return details.map(detail => (
        <tr key={detail.id}>
            <td>{detail.username}</td>
            <td>{detail.role}</td>
        </tr>
    ))
}

export default View;
