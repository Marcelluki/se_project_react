import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({
  items,
  onSelectCard,
  onActiveModal,
  currentUser,
  onCardLike,
  onChangeData,
}) => (
  <div className="profile">
    <section className="profile__sidebar">
      <SideBar currentUser={currentUser} onChangeData={onChangeData} />
    </section>
    <ClothesSection
      items={items}
      onSelectCard={onSelectCard}
      onActiveModal={onActiveModal}
      onCardLike={onCardLike}
    />
  </div>
);

export default Profile;
