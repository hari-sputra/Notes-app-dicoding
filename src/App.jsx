import React from "react";
import Input from "./components/Input";
import NoteList from "./components/NoteList";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="min-h-screen my-10">
      <div className="flex justify-center mb-4">
        <h1 className="text-white text-5xl">Notes App</h1>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-[50%] bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-end">
              <Button
                name={"Add Note"}
                btnStyle="btn-secondary"
                click={() => document.getElementById("addModal").showModal()}
              />
              <Modal
                modalId={"addModal"}
                title={"Add New Note"}
                desc={
                  <>
                    <Input placeholder={"Title"} />
                    <textarea
                      className="textarea textarea-primary w-full"
                      placeholder="Description"
                    ></textarea>
                  </>
                }
              />
            </div>
            <Input placeholder={"Search..."} />
            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
