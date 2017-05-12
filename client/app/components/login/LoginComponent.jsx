import React from 'react'
import {Field, reduxForm} from 'redux-form';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    login() {
        let {dispatch_login} = this.props;
        dispatch_login();
    }

    submit() {
        console.log('form');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                    <label htmlFor="username">username&nbsp;</label>
                    <Field name="username" component="input" type="text"/><br/><br/>
                    <label htmlFor="password">password&nbsp;</label>
                    <Field name="password" component="input" type="text"/><br/>
                    <button onClick={this.login.bind(this)} type="button">Login</button>
                </form>
            </div>
        )
    }
}
LoginComponent = reduxForm({
    form : 'loginForm' // a unique name for this form
})(LoginComponent);


export default LoginComponent;