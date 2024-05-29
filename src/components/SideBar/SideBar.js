import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { Link } from "react-router-dom";

const SideBar = ({ currentUser, onChangeData, onSignOut }) => (
  <section className="profile__section">
    <div className="profile__user">
      <img
        className="profile__avatar"
        src={currentUser.avatar}
        alt="Profile logo"
      />

      <Link className="profile__name" to="/profile">
        {currentUser.name}
      </Link>
    </div>
    <div className="profile__options">
      <button
        className="profile__change-data"
        type="text"
        onClick={onChangeData}
      >
        Change profile data
      </button>
      <button
        className="profile__logout"
        type="text"
        onClick={() => onSignOut(currentUser)}
      >
        Log out
      </button>
    </div>
  </section>
);

export default SideBar;
