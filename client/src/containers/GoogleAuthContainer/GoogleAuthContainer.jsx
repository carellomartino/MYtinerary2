import React, { Component } from 'react'
import GoogleAuthComponent from '../../components/GoogleAuthComponent/GoogleAuthComponent'
import { connect } from 'react-redux';
import { addUserGoogle } from '../../store/action-creators/userActions'

class GoogleAuthContainer extends Component {
constructor(props) {
  super(props)

  this.state = {
      email: "carellomartino@gmail.com",
      password: "Carellomartin0"
     
  };
};

async componentDidMount(){
  console.log("component")
    await this.props.googleValidation()
    console.log(this.props)
}


    render() {
        return (
            <div>
                <GoogleAuthComponent/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
      // isLoggedIn: state.user.isLoggedIn,
      user: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      googleValidation: () => dispatch(addUserGoogle())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuthContainer);
  