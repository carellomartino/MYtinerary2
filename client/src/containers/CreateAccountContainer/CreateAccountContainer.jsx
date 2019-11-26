import React, { Component } from "react";
import CreateAccountComponent from "../../components/CreateAccountComponent/CreateAccountComponent";
import { connect } from "react-redux";
import { addUser } from '../../store/action-creators/userActions'

class CreateAccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      image: "",
      email: "",
      firstName: "",
      lastName: "",
      country: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    alert("Account created successfully!");
    await this.props.addNewUser(this.state)
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleImage(e) {
    this.setState({ image: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleCountry(e) {
    this.setState({ country: e.target.value });
  }

  render() {
    return (
      <div>
        <CreateAccountComponent
          username={this.state.useranme}
          password={this.state.password}
          image={this.state.image}
          email={this.state.email}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          country={this.state.country}
          handleSubmit={this.handleSubmit}
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleImage={this.handleImage}
          handleEmail={this.handleEmail}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleCountry={this.handleCountry}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: data => dispatch(addUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountContainer);
