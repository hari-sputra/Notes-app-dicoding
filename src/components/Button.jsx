import React from "react";

function Button({ name, btnStyle = "btn-primary", click }) {
  return (
    <div>
      <button className={`btn ${btnStyle}`} onClick={click}>
        {name}
      </button>
    </div>
  );
}

export default Button;
