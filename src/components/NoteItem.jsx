import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/index";

function NoteItem({ title, createdAt, body, onDelete, onArchive, archived }) {
  const archiveButtonText = archived ? "Active" : "Archive";
  const archiveButtonStyle = archived ? "btn-success" : "btn-warning";
  const archiveCardStyle = archived ? "btn-secondary" : "btn-primary";

  return (
    <div className={`card w-full text-primary-content ${archiveCardStyle}`}>
      <div className="card-body">
        <h1 className="card-title text-white">{title}</h1>
        <p className="text-slate-300">{showFormattedDate(createdAt)}</p>
        <p className="text-white">{body}</p>
        <div className="card-actions justify-end mt-3">
          <Button click={onDelete} name={"Delete"} btnStyle="" />
          <Button
            click={onArchive}
            name={archiveButtonText}
            btnStyle={archiveButtonStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
