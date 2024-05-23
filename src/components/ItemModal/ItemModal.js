import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, deleteCard, onDelete }) => {
  return (
    <div className="modal">
      <div className="modal__container-preview">
        <button
          className="modal__close modal__close-item"
          type="button"
          onClick={onClose}
        />
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.imageUrl}
        />
        <div className="modal__weathertype-preview">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
        <button
          // onClick={() => {
          //   deleteCard(selectedCard);
          // }}
          onClick={onDelete}
          type="button"
          className="modal__item-delete"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
