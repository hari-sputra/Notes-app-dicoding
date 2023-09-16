import React from "react";

function FormInput({ placeholder, onChange, value, character }) {
  return (
    <div className="form-control w-full mb-4">
      <input
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        onChange={onChange}
        value={value}
      />
      <span className="text-xs mt-1">{character}</span>
    </div>
  );
}

export default FormInput;
