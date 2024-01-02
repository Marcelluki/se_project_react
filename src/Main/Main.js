import "./Main.css";
import { defaultClothingItems } from "../ultil/constants";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="snow" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((x) => (
            <ItemCard x={x} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
