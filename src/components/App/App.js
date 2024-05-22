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

import {
  getClothingItems,
  addItem,
  removeItem,
  checkResponse,
  getUser,
} from "../../utils/api";
import { registerUser, login } from "../../utils/auth";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import * as api from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({ temperature: { F: 999, C: 999 } });
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  console.log({ currentUser });

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
  const handleCardLike = ({ _id }, isLiked) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike({ _id }, token)
          .then((updatedCard) => {
            setItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike({ _id }, token)
          .then((updatedCard) => {
            setItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleDeleteCard = (item) => {
    const token = localStorage.getItem("jwt");
    removeItem(item, token)
      .then(() => {
        const filteredCards = items.filter((card) => card._id !== item._id);
        setItems(filteredCards);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getUser(token)
        .then((res) => {
          handleLogin(res.userId);
        })
        .catch((error) => {
          console.error(error);
        });

      // fetch to the server to get the current user's info
      // login using that info
    }
  }, []);

  // const onAddItem = (values) => {
  //   console.log(values);
  // };
  const handleRegisterSubmit = (user) => {
    registerUser(user)
      .then((newUser) => {
        handleLoginModalSubmit(user);
        handleCloseModal();
        navigate("/profile");
      })
      .then(checkResponse)
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (user) => {
    setLoggedIn(true);
    setCurrentUser({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      _id: user._id,
    });
    handleCloseModal();
  };

  const handleLoginModalSubmit = (user) => {
    if (!user.email || !user.password) {
      return;
    }
    login(user)
      .then((res) => {
        handleLogin(res);
        localStorage.setItem("jwt", res.token);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(user);
  };

  const handleItemSubmit = (item) => {
    const token = localStorage.getItem("jwt");
    addItem(item, token)
      .then((res) => {
        debugger;
        setItems((items) => [res.data, ...items]);
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
    <CurrentUserContext.Provider value={{ currentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onSignUp={() => setActiveModal("register")}
          onLogin={() => setActiveModal("login")}
          onActiveModal={handleActiveModal}
          location={location}
          loggedIn={loggedIn}
          currentUser={currentUser}
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
                onCardLike={handleCardLike}
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
                currentUser={currentUser}
                onCardLike={handleCardLike}
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
            onHandleLoginUser={handleLoginModalSubmit}
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
    </CurrentUserContext.Provider>
  );
}

export default App;

// start db.json mock up server json-server --watch db.json --id _id --port 3001
