import "./Header.css";

const Header = ({ onActiveModal, location }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div>
          {currentDate}, {location}
        </div>
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
          <img src={require("../../images/avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
