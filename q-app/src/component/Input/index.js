import React from "react";

// Input component - reused for all input boxes within PopUp component
function Input({ handleChange, placeholder, value }) {
	return (
		<input
		    className="q-input"
			type="text"
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		></input>
	);
}

export default Input;