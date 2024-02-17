import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__container">
      <img
        alt={item.name}
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
