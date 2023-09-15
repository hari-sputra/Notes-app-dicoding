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
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
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
            archieved: false,
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

    this.setState({ showAlert: true });

    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2000);
  }

  render() {
    return (
      <div className="min-h-screen my-10">
        {this.state.showAlert && <Alert title={"Note Added Successfuly!"} />}
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
                  onSubmit={this.onSubmit}
                  desc={
                    <>
                      <Input
                        placeholder={"Title"}
                        value={this.state.title}
                        onChange={this.onTitleChange}
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
              <Input placeholder={"Search..."} />
              <NoteList notes={this.state.notes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
