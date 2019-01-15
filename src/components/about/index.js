import React, {Component} from 'react'
import styled from 'styled-components'
import media from '../Media'

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
            border-bottom: 2px solid #ff5dad;
            margin-top: 20px;

            color: #a094a8;
            font-size: 32px;
            white-space: nowrap;
        }
    }

    & .name {
        color: white;
        white-space: nowrap;
        font-size: 24px;

        & em {
            color: #ff5dad;
            font-size: 64px;
            margin-left: 2px;
        }
    }

    & .title {
        color: #ff5dad;
        font-size: 1.6em;
        white-space: nowrap;
    }

    & .desc {
        margin-top: 20px;
        color: #a094a8;
        font-size: 16px;
        width: 460px;
        line-height: 1.8em;
        & em {
            color: #ff5dad;
        }

        ${media.phone`width: 320px;`}
    }
    & .buttons {
        display: grid;
        grid-template-columns: 140px 140px;
        column-gap: 20px;
        padding-top: 20px;
    }
`

const Button = styled.div`
    background: ${props => (props.primary ? '#221E30' : '#FF5DAD')};
    color: ${props => (props.primary ? '#FF5DAD' : '#221E30')};
    height: 40px;
    margin: 0;
    text-align: center;
    padding: 10px;
    white-space: nowrap;
    border: 0;
    font-size: 1.8vh;
    outline: none;
    width: 140px;
    &:hover {
        color: white;
        cursor: pointer;
        filter: brightness(110%);
    }
`

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
                        I'm a <em>Full Stack Software Engineer</em> specialized in React, NodeJS, Python, C#, and many
                        other languages and frameworks. I also specialize in developing secure and optimized
                        applications using the proper algorithms and software engineering practices. I believe that
                        languages and frameworks are just tools and what matters is who's using them. <br />
                    </div>

                    <div className="buttons">
                        <Button>Resume</Button>
                        <Button primary>Learn More</Button>
                    </div>
                </div>
            </Main>
        )
    }
}
