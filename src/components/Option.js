import React, {Component} from 'react';

const Option = (props) => {
    return (
        <div>
            <div>
               {props.option} 
            </div>
            <button 
                onClick={(e)=> {
                    props.handleSingleDelete(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
}

export default Option