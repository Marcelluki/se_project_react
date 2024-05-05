import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  handleCloseModal,
  // onAddItem,
  isOpen,
  onHandleItemSubmit,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleItemSubmit({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New garmet"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add garmet"
      // onHandleItemSubmit={onHandleItemSubmit}
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
          placeholder="URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>

      <p className="modal__weathertype-title">Select the Weather type:</p>

      <div className="modal__weathertype-radio">
        <div>
          <input
            name="weather-type"
            type="radio"
            id="hot"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            name="weather-type"
            type="radio"
            id="warm"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            name="weather-type"
            type="radio"
            id="cold"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
