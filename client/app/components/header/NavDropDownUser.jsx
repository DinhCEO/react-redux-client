import {connect} from 'react-redux'
import React from 'react'
import MenuService from '../../services/MenuService.jsx'
import {NavDropdown, MenuItem} from 'react-bootstrap'
import {logout} from '../../action/index.jsx'

class NavDropDownUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profile: {}};
    }

    logout() {
        let {logout} = this.props;
        logout();
    }

    componentWillMount() {
        this.setState({profile: this.props.profile});
    }

    render() {
        return (
            <NavDropdown eventKey={2} title={this.props['profile']['username'] || "Dropdown"} id="basic-nav-dropdown">
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
    profile: state.auth['profile']
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const navContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavDropDownUser);


export default navContainer;