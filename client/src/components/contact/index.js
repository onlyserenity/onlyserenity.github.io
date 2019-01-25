import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Icon, Modal, Form, TextArea } from "semantic-ui-react";
import axios from 'axios';

import media from "../Media";
import Mars from "../../assets/mars.png";
import * as Color from "../../config/colors";
const Main = styled.div`
  padding: 100px 40px;
  height: 100%;
  animation: fadein 1s ease-in;
  & .header {
    & h1 {
      width: 118px;
      border-bottom: 2px solid ${Color.primary};
      margin-top: 20px;
      color: ${Color.secondary};
      font-size: 32px;
      ${Color.tertiary}-space: nowrap;
    }
  }

  & .content {
    background-color: rgba(28, 25, 45, 0.6);
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    width: 80%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));

    ${media.phone` display: block; padding: 40px; width: 100%; text-align: center; `};
  }
  & .form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    ${media.phone`width: 60%; padding: 40px;`}
    ${media.phablet`width: 60%; padding: 40px;`}
    flex-direction: column;

    & button {
      margin-top: 10px;
      width: 100px;
    }

    ${media.phone`padding-top: 20px;`}
  }

  & .image-container {
    ${media.phone`width: 60%; `}
    ${media.phablet`width: 60%;`}
    margin: auto;
    padding: auto;

    & img {
      border-radius: calc(256px - 120px);
      width: 200px;

      &:hover {
      }
      ${media.phone`width: 100px;`}
      ${media.phablet`width: 100px;`}
    }
  }
  & .text-area {
    padding: 10px 0;

    & .text-area-input {
      width: 200px;
    }
  }
`;

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      title: "",
      text: "",
      open: false,
      openSuccess: false,
      errorMessage: []
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    if (!this.state.email) {
      this.state.errorMessage.push("Email is required");
      this.setState({
        open: true
      });
    }
    event.preventDefault();
    if (!this.state.title) {
      this.state.errorMessage.push("Title is required");
      this.setState({
        open: true
      });
    }
    if (!this.state.text) {
      this.state.errorMessage.push("Message is required");
      this.setState({
        open: true
      });
    }
    
    let req = {
      email: this.state.email,
      title: this.state.title,
      body: this.state.text
    }
    axios.post('/send', req)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err); 
    })
  };

  close = () => this.setState({ open: false, errorMessage: [] });
  render() {
    return (
      <Main>
        <div className="header">
          <h1>Contact</h1>
        </div>

        <div className="content">
          <div className="form">
          <Input
              iconPosition="left"
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            >
              <Icon name="mail" color="pink" />
              <input />
          </Input>
            <Input
              iconPosition="left"
              placeholder="Title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            >
              <Icon name="user" color="pink" />
              <input />
            </Input>
            <Form className="text-area">
              <TextArea
                name="text"
                value={this.state.text}
                onChange={this.onChange}
                className="text-area-input"
                autoHeight
                placeholder="Enter message here..."
              />
            </Form>

            <Button color="black" onClick={this.onSubmit}>
              Submit
            </Button>
          </div>

          <div className="image-container">
            <img src={Mars} alt="mars" />
          </div>
        </div>
        <Modal size="mini" open={this.state.open} onClose={this.close}>
          <Modal.Header>Error</Modal.Header>
          <Modal.Content>
            {this.state.errorMessage &&
              this.state.errorMessage.map((item, key) => (
                <p style={{ color: "red" }}>{item}</p>
              ))}
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="thumbs up outline"
              labelPosition="right"
              content="OK"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>

        <Modal size="mini" open={this.state.openSuccess} onClose={this.close}>
          <Modal.Header>Success</Modal.Header>
          <Modal.Content>
            <p>Message sent! Thank you for contacting me</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="thumbs up outline"
              labelPosition="right"
              content="OK"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </Main>
    );
  }
}
