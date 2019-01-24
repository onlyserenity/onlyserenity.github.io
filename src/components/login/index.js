import React, { Component } from "react";
import { Icon, Input, Button } from "semantic-ui-react";
import styled from "styled-components";

import media from "../Media";
import * as Color from "../../config/colors";
const Main = styled.div`
  padding: 100px 40px;
  height: 100%;
  & .header {
    & h1 {
      width: 80px;
      border-bottom: 2px solid ${Color.primary};
      margin-top: 20px;
      color: ${Color.secondary};
      font-size: 32px;
      ${Color.tertiary}-space: nowrap;
    }
  }

  & .form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 50%;
    flex-direction: column;
    background-color: rgba(28, 25, 45, 0.6);
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    margin-top: 40px;

    & input {
      margin-top: 10px;
      padding: 12px;
    }

    & button {
      margin-top: 10px;
      width: 20%;
    }

    ${media.phone`padding-top: 20px;`}
  }
`;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: "",
      attempts: 0
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.username.length <= 1) {
      this.setState({
        usernameError: "Username is required"
      });
      return;
    } else {
      this.setState({
        usernameError: ""
      });
    }
    const User = {
      username: this.state.email,
      usernameError: this.state.usernameError,
      password: this.state.password
    };

    // this.props.signIn(User, this.props.history);
  };
  render() {
    return (
      <Main>
        <div className="header">
          <h1>Login</h1>
        </div>

        <div className="form">
          <Input
            error={this.state.usernameError ? true : false}
            iconPosition="left"
            placeholder={
              this.state.usernameError ? this.state.usernameError : "Username"
            }
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          >
            <Icon name="user" color="pink" />
            <input />
          </Input>
          <Input
            error={this.state.passwordError ? true : false}
            iconPosition="left"
            placeholder={
              this.state.passwordError ? this.state.passwordError : "Password"
            }
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          >
            <Icon name="lock" color="pink" />
            <input />
          </Input>

          <Button color="black" onClick={this.onSubmit}>
            Login
          </Button>
        </div>
      </Main>
    );
  }
}
