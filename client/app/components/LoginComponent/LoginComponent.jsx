import React from 'react'
import LoginForm from './LoginForm.jsx'
import {login} from '../../action/index.jsx'
import {connect} from 'react-redux'


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    login(values) {
        return this.props.login(values).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <LoginForm onSubmit={this.login.bind(this)}/>
        )
    }
}


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    login: (fields) => dispatch(login(fields))
});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);


export default LoginContainer;