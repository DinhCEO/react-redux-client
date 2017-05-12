import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import NavDropDownUser from './NavDropDownUser.jsx'

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('header = ', props);
    }

    renderMenu() {
        if (this.props.isLogin) {
            return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">About</NavItem>
                        <NavDropDownUser dispatch_logout={this.props.dispatchLogout}/>
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">About</NavItem>
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

export default HeaderComponent;