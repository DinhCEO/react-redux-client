import React from 'react'
import {Field, reduxForm} from 'redux-form'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username&nbsp;</label>
                    <Field name="username" component="input" type="text"/><br/><br/>
                    <label htmlFor="password">password&nbsp;</label>
                    <Field name="password" component="input" type="text"/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}


LoginForm = reduxForm({
    form: 'loginForm' // a unique name for this form
})(LoginForm);


export default LoginForm;