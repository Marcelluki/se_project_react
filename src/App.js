import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "./ultil/weatherApi";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const handleActiveModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      console.log(temperature);
      setTemp(temperature);
    });
  }, []);

  useEffect(() => {
    getForecastWeather().then((data) => {
      console.log(data);
      const city = parseCityData(data);
      console.log(city);
      setLocation(city);
    });
  }, []);

  console.log(temp);

  return (
    <div>
      <Header onActiveModal={handleActiveModal} location={location} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garmet" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
            />
          </label>

          <label className="modal__label">
            Image
            <input
              className="modal__input"
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              placeholder="URL"
            />
          </label>

          <p className="modal__weathertype-title">Weather type:</p>

          <div className="modal__weathertype-radio">
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}

      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
