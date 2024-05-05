import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  // onAddItem,
  isOpen,
  onHandleItemSubmit,
  onHandleRegisterSubmit,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarUrlChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleRegisterSubmit({ email, name, avatar, password });
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      // onHandleItemSubmit={onHandleItemSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

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
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="URL"
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
