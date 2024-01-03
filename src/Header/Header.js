import "./Header.css";

const Header = ({ onActiveModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onActiveModal}
          >
            + Add clothes
          </button>
        </div>

        <div>Terrance Tegegne</div>
        <div>
          <img src={require("../images/avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
