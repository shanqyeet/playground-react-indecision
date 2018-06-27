import React, {Component} from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
    <button className="button button--link" onClick={props.handleDeleteOption}>Remove All</button>
    {
        props.options.map((option) => (
            <Option
             key={option} 
             option={option} 
             handleSingleDelete={props.handleSingleDelete}
            />
        ))
    }
    </div>
);

export default Options