import React, { Fragment } from "react";

function SelectInput({ label, id, values, currentValue, setCurrentValue }) {
  const selectOptions = values.map((value) => (
    <option value={value} key={value.toString()}>
      {value}
    </option>
  ));

  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        {selectOptions}
      </select>
      <br />
    </Fragment>
  );
}

export default SelectInput;
