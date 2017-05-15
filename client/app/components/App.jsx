import React from 'react'
import Header from '../components/header/HeaderComponent.jsx'
import Footer from '../components/footer/footer.jsx'


class App extends React.Component {
    constructor(props) {
        console.log('appComponent props = ', props);
        super(props);
    }

    render() {
        return (
            //contain header and footer
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }

}

export default App;
