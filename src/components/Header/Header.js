import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onActiveModal, location }) => {
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
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onActiveModal}
          >
            + Add clothes
          </button>
        </div>

        <Link className="header__name" to="/profile">
          Terrance Tegegne
        </Link>
        <div>
          <img src={avatar} alt="Profile logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
