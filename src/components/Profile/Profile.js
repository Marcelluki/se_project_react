import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({ items, onSelectCard, onActiveModal }) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar />
    </section>
    <ClothesSection items={items} onSelectCard={onSelectCard} />
  </div>
);

export default Profile;
