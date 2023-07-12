import React from "react";
import {useState} from "react";

export function Form(initialValues){
    const [values, setValues] = useState(initialValues);
    return (
        values, function(event){
            setValues({ 
                ...values,   //taking previous values that we already have
                [event.target.name] : event.target.type === 'checkbox'? event.target.checked : event.target.value,
            });
        }
    );
}