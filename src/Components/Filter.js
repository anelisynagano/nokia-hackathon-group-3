import React, { Component } from "react";
import Select from "react-select";

const options = [

    { value: "Family", label: "Family" },
    { value: "Outdoors", label: "Outdoors" },
    { value: "Work", label: "Work" },
    { value: "All Phones", label: "All Phones" }
];

const Filter = () => <Select options={options} />;

export default Filter;