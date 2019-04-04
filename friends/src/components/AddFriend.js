import React, {Component} from 'react';

import './AddFriend.css';

class AddFriend extends Component {
  render() {
    return (
      <div className="AddFriend">
        <form onSubmit={this.props.onSubmit}>
          <h2>
            <span>Add</span> a Friend!
          </h2>
          <div className="form-items">
            <div className="item">
              <label>First name</label>
              <input
                required
                onChange={this.props.onChange}
                type="text"
                name="name"
                value={this.props.name}
                placeholder="Enter name..."
              />
            </div>
            <div className="item">
              <label>Age</label>
              <input
                required
                onChange={this.props.onChange}
                type="text"
                name="age"
                value={this.props.age}
                placeholder="Enter age..."
              />
            </div>
            <div className="item">
              <label>Email address</label>
              <input
                required
                onChange={this.props.onChange}
                type="email"
                name="email"
                value={this.props.email}
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
