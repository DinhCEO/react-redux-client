import React from 'react'
import {AppComponent} from './containers/index.jsx'
const style404 = {
    textAlign : 'center'
};
const NotFoundComponent = () => (
    <div style={style404}>
        <h2 className="text-center">404 - Not found</h2>
    </div>
);



const routers = {
    path : '/',
    name : 'Home',
    component : AppComponent,
    indexRoute : {component : AppComponent},
    onEnter : (nextState, replace) => {
    },
    childRoutes : [
        {
            path : '*',
            component : NotFoundComponent
        }
    ]
};

export default routers;

