import React from "react";
import Button from "./Button";

function Modal({ modalId, title, desc, onSubmit }) {
  return (
    <div>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={onSubmit}>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <hr />
            <div>{desc}</div>
            <div className="modal-action">
              <Button type="submit" name={"Add"} />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
