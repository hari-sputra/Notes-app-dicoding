import React from "react";

import NoteActive from "./NoteActive";
import NoteAchieve from "./NoteAchieve";

function NoteList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      <div className="mb-5">
        <h4 className="text-2xl mb-3">Active Notes</h4>
        {activeNotes.length === 0 ? (
          <p className="text-center text-xl">No Data</p>
        ) : (
          activeNotes.map((note) => (
            <NoteActive
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              archived={note.archived}
              {...note}
            />
          ))
        )}
      </div>
      <hr className="my-5" />
      <div>
        <h4 className="text-2xl mb-3">Archieve Notes</h4>
        {archiveNotes.length === 0 ? (
          <p className="text-center text-xl">No Data</p>
        ) : (
          archiveNotes.map((note) => (
            <NoteAchieve
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              archived={note.archived}
              {...note}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
