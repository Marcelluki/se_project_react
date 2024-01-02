import "./ItemCard.css";
const ItemCard = ({ x, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          src={x.link}
          className="card__image"
          onClick={() => onSelectCard(x)}
        />
      </div>
      <div className="card__name">{x.name}</div>
    </div>
  );
};

export default ItemCard;
