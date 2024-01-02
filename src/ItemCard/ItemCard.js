import "./ItemCard.css";
const ItemCard = ({ x }) => {
  return (
    <div>
      <div>
        <img src={x.link} className="card__image" />
      </div>
      <div className="card__name">{x.name}</div>
    </div>
  );
};

export default ItemCard;
