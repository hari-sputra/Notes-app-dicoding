import React from "react";
import Button from "./Button";

function Modal({ modalId, title, desc }) {
  return (
    <div>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <hr />
          <div>{desc}</div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <Button name={"Add"} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
