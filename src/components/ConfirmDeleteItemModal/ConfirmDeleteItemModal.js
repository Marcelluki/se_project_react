import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmDeleteItemModal = ({
  handleCloseModal,
  isOpen,
  onConfirmDelete,
  selectedCard,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // onHandleChangeData({ name, avatar });
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      showSubmitButton={false}
      // onHandleItemSubmit={onHandleItemSubmit}
    >
      <div className="modal__delete-container">
        <div className="modal__delete-question-container">
          <p className="modal__delete-question">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
        </div>
        <button
          className="modal__button-confirm"
          onClick={() => onConfirmDelete(selectedCard)}
        >
          Yes, delete item
        </button>

        <button className="modal__button-cancel" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </ModalWithForm>
  );
};

export default ConfirmDeleteItemModal;
