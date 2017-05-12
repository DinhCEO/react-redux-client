import React from 'react'
import MenuService from '../../services/MenuService.jsx'
import {NavDropdown, MenuItem} from 'react-bootstrap';

class NavDropDownUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profile : {}};
    }

    componentWillMount() {
        console.log('componentWillMount');
        if (1 == 1) {
            this.setState({profile : {name : 'dinhceo'}});
        }
    }

    render() {
        console.log('render');
        return (
            <NavDropdown eventKey={2} title={this.state.profile.name || "Dropdown"} id="basic-nav-dropdown">
                {
                    MenuService.getMenu().map((item, index) => {
                        return (
                            <MenuItem key={index} eventKey={`2.${index}`}>{item.name}</MenuItem>
                        )
                    })
                }
            </NavDropdown>
        )
    }
}

export default NavDropDownUser;