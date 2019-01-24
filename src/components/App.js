import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import * as Color from "../config/colors";
import Layout from "./Layout";
import Background from "../assets/01.jpg";

const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    background-image: url(${Background});
    background-size: cover;
    width: 100%;
    
    margin: 0;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.25;
    & .ui.modal {
      background: rgba(0, 0, 0, 0.4) !important;
      width: 80%;
      height: 50%;
      color: ${Color.primary} !important;
      text-align: center;
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      & p {
        font-size: 20px;
        color: ${Color.secondary};
      }
      & .content {
        background: transparent !important;
      }
    }


  }


  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
 
`;
const Main = styled.div``;
class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <GlobalStyle />
          <Layout />
        </Main>
      </Router>
    );
  }
}

export default App;
