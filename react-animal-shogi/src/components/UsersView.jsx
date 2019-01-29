import React from 'react';


class UsersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                   firstName: '',
                   lastName: '',
                   email: '',
                   guests: 0
                           };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const value = target.type === 'number' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    let formData = event.target.value;
    $.post('/rsvps', )
      .done((data) => {

      })
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} method="post">
        <div>
          <label for="name">First Name:</label>
          <input type="text" id="firstname" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label for="name">Last Name:</label>
          <input type="text" id="lastname" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
      </form>
      </div>
    )
  }
}

export default App;
