import React from "react";

function SelectInput (props) {
    const values = props.values;
    const selectOptions = values.map((value)=>
        <option value={value} key={value.toString()}>{value}</option>
    );

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id}>
                {selectOptions}
            </select>
        </div>
    )
}

export default SelectInput;