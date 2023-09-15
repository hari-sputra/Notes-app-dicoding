import React from "react";

import NoteActive from "./NoteActive";
import NoteAchieve from "./NoteAchieve";

function NoteList({ notes }) {
  return (
    <div>
      <div className="mb-5">
        <h4 className="text-2xl mb-3">Active Notes</h4>
        {notes.map((note) => (
          <NoteActive key={note.id} {...note} />
        ))}
      </div>
      <hr className="my-5" />
      <div>
        <NoteAchieve />
      </div>
    </div>
  );
}

export default NoteList;
