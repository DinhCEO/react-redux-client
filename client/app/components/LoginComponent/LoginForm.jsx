import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {ButtonToolbar, Button} from 'react-bootstrap'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {handleSubmit} = this.props;
        return (
            <div className="">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username&nbsp;</label>
                    <Field name="username" component="input" type="text"/><br/><br/>
                    <label htmlFor="password">password&nbsp;</label>
                    <Field name="password" component="input" type="text"/><br/>
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" bsSize="small">Login</Button>
                    </ButtonToolbar>
                    {/*<button type="submit">Login</button>*/}
                </form>
            </div>
        )
    }
}


let loginForm = reduxForm({
    form: 'loginForm' // a unique name for this form
})(LoginForm);


export default loginForm;