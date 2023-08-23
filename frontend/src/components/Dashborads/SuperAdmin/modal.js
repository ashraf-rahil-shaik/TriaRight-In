import React from "react";
import Modal from "react-modal";
//import "./Modal.css"; 
Modal.setAppElement("#root"); // Connect modal to your app root element

const CustomModal = ({ isOpen, onClose, title, message }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
