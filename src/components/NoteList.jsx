import React from "react";

import NoteActive from "./NoteActive";
import NoteAchieve from "./NoteAchieve";

function NoteList() {
  return (
    <div>
      <div className="mb-5">
        <NoteActive />
      </div>
      <hr className="my-5" />
      <div>
        <NoteAchieve />
      </div>
    </div>
  );
}

export default NoteList;
