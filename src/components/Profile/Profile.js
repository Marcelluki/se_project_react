import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({ items, onSelectCard, onActiveModal, currentUser }) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar currentUser={currentUser} />
    </section>
    <ClothesSection
      items={items}
      onSelectCard={onSelectCard}
      onActiveModal={onActiveModal}
    />
  </div>
);

export default Profile;
