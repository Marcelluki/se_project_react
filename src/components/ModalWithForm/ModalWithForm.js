import { Children } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  showSubmitButton = true,
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  // onHandleItemSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <div className="modal__head">
          <button className="modal__close" type="button" onClick={onClose} />

          <h3 className="modal__title">{title}</h3>
        </div>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          {showSubmitButton && (
            <button className="modal__submit-button" type="submit">
              {/* Removed "disabled" from button to follow with video */}
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
