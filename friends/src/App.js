import React, {Component} from 'react';
import axios from 'axios';
import {NavLink, Route, withRouter} from 'react-router-dom';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';

import './App.css';

class App extends Component {
  state = {
    friends: [],
    err: {},
    selectedFriend: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err =>
        this.setState({
          err
        })
      );
  }

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  targetFriend = id => {
    const friend = this.state.friends.find(friend => {
      return friend.id === id;
    });
    this.setState({
      selectedFriend: friend
    });
  };

  onDeleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(res =>
      this.setState({
        friends: res.data
      })
    );
  };

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div className="header">
            <h2>Friends List</h2>
            <nav>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/friends/add">Add friend</NavLink>
            </nav>
          </div>
        </div>
        <Route
          exact
          path="/"
          render={props => (
            <FriendList
              friends={this.state.friends}
              {...props}
              onClick={this.onDeleteFriend}
              targetFriend={this.targetFriend}
            />
          )}
        />
        <Route
          exact
          path="/friends/add"
          render={props => (
            <AddFriend
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          exact
          path="/friends/edit-friend/:id"
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              selectedFriend={this.state.selectedFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
