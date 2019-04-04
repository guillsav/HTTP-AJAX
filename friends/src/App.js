import React, {Component} from 'react';
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      err: '',
      name: '',
      age: '',
      email: {}
    };
  }

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

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(() =>
        this.setState({
          friends: [...this.state.friends, newFriend]
        })
      )
      .catch(err =>
        this.setState({
          err
        })
      );

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  onDeleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(() =>
      this.setState({
        friends: this.state.friends.filter(friend => {
          return friend.id !== id;
        })
      })
    );
  };

  onFriendEdit = id => {
    const updatedFriend = {
      id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios.patch(`http://localhost:5000/friends/${id}`).then(() => {
      this.setState({
        friends: [...this.state.friends, updatedFriend]
      });
    });
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
          render={props => {
            return this.state.friends.map(friend => {
              return (
                <FriendList
                  key={friend.id}
                  friend={friend}
                  {...props}
                  onClick={this.onDeleteFriend}
                />
              );
            });
          }}
        />
        <Route
          path="/friends/add"
          render={props => (
            <AddFriend
              {...props}
              friends={this.state.friends}
              onSubmit={this.onFormSubmit}
              onChange={this.onInputChange}
            />
          )}
        />
        <Route
          path="/friends/edit/:id"
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              onSubmit={this.onFormSubmit}
              onChange={this.onInputChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
