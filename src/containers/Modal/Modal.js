import React from "react";
import "./Modal.css";
import Suggestions from '../../containers/Suggestions/Suggestions';


const Modal = props => {

    return (
        <>
        <div className={props.show ? "displayModal flipOutY" : "displayNone"}>
            <div className="displayModalMain rounded">
                <button className="modalCloseButton" onClick={props.handleClose}>
                    x
                </button>
                <div className="modalContent">
                    <Suggestions duration={props.duration}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Modal;
