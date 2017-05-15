import React from 'react'
import Home from './components/App.jsx'
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

const loginRequire = (nextState, replace) => {
    replace('*');
};


const routers = {
    path: '/',
    component: Home,
    indexRoute: {component: LoginComponent},
    childRoutes: [
        {
            path: '/about',
            //onEnter: loginRequire,
            component: AboutComponent
        },
        {
            path: '*',
            component: NotFoundComponent
        }
    ]
};

export default routers;

