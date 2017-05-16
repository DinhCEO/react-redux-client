import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Footer from '../components/footer/footer.jsx'
import {connect} from 'react-redux'
import {checkToken} from '../action/index.jsx'
import {browserHistory} from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'dincheo'};
    }

    componentWillMount() {
        // console.log('componentWillMount');
    }

    componentDidMount() {
        this.props.checkToken().then((bol) => {
            if (bol && this.props.location.pathname === '/') {
                browserHistory.push('/home');
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        // console.log('nextProps', nextProps);
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
    checkToken: () => dispatch(checkToken())
});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default LoginContainer;
