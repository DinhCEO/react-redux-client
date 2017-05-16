import React from 'react'
import LoginForm from './LoginForm.jsx'
import {login} from '../../action/index.jsx'
import {connect} from 'react-redux'
import {toastr} from 'react-redux-toastr'


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    login(values) {
        return this.props.login(values).then(() => {
            toastr.success('Welcome!', 'Login success');
        }).catch(err => {
            toastr.error('Login failed!', `${err.data.message}`);
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