import React, {Component} from 'react';

class EditFriend extends Component {
  state = {
    friend: this.props.selectedFriend
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
    this.props.updateFriend(this.state.friend);

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="AddFriend">
        <form onSubmit={this.onFormSubmit}>
          <h2>
            <span>Update</span> your Friend!
          </h2>
          <div className="form-items">
            <div className="item">
              <label>First name</label>
              <input
                required
                onChange={this.onInputChange}
                type="text"
                name="name"
                value={this.state.friend.name}
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
                value={this.state.friend.age}
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
                value={this.state.friend.email}
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
