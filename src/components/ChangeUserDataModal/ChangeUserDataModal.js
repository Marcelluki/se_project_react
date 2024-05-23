import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ChangeUserDataModal = ({
  handleCloseModal,
  isOpen,
  onHandleChangeData,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleChangeData({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
      // onHandleItemSubmit={onHandleItemSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          placeholder="Avatar"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default ChangeUserDataModal;
