import React from "react";
import NoteItem from "./NoteItem";

function NoteActive({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="mb-5">
      <NoteItem
        title={title}
        createdAt={createdAt}
        body={body}
        onDelete={() => onDelete(id)}
        onArchive={() => onArchive(id)}
        archived={archived}
      />
    </div>
  );
}

export default NoteActive;
