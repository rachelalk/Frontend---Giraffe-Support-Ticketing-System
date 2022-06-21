import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options = [
	{ value: "Javascript", label: "Javascript" },
	{ value: "React", label: "React" },
	{ value: "Error", label: "Error" },
];

const Keywords = ({handleChange}) => <Select onChange={handleChange} options={options} />;

export default Keywords;
