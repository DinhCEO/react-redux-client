import React from 'react'
import {authService} from '../../services/index.jsx'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    componentWillMount() {
        console.log('componentWillMount');
        authService.test().then(res => {
            console.log('test res = ', res);
            this.setState({name: 'componentWillMount'});
        });
    }
    componentDidMount() {
        // AuthService.test().then(res => {
        //     console.log('test res = ', res);
        //     this.setState({name: 'componentDidMount'});
        // });
    }


    render() {
        return (
            <h2>This is About @@ {this.state.name}</h2>)
    }
}

export default About;