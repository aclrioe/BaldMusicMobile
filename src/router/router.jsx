import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Loadable from './loadable';

const Home= Loadable( () => import('../pages/Home/Home'));
const Personal = Loadable ( () => import('../pages/Personal/Personal'));

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/Personal" component={Personal} ></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;