import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import { parseWeatherData } from "../../utils/weatherApi.js";

function Main({
  weatherTemp,
  onSelectCard,
  items,
  onHandleToggleSwitchChange,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weather = weatherTemp;

  const weatherType = useMemo(() => {
    const tempInF = weather.temperature.F;
    if (tempInF >= 86) {
      return "hot";
    } else if (tempInF >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherTemp]);
  // else {
  //   if (tempInC >= 30) {
  //     return "hot";
  //   } else if (tempInC >= 30 && tempInC <= 29) {
  //     return "warm";
  //   } else if (tempInC <= 18) {
  //     return "cold";
  //   }
  // }

  // const weatherType = useMemo(() => {
  //   if (currentTemperatureUnit === "F") {
  //     if (temp >= 86) {
  //       return "hot";
  //     } else if (temp >= 66 && temp <= 85) {
  //       return "warm";
  //     } else if (temp <= 65) {
  //       return "cold";
  //     } else {
  //       if (temp >= 30) {
  //         return "hot";
  //       } else if (temp >= 30 && temp <= 29) {
  //         return "warm";
  //       } else if (temp <= 18) {
  //         return "cold";
  //       }
  //     }
  //   }
  // }, [weatherTemp]);

  const filteredCards = items.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="snow" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp} {currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item, index) => (
            <ItemCard key={index} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
