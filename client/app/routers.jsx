import React from 'react'
import App from './components/App.jsx'
import LoginComponent from './components/LoginComponent/LoginComponent.jsx'
import AboutComponent from './components/about/aboutComponent.jsx'


const style404 = {
    textAlign: 'center'
};
const NotFoundComponent = () => (
    <div style={style404}>
        <h2 className="text-center">404 - Not found</h2>
    </div>
);
const HomeComponent = () => (
    <div style={style404}>
        <h2 className="text-center">Home</h2>
    </div>
);

const loginRequire = (nextState, replace) => {
    if (!localStorage.getItem('token')) {
        replace('/');
    } else {
        console.log('req');
        //todo req server check token
    }
};


const routers = {
    path: '/',
    component: App,
    indexRoute: {component: LoginComponent},
    childRoutes: [
        // {
        //     path: '/home',
        //     onEnter: loginRequire,
        //     component: HomeComponent
        // },
        // {
        //     path: '/about',
        //     onEnter: loginRequire,
        //     component: AboutComponent
        // },
        // {
        //     path: '*',
        //     component: NotFoundComponent
        // }
    ]
};

export default routers;

