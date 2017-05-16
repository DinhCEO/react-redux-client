import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Footer from '../components/footer/footer.jsx'
import {connect} from 'react-redux'
import {checkToken} from '../action/index.jsx'

class App extends React.Component {
    constructor(props) {
        console.log('appComponent props = ', props);
        super(props);
        this.state = {name: 'dincheo'};
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        // this.props.checkToken().then((bol) => {
        //     if (bol && this.props.location.pathname === '/') {
        //         console.log('bol = true');
        //         this.props.router.push('/home');
        //     }
        // });

        // setTimeout(function () {
        //     this.setState({name: 'chip-bong'});
        // }, 5000)
    }

    render() {
        console.log('render :D');
        return (
            <span>{this.state.name}</span>
        )

        // return (
        //     <div>
        //         <Header/>
        //         {this.props.children}
        //         <Footer/>
        //     </div>
        // )
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
