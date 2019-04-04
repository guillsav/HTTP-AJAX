import React from 'react';
import FriendCard from './FriendCard';

import './FriendList.css';

const FriendsList = props => {
  return (
    <div className="FriendList">
      {props.friends.map(friend => {
        if (!friend) {
          return <h3>Loading...</h3>;
        }
        return (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            onClick={props.onClick}
            selectFriend={props.selectFriend}
            friends={props.friends}
            targetFriend={props.targetFriend}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
