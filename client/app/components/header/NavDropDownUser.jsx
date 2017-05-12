import {connect} from 'react-redux'
import React from 'react'
import MenuService from '../../services/MenuService.jsx'
import {NavDropdown, MenuItem} from 'react-bootstrap'
import {logout} from '../../action/index.jsx'

class NavDropDownUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profile : {}};
    }

    logout() {
        let {dispatchLogout} = this.props;
        dispatchLogout();
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({profile : {name : 'dinhceo'}});
    }

    render() {
        console.log('render');
        return (
            <NavDropdown eventKey={2} title={this.state['profile']['name'] || "Dropdown"} id="basic-nav-dropdown">
                {
                    MenuService.getMenu().map((item, index) => {
                        return (
                            <MenuItem key={index} eventKey={`2.${index}`}>{item.name}</MenuItem>
                        )
                    })
                }
                <MenuItem onClick={this.logout.bind(this)}>Logout</MenuItem>
            </NavDropdown>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout : () => dispatch(logout())
});

const navContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavDropDownUser);


export default navContainer;