import React, {Component} from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <div>
                <p className="option__text">
                    {props.count}. {props.option} 
                </p>
            </div>
            <button 
                className="button button--link"
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