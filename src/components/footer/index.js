import React, {Component} from 'react'
import styled from 'styled-components'
import {List, Icon} from 'semantic-ui-react'

const Container = styled.div`
    padding: 10px 80px;
    animation: fadein 1s ease-in;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    & i {
        color: #a094a8;
        font-size: 1.8em;
        cursor: pointer;

        &:hover {
            color: #ff5dad;
        }
    }
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <List horizontal>
                    <List.Item>
                        <Icon name="github" />
                    </List.Item>
                    <List.Item>
                        <Icon name="linkedin" />
                    </List.Item>
                </List>
            </Container>
        )
    }
}
