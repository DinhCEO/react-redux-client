import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Login from '../components/login/LoginComponent.jsx'
import {EventEmitter} from 'fbemitter'

class App extends React.Component {
    constructor(props) {
        console.log('appComponent = ', props);
        super(props);
        let emitter = new EventEmitter();
        emitter.addListener('login', function () {
            return true
        });
        emitter.emit('login');
        console.log(emitter);
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
