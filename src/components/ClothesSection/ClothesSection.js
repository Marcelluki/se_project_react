import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ items, onSelectCard, onActiveModal }) {
  //   const filteredCards = items.filter((item) => {
  //     return item.weather.toLowerCase();
  //   });

  return (
    <div className="profile__items">
      <div className="profile__add-clothes">
        <p className="profile__text">Your Items</p>
        <button className="profile__add-new" onClick={onActiveModal}>
          Add New +
        </button>
      </div>
      <div className="profile__clothes-section">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
