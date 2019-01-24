import React, { Component } from "react";
import styled from "styled-components";
import media from "../Media";
import { Link } from "react-router-dom";
import ResumeFile from "../../assets/JacobWilliam2019.pdf";
import * as Color from "../../config/colors";

const Main = styled.div`
  padding: 100px 40px;
  animation: fadein 1s ease-in;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & .content {
    padding: 80px 0;
    ${media.phone`
            padding-top: 10px;
        `};
  }
  & .header {
    width: 90px;
    & h1 {
      border-bottom: 2px solid ${Color.primary};
      margin-top: 20px;

      color: ${Color.secondary};
      font-size: 32px;
      ${Color.tertiary}-space: nowrap;
    }
  }

  & .name {
    color: ${Color.tertiary};
    ${Color.tertiary}-space: nowrap;
    font-size: 24px;

    & em {
      color: ${Color.primary};
      font-size: 64px;
      margin-left: 2px;
    }
  }

  & .title {
    color: ${Color.primary};
    font-size: 1.6em;
    ${Color.tertiary}-space: nowrap;
  }

  & .desc {
    margin-top: 20px;
    color: ${Color.secondary};
    font-size: 16px;
    width: 460px;
    line-height: 1.8em;
    & em {
      color: ${Color.primary};
    }

    ${media.phone`width: 320px;`}
    ${media.phablet`width: 320px;`}
  }
  & .buttons {
    display: grid;
    grid-template-columns: 140px 140px;
    column-gap: 20px;
    padding-top: 20px;
    & a {
      color: ${Color.tertiary};
      text-decoration: none;
    }
  }
`;

const Button = styled.div`
  background: ${props => (props.primary ? "#221E30" : "${Color.primary}")};
  color: ${props => (props.primary ? "${Color.primary}" : "#221E30")};
  height: 40px;
  margin: 0;
  text-align: center;
  padding: 10px;
  ${Color.tertiary}-space: nowrap;
  border: 0;
  font-size: 1.8vh;
  outline: none;
  width: 140px;
  &:hover {
    color: ${Color.tertiary};
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export default class About extends Component {
  render() {
    return (
      <Main>
        <div className="header">
          <h1>About</h1>
        </div>

        <div className="content">
          <div className="name">
            Jacob William <em>.</em>
          </div>
          <div className="title">Full Stack Software Engineer</div>

          <div className="desc">
            Hi there,
            <br />
            I'm a <em>Full Stack Software Engineer</em> specialized in React,
            NodeJS, Python, C#, and many other languages and frameworks. I also
            specialize in developing secure and optimized applications using the
            proper algorithms and software engineering practices. I believe that
            languages and frameworks are just tools and what matters is who's
            using them. <br />
          </div>

          <div className="buttons">
            <Button>
              <a href={ResumeFile}>Resume</a>
            </Button>
            <Button primary>
              <Link to="experience">Learn More</Link>
            </Button>
          </div>
        </div>
      </Main>
    );
  }
}
