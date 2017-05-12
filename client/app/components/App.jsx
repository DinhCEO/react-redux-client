import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Login from '../components/login/LoginComponent.jsx'

class App extends React.Component {
    constructor(props) {
        console.log('appComponent = ', props);
        super(props);
    }

    render() {
        return (
            <div>
                <Header isLogin={this.props.isLogin}/>
                <Login dispatch_login={this.props.login} dispatch_logout={this.props.logout}/>
            </div>
        )
    }

}
export default App;
