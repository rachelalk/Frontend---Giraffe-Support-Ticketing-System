import React from "react";

// Button component - reused for all buttons
function Button({ handleClick, buttonText, id }) {
	return (
		<button id={id} className="q-button" onClick={handleClick}>
			{buttonText}
		</button>
	);
}

export default Button;
