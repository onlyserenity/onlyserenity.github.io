import React from 'react'
import styled from 'styled-components'
import {css} from 'emotion'
import media from '../Media'
import {Link} from 'react-router-dom'

import Avatar from '../../assets/avatar.png'
import Footer from '../footer'

const Main = styled.div`
    width: auto !important;
    padding: 0;
    margin: 0;
`

const Box = styled.div`
    overflow: hidden;
    font-size: 18px;
    letter-spacing: 4px;
    font-family: 'Avenir Next', 'Avenir', sans-serif;
    animation: fadein 1s ease-in;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const fullNav = css`
    display: grid;
    grid-template-rows: 1fr 80px;
    & .top {
        margin: 0;
        padding: 60px 0;
    }

    & img {
        padding-left: 40px;
        padding-top: 40px;
        width: 200px;
    }
    & .active {
        border-left: 3px solid #ff5dad;

        color: #ff5dad;
    }
    & .item {
        padding: 10px 80px;
        margin: 20px 0;
        color: #a094a8;
        cursor: pointer;
    }
    & a {
        text-decoration: none;
    }
    ${media.phone`
        display: none;
        
    `};
    ${media.phablet`
        display: none;

    `};

    ${media.tablet`
        display: none;

    `};
`

// Styles for the mobile View of the navigation
const mobileNav = css`
    display: none;
    ${media.phone`
        display: block;

    `};
    ${media.phablet`
        display: block;
    `};
`

const HamburgerContainer = styled.div`
    width: 50px;
    height: 36px;
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    transition: 0.5s ease-in-out;
    z-index: 1;

    &:hover {
        cursor: pointer;

        & span {
            background: pink;
        }
    }

    & span {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        background: #ddd;
        border-radius: 9px;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;

    }

    & span:nth-child(1) {
        top: 0;

    }

    & span:nth-child(2) {
        top: 14px;
    }

    & span:nth-child(3) {
        top: 28px;
    }
    span:nth-child(4) {

    }
`

const MobileDropMenu = styled.div`
    background: rgba(62, 49, 68, 0.8);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & div {
        & a {
            font-size: 24px;
            padding: 0 140px;
            color: white;
        }
    }

`
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'about',
            mobile: false,
        }
    }

    toggleNav = () => {
        this.setState({
            mobile: !this.state.mobile,
        })
    }
    handleItemClick = e => {
        if (e.target.id !== this.state.activeItem) {
            this.setState({
                activeItem: e.target.id,
                mobile: false
            })
        }
    }
    render() {
        const {activeItem, mobile} = this.state
        return (
            <Main>
                <Box width="100%" className={fullNav}>
                    <div className="top">
                        <img src={Avatar} alt="av" />
                        <Link to="/">
                            <div
                                className={activeItem === 'about' ? 'active item' : 'item'}
                                id="about"
                                onClick={this.handleItemClick}>
                                About
                            </div>
                        </Link>
                        <Link to="/experience">
                            <div
                                className={activeItem === 'experience' ? 'active item' : 'item'}
                                id="experience"
                                onClick={this.handleItemClick}>
                                Experience
                            </div>
                        </Link>
                        <Link to="/work">
                            <div
                                className={activeItem === 'work' ? 'active item' : 'item'}
                                id="work"
                                onClick={this.handleItemClick}>
                                Work
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div
                                className={activeItem === 'contact' ? 'active item' : 'item'}
                                id="contact"
                                onClick={this.handleItemClick}>
                                Contact
                            </div>
                        </Link>
                        <Link to="/login">
                            <div
                                className={activeItem === 'login' ? 'active item' : 'item'}
                                id="login"
                                onClick={this.handleItemClick}>
                                Login
                            </div>
                        </Link>
                    </div>

                    <Footer />
                </Box>
                <Box className={mobileNav}>
                    <HamburgerContainer onClick={this.toggleNav}>
                        <span mobile={this.state.mobile} />
                        <span mobile={this.state.mobile}/>
                        <span mobile={this.state.mobile}/>
                        <span mobile={this.state.mobile}/>
                    </HamburgerContainer>

                    {mobile && <MobileDropMenu> 
                        <div>
                        <Link to="/">
                            <div
                                className={activeItem === 'about' ? 'active item' : 'item'}
                                id="about"
                                onClick={this.handleItemClick}>
                                About
                            </div>
                        </Link>
                        <Link to="/experience">
                            <div
                                className={activeItem === 'experience' ? 'active item' : 'item'}
                                id="experience"
                                onClick={this.handleItemClick}>
                                Experience
                            </div>
                        </Link>
                        <Link to="/work">
                            <div
                                className={activeItem === 'work' ? 'active item' : 'item'}
                                id="work"
                                onClick={this.handleItemClick}>
                                Work
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div
                                className={activeItem === 'contact' ? 'active item' : 'item'}
                                id="contact"
                                onClick={this.handleItemClick}>
                                Contact
                            </div>
                        </Link>
                        <Link to="/login">
                            <div
                                className={activeItem === 'login' ? 'active item' : 'item'}
                                id="login"
                                onClick={this.handleItemClick}>
                                Login
                            </div>
                        </Link>
                        </div>
                    </MobileDropMenu>}
                </Box>
            </Main>
        )
    }
}

export default Menu
