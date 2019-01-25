import React, { Component } from "react";
import styled from "styled-components";
import {
  List,
  Icon,
  Card,
  Image,
  Modal,
  Reveal,
  Label
} from "semantic-ui-react";
import Projects from "../../config/work";
import * as Color from "../../config/colors";
const Main = styled.div`
  padding: 100px 40px;
  animation: fadein 1s ease-in;

  & .header {
    & h1 {
      width: 82px;
      justify-content: flex-start;
      border-bottom: 2px solid ${Color.primary};
      margin-top: 20px;
      color: ${Color.secondary};
      font-size: 32px;
      ${Color.tertiary}-space: nowrap;
    }

    & .icons {
      justify-content: flex-end;
    }
  }
  & i {
    color: ${Color.secondary};
    font-size: 1.4em;
    cursor: pointer;

    &:hover {
      color: ${Color.primary};
    }
  }
`;

const Content = styled.div`
  padding: 80px 0;
  & .card-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 40px;
  }

  & img {
    object-fit: cover;
    width: 290px;
    height: 200px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    filter: brightness(60%) !important;

    &:hover {
      cursor: pointer;
    }
  }
  & .container {
    & .image {
      filter: brightness(100%) !important;
    }
  }
  & .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;

    & em {
      font-size: 12px;
      color: ${Color.secondary};
    }
  }

  & .text {
    color: ${Color.tertiary};
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default class Work extends Component {
  render() {
    return (
      <Main>
        <div className="header">
          <h1>Work</h1>
          <List floated="right" horizontal className="icons">
            <List.Item>
              <Icon name="search" />
            </List.Item>
            <List.Item>
              <Icon name="share alternate square" />
            </List.Item>
          </List>
        </div>

        <Content>
          <Card.Group className="card-group">
            {Projects &&
              Projects.map((item, key) => (
                <Modal
                  className="modal-ui"
                  style={{ backgroundColor: "transparent !important" }}
                  key={key}
                  dimmer="blurring"
                  trigger={
                    <Image.Group>
                      {" "}
                      <Reveal animated="fade">
                        <Reveal.Content visible>
                          <Image src={item.img} alt={item.name} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                          <div className="container">
                            <Image
                              src={item.img}
                              alt={item.name}
                              className="image"
                            />
                            <div className="overlay">
                              <div className="text">
                                {item.name} <br /> <em>Click to learn more</em>
                              </div>
                            </div>
                          </div>
                        </Reveal.Content>
                      </Reveal>
                    </Image.Group>
                  }
                  content={
                    <div className="modal-content">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className="stack">
                        {item.languages.map((lang, langKey) => (
                          <List
                            divided
                            horizontal
                            size="tiny"
                            key={langKey}
                            className="lang-list"
                          >
                            <List.Item
                              style={{
                                display: "flex",
                                padding: "24px"
                              }}
                            >
                              <i
                                className={`devicon-${lang[0]}-plain`}
                                style={{
                                  display: "inline-block",
                                  fontSize: "24px"
                                }}
                              />
                              <List.Content>
                                <List.Header
                                  style={{
                                    color: "white",
                                    paddingLeft: "20px"
                                  }}
                                >
                                  {lang[1]}
                                </List.Header>
                              </List.Content>
                            </List.Item>
                          </List>
                        ))}
                      </div>
                      {item.url && (
                        <a href={item.url}>
                          <Label as="a" image size="medium">
                            <Icon name="github alternate" color="pink" />
                            Source Code
                          </Label>
                        </a>
                      )}
                    </div>
                  }
                  closeIcon
                  position="bottom center"
                />
              ))}
          </Card.Group>
        </Content>
      </Main>
    );
  }
}
