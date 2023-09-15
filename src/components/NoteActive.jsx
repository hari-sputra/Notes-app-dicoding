import React from "react";
import NoteItem from "./NoteItem";

function NoteActive({ title, createdAt, body }) {
  return (
    <div className="mb-5">
      <NoteItem title={title} createdAt={createdAt} body={body} />
    </div>
  );
}

export default NoteActive;
