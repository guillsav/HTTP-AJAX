import React, {Component} from 'react';

import './AddFriend.css';

class AddFriend extends Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  onInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
  };

  render() {
    const {name, age, email} = this.state.friend;
    return (
      <div className="AddFriend">
        <form onSubmit={this.onFormSubmit}>
          <h2>
            <span>Add</span> a Friend!
          </h2>
          <div className="form-items">
            <div className="item">
              <label>First name</label>
              <input
                required
                onChange={this.onInputChange}
                type="text"
                name="name"
                value={name}
                placeholder="Enter name..."
              />
            </div>
            <div className="item">
              <label>Age</label>
              <input
                required
                onChange={this.onInputChange}
                type="text"
                name="age"
                value={age}
                placeholder="Enter age..."
              />
            </div>
            <div className="item">
              <label>Email address</label>
              <input
                required
                onChange={this.onInputChange}
                type="email"
                name="email"
                value={email}
                placeholder="Enter email..."
              />
            </div>
          </div>
          <input className="btn-form" type="submit" value="Add New Friend" />
        </form>
      </div>
    );
  }
}

export default AddFriend;
