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
import { registerUser, login } from "../../utils/auth";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({ temperature: { F: 999, C: 999 } });
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const handleActiveModal = () => {
    setActiveModal("create");
  };
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (item) => {
    removeItem(item)
      .then(() => {
        const filteredCards = items.filter((card) => card._id !== item._id);
        setItems(filteredCards);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const onAddItem = (values) => {
  //   console.log(values);
  // };
  const handleRegisterSubmit = (user) => {
    registerUser(user)
      .then((newUser) => {
        debugger;
        setUser([newUser, ...user]);
        handleLoginUser(user);
        handleCloseModal();
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginUser = (user) => {
    if (!user.email || !user.password) {
      return;
    }
    login(user);
    handleCloseModal();
  };

  const handleItemSubmit = (item) => {
    addItem(item)
      .then((newItem) => {
        setItems([newItem, ...items]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
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
    getClothingItems()
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header
        onSignUp={() => setActiveModal("register")}
        onLogin={() => setActiveModal("login")}
        onActiveModal={handleActiveModal}
        location={location}
      />
      {/* <Routes>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            items={items}
            onHandleToggleSwitchChange={handleToggleSwitchChange}
          />
        </Route>
        <Route path="/profile">
          <Profile
            items={items}
            onSelectCard={handleSelectedCard}
            onActiveModal={handleActiveModal}
          />
        </Route>
      </Routes> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={items}
              onHandleToggleSwitchChange={handleToggleSwitchChange}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              items={items}
              onSelectCard={handleSelectedCard}
              onActiveModal={handleActiveModal}
            />
          }
        />
      </Routes>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          // onAddItem={onAddItem}
          onHandleItemSubmit={handleItemSubmit}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "login"}
          onHandleLoginUser={handleLoginUser}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "register"}
          onHandleRegisterSubmit={handleRegisterSubmit}
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
  );
}

export default App;

// start db.json mock up server json-server --watch db.json --id _id --port 3001
