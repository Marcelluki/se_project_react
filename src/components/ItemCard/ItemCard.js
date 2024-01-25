import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__container">
        <img
          alt="Card Image"
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
        <div className="card__name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
