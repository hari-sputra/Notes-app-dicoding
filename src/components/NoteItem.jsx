import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/index";

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <h1 className="card-title text-white">{title}</h1>
        <p className="text-slate-300">{showFormattedDate(createdAt)}</p>
        <p className="text-white">{body}</p>
        <div className="card-actions justify-end mt-3">
          <Button name={"Delete"} btnStyle="" />
          <Button name={"Archive"} btnStyle="btn-warning" />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
