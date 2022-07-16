import React from "react";
import Select from "react-select";

// Renders keyword dropdown component within PopUp
const options = [
	{ value: "Javascript", label: "Javascript" },
	{ value: "React", label: "React" },
	{ value: "Node", label: "Node" },
	{ value: "Git Branching", label: "Git Branching" },
	{ value: "Promises", label: "Promises" },
	{ value: "useEffect", label: "useEffect" },
	{ value: "Mapping", label: "Mapping" },
	{ value: "CRUD", label: "CRUD" },
	{ value: "API", label: "API" },
	{ value: "Database", label: "Database" },
	{ value: "Error", label: "Error" },
];

const Keywords = ({ handleChange }) => (
	<Select onChange={handleChange} options={options} />
);

export default Keywords;

//used https://react-select.com/home - can be edited and stylized - see docs.
