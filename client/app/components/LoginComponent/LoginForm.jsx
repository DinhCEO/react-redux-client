import React from 'react'
import {Field, reduxForm} from 'redux-form'
import './loginForm.scss'
import Validate from './validates.jsx'

const renderField = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
    <div className="form-group" style={{position: 'relative'}}>
        <input className="form-control input-customer" {...input} type={type}
               placeholder={placeholder}/>
        {touched && ((error && <div>
            <div className="text-center" style={{marginTop: '-17px'}}>
                <div className="arrow-up display-inline-block"/>
            </div>
            <div className="bg-blue field-message-error animated">
                {error}
            </div>
        </div>))}
    </div>
);

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {handleSubmit} = this.props;

        return (
            <div className="wrapper">
                <form onSubmit={handleSubmit} className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <Field type="text" name="email" placeholder="Email Address" component={renderField}/>
                    <Field type="password" name="password" placeholder="Password" component={renderField}/>
                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email address required';
    } else if (!Validate.email(values.email)) {
        errors.email = 'Email address invalid ';
    }

    if (!values.password) {
        errors.password = 'Password required';
    } else if (values.password.length < 6) {
        errors.password = 'Password is more than 6 character';
    }
    return errors;
};


let loginForm = reduxForm({
    form: 'loginForm', // a unique name for this form
    validate
})(LoginForm);


export default loginForm;