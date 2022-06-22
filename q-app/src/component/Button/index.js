import React from "react";

function Button({ handleClick, buttonText, id }) {
<<<<<<< HEAD
  return (
    <button id={id} className="q-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
=======
	return (
		<button id={id} className="q-button" onClick={handleClick}>
			{buttonText}
		</button>
	);
>>>>>>> fdea001a2329363ecc0e3e9f6478bf5bbda4bcc3
}

export default Button;
