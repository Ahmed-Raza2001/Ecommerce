"use client";
import Select from "react-select";
import { useState } from "react";

const CityDropdown = ({ dataref, onChange, className, placeHolder }) => {
  const [selectedValue, setSelectedValue] = useState([]);

  return (
    <div className={`form-row${className}`}>
      <Select
        value={selectedValue || ""}
        className="basic-single text-xs font-bold"
        classNamePrefix="select"
        isSearchable
        placeholder={placeHolder}
        required
        options={dataref}
        getOptionValue={(dataref) => dataref?.value}
        onChange={(dataref) => {
          onChange(dataref);
          setSelectedValue(dataref);
        }}
      />
    </div>
  );
};

export default CityDropdown;
