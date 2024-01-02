import "./WeatherCard.css";

const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },

  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },

  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },

  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },

  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },

  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },

  {
    url: require("../images/night/n-moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/night/n-cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/n-rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/n-storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/n-snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/n-fog.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
