import React, {Component} from 'react';

import './AddFriend.css';

class AddFriend extends Component {
  render() {
    return (
      <div className="AddFriend">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-items">
            <label>Name</label>
            <input
              required
              onChange={this.props.onChange}
              type="text"
              name="name"
              value={this.props.name}
              placeholder="Enter name..."
            />
            <label>Age</label>
            <input
              required
              onChange={this.props.onChange}
              type="text"
              name="age"
              value={this.props.age}
              placeholder="Enter age..."
            />
            <label>Email</label>
            <input
              required
              onChange={this.props.onChange}
              type="email"
              name="email"
              value={this.props.email}
              placeholder="Enter email..."
            />
          </div>
          <input className="btn-form" type="submit" value="Add New Friend" />
        </form>
      </div>
    );
  }
}

export default AddFriend;
