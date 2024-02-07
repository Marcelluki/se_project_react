import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { Link } from "react-router-dom";

const SideBar = () => (
  <section className="profile__section">
    <div>
      <img src={avatar} alt="Profile logo" />
    </div>
    <Link className="header__name" to="/profile">
      Terrance Tegegne
    </Link>
  </section>
);

export default SideBar;
