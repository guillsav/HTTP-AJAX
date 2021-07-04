import React from 'react';
import {Link} from 'react-router-dom';
import './FriendCard.css';

const FriendCard = props => {
  return (
    <div className="FriendCard">
      <div className="friend-info">
        <h2>{props.name}</h2>
        <p>
          <span>age: </span>
          {props.age}
        </p>
        <p>
          <span>email: </span>
          {props.email}
        </p>
      </div>
      <div className="controls">
        <button onClick={() => props.onClick(props.id)} className="delete">
          <i className="far fa-trash-alt fa-lg" />
        </button>

        <Link
          onClick={() => props.targetFriend(props.id)}
          className="edit"
          to={`/friends/edit-friend/${props.id}`}
        >
          <i className="far fa-edit fa-md" />
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
