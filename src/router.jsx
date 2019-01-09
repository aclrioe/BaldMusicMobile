import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Personal from './pages/Personal/Personal';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/Personal" component={Personal} ></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;