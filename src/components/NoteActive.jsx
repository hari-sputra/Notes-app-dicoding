import React from "react";
import NoteItem from "./NoteItem";

function NoteActive() {
  return (
    <>
      <h4 className="text-2xl mb-3">Active Notes</h4>
      <NoteItem
        title={"Babel"}
        date={"Kamis, 14 April 2022"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deleniti molestias totam esse quibusdam non cupiditate veniam quo quamiste, architecto libero sed sint! Alias dicta ratione minus? Recusandae beatae vero odio illum provident. Architecto quo nisi abquae porro et maxime placeat laborum, animi quidem tenetur nihil magniillum."
        }
      />
    </>
  );
}

export default NoteActive;
