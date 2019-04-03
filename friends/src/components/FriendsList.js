import React from 'react';
import FriendCard from './FriendCard';

import './FriendList.css';

const FriendsList = props => {
  return (
    <div className="FriendList">
      <FriendCard friend={props.friend} />
    </div>
  );
};

export default FriendsList;
