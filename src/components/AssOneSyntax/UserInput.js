import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red',
        margin: '20px auto',
        display: 'block'
    };

    return (
        <input onChange={props.changed} style={style} className= "UserInput" type="text" value={props.currentName} />    
    )
};

export default userInput; 