import "./ItemCard.css";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes.some((like) => {
    return like.isLiked === currentUser._id;
  });

  const toggleLike = () => {
    onCardLike(item, isLiked); // Pass the new like state to the parent handler
    // setIsLiked(!isLiked);
  };

  return (
    <div className="card__container">
      <img
        alt={item.name}
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
      <button
        // onClick={() => onCardLike(item, isLiked)}
        onClick={toggleLike}
        className={`like-button ${
          isLiked ? "like-button-liked" : "like-button-not-liked"
        }`}
      ></button>
    </div>
  );
};

export default ItemCard;
