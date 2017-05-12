import React from 'react'
import MenuService from '../../services/MenuService.jsx'
import {NavDropdown, MenuItem} from 'react-bootstrap';

class NavDropDownUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
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