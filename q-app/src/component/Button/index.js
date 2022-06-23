import React from "react";

function Button({ handleClick, buttonText, id }) {
	return (
		<button id={id} className="q-button" onClick={onClick={() => { func1(); func2();}} }>
			{buttonText}
		</button>
	);
}

export default Button;
