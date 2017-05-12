import React from 'react'

class LoginComponent extends React.Component {
    constructor(props) {
        console.log('loginComponent = ', props);
        super(props);
    }

    login() {
        let {dispatch_login} = this.props;
        dispatch_login();
        console.log('loginComponent login = ', this.props);
    }
    logout() {
        let {dispatch_logout} = this.props;
        dispatch_logout();
        console.log('loginComponent logout = ', this.props);
    }

    render() {
        return (
            <div>
                <label htmlFor="username">username&nbsp;</label>
                <input type="text" id="username"/><br/><br/>
                <label htmlFor="password">password&nbsp;</label>
                <input type="password" id="password"/><br/>
                <button onClick={this.login.bind(this)} type="button">Login</button>
                <button onClick={this.logout.bind(this)} type="button">Logout</button>
            </div>
        )
    }
}

export default LoginComponent;