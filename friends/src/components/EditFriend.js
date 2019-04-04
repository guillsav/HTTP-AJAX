import React, {Component} from 'react';
import axios from 'axios';

class EditFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id);

    const res = axios.get(`http://localhost:5000/friends/`);
    console.log(res);
  }
  render() {
    return (
      <div className="AddFriend">
        <form onSubmit={this.props.onSubmit}>
          <h2>
            <span>Update</span> your Friend!
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
          <input className="btn-form" type="submit" value="Update Friend" />
        </form>
      </div>
    );
  }
}

export default EditFriend;
