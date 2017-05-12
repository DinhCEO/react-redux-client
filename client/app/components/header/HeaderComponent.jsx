import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import NavDropDownUser from './NavDropDownUser.jsx'

class HeaderComponent extends React.Component {
    constructor(props) {
        console.log('HeaderComponent', props);
        super(props);
    }

    renderMenu() {
        console.log('HeaderComponent state render = ', this.props);
        console.log(this.props.isLogin);
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
                        <NavDropDownUser/>
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