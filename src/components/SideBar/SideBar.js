import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { Link } from "react-router-dom";

const SideBar = ({ currentUser }) => (
  <section className="profile__section">
    <div>
      <img
        className="profile__avatar"
        src={currentUser.avatar}
        alt="Profile logo"
      />
    </div>
    <Link className="header__name" to="/profile">
      {currentUser.name}
    </Link>
  </section>
);

export default SideBar;
