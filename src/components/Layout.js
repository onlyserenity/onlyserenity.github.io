import React, { Component } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

import Navbar from "./navbar";
import Routes from "./Routes";
import media from "./Media";

const Main = styled.div`
  background-color: rgb(22, 20, 37, 0.9);
  height: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  & .particles {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  ${media.phone`
        display: block;
    `};
  ${media.phablet`
        display: block;
    `};
  ${media.tablet`
        display: block;
    `};
`;

export default class Layout extends Component {
  render() {
    return (
      <Main>
        <Container>
          <Navbar />
          <Routes />
        </Container>
        <Particles className="particles" />
      </Main>
    );
  }
}
