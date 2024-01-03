import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container-preview">
        <button
          className="modal__close modal__close-item"
          type="button"
          onClick={onClose}
        />
        <img className="modal__image" src={selectedCard.link} />

        <div>{selectedCard.name}</div>

        <div>{selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
