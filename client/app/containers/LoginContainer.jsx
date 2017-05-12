import {connect} from 'react-redux'
import {login, logout} from '../action/index.jsx'
import AppComponent from '../components/App.jsx'


const mapStateToProps = (state) => ({
    isLogin : state.isLogin
});
const mapDispatchToProps = (dispatch) => ({
    dispatchLogin : () => dispatch(login()),
    dispatchLogout : () => dispatch(logout())
});

const appContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default appContainer;
