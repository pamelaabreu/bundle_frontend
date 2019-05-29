import React from "react";
import "./Modal.css";
import Suggestions from "../../containers/Suggestions/Suggestions";

const Modal = props => {
  return (
    <>
      <div className={props.show ? "displayModal flipOutY" : "displayNone"}>
        <div className="displayModalMain rounded">
          <button className="modalCloseButton" onClick={props.handleClose}>
            x
          </button>
          <div className="modalContent">
            <Suggestions
              destination={props.destination}
              duration={props.duration}
              departureDate={props.departureDate}
              returnDate={props.returnDate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
