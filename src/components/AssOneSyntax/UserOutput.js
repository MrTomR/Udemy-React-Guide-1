import React from 'react';
import './AssOne.css'; 

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Dangerzone</p>
        </div>
    )
};

export default userOutput; 