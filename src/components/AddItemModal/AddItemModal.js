import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = (handleCloseModal, onAddItem, isOpen) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <ModalWithForm
      title="New garmet"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={(e) => onAddItem(e, { name })}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className="modal__label">
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
          placeholder="URL"
        />
      </label>

      <p className="modal__weathertype-title">Select the Weather type:</p>

      <div className="modal__weathertype-radio">
        <div>
          <input name="weather-type" type="radio" id="hot" value="hot" />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input name="weather-type" type="radio" id="warm" value="warm" />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input name="weather-type" type="radio" id="cold" value="cold" />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
