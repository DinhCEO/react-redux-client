import React from 'react'
import {connect} from 'react-redux'

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('about props = ', props);
    }

    render() {
        return (
            this.props.isLogin ? (<h2>This is About @@</h2>) : (<h2>chua login</h2>)
        )
    }
}
const mapStateToProps = (state) => ({
    isLogin: state.auth['isLogin']
});

const AboutContainer = connect(
    mapStateToProps
)(About);

export default AboutContainer;