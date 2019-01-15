import React, {Component} from 'react'
import {Card, Image, Progress, Icon} from 'semantic-ui-react'
import styled from 'styled-components'

import media from '../Media'
import {languages} from '../../config/skills'
import {schools} from '../../config/education'
import {jobs} from '../../config/experience'

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
    & .gridy {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        column-gap: 40px;
        padding: 80px 0;
    }

    & .header {
        & h1 {
            width: 160px;
            border-bottom: 2px solid #ff5dad;
            margin-top: 20px;
            color: #a094a8;
            font-size: 32px;
            white-space: nowrap;
        }
    }
    & .content {
        ${media.phone`
            padding-top: 10px;
        `};
    }
    & .card {
        background-color: #1c192e !important;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.22) !important;
        height: 380px;
        & div {
            color: #a094a8 !important;
        }

        & img {
            height: 200px;
        }
    }

    & em {
        color: #ff5dad;
    }

    & .skillsList {
        width: 40%;
        & p {
            color: pink;
        }
    }

    & h1 {
        color: #a094a8;
    }
`

export default class Experience extends Component {
    render() {
        return (
            <Main>
                <div className="header">
                    <h1>Experience</h1>
                </div>
                <div className="gridy">
                    <div className="cardList">
                        <h1>
                            Education{' '}
                            <em>
                                <Icon name="book" />
                            </em>
                        </h1>
                        <div className="content">
                            <Card.Group>
                                {schools &&
                                    schools.map((item, key) => (
                                        <Card className="card">
                                            <Image src={item.img} />
                                            <Card.Content>
                                                <Card.Header className="card-header">{item.name}</Card.Header>
                                                <Card.Meta>
                                                    Joined in <em>{item.started}</em>, Graduating in <em>{item.to}</em>
                                                </Card.Meta>
                                                <Card.Description>
                                                    <em>{item.desc}</em>
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    ))}
                            </Card.Group>
                        </div>
                    </div>
                    <div className="cardList">
                        <h1>
                            Work{' '}
                            <em>
                                <Icon name="briefcase" />
                            </em>
                        </h1>
                        <div className="content">
                            <Card.Group>
                                {jobs &&
                                    jobs.map((item, key) => (
                                        <Card className="card">
                                            <Image src={item.img} />
                                            <Card.Content>
                                                <Card.Header className="card-header">{item.company}</Card.Header>
                                                <Card.Meta>
                                                    From <em>{item.from}</em> to <em>{item.to}</em>
                                                </Card.Meta>
                                                <Card.Description>
                                                    <em>{item.desc}</em>
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    ))}
                            </Card.Group>
                        </div>
                    </div>
                    <div className="skillsList">
                        <h1>
                            Stack{' '}
                            <em>
                                <Icon name="terminal" />
                            </em>
                        </h1>
                        {languages &&
                            Object.entries(languages).map(([key, value]) => (
                                <div>
                                    <p>{key}</p>
                                    <Progress percent={value} inverted color="pink" progress />
                                </div>
                            ))}
                    </div>
                </div>
            </Main>
        )
    }
}
