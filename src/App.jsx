import Input from "./components/Input";
import NoteList from "./components/NoteList";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { getInitialData } from "./utils/index";

import React, { Component } from "react";
import Alert from "./components/Alert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      title: "",
      body: "",
      showAlert: false,
      titleAlert: "",
      search: "",
      titleCount: 0,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onTitleChange(event) {
    const title = event.target.value;
    const limit = 50;

    if (title.length <= limit) {
      this.setState(() => {
        return {
          title: event.target.value,
          titleCount: title.length,
        };
      });
    }
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSearchChange(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
          ...prevState.notes,
        ],

        title: "",
        body: "",
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.onAddNote({ title: this.state.title, body: this.state.body });
    document.getElementById("addModal").close();

    this.setState({ showAlert: true, titleAlert: "Note Added Successfuly!" });

    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2000);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes,
      showAlert: true,
      titleAlert: "Note Deleted Successfully!",
    });

    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2000);
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({
      notes: updatedNotes,
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <div className="min-h-screen my-10">
        {this.state.showAlert && <Alert title={this.state.titleAlert} />}
        <div className="flex justify-center mb-4">
          <h1 className="text-white text-3xl md:text-5xl">Notes App</h1>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="card w-[90%] md:w-[70%] lg:w-[50%] bg-base-100 shadow-xl z-10">
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
                  onSubmit={this.onSubmit}
                  desc={
                    <>
                      <Input
                        placeholder={"Title"}
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        character={`Character Limit: ${this.state.titleCount} / 50`}
                      />
                      <textarea
                        className="textarea textarea-primary w-full"
                        placeholder="Description"
                        value={this.state.body}
                        onChange={this.onBodyChange}
                      ></textarea>
                    </>
                  }
                />
              </div>
              <Input
                placeholder={"Search..."}
                value={this.state.search}
                onChange={this.onSearchChange}
              />
              <NoteList
                notes={filteredNotes}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
