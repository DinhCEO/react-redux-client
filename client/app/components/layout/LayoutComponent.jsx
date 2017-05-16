import React from 'react'
import {connect} from 'react-redux'

class LayoutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


// const mapStateToProps = (state) => ({
//     auth: state.auth
// });
// const mapDispatchToProps = (dispatch) => ({
//     checkToken: () => dispatch(checkToken())
// });
//
// const LayoutContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LayoutComponent);
//
// export default LayoutContainer;
