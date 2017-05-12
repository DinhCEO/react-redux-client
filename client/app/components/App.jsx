import {connect} from 'react-redux'
import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Login from '../components/login/LoginComponent.jsx'
import {login} from '../action/index.jsx'


class App extends React.Component {
    constructor(props) {
        console.log('appComponent props = ', props);
        super(props);
    }

    login(values) {
        console.log(values);
        let {dispatchLogin} = this.props;
        dispatchLogin();
    }

    render() {
        return (
            <div>
                <Header />
                <Login onSubmit={this.login.bind(this)}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    dispatchLogin : () => dispatch(login())
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
