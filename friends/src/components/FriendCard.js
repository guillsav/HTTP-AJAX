import React from 'react';
import './FriendCard.css';

const FriendCard = ({friend}) => {
  return (
    <div className="FriendCard">
      <h2>{friend.name}</h2>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default FriendCard;
