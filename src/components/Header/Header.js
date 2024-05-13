import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({
  onActiveModal,
  location,
  onSignUp,
  onLogin,
  loggedIn,
  currentUser,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn && (
          <div>
            <button
              className="header__button"
              type="text"
              onClick={onActiveModal}
            >
              + Add clothes
            </button>
          </div>
        )}

        {loggedIn && (
          <Link className="header__name" to="/profile">
            {currentUser.name}
          </Link>
        )}

        {!loggedIn && (
          <button className="header__button" type="text" onClick={onLogin}>
            Log in
          </button>
        )}
        {!loggedIn && (
          <button className="header__button" type="text" onClick={onSignUp}>
            Sign up
          </button>
        )}
        {loggedIn && (
          <div>
            <img
              className="header__profile-avatar"
              src={currentUser.avatar}
              alt="Profile logo"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
