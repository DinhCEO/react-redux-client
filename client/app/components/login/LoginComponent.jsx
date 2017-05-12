import {connect} from 'react-redux'
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {login} from '../../action/index.jsx'



class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('form login props = ', props);
    }

    login() {
        let {dispatchLogin} = this.props;
        dispatchLogin();
    }

    submit() {
        console.log('form');
    }

    render() {
        return (
            <div>
                {/*<form onSubmit={this.submit.bind(this)}>*/}
                    {/*<label htmlFor="username">username&nbsp;</label>*/}
                    {/*<Field name="username" component="input" type="text"/><br/><br/>*/}
                    {/*<label htmlFor="password">password&nbsp;</label>*/}
                    {/*<Field name="password" component="input" type="text"/><br/>*/}
                    <button onClick={this.login.bind(this)} type="button">Login</button>
                {/*</form>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin : state.isLogin
});
const mapDispatchToProps = (dispatch) => ({
    dispatchLogin : () => dispatch(login())
});

const formContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

LoginComponent = reduxForm({
    form : 'loginForm' // a unique name for this form
})(LoginComponent);


export default formContainer;