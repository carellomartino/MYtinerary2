import React, { Component } from "react";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { connect } from "react-redux";
import { validateUser } from "../../store/action-creators/logInActions";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.validateUserNow(user)
      .then(() => {
        if (this.props.isLoggedIn) {
            alert("You are successfully logged!")
            this.props.history.push("/index");
        }
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <LoginComponent
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          password={this.state.password}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateUserNow: user => dispatch(validateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
