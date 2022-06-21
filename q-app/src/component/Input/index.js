import React from "react";

function Input({ handleChange, placeholder, value }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			onChange={handleChange}
			value={value}
		></input>
	);
}

export default Input;