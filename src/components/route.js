import React from 'react';
import Main from './main';
import Cv from './cv';
import Aboutme from './aboutme';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom';

const Routing = () =>(
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cv" component={Cv} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
    </Switch>
)
export default Routing;