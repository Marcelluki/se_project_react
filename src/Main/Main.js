import "./Main.css";
import { defaultClothingItems } from "../ultil/constants";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86 + "°F") {
      return "hot";
    } else if (weatherTemp >= 66 + "°F" && weatherTemp <= 85 + "°F") {
      return "warm";
    } else if (weatherTemp <= 65 + "°F") {
      return "cold";
    }
  }, [weatherTemp]);

  console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather === weatherType;
  });
  console.log(filteredCards);
  return (
    <main className="main">
      <WeatherCard day={true} type="snow" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((item, index) => (
            <ItemCard key={index} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
