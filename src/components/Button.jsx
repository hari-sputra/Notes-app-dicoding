import React from "react";

function Button({ name, btnStyle = "btn-primary", click, type = "button" }) {
  return (
    <div>
      <button type={type} className={`btn ${btnStyle}`} onClick={click}>
        {name}
      </button>
    </div>
  );
}

export default Button;
