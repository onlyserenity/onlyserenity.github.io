import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Icon, Modal, Form, TextArea } from "semantic-ui-react";

import media from "../Media";
import Mars from "../../assets/mars.png";

const Main = styled.div`
  padding: 100px 40px;
  height: 100%;

  & .header {
    & h1 {
      width: 118px;
      border-bottom: 2px solid #ff5dad;
      margin-top: 20px;
      color: #a094a8;
      font-size: 32px;
      white-space: nowrap;
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
