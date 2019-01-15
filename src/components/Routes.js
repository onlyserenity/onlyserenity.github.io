import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import About from './about'
import Experience from './experience'
import Work from './work'
import Contact from './contact'
import Login from './login'
import Blog from './blog'

const Frame = styled.div``

export default class Routes extends Component {
    render() {
        return (
            <Frame>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/work" component={Work} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Frame>
        )
    }
}
