import React from "react";
import Button from "./Button";

function NoteItem({ title, date, desc }) {
  return (
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <h1 className="card-title text-white">{title}</h1>
        <p className="text-slate-300">{date}</p>
        <p className="text-white">{desc}</p>
        <div className="card-actions justify-end mt-3">
          <Button name={"Delete"} btnStyle="" />
          <Button name={"Archive"} btnStyle="btn-warning" />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
