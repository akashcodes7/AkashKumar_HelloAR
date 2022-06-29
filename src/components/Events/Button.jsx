import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.op} className="px-6 py-1 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700 ">{props.text}</button>
        </div>
    );
}

export default Button;
