import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container-preview">
        <button className="modal__close" type="button" onClick={onClose} />
        <img src={selectedCard.link} />

        <div>{selectedCard.name}</div>

        <div>{selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
