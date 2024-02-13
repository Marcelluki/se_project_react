// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "../../utils/weatherApi";

import { getClothingItems, addItem, removeItem } from "../../utils/api";
import { useState, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);
  // const [clothingItems, setClothingItems] = useState([])
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

  const handleDeleteCard = (item) => {
    removeItem(item).then(() => {
      const filteredCards = items.filter((card) => card._id !== item._id);
      setItems(filteredCards);
      handleCloseModal();
    });
  };

  // const onAddItem = (values) => {
  //   console.log(values);
  // };

  const handleItemSubmit = (item) => {
    addItem(item).then((newItem) => {
      setItems([newItem, ...items]);
      handleCloseModal();
    });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = parseCityData(data);

        setLocation(city);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(currentTemperatureUnit);

  useEffect(() => {
    getClothingItems().then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onActiveModal={handleActiveModal} location={location} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={items}
            />
          </Route>
          <Route path="/profile">
            <Profile
              items={items}
              onSelectCard={handleSelectedCard}
              onActiveModal={handleActiveModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            // onAddItem={onAddItem}
            onHandleItemSubmit={handleItemSubmit}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            deleteCard={handleDeleteCard}
            selectedCard={selectedCard}
            onClose={handleCloseModal}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

// start db.json mock up server json-server --watch db.json --id _id --port 3001
