import React from 'react';
import {Link} from 'react-router-dom';
import './FriendCard.css';

const FriendCard = props => {
  return (
    <div className="FriendCard">
      <div className="friend-info">
        <h2>{props.friend.name}</h2>
        <p>
          <span>age: </span>
          {props.friend.age}
        </p>
        <p>
          <span>email: </span>
          {props.friend.email}
        </p>
      </div>
      <div className="controls">
        <button
          onClick={() => props.onClick(props.friend.id)}
          className="delete"
        >
          <i className="far fa-trash-alt fa-lg" />
        </button>
        <Link to={`/friends/edit/${props.friend.id}`}>
          <i className="far fa-edit fa-lg" />
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
