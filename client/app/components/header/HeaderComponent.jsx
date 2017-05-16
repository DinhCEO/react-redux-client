import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import NavDropDownUser from './NavDropDownUser.jsx'
import {connect} from 'react-redux'

import {Link} from 'react-router'


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMenu() {
        if (this.props.isLogin) {
            return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavDropDownUser />
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="#">Login</NavItem>
                    </Nav>
                </Navbar>
            )
        }
    }

    render() {
        let renderMenu = this.renderMenu();
        return (
            <div>
                {renderMenu}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isLogin: state.auth['isLogin']
});


const headerContainer = connect(
    mapStateToProps
)(HeaderComponent);


export default headerContainer;