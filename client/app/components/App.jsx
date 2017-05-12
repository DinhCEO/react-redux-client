import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Login from '../components/login/LoginComponent.jsx'

class App extends React.Component {
    constructor(props) {
        console.log('appComponent props = ', props);
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Login />
            </div>
        )
    }

}
export default App;
