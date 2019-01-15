import React, {Component} from 'react'
import styled from 'styled-components'
import {List, Icon, Card, Image, Radio} from 'semantic-ui-react'

import {Projects} from '../../config/work'

const Main = styled.div`
    padding: 100px 40px;

    & .header {
        & h1 {
            width: 9%;
            justify-content: flex-start;
            border-bottom: 2px solid #ff5dad;
            margin-top: 20px;
            color: #a094a8;
            font-size: 32px;
            white-space: nowrap;
        }

        & .icons {
            justify-content: flex-end;
        }
    }
    & i {
        color: #a094a8;
        font-size: 1.4em;
        cursor: pointer;

        &:hover {
            color: #ff5dad;
        }
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    column-gap: 40px;

    & .cards-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

const ProjectCard = styled.div`
    background-color: transparent !important;
    border: 0;
    box-shadow: none !important;

    & img {
        object-fit: cover;
        width: 290px;
        height: 200px;
        filter: brightness(60%);
    }

    & .card-content {
        display: none !important;
    }
    &:hover {
        cursor: pointer;
        & img {
            width: 250px;
            height: 200px;
            margin: 10px auto;
            filter: brightness(110%);
            transition: all 400ms linear;
        }
        & .card-content {
            display: block !important;

            & .stack {
                display: grid;
                grid-template-columns: auto auto auto auto;
                width: 40px !important;
                & .language {
                    padding: 10px;
                }
            }
            & p {
                color: #ff5dad;
                margin-top: 40px !important;
            }
        }
    }

    & .stack {
        display: none;

        & .language {
            color: #a094a8 !important;
        }
    }

    & .card-content {
        display: grid;
        grid-template-rows: 1fr 40px;
        color: #a094a8;
    }

    & .card-header {
        padding: 10px 10px  10px 0;
        color: #ff5dad;
    }
`

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
                    <Card.Group>
                        {Projects &&
                            Projects.map((item, key) => (
                                <ProjectCard className="card" key={key}>
                                    <Image src={item.img} />
                                    <Card.Content className="card-content">
                                        <div>
                                            <Card.Header className="card-header">{item.title}</Card.Header>
                                            <Card.Description>
                                                <em>{item.desc}</em>
                                            </Card.Description>
                                        </div>
                                        <p>
                                            <b>Stack:</b>
                                        </p>
                                        <div className="stack">
                                            {item.languages.map((lang, langKey) => (
                                                <Card.Meta className="language" key={langKey}>
                                                    {lang}
                                                </Card.Meta>
                                            ))}
                                        </div>
                                    </Card.Content>
                                </ProjectCard>
                            ))}
                    </Card.Group>
                </Content>
            </Main>
        )
    }
}
