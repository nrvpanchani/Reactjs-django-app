import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux'
import BaseRoute from "./routes";

import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import * as action from "./store/actions/auth";

class App extends Component {
  
  componentDidMount() {
    this.props.onTryAuthSignup()
  }

  render(){
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRoute />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    isAuthenticated: state.token != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthSignup: () => dispatch(action.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
