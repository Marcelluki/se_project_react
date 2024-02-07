import "./ClothesSection.css";

function ClothesSection({ items }) {
  //   const filteredCards = items.filter((item) => {
  //     return item.weather.toLowerCase();
  //   });

  return (
    <div>
      {items.map((item) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}

export default ClothesSection;
