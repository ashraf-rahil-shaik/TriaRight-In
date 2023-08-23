import React from "react";
import Modal from "react-modal" // Create this CSS file for styling the modal

Modal.setAppElement("#root"); // Connect modal to your app root element

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="delete-modal">
      <div className="delete-modal-content">
        <p>Are you sure you want to permanently delete this record?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>Yes</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
